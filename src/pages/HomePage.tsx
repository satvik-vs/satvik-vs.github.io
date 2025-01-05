import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ParticlesBackground from '../components/ParticlesBackground';
import About from '../components/About';
import Projects from '../components/Projects';

const HomePage = () => {
  return (
    <div className="bg-black text-white">
      <ParticlesBackground />
      
      {/* Hero Section */}
      <Hero />

      {/* About Preview Section */}
      <section className="relative">
        <About />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />
        <div className="container mx-auto px-6 pb-8 text-center">
          <Link 
            to="/portfolio" 
            className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-2"
          >
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Featured Projects
            </h2>
            <Link 
              to="/portfolio" 
              className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-2"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <Projects limit={3} /> {/* We'll modify the Projects component to accept a limit prop */}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Let's Work Together
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Looking for a cybersecurity expert to help secure your infrastructure? 
            Let's connect and discuss how I can help protect your digital assets!
          </p>
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </motion.section>

      {/* Download Section */}
      <section className="py-10 text-center bg-black">
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
          Download My Resume
        </h2>
        <a
          href="https://35a451c3-021c-4264-9e89-da0ce1d7d37c.usrfiles.com/ugd/35a451_75901b30377e4058b72b3307ddcaceab.pdf" // Replace this with your actual download link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-mono hover:opacity-90 transition-opacity"
        >
          Download
        </a>
      </section>
    </div>
  );
};

export default HomePage;
