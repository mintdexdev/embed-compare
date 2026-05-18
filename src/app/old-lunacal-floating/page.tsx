import Script from "next/script";
import { oldLunacalFloatingInitScript } from "@/lib/old-lunacal-floating-init";

export default function Page() {
  return (
    <main>
      <div className="h-[500vh] bg-blue-900">Test Text</div>

      <Script id="old-lunacal-floating-init" strategy="lazyOnload">
        {oldLunacalFloatingInitScript}
      </Script>
    </main>
  );
}
