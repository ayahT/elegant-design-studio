import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import {
  unlockAdmin,
  lockAdmin,
  checkAdmin,
  listMessages,
  deleteMessage,
  saveContent,
} from "@/lib/admin.functions";
import { getContent } from "@/lib/content.functions";
import { defaultSite, mergeContent, type SiteContent } from "@/lib/site-defaults";

export const Route = createFileRoute("/kemetwsr2025")({
  component: Dashboard,
});

function Dashboard() {
  const check = useServerFn(checkAdmin);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["admin-check"],
    queryFn: () => check(),
    staleTime: 0,
  });

  if (isLoading) return <Shell><p className="text-sm opacity-70">Loading…</p></Shell>;
  if (!data?.unlocked) return <Unlock onUnlocked={() => refetch()} />;
  return <Admin onLocked={() => refetch()} />;
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-parchment text-cocoa-deep p-6 font-mono">
      <div className="mx-auto max-w-5xl border border-cocoa-deep/25 bg-ivory p-8">
        <h1 className="font-serif text-3xl mb-6">KW · Dashboard</h1>
        {children}
      </div>
    </div>
  );
}

function Unlock({ onUnlocked }: { onUnlocked: () => void }) {
  const unlock = useServerFn(unlockAdmin);
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState(false);
  const [busy, setBusy] = useState(false);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setErr(false);
    try {
      const r = await unlock({ data: { password: pwd } });
      if (r.ok) onUnlocked();
      else setErr(true);
    } catch {
      setErr(true);
    } finally {
      setBusy(false);
    }
  }
  return (
    <Shell>
      <form onSubmit={submit} className="flex flex-col gap-4 max-w-sm">
        <label className="text-xs uppercase tracking-widest opacity-70">Password</label>
        <input
          type="password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          autoFocus
          className="border border-cocoa-deep/30 bg-parchment px-3 py-2 text-sm focus:outline-none focus:border-cocoa-deep"
        />
        {err && <p className="text-xs text-red-700">Incorrect password.</p>}
        <button
          type="submit"
          disabled={busy}
          className="bg-cocoa-deep text-ivory px-4 py-2 text-xs uppercase tracking-widest font-bold disabled:opacity-60"
        >
          {busy ? "Checking…" : "Unlock"}
        </button>
      </form>
    </Shell>
  );
}

function Admin({ onLocked }: { onLocked: () => void }) {
  const [tab, setTab] = useState<"messages" | "content">("messages");
  const lock = useServerFn(lockAdmin);
  async function doLock() {
    await lock();
    onLocked();
  }
  return (
    <Shell>
      <div className="flex items-center gap-2 mb-6 border-b border-cocoa-deep/20">
        <TabBtn active={tab === "messages"} onClick={() => setTab("messages")}>Messages</TabBtn>
        <TabBtn active={tab === "content"} onClick={() => setTab("content")}>Content</TabBtn>
        <button onClick={doLock} className="ml-auto text-xs uppercase tracking-widest opacity-60 hover:opacity-100 py-2">
          Lock
        </button>
      </div>
      {tab === "messages" ? <MessagesTab /> : <ContentTab />}
    </Shell>
  );
}

function TabBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-xs uppercase tracking-widest ${active ? "border-b-2 border-cocoa-deep font-bold" : "opacity-60"}`}
    >
      {children}
    </button>
  );
}

function MessagesTab() {
  const load = useServerFn(listMessages);
  const del = useServerFn(deleteMessage);
  const qc = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["admin-messages"],
    queryFn: () => load(),
  });
  const deleteMut = useMutation({
    mutationFn: (id: string) => del({ data: { id } }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin-messages"] }),
  });
  if (isLoading) return <p className="text-sm opacity-70">Loading messages…</p>;
  const messages = data?.messages ?? [];
  if (messages.length === 0) return <p className="text-sm opacity-70">No messages yet.</p>;
  return (
    <ul className="flex flex-col gap-4">
      {messages.map((m) => (
        <li key={m.id} className="border border-cocoa-deep/20 p-4 bg-parchment/40">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-serif text-lg">{m.name}</div>
              <a href={`mailto:${m.email}`} className="text-xs underline opacity-70">{m.email}</a>
            </div>
            <div className="text-[10px] uppercase tracking-widest opacity-60">
              {new Date(m.created_at).toLocaleString()}
            </div>
          </div>
          <p className="mt-3 text-sm whitespace-pre-wrap leading-relaxed">{m.message}</p>
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => {
                if (confirm("Delete this message?")) deleteMut.mutate(m.id);
              }}
              className="text-[10px] uppercase tracking-widest text-red-800 hover:underline"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

function ContentTab() {
  const load = useServerFn(getContent);
  const save = useServerFn(saveContent);
  const qc = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["admin-content"],
    queryFn: () => load(),
  });
  const [text, setText] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (data !== undefined) {
      const current: SiteContent = data?.value ? mergeContent(data.value) : defaultSite;
      setText(JSON.stringify(current, null, 2));
    }
  }, [data]);

  const saveMut = useMutation({
    mutationFn: async () => {
      let parsed: unknown;
      try {
        parsed = JSON.parse(text);
      } catch (e) {
        throw new Error("Invalid JSON: " + (e as Error).message);
      }
      await save({ data: { value: parsed } });
    },
    onSuccess: () => {
      setMsg("Saved.");
      setErr(null);
      qc.invalidateQueries({ queryKey: ["admin-content"] });
      qc.invalidateQueries({ queryKey: ["site-content"] });
      setTimeout(() => setMsg(null), 2000);
    },
    onError: (e: Error) => {
      setErr(e.message);
      setMsg(null);
    },
  });

  function resetDefaults() {
    setText(JSON.stringify(defaultSite, null, 2));
  }

  if (isLoading) return <p className="text-sm opacity-70">Loading content…</p>;

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs opacity-70 leading-relaxed">
        Edit any field below. Everything on the website is here — hero text, projects, services, about, contact. Save to publish.
      </p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        spellCheck={false}
        className="min-h-[560px] border border-cocoa-deep/25 bg-parchment/30 p-4 text-[12px] font-mono leading-relaxed focus:outline-none focus:border-cocoa-deep"
      />
      {err && <p className="text-xs text-red-700 whitespace-pre-wrap">{err}</p>}
      {msg && <p className="text-xs text-green-800">{msg}</p>}
      <div className="flex items-center gap-3">
        <button
          onClick={() => saveMut.mutate()}
          disabled={saveMut.isPending}
          className="bg-cocoa-deep text-ivory px-5 py-2 text-xs uppercase tracking-widest font-bold disabled:opacity-60"
        >
          {saveMut.isPending ? "Saving…" : "Save changes"}
        </button>
        <button
          onClick={resetDefaults}
          className="text-xs uppercase tracking-widest opacity-70 hover:opacity-100"
        >
          Reset to defaults
        </button>
      </div>
    </div>
  );
}
