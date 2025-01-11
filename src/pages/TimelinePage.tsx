import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Crown } from 'lucide-react';

const TimelinePage = () => {
  const education = [
    {
      title: "Bachelor's in Cybersecurity",
      institution: "GITAM UNIVERSITY , Hyderabad",
      year: "2022 - Present",
      description: "Specializing in cybersecurity",
    },
    {
      title: "Intermediate",
      institution: "Sri chaitanya junior college",
      year: "2020 - 2022",
      description: "10+2 in MPC",
    },
  ];

  const experience = [
    {
      title: "Penetration Tester Intern",
      company: "Hackers For You",
      year: "Feb 5 , 2024 - May 5 , 2024",
      description: "Leading penetration testing and security assessments for enterprise clients.",
    },
  ];

  const leadership = [
    {
      title: "Founder and President",
      company: "HackOps GITAM",
      year: "Dec 11 , 2025",
      description: "cybersecurity Training and Awareness club @GITAM HYDERABAD",
    },
    {
      title: "President",
      company: "CYSEC GITAM",
      year: "Jul 2024 - Sep 2024",
      description: "Cybersecurity community at GITAM UNIVERSITY",
    },
    {
      title: "Deputy Secretary",
      company: "CYSEC GITAM",
      year: "Feb 2024 - Jul 2024",
      description: "Cybersecurity community at GITAM University",
    },
    {
      title: "Deputy Tech Lead",
      company: "CYSEC GITAM",
      year: "Jul 2023 - Feb 2024",
      description: "Cybersecurity Community at GITAM University",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black text-white min-h-screen pt-24 pb-16"
    >
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Timeline
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-cyan-400">
              <GraduationCap className="w-6 h-6" />
              Education
            </h2>
            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-6 border-l-2 border-gray-800"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full" />
                  <div className="mb-1 text-sm text-cyan-400">{item.year}</div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <div className="text-gray-400 mb-2">{item.institution}</div>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-cyan-400">
              <Briefcase className="w-6 h-6" />
              Experience
            </h2>
            <div className="space-y-8">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-6 border-l-2 border-gray-800"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full" />
                  <div className="mb-1 text-sm text-cyan-400">{item.year}</div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <div className="text-gray-400 mb-2">{item.company}</div>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Leadership Timeline */}
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-cyan-400">
              <Crown className="w-6 h-6" />
              Leadership
            </h2>
            <div className="space-y-8">
              {leadership.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-6 border-l-2 border-gray-800"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full" />
                  <div className="mb-1 text-sm text-cyan-400">{item.year}</div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <div className="text-gray-400 mb-2">{item.company}</div>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelinePage;
