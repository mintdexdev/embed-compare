import Image from "next/image";
import { Partytown } from "@builder.io/partytown/react";

const lunacalInitScript = `
(function(L,U,N){let p=(a,ar)=>a.q.push(ar),d=L.document;L.Lunacal=L.Lunacal||function(){let lun=L.Lunacal,ar=arguments;if(!lun.loaded){lun.ns = {};lun.q=lun.q||[];d.head.appendChild(d.createElement("script")).src=U;lun.loaded=!0}if(ar[0]===N){const api=function(){p(api, arguments)};const ns=ar[1];api.q=api.q||[];if(typeof ns==="string"){lun.ns[ns] = lun.ns[ns] || api;p(lun.ns[ns],ar);p(lun,["initNamespace",ns])}else p(lun,ar);return}p(lun,ar)};if(!L.Cal)L.Cal=L.Lunacal})(window,"https://app.lunacal.ai/embed/embed.js","init");Lunacal("init","multiple-durationssss111",{origin:"https://app.lunacal.ai"});
Lunacal.config = Lunacal.config || { };
Lunacal.config.forwardQueryParams = true;

Lunacal.ns["multiple-durationssss111"]("inline", {
  elementOrSelector:"#my-lunacal-inline-multiple-durationssss111",
  config: {"layout":""},
  calLink: "dex/multiple-durationssss111",
});
Lunacal.ns["multiple-durationssss111"]("preload", {calLink: "dex/multiple-durationssss111", type: "inline", options: {prerenderIframe: true } });
Lunacal.ns["multiple-durationssss111"]("ui", {"theme":"dark","styles":{"branding":{ }},"hideEventTypeDetails":false,"layout":"","cssVarsPerTheme":{"light":{"theme-border":"#1F1F1F","theme-background-primary":"#018CFF","theme-background-secondary":"#33353A","theme-background-card":"#090909","theme-background-base":"#090909","theme-text-primary":"#ffffff","theme-text-secondary":"#ffffff","theme-text-card":"#ffffff","theme-text-base":"#ffffff","theme-rounded-base":"12px","theme-rounded-calendar":"20px","theme-rounded-timeslot":"999px","theme-rounded-day":"999px","theme-rounded-button":"999px","theme-shadow-calendar":"1.5px 8.5px 4px 0px #0000001A","theme-shadow-button":"0px 0px 0px 0px #D1519A88","theme-shadow-timeslot":"0px 0px 0px 0px #000000","theme-font-family":"Outfit"},"dark":{"theme-border":"#1F1F1F","theme-background-primary":"#018CFF","theme-background-secondary":"#33353A","theme-background-card":"#090909","theme-background-base":"#090909","theme-text-primary":"#ffffff","theme-text-secondary":"#ffffff","theme-text-card":"#ffffff","theme-text-base":"#ffffff","theme-rounded-base":"12px","theme-rounded-calendar":"20px","theme-rounded-timeslot":"999px","theme-rounded-day":"999px","theme-rounded-button":"999px","theme-shadow-calendar":"1.5px 8.5px 4px 0px #0000001A","theme-shadow-button":"0px 0px 0px 0px #D1519A88","theme-shadow-timeslot":"0px 0px 0px 0px #000000","theme-font-family":"Outfit"}},"displayedContent":{"image":true,"name":true,"designation":true,"description":true,"eventName":true,"highlightBar":false},"background":{"type":"animated","presetId":"retro-grid"},"stylePreset":"blueshine"});
`;

export default function page() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-red-900">
      <Partytown
        debug={true}
        forward={[]}
        resolveUrl={function (url: URL, location: Location, type: string) {
          if (type !== "iframe" && url.hostname !== location.hostname) {
            return new URL(
              location.origin +
                "/api/partytown-proxy?url=" +
                encodeURIComponent(url.href)
            );
          }
          return url;
        }}
      />
      <div
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        id="my-lunacal-inline-multiple-durationssss111"
      ></div>
      <script
        type="text/partytown"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: lunacalInitScript }}
      />

      <div className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Lunacal embed loaded via Partytown.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            The init script runs in a Web Worker via{" "}
            <a
              href="https://partytown.builder.io/"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Partytown
            </a>
            , so it does not block the main thread.
          </p>
        </div>
      </div>
      <div className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Lunacal embed loaded via Partytown.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            The init script runs in a Web Worker via{" "}
            <a
              href="https://partytown.builder.io/"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Partytown
            </a>
            , so it does not block the main thread.
          </p>
        </div>
      </div>
      <div className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Lunacal embed loaded via Partytown.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            The init script runs in a Web Worker via{" "}
            <a
              href="https://partytown.builder.io/"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Partytown
            </a>
            , so it does not block the main thread.
          </p>
        </div>
      </div>
    </div>
  );
}
