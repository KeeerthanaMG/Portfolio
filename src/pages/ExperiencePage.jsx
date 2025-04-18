import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaHandsHelping, FaMicrophone } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const contributionsData = {
  communityLeadership: [
    {
      role: "Tech Community Lead",
      organization: "Developer Community",
      duration: "2021 - Present",
      description: "Organized tech events and workshops for the developer community.",
      image: "/path/to/your/community-image1.jpg",
      impact: [
        "Grew community from 100 to 1000+ members",
        "Organized 20+ successful events",
        "Mentored 50+ developers"
      ]
    },
    {
      role: "Coding Club President",
      organization: "University Tech Hub",
      duration: "2020 - 2021",
      description: "Led university's largest technical club with over 500 members.",
      image: "/path/to/your/community-image2.jpg",
      impact: [
        "Organized weekly coding workshops",
        "Hosted 10+ industry speakers",
        "Launched mentorship program"
      ]
    }
  ],
  talks: [
    {
      title: "Modern Web Development",
      event: "Tech Conference 2023",
      date: "December 2023",
      description: "Presented modern web development practices and tools.",
      image: "/path/to/your/talks-image1.jpg",
      highlights: [
        "500+ attendees",
        "Covered React, Next.js, and TypeScript",
        "Highest rated session"
      ]
    },
    {
      title: "Future of AI in Development",
      event: "AI Summit 2023",
      date: "October 2023",
      description: "Keynote speaker on AI integration in software development.",
      image: "/path/to/your/talks-image2.jpg",
      highlights: [
        "1000+ virtual attendees",
        "Featured in Tech Weekly",
        "Panel discussion leader"
      ]
    }
  ],
  openSource: [
    {
      project: "React",
      role: "Core Contributor",
      duration: "2022 - Present",
      description: "Led development of key features and improvements",
      image: "/path/to/your/opensource-image1.jpg",
      contributions: [
        "Implemented new state management system",
        "Improved performance by 40%",
        "Fixed critical bugs"
      ]
    },
    {
      project: "TypeScript",
      role: "Contributor",
      duration: "2021 - Present",
      description: "Active contributor to TypeScript compiler and documentation",
      image: "/path/to/your/opensource-image2.jpg",
      contributions: [
        "Enhanced type inference system",
        "Improved error messages",
        "Added new language features"
      ]
    }
  ]
};

const tabs = [
  { id: 'communityLeadership', label: 'Community & Clubs', icon: <FaHandsHelping /> },
  { id: 'talks', label: 'Tech Talks', icon: <FaMicrophone /> },
  { id: 'openSource', label: 'Open Source', icon: <FaCode /> }
];

const ExperiencePage = ({ theme, toggleTheme }) => {
  const [activeTab, setActiveTab] = useState('communityLeadership');

  const renderContent = (items) => (
    <div className="space-y-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row"
        >
          <div className="p-6 md:w-2/3">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {item.title || item.role || item.project}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {item.event || item.organization} • {item.date || item.duration}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {item.description}
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              {(item.highlights || item.impact || item.contributions).map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/3">
            <img
              src={item.image}
              alt={item.title || item.role || item.project}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );

  const getContent = () => {
    switch (activeTab) {
      case 'communityLeadership':
        return renderContent(contributionsData.communityLeadership);
      case 'talks':
        return renderContent(contributionsData.talks);
      case 'openSource':
        return renderContent(contributionsData.openSource);
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="pt-20 bg-gray-50 dark:bg-gray-800 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Community <span className="gradient-text">Contributions</span>
          </h1>

          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white dark:bg-gray-900 rounded-lg shadow-lg p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-300 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {getContent()}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;