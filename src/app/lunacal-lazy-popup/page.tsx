import Script from "next/script";
import { lunacalLazyPopupInitScript } from "@/lib/lunacal-lazy-popup-init";

export default function Page() {
  return (
    <main>
      <div className="h-[500vh] bg-blue-900 flex items-start justify-center pt-20">
        <button
          data-cal-link="hello/test-normal-event-type"
          data-cal-namespace="test-normal-event-type"
          data-cal-config='{"layout":"","lazyLoad":true}'
          className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-full"
        >
          Schedule time with me
        </button>
      </div>

      <Script id="lunacal-lazy-popup-init" strategy="lazyOnload">
        {lunacalLazyPopupInitScript}
      </Script>
    </main>
  );
}
