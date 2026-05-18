import Script from "next/script";
import { oldLunacalPopupInitScript } from "@/lib/old-lunacal-popup-init";

export default function Page() {
  return (
    <main>
      <div className="h-[500vh] bg-blue-900 flex items-start justify-center pt-20">
        <button
          data-cal-link="dex/multiple-durationssss111"
          data-cal-namespace="multiple-durationssss111"
          data-cal-config='{"layout":""}'
          className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-full"
        >
          Schedule time with me
        </button>
      </div>

      <Script id="old-lunacal-popup-init" strategy="lazyOnload">
        {oldLunacalPopupInitScript}
      </Script>
    </main>
  );
}
