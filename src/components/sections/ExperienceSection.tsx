const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior ML Engineer",
      company: "Tech Corp",
      duration: "2022 - Present",
      description: "Leading ML initiatives and building scalable AI systems",
      technologies: ["🐍", "🧠", "☁️", "🐳", "📊", "⚡"]
    },
    {
      title: "Data Scientist",
      company: "Analytics Inc",
      duration: "2020 - 2022",
      description: "Developed predictive models and data pipelines",
      technologies: ["🐍", "📊", "🔍", "📈", "💾", "🌐"]
    },
    {
      title: "ML Research Intern",
      company: "AI Lab",
      duration: "2019 - 2020",
      description: "Researched novel deep learning architectures",
      technologies: ["🧠", "🔬", "📝", "💡", "🎯", "🚀"]
    }
  ];

  return (
    <section id="experience" className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-white text-center mb-16">Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-4 h-4 bg-cyan-500 rounded-full mt-2 shadow-lg shadow-cyan-500/50"></div>
                <div className="bg-gray-800 rounded-xl p-8 flex-grow hover:bg-gray-750 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <p className="text-cyan-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.duration}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{exp.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((icon, idx) => (
                      <div key={idx} className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-2xl hover:bg-gray-600 transition-colors cursor-pointer hover:scale-110 transform">
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {index < experiences.length - 1 && (
                <div className="absolute left-2 top-8 w-0.5 h-20 bg-gray-700"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
