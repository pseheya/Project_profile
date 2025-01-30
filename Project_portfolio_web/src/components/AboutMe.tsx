import backgroundImage from "/assets/about_me_background.png";

function AboutMe() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center text-black bg-fixed "
      style={{ backgroundImage: `url(${backgroundImage})`, paddingTop: "4" }}
    >
      <div className="relative p-3 text-center bg-white/50  backdrop-blur-md rounded-lg shadow-lg m-10">
        <h2 className="text-2xl font-mono mb-4">Welcome to My Page!</h2>
        <h3 className="text-xl  font-mono mb-4">My name is Oksana</h3>
        <p className="text-m font-mono mb-3">
          From an early age, I was always searching for something that would
          challenge me — something that would push me to grow and improve every
          single day. Learning has been a constant in my life, a never - ending
          journey that shaped who I am today. Whether it was through books,
          experiences, or new skills, I found joy in discovering new things and
          expanding my understanding of the world.
        </p>

        <p className="text-m font-mono mb-3">
          Then, I found the tech industry—a place where growth isn’t just an
          option, but a necessity. The fast-paced world of coding immediately
          captivated me. Every day, I’m faced with new challenges that push me
          to think critically, solve problems, and refine my skills. And I{" "}
          <span className="italic text-red-500">love it</span>. There’s
          something incredibly rewarding about seeing an idea come to life
          through lines of code, knowing that with each project, I am improving,
          adapting, and evolving.
        </p>

        <p className="text-m font-mono mb-3">
          But my passions extend beyond just technology. I’ve always had a deep
          love for animals, and one in particular holds a special place in my
          heart. No matter how busy or challenging life gets, this little soul
          reminds me of the simple joys in life — companionship, unconditional
          love, and the importance of taking a break to appreciate the small
          moments.
        </p>

        <p className="text-m font-mono mb-3">
          At the same time, I’m a strong believer in the power of human
          connection. Meeting new people, engaging in deep conversations, and
          stepping out of my comfort zone has become another way for me to grow.
          Socializing isn’t just about making connections — it’s a way to
          challenge myself, to learn from others, and to continuously evolve as
          a person. Each interaction teaches me something new, helping me break
          barriers and fight against my own limitations.
        </p>

        <p className="text-m font-mono mb-3">
          So here I am, in an industry that excites me, surrounded by
          opportunities to learn, improve, and connect—with both people and the
          world around me. And to me, that’s what life is all about:
          <span className="font-semibold ">
            growth, passion, and never standing still.
          </span>
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
