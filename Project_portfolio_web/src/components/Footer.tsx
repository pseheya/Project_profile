import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" bg-[#172121] text-white py-3 p-5  w-full ">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center">
        <p className="text-sm">&copy; 2025 MyProfile.</p>

        <div className="flex gap-4 mt-3 md:mt-0">
          <a
            href="https://github.com/pseheya"
            target="_blank"
            aria-label="github link"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub size={25} />
          </a>

          <a
            href="https://www.linkedin.com/in/oksana-herasymenko-4603542a9/"
            target="_blank"
            aria-label="link to linkedin"
            className="text-gray-400 hover:text-white transition"
          >
            <FaLinkedin size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
