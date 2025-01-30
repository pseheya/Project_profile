function MainSection() {
  return (
    <>
      <section className="relative h-screen text-center">
        <video
          src="assets/backgroundVideo.mp4"
          className="  absolute inset-0 w-full h-full object-cover brightness-40 "
          autoPlay={true}
          loop
          muted
        >
          {/* <source src="assets/backgroundVideo.mp4" type="video/mp4" /> */}
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-white font-mono">
              Welcome to my Portfolio Page!
            </h1>
            <p className="text-lg mb-6 text-white font-mono">
              Let me talk about my jorney in tech!
            </p>
            <a
              href="#about"
              className="bg-[#172121] text-white px-6 py-3 rounded-full text-lg font-mono"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
      <section id="about" className="py-20 bg-white p-5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#8A4C3A] mb-6 font-mono">
            Get into tech: My Journey
          </h2>
          <div className="relative flex flex-col md:flex-row  items-center justify-around p-2 bg-white rounded-xl max-w-xl mx-auto sm:max-w-2xl">
            <div className="flex items-center gap-6">
              <img
                src="assets/avatar.jpg"
                alt="User Avatar"
                className="w-32 h-32 sm:w-42 sm:h-42 md:w-60 md:h-60 rounded-full object-cover"
              />
            </div>
            <div>
              <p className="text-md text-gray-600 font-mono">
                Hi! My name is Oksana, and.. Nice to meet you!
              </p>
            </div>
          </div>
          <p className="text-md text-gray-600 font-mono">
            I am a passionate developer who loves solving problems and creating
            meaningful solutions. My journey into tech has been full of
            curiosity, exploration, and growth. What started as a simple hobby
            soon turned into a career that constantly challenges and excites me.
            Every day is an opportunity to learn, grow, and push the boundaries
            of what I can create. I'm excited to share my story with you and
            take you along as I continue to explore the ever-evolving world of
            technology.
          </p>
          <p className="text-md text-gray-600 font-mono p-3">
            Looking back, diving into tech was one of the best decisions I've
            ever made. Every day, I get to learn something new, tackle
            challenges, and grow in ways I never imagined. It's a field that
            constantly pushes me to evolve, and I’m incredibly grateful for the
            endless opportunities to learn and improve. I feel so lucky to be on
            this journey, and I’m excited for what the future holds.
          </p>
          <p className="text-md text-gray-600 font-mono p-3">
            I didn’t always know I wanted to be in tech. In fact, I started in a
            completely different field, unsure of what my true passion was. It
            wasn’t until I stumbled upon coding that I realized how much it
            excited me. I began with JavaScript as a hobby, experimenting with
            small projects and trying to build something on my own. At first, I
            wasn’t sure if I could make a career out of it, but the more I
            learned, the more hooked I became.
          </p>
          <p className="text-md text-gray-600 font-mono p-3">
            I dove into online courses, spent countless hours on tutorials, and
            kept building projects, even when it felt like I was stuck. It
            wasn’t always easy, but with every small win, I gained confidence.
            Every line of code I wrote brought me closer to where I wanted to
            be.
          </p>
          <p className="text-md text-gray-600 font-mono p-3">
            Now, I’m even more excited to keep learning, explore new
            technologies, and push myself further. The journey has been full of
            challenges, but it’s been worth every step. I’m just getting
            started, and I can’t wait to see where it takes me next.
          </p>

          <div className="max-w-7xl mx-auto flex justify-around items-center">
            <a
              href="/contact"
              className="border-2 border-gray-700 text-black px-6 py-3 rounded-full text-m font-mono"
            >
              Contact me
            </a>
            <a
              href="/projects"
              className="border-2 border-gray-700 text-black px-6 py-3 rounded-full text-m font-mono"
            >
              Projects
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainSection;
