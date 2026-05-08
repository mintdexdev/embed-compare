"use client";

import { useEffect } from "react";
import { LUNACAL_EMBED_ID, lunacalInitScript } from "@/lib/lunacal-init";

export default function Page() {
  useEffect(() => {
    const inject = () => {
      const script = document.createElement("script");
      script.text = lunacalInitScript;
      document.body.appendChild(script);
    };

    if (typeof window.requestIdleCallback === "function") {
      const handle = window.requestIdleCallback(inject, { timeout: 2000 });
      return () => window.cancelIdleCallback(handle);
    } else {
      const t = window.setTimeout(inject, 1);
      return () => window.clearTimeout(t);
    }
  }, []);

  return (
    <main className="flex flex-col gap-6 p-8 max-w-3xl mx-auto">
      <header>
        <h1 className="text-2xl font-semibold">Idle load</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          The SDK is scheduled via{" "}
          <code className="font-mono">requestIdleCallback</code>, so the
          browser slices its work around real user-blocking tasks (paint,
          input, layout). Same total cost; pays it during otherwise-idle time.
        </p>
      </header>

      <div
        id={LUNACAL_EMBED_ID}
        style={{ width: "100%", height: "700px", overflow: "auto" }}
      />
    </main>
  );
}
