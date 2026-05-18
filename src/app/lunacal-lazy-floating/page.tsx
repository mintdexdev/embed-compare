import Script from "next/script";
import { lunacalLazyFloatingInitScript } from "@/lib/lunacal-lazy-floating-init";

export default function Page() {
  return (
    <main>
      <div className="h-[500vh] bg-blue-900">Test Text</div>

      <Script id="lunacal-lazy-floating-init" strategy="lazyOnload">
        {lunacalLazyFloatingInitScript}
      </Script>
    </main>
  );
}
