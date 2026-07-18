import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";

export type JsonValue = string | number | boolean | null | JsonValue[] | { [k: string]: JsonValue };

export const getContent = createServerFn({ method: "GET" }).handler(async (): Promise<{ value: JsonValue | null }> => {
  const url = process.env.SUPABASE_URL!;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY!;
  const supabase = createClient(url, key, {
    auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
  const { data } = await supabase
    .from("site_content")
    .select("value")
    .eq("key", "site")
    .maybeSingle();
  return { value: (data?.value as JsonValue | null) ?? null };
});

export const submitMessage = createServerFn({ method: "POST" })
  .inputValidator((data: { name: string; email: string; message: string }) => {
    if (typeof data.name !== "string" || data.name.trim().length === 0 || data.name.length > 200) {
      throw new Error("Invalid name");
    }
    if (typeof data.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 320) {
      throw new Error("Invalid email");
    }
    if (typeof data.message !== "string" || data.message.trim().length === 0 || data.message.length > 5000) {
      throw new Error("Invalid message");
    }
    return { name: data.name.trim(), email: data.email.trim(), message: data.message.trim() };
  })
  .handler(async ({ data }) => {
    const url = process.env.SUPABASE_URL!;
    const key = process.env.SUPABASE_PUBLISHABLE_KEY!;
    const supabase = createClient(url, key, {
      auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });
    const { error } = await supabase.from("messages").insert(data);
    if (error) throw error;
    return { ok: true as const };
  });
