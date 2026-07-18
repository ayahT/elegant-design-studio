import { createServerFn } from "@tanstack/react-start";
import { useSession } from "@tanstack/react-start/server";
import { createHash, timingSafeEqual } from "node:crypto";

const sessionConfig = () => ({
  password: process.env.ADMIN_SESSION_SECRET!,
  name: "kw-admin",
  maxAge: 60 * 60 * 24 * 7,
  cookie: {
    httpOnly: true,
    secure: true,
    sameSite: "lax" as const,
    path: "/",
  },
});

type Sess = { unlocked?: boolean };

function passwordMatches(input: string, expected: string): boolean {
  const a = createHash("sha256").update(input, "utf8").digest();
  const b = createHash("sha256").update(expected, "utf8").digest();
  return timingSafeEqual(a, b);
}

async function requireUnlocked() {
  const session = await useSession<Sess>(sessionConfig());
  if (!session.data.unlocked) {
    throw new Error("Unauthorized");
  }
  return session;
}

export const unlockAdmin = createServerFn({ method: "POST" })
  .inputValidator((data: { password: string }) => data)
  .handler(async ({ data }) => {
    const expected = process.env.ADMIN_PASSWORD;
    if (!expected) throw new Error("ADMIN_PASSWORD is not configured");
    if (typeof data.password !== "string" || data.password.length < 1 || data.password.length > 256) {
      return { ok: false as const };
    }
    if (!passwordMatches(data.password, expected)) {
      return { ok: false as const };
    }
    const session = await useSession<Sess>(sessionConfig());
    await session.update({ unlocked: true });
    return { ok: true as const };
  });

export const lockAdmin = createServerFn({ method: "POST" }).handler(async () => {
  const session = await useSession<Sess>(sessionConfig());
  await session.clear();
  return { ok: true as const };
});

export const checkAdmin = createServerFn({ method: "GET" }).handler(async () => {
  const session = await useSession<Sess>(sessionConfig());
  return { unlocked: Boolean(session.data.unlocked) };
});

export const listMessages = createServerFn({ method: "GET" }).handler(async () => {
  await requireUnlocked();
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data, error } = await supabaseAdmin
    .from("messages")
    .select("id, name, email, message, created_at")
    .order("created_at", { ascending: false })
    .limit(500);
  if (error) throw error;
  return { messages: data ?? [] };
});

export const deleteMessage = createServerFn({ method: "POST" })
  .inputValidator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    await requireUnlocked();
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("messages").delete().eq("id", data.id);
    if (error) throw error;
    return { ok: true as const };
  });

export const saveContent = createServerFn({ method: "POST" })
  .inputValidator((data: { value: unknown }) => data)
  .handler(async ({ data }) => {
    await requireUnlocked();
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin
      .from("site_content")
      .upsert({ key: "site", value: data.value as never, updated_at: new Date().toISOString() });
    if (error) throw error;
    return { ok: true as const };
  });
