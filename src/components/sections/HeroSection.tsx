import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animation: 'twinkle 3s infinite'
            }}
          />
        ))}
      </div>

      <div className={`text-center z-10 transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Headshot with glow effect */}
        <div className="relative mb-8 inline-block">
          <div className="w-64 h-64 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full p-1 shadow-2xl">
            <img
              src="/images/headshot.jpg"
              alt="Headshot"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 blur-xl opacity-30 animate-pulse"></div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient">
          Jeremy Costello
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
          ML/AI Engineer
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-12">
          Transforming data into intelligent solutions through cutting-edge machine learning and AI technologies
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white opacity-60" />
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
