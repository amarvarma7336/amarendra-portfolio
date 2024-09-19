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

type ParallaxElement = HTMLElement & { dataset: { speed?: string } };

const sectionVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const cardHoverVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
};

const textVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const buttonVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  hover: { scale: 1.1 },
};

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Toggle Scroll to Top button visibility
    if (scrollY > 200) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }

    // Active Section logic
    const sections = document.querySelectorAll("section");
    let currentSection: string | null = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 60;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });
    setActiveSection(currentSection);

    // Parallax effect with fallback
    const parallaxElements = document.querySelectorAll(".parallax");
    parallaxElements.forEach((element) => {
      const parallaxElement = element as ParallaxElement;
      const speed = parallaxElement.dataset.speed
        ? parseFloat(parallaxElement.dataset.speed)
        : 0.5; // Fallback speed
      const yPos = -(scrollY * speed) / 100;
      parallaxElement.style.transform = `translateY(${yPos}px)`;
    });
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
    <div className="mx-auto min-h-screen bg-slate-900 text-gray-300">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-800 bg-opacity-60 backdrop-blur-md shadow-lg z-50 parallax">
        <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-white">
            <a
              href="/"
              className={`transition ${
                activeSection === "profile"
                  ? "text-slate-100 font-semibold"
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
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`transition ${
                  activeSection === item.id
                    ? "text-slate-100 font-semibold"
                    : "text-gray-300"
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed h-screen z-[100] inset-0 bg-slate-800 bg-opacity-75 backdrop-blur-md ${
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
            <nav className="flex flex-col items-center space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-white text-2xl py-4"
                  onClick={() => {
                    setActiveSection(item.id);
                    toggleMenu(); // Close menu on click
                  }}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="h-screen overflow-hidden relative flex justify-center items-center bg-gradient-to-r from-slate-900 to-slate-700">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover md:object-contain z-0"
          src="marvel-pics/iron-manfirey-effect.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="md:absolute h-full md:w-full md:bg-slate-700 md:bottom-0 bg-[url('/marvel-pics/all-marvel-characters-massive-pic.webp')] bg-cover bg-center bg-no-repeat"></div>

        <div className="relative z-10 text-center text-white backdrop-blur-sm bg-black/30 p-8 rounded-lg">
          <motion.h1
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1 }}
            className="text-6xl font-bold mb-4"
          >
            <span className="w-full">Creative Full Stack Developer</span>
          </motion.h1>
          <motion.p
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl mb-6"
          >
            I design and develop user-centric applications with innovation.
          </motion.p>
          <motion.a
            href="#profile"
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            transition={{ duration: 0, delay: 0.3 }}
            className="px-6 py-3 bg-slate-500 text-white rounded-lg font-semibold hover:bg-slate-700 transition"
          >
            Explore My Work
          </motion.a>
        </div>
      </section>
      <main className="container mx-auto ">
        {/* Profile Section */}
        <section
          id="profile"
          className="h-full relative py-24 bg-gradient-to-tr from-slate-800 to-slate-400"
        >
          <div className="absolute w-full h-full inset-0 z-20 bg-scratch-pattern mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-6 z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-slate-100 mb-4">
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
                  className="bg-slate-700 p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform hover:shadow-xl"
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
        <section
          id="experience"
          className="relative bg-gradient-to-r from-slate-800 to-slate-500"
        >
          
          <div className="max-w-7xl mx-auto px-6 relative py-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-slate-100 mb-4">
                Work Experience
              </h2>
              <p className="text-lg text-gray-300">
                3+ years of experience in full-stack development, focusing on
                web and mobile solutions.
              </p>
            <div className="absolute w-full h-full inset-0 z-20 bg-scratch-pattern-2 mix-blend-overlay"></div>
            </motion.div>

            {/* Experience Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {experienceCards.map((card, index) => (
                <motion.div
                  key={index}
                  variants={cardHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  className="bg-gradient-to-r from-slate-800 to-slate-900 relative p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform hover:shadow-xl"
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
        <section
          id="education"
          className="relative py-24 bg-gradient-to-bl from-slate-800 to-slate-500"
        >
          <div className="absolute inset-0 z-0 bg-scratch-pattern-1 mix-blend-overlay"></div>

          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-slate-100 mb-4">
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
                  className="bg-slate-900 p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform hover:shadow-xl"
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

        <section id="technical-skills" className="py-16 bg-gradient-to-l from-slate-900 to-gray-500">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="text-center mb-12"
          >
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-4xl font-bold text-center text-slate-100 mb-8">
                Technical Skills
              </h2>
              <div className="flex flex-col space-y-6 text-white">
                {[
                  "Version Control with Git",
                  "Proficient in HTML, CSS, & JavaScript",
                  "Expertise in React and Node.js",
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-slate-800 p-4 rounded-lg shadow-lg text-center transform"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 0px 15px rgba(0,0,0,0.3)",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <p className="text-lg font-medium">{skill}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="core-competence" className="py-16 bg-gradient-to-br from-slate-900 to-gray-500 ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="text-center mb-12"
          >
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-4xl font-bold text-center text-slate-100 mb-8">
                Core Competencies
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-white">
                {[
                  "Full Stack Development",
                  "User Experience Design",
                  "Agile Methodologies",
                  "Cloud Computing",
                  "Requirement Gathering & Analysis",
                  "Performance Tuning",
                  "Data Analysis",
                  "Project Management",
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Client Engagement",
                  "Quality Assurance",
                ].map((competency, index) => (
                  <motion.div
                    key={index}
                    className="bg-slate-800 p-4 rounded-lg shadow-lg text-center transform"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0px 0px 15px rgba(0,0,0,0.3)",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <p className="text-lg font-medium">{competency}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-slate-900 relative bg-scratch-pattern-3">

          <div className="max-w-7xl mx-auto px-6 mix-blend-lighten ">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-slate-100 mb-4">
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
                <h3 className="text-2xl font-semibold text-slate-100 mb-6 text-center">
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
                    className="w-full py-2 bg-slate-100 text-slate-800 font-semibold rounded-md hover:bg-tomato-400"
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
          className="fixed z-[101] bottom-6 right-6 bg-tomato-500 text-white p-3 rounded-full shadow-lg hover:bg-tomato-600 transition"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="h-6 w-6" />
        </button>
      )}
      {/* Footer */}
      <footer className="bg-slate-800 py-6">
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

const navItems = [
  { id: "profile", title: "Profile" },
  { id: "experience", title: "Experience" },
  { id: "education", title: "Education" },
  { id: "technical-skills", title: "Technical Skills" },
  { id: "core-competence", title: "Core Competence" },
  { id: "contact", title: "Contact" },
];

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
  {
    role: "Full Stack Developer",
    company: "Betalectic Pvt. Ltd., Hyderabad",
    duration: "Jun’21 - Mar’22",
    responsibilities: [
      "Led full-stack projects using React.js and Node.js, delivering robust back ends and seamless frontends.",
      "Contributed to a critical data analysis project, boosting client operational efficiency by 25% through complex dataset visualization.",
      "Developed a comprehensive business management app with React for web and React Native for mobile, supporting medium-sized business operations.",
      "Implemented secure Node.js API and integrated ICICI bank APIs, enabling real-time transactions and direct payments within the application.",
      "Used nx mono repo workspace to build multiple projects in one repository.",
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
