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
    <main className="flex flex-col gap-6 p-8 max-w-3xl mx-auto">
      <header>
        <h1 className="text-2xl font-semibold">IntersectionObserver</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          The SDK is injected only when the embed scrolls within 200px of the
          viewport. Same total cost when it eventually runs, but it runs after
          paint and hydration, so the blocking is invisible to the user.
        </p>
      </header>

      <div style={{ height: "150vh" }} aria-hidden="true" />

      <div ref={sentinelRef} aria-hidden="true" />
      <div
        id={LUNACAL_EMBED_ID}
        style={{ width: "100%", height: "700px", overflow: "auto" }}
      />
    </main>
  );
}
