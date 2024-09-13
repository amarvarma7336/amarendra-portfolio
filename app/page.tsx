"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  AcademicCapIcon,
  // PhoneIcon,
  ArrowUpIcon,
} from "@heroicons/react/outline";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";

const instagram =
  "https://www.instagram.com/eternal_soul1111?igsh=YjZteDVkNmF0ZXF2&utm_source=qr";
const linkedin = "https://www.linkedin.com/in/amarendra-varma-6281101a5/";
const github = "https://github.com/amarvarma7336";
const email = "amarvarma7336@gmail.com";
const phone = "+91-9390018847";

const sectionVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const cardHoverVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
};

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }

    const sections = document.querySelectorAll("section");
    let currentSection: string | null = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 60;
      const sectionHeight = section.offsetHeight;
      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });
    setActiveSection(currentSection);
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
    <div className="mx-auto min-h-screen bg-teal-900 text-gray-300">
      {/* Header */}
      <header className="fixed top-0 w-full bg-teal-800 shadow-lg z-50">
        <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-white">
            <a
              href="/"
              className={`transition ${
                activeSection === "profile"
                  ? "text-tomato-500 font-semibold"
                  : "text-gray-300"
              }`}
            >
              Amarendra Varma
            </a>
          </div>
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
              className={`transition ${
                activeSection === "profile"
                  ? "text-tomato-500 font-semibold"
                  : "text-gray-300"
              }`}
            >
              Profile
            </a>
            <a
              href="#experience"
              className={`transition ${
                activeSection === "experience"
                  ? "text-tomato-500 font-semibold"
                  : "text-gray-300"
              }`}
            >
              Experience
            </a>
            <a
              href="#education"
              className={`transition ${
                activeSection === "education"
                  ? "text-tomato-500 font-semibold"
                  : "text-gray-300"
              }`}
            >
              Education
            </a>
            <a
              href="#contact"
              className={`transition ${
                activeSection === "contact"
                  ? "text-tomato-500 font-semibold"
                  : "text-gray-300"
              }`}
            >
              Contact
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-teal-800 bg-opacity-75 z-40 ${
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
        <section className="h-screen flex justify-center items-center bg-gradient-to-r from-teal-600 to-tomato-500">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">
              Creative Full Stack Developer
            </h1>
            <p className="text-2xl mb-6">
              I design and develop user-centric applications with innovation.
            </p>
            <a
              href="#profile"
              className="px-6 py-3 bg-tomato-500 text-white rounded-lg font-semibold hover:bg-tomato-600 transition"
            >
              Explore My Work
            </a>
          </div>
        </section>

        {/* Profile Section */}
        <section id="profile" className="py-24 bg-teal-800">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-tomato-500 mb-4">
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
                  variants={cardHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  className="bg-teal-700 p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform hover:shadow-xl"
                >
                  <card.icon className="h-12 w-12 text-tomato-400 mb-4" />
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    {card.title}
                  </h3>
                  <p className="text-gray-200 text-center">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-teal-900">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-tomato-500 mb-4">
                Work Experience
              </h2>
              <p className="text-lg text-gray-300">
                3+ years of experience in full-stack development, focusing on
                web and mobile solutions.
              </p>
            </motion.div>

            {/* Experience Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {experienceCards.map((card, index) => (
                <motion.div
                  key={index}
                  variants={cardHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  className="bg-teal-700 p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform hover:shadow-xl"
                >
                  <BriefcaseIcon className="h-12 w-12 text-tomato-400 mb-4" />
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    {card.role}
                  </h3>
                  <p className="text-gray-200 text-center">{card.company}</p>
                  <p className="text-gray-300 text-center mt-2">
                    {card.duration}
                  </p>
                  <ul className="text-gray-200 mt-4 list-disc list-inside">
                    {card.responsibilities.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 bg-teal-800">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-tomato-500 mb-4">
                Education
              </h2>
              <p className="text-lg text-gray-300">
                Comprehensive educational background in computer science and
                applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {educationCards.map((card, index) => (
                <motion.div
                  key={index}
                  variants={cardHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  className="bg-teal-700 p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform hover:shadow-xl"
                >
                  <AcademicCapIcon className="h-12 w-12 text-tomato-400 mb-4" />
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    {card.degree}
                  </h3>
                  <p className="text-gray-200 text-center">
                    {card.institution}
                  </p>
                  <p className="text-gray-300 text-center mt-2">
                    {card.duration}
                  </p>
                  <p className="text-gray-200 mt-4">{card.details}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-teal-900">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-tomato-500 mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-300">
                Feel free to reach out through any of the following channels.
              </p>
            </motion.div>

            <div className="flex flex-col items-center space-y-6">
              <div className="flex items-center space-x-4">
                <HiPhone className="h-6 w-6 text-tomato-400" />
                <a href={`tel:${phone}`} className="text-gray-200">
                  {phone}
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <HiMail className="h-6 w-6 text-tomato-400" />
                <a
                  target="_blank"
                  href={`mailto:${email}`}
                  className="text-gray-200"
                >
                  {email}
                </a>
              </div>
              <div className="flex space-x-4">
                <a
                  target="_blank"
                  href={instagram}
                  className="text-tomato-400 hover:text-white"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  target="_blank"
                  href={linkedin}
                  className="text-tomato-400 hover:text-white"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  target="_blank"
                  href={github}
                  className="text-tomato-400 hover:text-white"
                >
                  <FaGithub size={24} />
                </a>
              </div>

              {/* Contact Form */}
              <div className="w-full max-w-md mx-auto mt-12">
                <h3 className="text-2xl font-semibold text-tomato-500 mb-6 text-center">
                  Send Us a Message
                </h3>
                <form
                  className="bg-gray-800 p-6 rounded-lg shadow-md"
                  onSubmit={() => alert("Thanks for Contacting")}
                >
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-300 text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 bg-gray-900 text-gray-200 border border-gray-700 rounded-md"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-300 text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 bg-gray-900 text-gray-200 border border-gray-700 rounded-md"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-gray-300 text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-900 text-gray-200 border border-gray-700 rounded-md"
                      placeholder="Your Message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 bg-tomato-500 text-white font-semibold rounded-md hover:bg-tomato-400"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-tomato-500 text-white p-3 rounded-full shadow-lg hover:bg-tomato-600 transition"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="h-6 w-6" />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-teal-800 py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Amarendra Varma</p>
          <div className="flex space-x-4">
            <a
              target="_blank"
              href={instagram}
              className="text-tomato-400 hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
            <a
              target="_blank"
              href={linkedin}
              className="text-tomato-400 hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              target="_blank"
              href={github}
              className="text-tomato-400 hover:text-white"
            >
              <FaGithub size={24} />
            </a>
            <a
              target="_blank"
              href={`mailto:${email}`}
              className="text-tomato-400 hover:text-white"
            >
              <HiMail size={24} />
            </a>
            <a
              target="_blank"
              href={`tel:${phone}`}
              className="text-tomato-400 hover:text-white"
            >
              <HiPhone size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const profileCards = [
  {
    icon: BriefcaseIcon,
    title: "Innovative Solutions",
    description:
      "Expert in crafting cutting-edge web and mobile applications using modern technologies.",
  },
  {
    icon: BriefcaseIcon,
    title: "Agile Development",
    description:
      "Experience in agile methodologies ensuring timely delivery of projects.",
  },
  {
    icon: BriefcaseIcon,
    title: "User Experience",
    description: "Focus on creating intuitive and user-friendly interfaces.",
  },
];

const experienceCards = [
  {
    role: "Full Stack Developer",
    company: "Tech Innovators",
    duration: "2022 - Present",
    responsibilities: [
      "Developed and maintained web applications using React and Next.js.",
      "Implemented RESTful APIs and integrated with backend services.",
      "Led a team of developers in project planning and execution.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Web Solutions",
    duration: "2020 - 2022",
    responsibilities: [
      "Built responsive web pages using React and TailwindCSS.",
      "Worked on UI/UX improvements and bug fixes.",
      "Collaborated with designers to implement new features.",
    ],
  },
];

const educationCards = [
  {
    degree: "Bachelor of Computer Applications",
    institution: "Mahatma Gandhi University",
    duration: "2017 - 2020",
    details:
      "Graduated with a focus on full-stack development and data structures.",
  },
];
