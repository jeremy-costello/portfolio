import { ExternalLink, X } from "lucide-react";

const ProjectModal = ({ project, onClose }: { project: any; onClose: () => void }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-2xl shadow-xl max-w-5xl w-full p-6 relative">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>

        {/* Media */}
        {project.mediaUrl && (
          <div className="mb-4 rounded-lg overflow-hidden">
            {project.mediaType === "video" ? (
              <video src={project.mediaUrl} controls autoPlay className="w-full rounded-lg" />
            ) : (
              <img src={project.mediaUrl} alt={project.title} className="w-full rounded-lg" />
            )}
          </div>
        )}

        {/* Description */}
        <p className="text-gray-300 mb-4">{project.details || project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech: string) => (
            <span key={tech} className="px-2 py-1 bg-gray-700 text-cyan-400 text-xs rounded">
              {tech}
            </span>
          ))}
        </div>

        {/* Code link or note */}
        {project.codeLink ? (
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Code
          </a>
        ) : (
          <span className="text-gray-400 italic">{project.codeNote || "Code unavailable"}</span>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;