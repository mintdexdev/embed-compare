import Script from "next/script";
import { lunacalFloatingInitScript } from "@/lib/lunacal-floating-init";

export default function Page() {
  return (
    <main>
      <div className="h-[500vh] bg-blue-900">Test Text</div>

      <Script id="old-lunacal-floating-init" strategy="lazyOnload">
        {lunacalFloatingInitScript}
      </Script>
    </main>
  );
}
