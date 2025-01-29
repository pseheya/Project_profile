function ProjectSection() {
  return (
    <section className="min-h-screen text-center">
      <div className="mx-auto mt-5 grid px-6 max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-5 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article className="flex max-w-xl flex-col items-start justify-between border border-gray-300 rounded-lg p-4">
          <div className="group relative w-full">
            <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
              <a href="/eurolingo">EuroLingo</a>
            </h3>
            <video
              className="flex justify-center items-center w-full mt-3 rounded-md brightness-80"
              autoPlay
              loop
              muted
            >
              <source src="assets/euroLingoProjectVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
              Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam
              vitae illo. Non aliquid explicabo necessitatibus unde. Sed
              exercitationem placeat consectetur nulla deserunt vel. Iusto
              corrupti dicta.
            </p>
          </div>
          <div className="max-w-7xl mx-auto flex justify-around items-center gap-4 p-2.5">
            <a
              href="/eurolingo"
              className="border-1 border-gray-700 text-black p-2 rounded-full text-xs font-mono"
            >
              More details
            </a>
            <a
              href="https://github.com/pseheya/EuroLingo"
              target="_blank"
              className="border-1  border-gray-700 text-black p-2 rounded-full text-xs font-mono"
            >
              Git Link
            </a>
          </div>
        </article>
        <article className="flex max-w-xl flex-col items-start justify-between border border-gray-300 rounded-lg p-4">
          <div className="group relative w-full">
            <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
              <a href="/nc_news">NC News</a>
            </h3>
            <video
              className="flex justify-center items-center w-full mt-3 rounded-md brightness-80"
              autoPlay
              loop
              muted
            >
              <source src="assets/Nc_news_record_screen.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
              Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam
              vitae illo. Non aliquid explicabo necessitatibus unde. Sed
              exercitationem placeat consectetur nulla deserunt vel. Iusto
              corrupti dicta.
            </p>
          </div>
          <div className="max-w-7xl mx-auto flex justify-around items-center gap-4 p-2.5">
            <a
              href="/nc_news"
              className="border-1 border-gray-700 text-black p-2 rounded-full text-xs font-mono"
            >
              More details
            </a>
            <a
              href="https://github.com/pseheya/my-nc-news"
              target="_blank"
              className="border-1  border-gray-700 text-black p-2 rounded-full text-xs font-mono"
            >
              Git Link
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ProjectSection;
