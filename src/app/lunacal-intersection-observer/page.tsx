"use client";

import { useEffect, useRef } from "react";
import { LUNACAL_EMBED_ID, lunacalInitScript } from "@/lib/lunacal-init";

export default function Page() {
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          const script = document.createElement("script");
          script.text = lunacalInitScript;
          document.body.appendChild(script);
        }
      },
      { rootMargin: "400px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <div className="h-[500vh] bg-blue-900">Test Text</div>

      <div ref={sentinelRef} aria-hidden="true" style={{ height: 1 }} />
      <div
        id={LUNACAL_EMBED_ID}
        style={{ width: "100%", height: "700px", overflow: "auto" }}
      />
    </main>
  );
}
