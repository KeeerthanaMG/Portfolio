import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMedium, FaDev, FaGithub } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';

const blogs = [
  {
    title: "Building Scalable React Applications",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com",
    date: "January 2024",
  },
  {
    title: "Advanced TypeScript Patterns",
    platform: "Dev.to",
    icon: <FaDev />,
    link: "https://dev.to",
    date: "December 2023",
  },
  {
    title: "Cloud Architecture Best Practices",
    platform: "Hashnode",
    icon: <SiHashnode />,
    link: "https://hashnode.com",
    date: "November 2023",
  },
];

const contributions = [
  {
    project: "React",
    description: "Contributed to core React library, fixing performance issues",
    stars: "1.2k",
    link: "https://github.com/facebook/react",
  },
  {
    project: "TypeScript",
    description: "Added new type inference capabilities",
    stars: "800",
    link: "https://github.com/microsoft/typescript",
  },
  {
    project: "Next.js",
    description: "Improved documentation and examples",
    stars: "500",
    link: "https://github.com/vercel/next.js",
  },
];

const Community = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="community" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Community <span className="gradient-text">Contributions</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Blog Posts */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Technical Blog Posts
              </h3>
              <div className="space-y-6">
                {blogs.map((blog, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl text-blue-600 dark:text-blue-400">
                        {blog.icon}
                      </span>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {blog.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {blog.platform} • {blog.date}
                        </p>
                      </div>
                    </div>
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Read Article →
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Open Source Contributions */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Open Source Contributions
              </h3>
              <div className="space-y-6">
                {contributions.map((contribution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <FaGithub className="text-2xl text-gray-900 dark:text-white" />
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {contribution.project}
                      </h4>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        ★ {contribution.stars}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {contribution.description}
                    </p>
                    <a
                      href={contribution.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View Project →
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;