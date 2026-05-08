"use client";

import { useEffect, useRef, useState } from "react";
import { LUNACAL_EMBED_ID, lunacalInitScript } from "@/lib/lunacal-init";

export default function Page() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;
    const target = sentinelRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [shouldLoad]);

  useEffect(() => {
    if (!shouldLoad) return;
    const script = document.createElement("script");
    script.text = lunacalInitScript;
    document.body.appendChild(script);
  }, [shouldLoad]);

  return (
    <main>
      <div className="h-[500vh] bg-blue-900" />
      <div ref={sentinelRef} aria-hidden="true" />
      <div
        id={LUNACAL_EMBED_ID}
        style={{ width: "100%", height: "700px", overflow: "auto" }}
      />
    </main>
  );
}
