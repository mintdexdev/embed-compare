import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="h-[500vh] bg-blue-900" />

      <iframe
        src="https://zcal.co/i/PI4LHzp-?embed=1&embedType=iframe"
        loading="lazy"
        id="zcal-invite"
        scrolling="no"
        style={{
          border: "none",
          minWidth: 320,
          minHeight: 544,
          height: 966,
          width: 1096,
        }}
      />
    </main>
  );
}
