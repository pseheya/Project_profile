function MainSection() {
  return (
    <>
      <section className="relative h-screen text-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="assets/backgroundVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-black font-mono">
              Welcome to my Portfolio Page!
            </h1>
            <p className="text-lg mb-6 text-black font-mono">
              Let me talk about my jorney in tech!
            </p>
            <a
              href="#about"
              className="bg-gray-800 text-white px-6 py-3 rounded-full text-lg font-mono"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            About This Page
          </h2>
          <p className="text-lg text-gray-600 mb-8">Hello</p>
          <a href="#contact" className="text-blue-500 text-lg">
            Go to Contact
          </a>
        </div>
      </section>
    </>
  );
}

export default MainSection;
