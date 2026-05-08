"use client";

import { useState } from "react";
import { LUNACAL_EMBED_ID, lunacalInitScript } from "@/lib/lunacal-init";

export default function Page() {
  const [loaded, setLoaded] = useState(false);

  function handleClick() {
    setLoaded(true);
    const script = document.createElement("script");
    script.text = lunacalInitScript;
    document.body.appendChild(script);
  }

  return (
    <main className="flex flex-col gap-6 p-8 max-w-3xl mx-auto">
      <header>
        <h1 className="text-2xl font-semibold">Click to load</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          The SDK script is injected only when the user clicks. Visitors who
          never click pay 0ms of main-thread cost. Best ROI when conversion is
          low.
        </p>
      </header>

      {!loaded ? (
        <button
          type="button"
          onClick={handleClick}
          className="self-start rounded-full bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700"
        >
          Schedule a meeting
        </button>
      ) : (
        <div
          id={LUNACAL_EMBED_ID}
          style={{ width: "100%", height: "700px", overflow: "auto" }}
        />
      )}
    </main>
  );
}
