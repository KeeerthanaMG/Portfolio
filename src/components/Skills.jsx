import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const skills = [
  { name: 'Java', rating: '⭐⭐⭐⭐⭐' },
  { name: 'Python', rating: '⭐⭐⭐⭐' },
  { name: 'C', rating: '⭐⭐⭐' },
  { name: 'JavaScript', rating: '⭐⭐' },
  { name: 'React', rating: '⭐⭐⭐⭐' },
  { name: 'Express.js', rating: '⭐⭐⭐' },
  { name: 'Node.js', rating: '⭐⭐⭐' },
  { name: 'Django', rating: '⭐⭐⭐' },
  { name: 'Flask', rating: '⭐⭐⭐' },
  { name: 'Bootstrap', rating: '⭐⭐⭐' },
  { name: 'Flutter', rating: '⭐⭐⭐' },
  { name: 'Scikit Learn', rating: '⭐⭐⭐' },
  { name: 'Flutterflow', rating: '⭐⭐' },
  { name: 'Postman', rating: '⭐⭐⭐' },
  { name: 'StarUML', rating: '⭐⭐⭐' },
  { name: 'Git & GitHub', rating: '⭐⭐⭐⭐' },
  { name: 'MySQL', rating: '⭐⭐⭐' },
  { name: 'PostgreSQL', rating: '⭐⭐⭐' },
  { name: 'Firebase', rating: '⭐⭐⭐' },
  { name: 'MongoDB', rating: '⭐⭐⭐' },
  { name: 'Communication', rating: '⭐⭐⭐⭐' },
  { name: 'Team Coordination', rating: '⭐⭐⭐⭐' },
  { name: 'Event Planning', rating: '⭐⭐⭐⭐' },
  { name: 'Idea Pitching', rating: '⭐⭐⭐' },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-14"
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.02, duration: 0.4 }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <span className="px-5 py-2 text-lg font-medium text-gray-800 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full shadow-sm hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors cursor-default">
                {skill.name}
              </span>

              {/* Tooltip */}
              {hoveredSkill === index && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: -20 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded shadow-md z-10"
                >
                  {skill.rating}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
