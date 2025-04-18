import { motion } from 'framer-motion';
import { FaHandsHelping, FaMicrophone, FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const contributionSections = [
  {
    title: "Community & Clubs",
    icon: <FaHandsHelping />,
    description: "Community involvement and leadership roles",
    preview: {
      role: "Tech Community Lead",
      organization: "Developer Community",
      date: "2021 - Present",
    },
  },
  {
    title: "Tech Talks",
    icon: <FaMicrophone />,
    description: "Technical presentations and speaking engagements",
    preview: {
      title: "Modern Web Development",
      event: "Tech Conference 2023",
      date: "December 2023",
    },
  },
  {
    title: "Open Source",
    icon: <FaCode />,
    description: "Contributions to open source community and projects",
    preview: {
      role: "Core Contributor",
      project: "React Library",
      date: "2022 - Present",
    },
  },
];

const Community = () => {
  return (
    <section id="community" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Community <span className="gradient-text">Contributions</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contributionSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg transition-transform hover:scale-105"
            >
              <div className="text-4xl text-blue-600 dark:text-blue-400 mb-4">
                {section.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {section.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {section.description}
              </p>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="font-semibold text-gray-900 dark:text-white">
                  {section.preview.role || section.preview.title}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {section.preview.project || section.preview.event || section.preview.organization}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {section.preview.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/contributions"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            View All Contributions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Community;