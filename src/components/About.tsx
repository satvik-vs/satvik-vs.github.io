import React from 'react';
import SkillBar from './ui/SkillBar';
import { skills } from '../config/skills.data';

const About = () => {
  return (
    <section className="py-20 bg-black text-white" id="about">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate cybersecurity student with expertise in penetration testing,
              cloud security, and security automation. Currently ranked in the top 1% on TryHackMe,
              I constantly push myself to learn and grow in the ever-evolving field of information security.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-cyan-400">Certifications</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>eJPTv2 (In Progress)</li>
                <li>Ethical Hacking Essentials [E|HE] </li>
                <li>Google Cybersecurity Certified Professional</li>
                <li>Pre-security path - TryHackMe</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-cyan-400 mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;