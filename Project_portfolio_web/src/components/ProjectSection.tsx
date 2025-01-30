import { useState } from "react";
import ProjectModal from "./ProjectPopOutModal";
import { Project } from "./types/types";
import { FaReact, FaNodeJs } from "react-icons/fa";

function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      name: "EuroLingo",
      description:
        "EuroLingo is a comprehensive language learning web game designed to make learning languages engaging, interactive, and effective. It combines gamified learning modules, multilingual support, and personalized content to deliver an exceptional user experience. Whether you're a beginner or looking to refine your skills, EuroLingo adapts to your needs and tracks your progress every step of the way.",
      fullDescription: (
        <>
          <div>
            <img src="assets/eurolingoEntry.png" />
            <p className="text-m font-semibold mt-4">Interactive Gameplay</p>
            <p className="mt-2 text-gray-700">
              EuroLingo offers an engaging, gamified learning experience that
              motivates you to actively participate while mastering a new
              language. Each challenge you complete brings you closer to
              fluency, and if you ever find yourself unsure of what to do next,
              a helpful guide is available to assist you through each room.
            </p>
          </div>

          <div className="mt-6">
            <p className="text-m font-semibold">Cultural Music</p>
            <p className="mt-2 text-gray-700">
              As you progress through the game, you will be immersed in
              authentic music from the culture associated with the language
              you're learning. This not only enhances your linguistic skills but
              also deepens your connection to the culture, making the learning
              experience richer and more enjoyable.
            </p>
          </div>

          <div className="mt-6">
            <p className="text-m font-semibold">Motivating Rewards</p>
            <p className="mt-2 text-gray-700">
              Stay motivated with challenges and rewards that keep you engaged
              throughout your learning journey. The game tracks your progress,
              and upon completing all five rounds in each level, you'll earn a
              badge that unlocks access to new locations within the game.
            </p>
          </div>

          <video
            className="flex justify-center items-center w-full mt-3 rounded-md brightness-80"
            autoPlay
            loop
            muted
          >
            <source src="assets/fivebadgerecord.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="mt-6">
            <p className="text-m font-semibold">Global Experience</p>
            <p className="mt-2 text-gray-700">
              Explore a variety of languages and cultures from around the world,
              making learning feel like a global adventure at your fingertips.
              Currently, EuroLingo offers five carefully selected languages,
              each with its own rich cultural background.
            </p>
          </div>

          <div className="mt-6 text-red-500">
            <p className="text-m font-semibold">Important Note</p>
            <p className="mt-2">
              Please note that EuroLingo is not mobile-friendly at this time.
              For the best user experience, we recommend using a desktop or
              laptop.
            </p>
          </div>

          <div className="mt-6">
            <p className="text-gray-700">
              Whether you're learning a language for travel, work, or personal
              growth, EuroLingo offers a fun, immersive, and culturally
              enriching way to acquire new skills. Every step of the journey is
              an exciting adventure that will leave you eager to continue
              learning.
            </p>
          </div>
        </>
      ),
      techStack: {
        frontend: [
          { name: "React", icon: <FaReact size={25} /> },
          {
            name: "Phaser",
            icon: (
              <img
                src="https://replit.com/cdn-cgi/image/width=3840,quality=80,format=auto/https://storage.googleapis.com/replit/images/1631111166448_c9a6d87869fcea51489a63c1d09dd53a.jpeg"
                alt="phaser icon"
                width={25}
              />
            ),
          },
          {
            name: "HTML",
            icon: (
              <img
                src="https://th.bing.com/th/id/OIP.N_anztpFCPTBVRUMWvuGBwHaHa?rs=1&pid=ImgDetMain"
                alt="html icon"
                width={25}
              />
            ),
          },
          {
            name: "CSS",
            icon: (
              <img
                src="https://th.bing.com/th/id/OIP.yUIb5S_kj98Eg5tT-Onx1AHaHa?rs=1&pid=ImgDetMain"
                alt="css icon"
                width={25}
              />
            ),
          },
          {
            name: "JavaScript",
            icon: (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                alt="javascript icon"
                width={25}
              />
            ),
          },
          {
            name: "Netlify",
            icon: (
              <img
                src="https://logosandtypes.com/wp-content/uploads/2023/03/Netlify.png"
                alt="netlify icon"
                width={25}
              />
            ),
          },
        ],
        backend: [
          { name: "Node.js", icon: <FaNodeJs size={25} /> },
          {
            name: "Express",
            icon: (
              <img
                src="https://th.bing.com/th/id/R.60a21276044075902e5d23e33ec96a21?rik=3hyzxD6PYRRYMQ&pid=ImgRaw&r=0"
                alt="Express.js"
                width="25"
              />
            ),
          },
          {
            name: "MongoDB",
            icon: (
              <img
                src="https://logodix.com/logo/2090013.jpg"
                alt="MongoDb"
                width="25"
              />
            ),
          },
          {
            name: "TypeScript",
            icon: (
              <img
                src="https://www.typescriptlang.org/icons/icon-48x48.png"
                alt="typescript icon"
                width={25}
              />
            ),
          },
          {
            name: "Dotenv",
            icon: (
              <img
                src="https://api.nuget.org/v3-flatcontainer/dotenv.net/3.0.0/icon"
                alt="dotenv icon"
                width={25}
              />
            ),
          },
          {
            name: "Render",
            icon: (
              <img
                src="https://th.bing.com/th/id/R.90989354a7fd9dc0ea18cf8eae72814a?rik=dXJHl7drKcSKtQ&pid=ImgRaw&r=0"
                alt="render icon"
                width={25}
              />
            ),
          },
          {
            name: "Atlas",
            icon: (
              <img
                src="https://g.foolcdn.com/editorial/images/635884/atlas_icon_blk_stackedlarge.png"
                alt="atlas icon"
                width={25}
              />
            ),
          },
        ],
      },

      videoSrc: "assets/euroLingoProjectVideo.mp4",
      appLink: "https://eurolingo.netlify.app/",
      gitLink: "https://github.com/pseheya/EuroLingo",
    },
    {
      name: "NC News",
      description:
        "A news aggregation platform that allows users to read and comment on articles.",
      fullDescription: (
        <>
          <p className="mt-4 text-gray-800">
            NC News is an interactive news platform that allows users to log in,
            read articles, leave comments, and engage with content in a
            personalized and dynamic way. The app features user authentication,
            pagination, and the ability to manage comments, providing a seamless
            and engaging experience for all users.
          </p>

          <div>
            <img
              src="assets/nc-news-enty-screenshot.png"
              alt="NC News"
              className="w-full rounded-md shadow-lg"
            />
            <p className="text-lg font-semibold mt-4">Interactive Articles</p>
            <p className="mt-2 text-gray-700">
              NC News provides a dynamic platform where you can log in as an
              existing user, browse through a list of articles across various
              categories, and read in-depth stories. Each article allows you to
              interact with content and share your thoughts through comments and
              votes.
            </p>
          </div>

          <div className="mt-6">
            <p className="text-lg font-semibold">Comment & Engage</p>
            <p className="mt-2 text-gray-700">
              Users can leave comments, reply to others, and share their
              opinions on articles, making the platform a community-driven space
              for discussion. You can also delete your comments if needed,
              ensuring a seamless experience.
            </p>
          </div>

          <video
            className="flex justify-center items-center w-full mt-3 rounded-md brightness-80"
            autoPlay
            loop
            muted
          >
            <source
              src="assets/nc_news_pagination_and_comments.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="mt-6">
            <p className="text-lg font-semibold">Pagination & Navigation</p>
            <p className="mt-2 text-gray-700">
              Navigating through articles is a breeze, with built-in pagination
              that helps you effortlessly browse large amounts of content.
              Whether you are on the home page or reading an article, you'll
              always have access to the next set of stories.
            </p>
          </div>

          <div className="mt-6">
            <p className="text-lg font-semibold">User Login</p>
            <p className="mt-2 text-gray-700">
              NC News allows users to log in as an existing user from a
              pre-populated list in the database. Once logged in, you can access
              features such as voting, commenting on articles, and managing your
              interactions across the platform. This simplified login method
              makes it easy for users to jump right into the content without
              needing a sign-up process. NC News is fully optimized for both
              mobile and desktop, providing a seamless experience across
              devices.
            </p>
          </div>

          <div className="mt-6">
            <p className="text-gray-700">
              NC News offers an interactive, informative platform that keeps
              users connected and informed. Note that the application is no
              longer being actively updated, but it remains a valuable tool for
              accessing news and engaging with content.
            </p>
          </div>
        </>
      ),
      techStack: {
        frontend: [
          { name: "React", icon: <FaReact size={25} /> },
          {
            name: "React Hook",
            icon: (
              <img
                src="https://raw.githubusercontent.com/alDuncanson/react-hooks-snippets/master/icon.png"
                alt="react hook icon"
                width={25}
              />
            ),
          },
          {
            name: "Chakra UI",
            icon: (
              <img
                src="https://th.bing.com/th/id/OIP.7K_j3KOjm-bDuIGxZb5T_QHaE5?rs=1&pid=ImgDetMain"
                alt="chakra ui icon"
                width={25}
              />
            ),
          },
          {
            name: "Axios",
            icon: (
              <img
                src="https://flyclipart.com/thumbs/axios-logo-1546643.png"
                alt="axios icon"
                width={25}
              />
            ),
          },
          {
            name: "JavaScript",
            icon: (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                alt="javascript icon"
                width={25}
              />
            ),
          },
          {
            name: "Netlify",
            icon: (
              <img
                src="https://logosandtypes.com/wp-content/uploads/2023/03/Netlify.png"
                alt="netlify icon"
                width={25}
              />
            ),
          },
          {
            name: "HTML",
            icon: (
              <img
                src="https://th.bing.com/th/id/OIP.N_anztpFCPTBVRUMWvuGBwHaHa?rs=1&pid=ImgDetMain"
                alt="html icon"
                width={25}
              />
            ),
          },
          {
            name: "CSS",
            icon: (
              <img
                src="https://th.bing.com/th/id/OIP.yUIb5S_kj98Eg5tT-Onx1AHaHa?rs=1&pid=ImgDetMain"
                alt="css icon"
                width={25}
              />
            ),
          },
        ],
        backend: [
          { name: "Node.js", icon: <FaNodeJs size={25} /> },
          {
            name: "Express",
            icon: (
              <img
                src="https://th.bing.com/th/id/R.60a21276044075902e5d23e33ec96a21?rik=3hyzxD6PYRRYMQ&pid=ImgRaw&r=0"
                alt="Express.js"
                width="25"
              />
            ),
          },
          {
            name: "PostgreSQL",
            icon: (
              <img
                src="https://e7.pngegg.com/pngimages/738/738/png-clipart-postgresql-database-logo-application-software-computer-software-mysql-logo-blue-text.png"
                alt="postgreSQL icon"
                width="25"
              />
            ),
          },
          {
            name: "Jest",
            icon: (
              <img
                src="https://ih1.redbubble.net/image.404020079.1876/st,small,507x507-pad,600x600,f8f8f8.u7.jpg"
                alt="jest icon"
                width="25"
              />
            ),
          },
          {
            name: "Supabase",
            icon: (
              <img
                src="https://logowik.com/content/uploads/images/supabase-icon9119.logowik.com.webp"
                alt="supabase icon"
                width="25"
              />
            ),
          },
          {
            name: "Render",
            icon: (
              <img
                src="https://th.bing.com/th/id/R.90989354a7fd9dc0ea18cf8eae72814a?rik=dXJHl7drKcSKtQ&pid=ImgRaw&r=0"
                alt="render icon"
                width={25}
              />
            ),
          },
        ],
      },

      videoSrc: "assets/Nc_news_record_screen.mp4",
      appLink: "https://pseheyamyncnews.netlify.app/",
      gitLink: "https://github.com/pseheya/my-nc-news",
    },
  ];

  return (
    <section className="mt-auto  p-6 min-h-screen justify-between text-center max-w-screen ">
      <div className="mx-auto m-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0  lg:max-w-none lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={index}
            className="flex max-w-2xl flex-col items-start justify-between border border-gray-300 rounded-lg p-4 lg:max-w-3xl lg:p-6"
          >
            <div className="group relative w-full lg:max-w-3xl lg:max-h-3xl">
              <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                <p>{project.name}</p>
              </h3>
              <video
                className="flex justify-center items-center w-full mt-3 rounded-md brightness-80"
                autoPlay
                loop
                muted
              >
                <source src={project.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="sm-w-screen mt-5 line-clamp-3 text-sm/6 text-gray-600 ">
                {project.description}
              </p>
            </div>
            <div className="max-w-7xl mx-auto flex justify-around items-center gap-4 p-2.5">
              <button
                onClick={() => setSelectedProject(project)}
                className="border border-gray-700 text-black p-2 rounded-full text-xs font-mono"
              >
                More details
              </button>
              <a
                href={project.gitLink}
                target="_blank"
                className="border border-gray-700 text-black p-2 rounded-full text-xs font-mono"
              >
                Git Link
              </a>
            </div>
          </article>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        closeModal={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default ProjectSection;
