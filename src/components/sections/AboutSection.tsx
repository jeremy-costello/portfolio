const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-900 flex items-center py-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-5xl font-bold text-white mb-8">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm a passionate machine learning specialist with expertise in developing AI-powered solutions 
            that solve real-world problems. My journey in ML spans from traditional algorithms to cutting-edge 
            deep learning architectures.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            I thrive on transforming complex data into actionable insights and building scalable ML systems 
            that make a difference. Whether it's computer vision, NLP, or predictive modeling, I bring both 
            technical expertise and creative problem-solving to every project.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            {['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'AWS', 'Docker'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-500 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-gray-300 rounded-2xl flex items-center justify-center text-gray-600">
              Larger About Image Here
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
