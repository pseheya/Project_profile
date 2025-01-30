import { Project } from "./types/types";

interface ProjectModalProps {
  project: Project | null;
  closeModal: () => void;
}

function ProjectModal({ project, closeModal }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className=" fixed inset-0 bg-gray-800/50 flex justify-center items-center flex-grow">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold font-mono">{project.name}</h2>
        <p className="mt-2 text-gray-700 font-mono">{project.description}</p>

        <div className="mt-2 text-gray-700 font-mono">
          {project.fullDescription}
        </div>
        <h3 className="mt-4 font-semibold font-mono">Tech Stack:</h3>
        <ul className="p-2 mt-2 list-none list-inside text-gray-600">
          <div className="mb-4">
            <p className="font-semibold text-lg text-gray-800">Frontend:</p>
            <div className="grid grid-cols-3 gap-4">
              {project.techStack.frontend.map((tech, index) => (
                <li key={index} className="flex flex-col items-center gap-4">
                  <div className="text-center">
                    {tech.icon}
                    <span className="mt-2 font-mono">{tech.name}</span>
                  </div>
                </li>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-lg text-gray-800">Backend:</p>
            <div className="grid grid-cols-3 gap-4">
              {project.techStack.backend.map((tech, index) => (
                <li key={index} className="flex flex-col items-center gap-4">
                  <div className="text-center">
                    {tech.icon}
                    <span className="mt-2 font-mono">{tech.name}</span>
                  </div>
                </li>
              ))}
            </div>
          </div>
        </ul>

        <div className="mt-4 flex justify-end gap-4">
          <a
            href={project.appLink}
            target="_blank"
            className="border-1 border-gray-700 text-black px-3 py-3 rounded-full text-m font-mono"
          >
            View Live App
          </a>
          <button
            onClick={closeModal}
            className="bg-red-500 text-white px-4 py-2 rounded-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
