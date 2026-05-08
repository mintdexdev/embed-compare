import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">

      <div>
        <a href="/zcal-top" target="_blank" rel="noopener noreferrer"> zcal-top</a>
        <a href="/zcal-bottom" target="_blank" rel="noopener noreferrer"> zcal-bottom</a>
        <a href="/lunacal-top-main-thread" target="_blank" rel="noopener noreferrer"> lunacal-top-main-thread</a>
        <a href="/lunacal-top-different-thread" target="_blank" rel="noopener noreferrer"> lunacal-top-different-thread</a>
        <a href="/lunacal-bottom" target="_blank" rel="noopener noreferrer"> lunacal-bottom</a>
        <a href="/lunacal-bottom-lazy" target="_blank" rel="noopener noreferrer"> lunacal-bottom-lazy</a>
      </div>
    </div>
  );
}
