import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";
import { projects } from "../../data/Projects";
import ProjectModal from "../modals/ProjectModal";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <section id="projects" className="min-h-screen bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-white text-center mb-16">Featured Projects</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className="relative aspect-video flex items-center justify-center cursor-pointer bg-black"
                onClick={() => setSelectedProject(project)}
              >
                {project.thumbnailUrl ? (
                  <img
                    src={project.thumbnailUrl}
                    alt={`${project.title} thumbnail`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-cyan-500 to-purple-600" />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  {project.mediaType === "video" || project.mediaType === "gif" ? (
                    <div className="flex items-center space-x-2 text-white">
                      <Play className="w-8 h-8" />
                      <span>View Demo</span>
                    </div>
                  ) : (
                    <span className="text-white">View Project</span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-700 text-cyan-400 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  More Info
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default ProjectsSection;
