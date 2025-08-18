import { useState } from 'react';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: "Python", level: 95, icon: "🐍" },
    { name: "TensorFlow", level: 90, icon: "🧠" },
    { name: "PyTorch", level: 85, icon: "🔥" },
    { name: "Scikit-learn", level: 90, icon: "📊" },
    { name: "AWS", level: 80, icon: "☁️" },
    { name: "Docker", level: 75, icon: "🐳" },
    { name: "Kubernetes", level: 70, icon: "⚙️" },
    { name: "SQL", level: 85, icon: "💾" },
    { name: "Git", level: 90, icon: "🔄" },
    { name: "Jupyter", level: 95, icon: "📓" },
    { name: "MLflow", level: 80, icon: "🚀" },
    { name: "Apache Spark", level: 75, icon: "⚡" }
  ];

  return (
    <section id="skills" className="min-h-screen bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-white text-center mb-16">Technical Skills</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="w-20 h-20 bg-gray-700 rounded-xl flex items-center justify-center text-3xl hover:bg-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30">
                {skill.icon}
              </div>
              
              {hoveredSkill?.name === skill.name && (
                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-gray-900 rounded-lg p-4 shadow-2xl z-10 min-w-max">
                  <div className="text-white font-medium mb-2">{skill.name}</div>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 h-2 bg-gray-600 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-cyan-400 text-sm font-medium">{skill.level}%</span>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
