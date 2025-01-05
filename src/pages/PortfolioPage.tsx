import React from 'react';
import { motion } from 'framer-motion';
import About from '../components/About';
import Projects from '../components/Projects';

const PortfolioPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black text-white pt-16"
    >
      <About />
      <Projects />
    </motion.div>
  );
};

export default PortfolioPage;