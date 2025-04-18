import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Community from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllProjects from './pages/AllProjects';
import ExperiencePage from './pages/ExperiencePage';
import AchievementsPage from './pages/AchievementsPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const HomePage = () => {
    // Handle smooth scrolling for hash links when returning to homepage
    const { hash } = useLocation();
    
    useEffect(() => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [hash]);

    return (
      <div className="relative z-0 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black min-h-screen">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Hero />
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <About />
          <WorkExperience />
          <Skills />
          <Projects />
          <Education />
          <Community />
          <Achievements />
          <Contact />
          <Footer />
        </motion.div>
      </div>
    );
  };

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/contributions" element={<ExperiencePage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/achievements" element={<AchievementsPage theme={theme} toggleTheme={toggleTheme} />} />
      </Routes>
    </Router>
  );
}

export default App;