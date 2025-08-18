import { ExternalLink, Play } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Recommendation System",
      description: "Built a collaborative filtering system that increased user engagement by 40% using deep learning techniques.",
      tech: ["Python", "TensorFlow", "AWS", "Redis"],
      hasVideo: true
    },
    {
      id: 2,
      title: "Computer Vision Pipeline",
      description: "Developed an end-to-end object detection system for autonomous vehicles with 95% accuracy.",
      tech: ["PyTorch", "OpenCV", "CUDA", "Docker"],
      hasVideo: false
    },
    {
      id: 3,
      title: "Natural Language Processing Model",
      description: "Created a sentiment analysis model for social media monitoring with real-time processing capabilities.",
      tech: ["BERT", "Transformers", "Flask", "MongoDB"],
      hasVideo: true
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-white text-center mb-16">Featured Projects</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  {project.hasVideo ? (
                    <div className="flex items-center space-x-2">
                      <Play className="w-8 h-8" />
                      <span>Video Demo</span>
                    </div>
                  ) : (
                    <span>Project Image</span>
                  )}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
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
                <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
