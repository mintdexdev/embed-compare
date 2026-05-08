export default function Page() {
  return (
    <main className="flex flex-col gap-6 p-8 max-w-3xl mx-auto">
      <header>
        <h1 className="text-2xl font-semibold">Direct iframe</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Skip the SDK entirely. The iframe runs in its own browsing context,
          so the calendar&apos;s JS, network, and rendering happen off the main
          thread by definition. Main thread cost: one element creation.
        </p>
      </header>

      <iframe
        title="Lunacal direct embed"
        src="https://app.lunacal.ai/dex/multiple-durationssss111/embed?embed=multiple-durationssss111&layout=&embedType=inline"
        style={{ width: "100%", height: "700px", border: 0 }}
        loading="lazy"
      />
    </main>
  );
}
