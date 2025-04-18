import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Educational <span className="gradient-text">Background</span>
          </h2>
          <div className="space-y-8">

            {/* College Education */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <FaGraduationCap className="text-4xl text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Bachelor of Computer Science
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Rajalakshmi Engineering College, Chennai | 2022 - 2026
                  </p>
                </div>
              </div>
              <div className="ml-12">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  CGPA: 8.41
                </h4>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Certifications & Notable Coursework:
                </h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Frontend Web Development – Sudharshanam IT Academy</li>
                  <li>Machine Learning – Udemy</li>
                  <li>Artificial Intelligence – Infosys Springboard</li>
                  <li>Prompt Engineering – LinkedIn Learning</li>
                </ul>
              </div>
            </div>

            {/* School Education */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <FaGraduationCap className="text-4xl text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    HSC & SSLC Education
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Shree Niketan Matric. Hr. Sec. School | Graduated: 2022
                  </p>
                </div>
              </div>
              <div className="ml-12">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Academic Performance:
                </h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>HSC Score: 98% (3 centums)</li>
                  <li>SSLC Score: 98%</li>
                </ul>

                <h4 className="font-semibold text-gray-900 dark:text-white mt-4 mb-2">
                  Achievements:
                </h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>State Topper in Tamil Subject</li>
                  <li>School Topper in HSC Board Exams</li>
                  <li>House Captain</li>
                  <li>Winner of multiple public speaking competitions</li>
                  <li>Junior Scientist Award – National Children's Science Congress (NCSC), 2019</li>
                </ul>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
