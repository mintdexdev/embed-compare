import Script from "next/script";
import { LUNACAL_EMBED_ID, lunacalInitScript } from "@/lib/lunacal-init";

export default function Page() {
  return (
    <main>
      <header>
        <h1 className="text-2xl font-semibold">next/script lazyOnload</h1>
        <p className="text-zinc-600 dark:text-zinc-400 h-[4000px]">
          The SDK is queued to run after <code className="font-mono">window.load</code>{" "}
          fires, during browser idle time. Same total cost as the main-thread
          version, but doesn&apos;t compete with first paint or hydration.
        </p>
      </header>

      <div
        id={LUNACAL_EMBED_ID}
        style={{ width: "100%", height: "700px", overflow: "auto" }}
      />

      <Script id="lunacal-embed-init" strategy="lazyOnload">
        {lunacalInitScript}
      </Script>
    </main>
  );
}
