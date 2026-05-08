export const dynamic = "force-dynamic";

async function proxy(req: Request) {
  const target = new URL(req.url).searchParams.get("url");
  if (!target) {
    return new Response("Missing url param", { status: 400 });
  }

  const upstream = await fetch(target, {
    method: req.method,
    headers: { "user-agent": req.headers.get("user-agent") ?? "" },
    body:
      req.method === "GET" || req.method === "HEAD"
        ? undefined
        : await req.arrayBuffer(),
    redirect: "follow",
  });

  const body = await upstream.arrayBuffer();
  const headers = new Headers();
  const contentType = upstream.headers.get("content-type");
  if (contentType) headers.set("content-type", contentType);
  headers.set("access-control-allow-origin", "*");
  headers.set("access-control-allow-methods", "GET, POST, OPTIONS");
  headers.set("cache-control", "public, max-age=3600");

  return new Response(body, { status: upstream.status, headers });
}

export const GET = proxy;
export const POST = proxy;
export const HEAD = proxy;
export const OPTIONS = proxy;
