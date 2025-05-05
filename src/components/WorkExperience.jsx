import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    title: "Software Development Intern",
    company: "Bluestock Fintech",
    location: "Remote",
    date: "Apr 2025 – May 2025",
    points: [
      "Contributing to the fintech product and website development in a dynamic team environment.",
      "Collaborating with cross-functional teams to implement scalable and robust features.",
    ],
    icon: <FaBriefcase />,
  },
  {
    title: "Software Development Intern",
    company: "Zakapps Pvt Ltd",
    location: "Chennai, India (Onsite)",
    date: "Jan 2025 – Feb 2025",
    points: [
      "Built a Node.js-based Asset Management System managing 1,000+ assets, reducing issue resolution time by 30%.",
      "Designed RESTful APIs with Express.js, collaborated with a 4-member team, and engaged with 5+ stakeholders to define backend workflows.",
    ], 
    icon: <FaBriefcase />,
  },
  {
    title: "React Native Trainee",
    company: "VBC Developers",
    location: "Remote",
    date: "Jan 2024 – Feb 2024",
    points: [
      "Trained in JavaScript (ES6), React, and React Native fundamentals in a structured remote setup.",
      "Managed team attendance, status updates, and reporting while contributing to codebase in a 7-member team.",
    ],
    icon: <FaBriefcase />,
  },
];

const WorkExperience = () => {
  return (
    <section id="work-experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'rgb(var(--background-start-rgb))',
                color: 'rgb(var(--foreground-rgb))',
                boxShadow: '0 3px 0 rgb(var(--foreground-rgb))',
              }}
              contentArrowStyle={{ borderRight: '7px solid rgb(var(--foreground-rgb))' }}
              // date={exp.date}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={exp.icon}
            >
              <h3 className="vertical-timeline-element-title font-bold text-xl">
                {exp.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-gray-600 dark:text-gray-300 mt-2">
                {exp.company} - {exp.location}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{exp.date}</p>
              <ul className="list-disc list-inside mt-4 text-gray-600 dark:text-gray-300 space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default WorkExperience;