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
    <main >
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
