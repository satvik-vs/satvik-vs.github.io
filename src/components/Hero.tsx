import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Download, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Satvik Vemulapalli
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-8">
            <TypeAnimation
              sequence={[
                'Penetration Tester',
                2000,
                'Cloud Security Enthusiast',
                2000,
                'Security Researcher',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-mono"
            />
          </div>

          <p className="text-cyan-400 mb-8 font-mono">
            Cybersecurity Geek | Top 1% TryHackMe | Blogger
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <a 
              href="https://github.com/satvik-vs" 
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-8 h-8" />
            </a>
            <a 
              href="https://linkedin.com/in/satvik-vemulapalli" 
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a 
              href="https://twitter.com/anonbash1" 
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <Twitter className="w-8 h-8" />
            </a>
          </div>

          <a 
            href="https://drive.google.com/file/d/1xtb6uzOA-ydjgk1RcBnkzuNkAmjk9WWN/view?usp=sharing" // Replace with your actual resume URL
            download="Satvik_Vemulapalli_Resume.pdf" // Optional: Specify the downloaded file name
          >
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-mono hover:opacity-90 transition-opacity flex items-center gap-2 mx-auto">
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </a>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
    </div>
  );
};

export default Hero;
