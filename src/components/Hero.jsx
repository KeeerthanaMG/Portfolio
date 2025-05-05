import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaPython, FaJava, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiMongodb, SiPostgresql } from 'react-icons/si';

const floatingIcons = [
  { Icon: FaReact, color: '#61DAFB', initialX: -20, initialY: -20 },
  { Icon: FaNodeJs, color: '#339933', initialX: 20, initialY: -40 },
  { Icon: SiTypescript, color: '#3178C6', initialX: -40, initialY: 20 },
  { Icon: SiJavascript, color: '#F7DF1E', initialX: 40, initialY: 40 },
  { Icon: FaPython, color: '#3776AB', initialX: -20, initialY: 40 },
  { Icon: FaJava, color: '#007396', initialX: 30, initialY: -20 },
  { Icon: SiMongodb, color: '#47A248', initialX: -30, initialY: -40 },
  { Icon: SiPostgresql, color: '#336791', initialX: 40, initialY: 20 },
  { Icon: FaDocker, color: '#2496ED', initialX: -40, initialY: -10 }

];

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-center h-full gap-8">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Hi, I'm <span className="gradient-text">Keerthana M G</span>
          </h1>
          <div className="text-xl sm:text-2xl font-semibold mt-4 h-12 text-gray-600 dark:text-gray-300">
            <TypeAnimation
              sequence={[
                'Software Developer',
                2000,
                'Hackathon Enthusiast',
                2000,
                'Tech Speaker',
                2000,
                'Open Source Contributor',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
            Passionate about creating innovative solutions and contributing to the tech community.
            Let's build something amazing together!
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="public/Resume_Keerthana.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
            >
              Download Resume
            </a>
            <div className="flex gap-4 items-center">
              <a href="https://github.com/KeeerthanaMG" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/keerthana-m-g-12ba59256/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:keerthanamg19@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center relative"
        >
          <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
            <img
              src="public/image.png"
              alt="Profile"
              className="w-60 h-60 rounded-full object-cover"
            />
          </div>
          {floatingIcons.map(({ Icon, color, initialX, initialY }, index) => (
            <motion.div
              key={index}
              className="absolute"
              initial={{ x: initialX, y: initialY, opacity: 0 }}
              animate={{
                x: initialX,
                y: initialY,
                opacity: 1,
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.2,
              }}
              style={{
                color: color,
                left: `${50 + initialX}%`,
                top: `${50 + initialY}%`,
              }}
            >
              <Icon size={24} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;