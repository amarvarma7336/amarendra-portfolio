"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  PhoneIcon,
  ArrowUpIcon,
} from "@heroicons/react/outline";

const sectionVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mx-auto min-h-screen bg-black text-gray-300">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900 shadow-lg z-50">
        <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-white">Amarendra Varma</div>
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex space-x-8">
            <a
              href="#profile"
              className="text-gray-300 hover:text-white transition"
            >
              Profile
            </a>
            <a
              href="#experience"
              className="text-gray-300 hover:text-white transition"
            >
              Experience
            </a>
            <a
              href="#education"
              className="text-gray-300 hover:text-white transition"
            >
              Education
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition"
            >
              Contact
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-gray-900 bg-opacity-75 z-40 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full relative">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-300 hover:text-white focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <a href="#profile" className="text-white text-2xl py-4">
              Profile
            </a>
            <a href="#experience" className="text-white text-2xl py-4">
              Experience
            </a>
            <a href="#education" className="text-white text-2xl py-4">
              Education
            </a>
            <a href="#contact" className="text-white text-2xl py-4">
              Contact
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto">
        {/* Hero Section */}
        <section className="h-screen flex justify-center items-center bg-gradient-to-r from-purple-700 to-indigo-700">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">
              Creative Full Stack Developer
            </h1>
            <p className="text-2xl mb-6">
              I design and develop user-centric applications with innovation.
            </p>
            <a
              href="#profile"
              className="px-6 py-3 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-600 transition"
            >
              Explore My Work
            </a>
          </div>
        </section>

        {/* Profile Section */}
        <section id="profile" className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={sectionVariants}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Profile Summary
              </h2>
              <p className="text-lg text-gray-300">
                A technocrat with expertise in full-stack development,
                delivering efficient solutions using React, Next.js, and React
                Native.
              </p>
            </motion.div>

            {/* Animated Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {profileCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: false }}
                  className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"
                >
                  <card.icon className="h-12 w-12 text-indigo-400 mb-4" />
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-center">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={sectionVariants}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Work Experience
              </h2>
              <p className="text-lg text-gray-300">
                3+ years of experience in full-stack development, focusing on
                web and mobile solutions.
              </p>
            </motion.div>

            <div className="space-y-8">
              {experienceCards.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.7 }}
                  viewport={{ once: false }}
                  className="bg-gray-800 p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {job.company}
                  </h3>
                  <p className="text-sm text-gray-400">{job.role}</p>
                  <p className="text-gray-300 mt-2">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={sectionVariants}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Education & Certifications
              </h2>
              <p className="text-lg text-gray-300">
                Certified in React, Node.js, and Python with a Bachelor’s in
                Computer Applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {educationCards.map((education, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: false }}
                  className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"
                >
                  <education.icon className="h-12 w-12 text-indigo-400 mb-4" />
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    {education.title}
                  </h3>
                  <p className="text-gray-400 text-center">
                    {education.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <p>
                <PhoneIcon className="inline h-5 w-5 mr-2" /> +91-9390018847
              </p>
              <p>Email: amarvarma7336@gmail.com</p>
              <p>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/amarendra-varma-6281101a5/"
                  className="underline text-indigo-400"
                >
                  Amarendra Varma
                </a>
              </p>
            </div>
          </div>
        </footer>
        {showScrollToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-indigo-600 text-white rounded-full p-3 shadow-lg hover:bg-indigo-700 transition"
            aria-label="Scroll to top"
          >
            <ArrowUpIcon className="h-6 w-6" />
          </button>
        )}
      </main>
    </div>
  );
}

const profileCards = [
  {
    title: "Full Stack Development",
    description:
      "Expert in building robust, scalable web applications using React and Node.js.",
    icon: BriefcaseIcon,
  },
  {
    title: "UI/UX Design",
    description: "Proficient in designing user-friendly interfaces with Figma.",
    icon: AcademicCapIcon,
  },
  {
    title: "Agile Methodologies",
    description:
      "Experienced in working in Agile teams with efficient SDLC management.",
    icon: ArrowRightIcon,
  },
];

const experienceCards = [
  {
    company: "Anukta Infotech Pvt. Ltd.",
    role: "React Js Developer (Oct 2022 - Present)",
    description:
      "Developed web and mobile solutions, enhancing customer interaction and efficiency.",
  },
  {
    company: "Respo Financial Capital Pvt. Ltd.",
    role: "React Js Developer (Apr 2022 - Oct 2022)",
    description:
      "Engineered a financial planning platform with performance optimization.",
  },
  {
    company: "Betalectic Pvt. Ltd.",
    role: "Full Stack Developer (Jun 2021 - Mar 2022)",
    description: `
      - Full-Stack Development Excellence: Led full-stack projects using React.js and Node.js, delivering robust back ends and seamless frontends.
      - Data Analysis Impact: Contributed to a critical data analysis project, boosting client operational efficiency by 25% through complex dataset visualization.
      - Business Management App: Developed a comprehensive business management app from scratch with React for web and React Native for mobile, supporting medium-sized business operations.
      - Secure API Implementation: Implemented secure Node.js API and integrated ICICI bank APIs, enabling real-time transactions and direct payments within the application.
      - Multiple Project Support: Used nx mono repo work space to build multiple projects in one repository.
    `,
  },
];

const educationCards = [
  {
    title: "React Certification",
    description: "Certified in React by Digital Lync, 2021",
    icon: AcademicCapIcon,
  },
  {
    title: "Node.js Certification",
    description: "Certified in Node.js by Digital Lync, 2021",
    icon: AcademicCapIcon,
  },
];
