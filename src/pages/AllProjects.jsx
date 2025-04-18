import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const allProjects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory management.",
    image: "https://via.placeholder.com/400x300",
    tags: ["React", "Node.js", "MongoDB", "Web"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "AI Image Generator",
    description: "An AI-powered image generation tool using deep learning models.",
    image: "https://via.placeholder.com/400x300",
    tags: ["Python", "TensorFlow", "AI/ML"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    image: "https://via.placeholder.com/400x300",
    tags: ["React", "Firebase", "Web"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  // Add more projects here
];

const AllProjects = () => {
  const [filter, setFilter] = useState('all');
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const filteredProjects = filter === 'all'
    ? allProjects
    : allProjects.filter(project => project.tags.some(tag => 
        tag.toLowerCase().includes(filter.toLowerCase())
      ));

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="pt-20 bg-gray-50 dark:bg-gray-800 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            All <span className="gradient-text">Projects</span>
          </h1>

          <div className="flex justify-center gap-4 mb-12">
            {['all', 'web', 'mobile', 'ai/ml'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg transition-colors duration-300 ${
                  filter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      <FaGithub size={24} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      <FaExternalLinkAlt size={24} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;