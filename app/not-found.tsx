"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-900 text-gray-300">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        className="text-center p-8 bg-teal-700 rounded-lg shadow-md"
      >
        <h1 className="text-6xl font-bold text-tomato-500 mb-4">404</h1>
        <p className="text-2xl mb-6">
          {"Oops! The page you're looking for doesn't exist."}
        </p>
        <Link href="/">
          <button className="px-6 py-3 bg-tomato-500 text-white rounded-lg font-semibold hover:bg-tomato-600 transition">
            Go Back Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
