import { ZCAL_IFRAME_SRC } from "@/lib/zcal-iframe-init";

export default function Page() {
  return (
    <main>
      <section className="bg-gray-50 dark:bg-gray-900 h-screen flex items-center">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Building digital experiences that matter.
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global scale, startups and enterprise companies worldwide use our platform to simplify their web development and scale effortlessly.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
              </a>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
              </a>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <div className="w-full h-96 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 dark:text-gray-600">
              <span className="text-sm font-semibold">[ Hero Image Placeholder ]</span>
            </div>
          </div>
        </div>
      </section>

      <div className="h-[2000px] bg-gray-900 text-2xl text-center">gap</div>

      <iframe
        src={ZCAL_IFRAME_SRC}
        loading="lazy"
        style={{ border: "none", minWidth: "320px", minHeight: "544px", height: "731px", width: "1096px" }}
        id="zcal-invite"
        scrolling="no"
      />
    </main>
  );
}
