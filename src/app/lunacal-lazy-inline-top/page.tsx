import Script from "next/script";
import { LUNACAL_LAZY_INLINE_EMBED_ID, lunacalLazyInlineInitScript } from "@/lib/lunacal-lazy-inline-init";

export default function Page() {
  return (
    <main>
      <div
        id={LUNACAL_LAZY_INLINE_EMBED_ID}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
      />

      <div className="h-[500vh] bg-blue-900">Test Text</div>

      <Script id="lunacal-lazy-inline-init" strategy="lazyOnload">
        {lunacalLazyInlineInitScript}
      </Script>
    </main>
  );
}
