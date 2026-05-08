export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">

      <div className="flex flex-col gap-1 ">
        <a href="/zcal-top" target="_blank" rel="noopener noreferrer"> zcal-top</a>
        <a href="/zcal-bottom" target="_blank" rel="noopener noreferrer"> zcal-bottom</a>
        <a href="/lunacal-click-to-load" target="_blank" rel="noopener noreferrer"> lunacal-click-to-load</a>
        <a href="/lunacal-intersection-observer" target="_blank" rel="noopener noreferrer"> lunacal-intersection-observer</a>
        <a href="/lunacal-lazyonload" target="_blank" rel="noopener noreferrer"> lunacal-lazyonload</a>
      </div>
    </div>
  );
}
