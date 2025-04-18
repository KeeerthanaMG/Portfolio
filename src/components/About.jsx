import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <p className="text-gray-600 dark:text-gray-300">
                I'm a <strong>pre-final year Computer Science student at REC</strong> with a strong foundation in
                <strong> web and mobile development</strong> and a growing passion for
                <strong> machine learning</strong>. My work focuses on building
                <strong> scalable, impactful solutions</strong> that blend cutting-edge technology with sustainable business practices.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                As the <strong>President of Intellexa REC</strong> during 2024-25, I’ve led cross-functional teams through complex technical projects and high-impact hackathons—fostering a culture of
                <strong> collaboration, creativity, and delivery</strong>. I also blog about tech, simplifying complex topics into accessible content for diverse audiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I'm currently seeking a <strong>full-time opportunity</strong> where I can contribute to meaningful projects as a
                <strong> software developer</strong>, while continuing to grow in a dynamic and innovative environment.
              </p>
            </div>

            <div className="relative">
              <div className="w-full h-80 rounded-lg overflow-hidden">
                <img
                  src="/image.png"
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>


        </motion.div>
      </div>
    </section>
  );
};

export default About;