import Script from "next/script";
import { LUNACAL_EMBED_ID, lunacalInitScript } from "@/lib/lunacal-init";

export default function Page() {
  return (
    <main>
      <div className="h-[500vh] bg-blue-900" >Test Text</div>

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
