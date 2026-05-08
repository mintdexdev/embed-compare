import { LUNACAL_EMBED_ID, lunacalInitScript } from "@/lib/lunacal-init";

export default function Page() {
  return (
    <main>
      <div
        id={LUNACAL_EMBED_ID}
        style={{ width: "100%", height: "700px", overflow: "auto" }}
      />
      <div className="h-[500vh] bg-blue-900" />

      <script dangerouslySetInnerHTML={{ __html: lunacalInitScript }} />
    </main>
  );
}
