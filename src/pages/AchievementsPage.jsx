import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaAward, FaTrophy } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const achievementsData = {
  hackathons: [
    {
      name: "Global Hackathon 2023",
      organizer: "Tech Corp",
      date: "December 2023",
      achievement: "Winner",
      project: "AI-powered Healthcare Solution",
      description: "Led team of 4 to build innovative healthcare solution",
      image: "/path/to/your/hackathon-image1.jpg"
    },
    {
      name: "Innovation Hackathon",
      organizer: "StartUp Hub",
      date: "October 2023",
      achievement: "First Runner Up",
      project: "Smart City Solution",
      description: "Developed IoT-based traffic management system",
      image: "/path/to/your/hackathon-image2.jpg"
    }
  ],
  events: [
    {
      name: "International Coding Competition",
      organizer: "Tech University",
      date: "2023",
      achievement: "First Place",
      description: "Won first place among 500+ participants",
      image: "/path/to/your/event-image1.jpg"
    },
    {
      name: "Tech Innovation Challenge",
      organizer: "Google Developer Groups",
      date: "2023",
      achievement: "Gold Medal",
      description: "Created innovative solution for sustainable development",
      image: "/path/to/your/event-image2.jpg"
    }
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Professional certification for AWS cloud architecture",
      credentialId: "AWS-123456",
      image: "/path/to/your/certification-image1.jpg"
    },
    {
      name: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2023",
      description: "Expert-level cloud architecture certification",
      credentialId: "GCP-789012",
      image: "/path/to/your/certification-image2.jpg"
    }
  ]
};

const tabs = [
  { id: 'hackathons', label: 'Hackathons', icon: <FaTrophy /> },
  { id: 'events', label: 'Events', icon: <FaAward /> },
  { id: 'certifications', label: 'Certifications', icon: <FaCertificate /> }
];

const AchievementsPage = ({ theme, toggleTheme }) => {
  const [activeTab, setActiveTab] = useState('hackathons');

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
              {item.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {item.issuer || item.organizer} • {item.date}
            </p>
            {item.achievement && (
              <p className="text-green-600 dark:text-green-400 font-semibold mb-2">
                Achievement: {item.achievement}
              </p>
            )}
            {item.project && (
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Project: {item.project}
              </p>
            )}
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {item.description}
            </p>
            {item.credentialId && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Credential ID: {item.credentialId}
              </p>
            )}
          </div>
          <div className="md:w-1/3">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );

  const getContent = () => {
    switch (activeTab) {
      case 'hackathons':
        return renderContent(achievementsData.hackathons);
      case 'events':
        return renderContent(achievementsData.events);
      case 'certifications':
        return renderContent(achievementsData.certifications);
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
            Awards & <span className="gradient-text">Achievements</span>
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

export default AchievementsPage;