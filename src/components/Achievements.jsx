import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaMedal, FaCertificate } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const achievementSections = [
  {
    title: "Hackathons",
    icon: <FaTrophy className="text-yellow-500" />,
    description: "Hackathon participations and achievements",
    preview: "Winner - Global Hackathon 2023",
  },
  {
    title: "Events Participated",
    icon: <FaMedal className="text-purple-500" />,
    description: "Technical competitions and events",
    preview: "First Place - Coding Competition 2023",
  },
  {
    title: "Certifications",
    icon: <FaCertificate className="text-blue-500" />,
    description: "Professional certifications and qualifications",
    preview: "AWS Certified Solutions Architect",
  },
];

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Awards & <span className="gradient-text">Achievements</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievementSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg transition-transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{section.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {section.description}
                </p>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <p className="text-gray-900 dark:text-white">
                    Featured: {section.preview}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/achievements"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              View All Achievements
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;