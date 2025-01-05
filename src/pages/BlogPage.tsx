import React from 'react';
import { motion } from 'framer-motion';
import FeaturedPosts from '../components/FeaturedPosts';

const BlogPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black text-white min-h-screen pt-24 pb-16"
    >
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Blog Posts
        </h1>
        <FeaturedPosts limit={10} />
      </div>
    </motion.div>
  );
};

export default BlogPage;
