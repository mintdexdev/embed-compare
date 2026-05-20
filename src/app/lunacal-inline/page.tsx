import Script from "next/script";
import { LUNACAL_INLINE_EMBED_ID, lunacalInlineInitScript } from "@/lib/lunacal-inline-init";

export default function Page() {
  return (
    <main>
      <div className="h-[500vh] bg-blue-900">Test Text</div>

      <div
        id={LUNACAL_INLINE_EMBED_ID}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
      />

      <Script id="old-lunacal-inline-init" strategy="lazyOnload">
        {lunacalInlineInitScript}
      </Script>
    </main>
  );
}
