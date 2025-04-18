import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'work-experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'Community', to: 'community' },
    { name: 'Contact', to: 'contact' },
  ];

  const NavLink = ({ item }) => {
    const commonClasses =
      "px-3 py-1 text-base md:text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300";
    if (isHomePage) {
      return (
        <ScrollLink
          to={item.to}
          smooth={true}
          duration={500}
          className={commonClasses}
        >
          {item.name}
        </ScrollLink>
      );
    }
    return (
      <RouterLink to={`/#${item.to}`} className={commonClasses}>
        {item.name}
      </RouterLink>
    );
  };

  return (
    <div className="fixed w-full top-4 z-50 flex justify-center">
      {/* Tablet-style centered translucent navbar */}
      <div className="flex items-center gap-6 px-6 py-2 rounded-2xl shadow-xl backdrop-blur-md bg-white/70 dark:bg-gray-800/70">
        {/* Logo */}
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <RouterLink to="/">
            <motion.div
              className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-xl"
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-bold text-white tracking-wide">MGK</span>
            </motion.div>
          </RouterLink>
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
        >
          {theme === 'dark' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
        </button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-2 p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
          >
            {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute top-20 w-11/12 max-w-sm bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-lg shadow-lg px-4 py-4 mt-2 md:hidden"
        >
          {navItems.map((item) => (
            <div key={item.name} className="py-1">
              <NavLink item={item} />
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
