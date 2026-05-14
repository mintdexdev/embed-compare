import Script from "next/script";
import { CAL_EMBED_ID, calInitScript } from "@/lib/cal-init";

export default function Page() {
  return (
    <main>
      <div
        id={CAL_EMBED_ID}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
      />

      <div className="h-[500vh] bg-blue-900">Test Text</div>

      <Script id="cal-embed-init" strategy="lazyOnload">
        {calInitScript}
      </Script>
    </main>
  );
}
