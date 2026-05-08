import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <div className="h-[500vh] bg-blue-900" />

      <Script src="https://static.zcal.co/embed/v1/embed.js" strategy="afterInteractive" />
      <div className="zcal-inline-widget w-full">
        <a href="https://zcal.co/i/PI4LHzp-">Testing event - Schedule a meeting</a>
      </div>
    </div>
  );
}
