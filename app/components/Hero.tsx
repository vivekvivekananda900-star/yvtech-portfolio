"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-cyan-400 text-lg font-semibold"
        >
          👋 Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mt-4"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Y Vivekananda
          </span>
        </motion.h1>

        <div className="mt-8 text-2xl md:text-4xl font-bold text-white">
          <TypeAnimation
            sequence={[
              "Full Stack Web Developer",
              2000,
              "Next.js Developer",
              2000,
              "React Developer",
              2000,
              "Firebase Developer",
              2000,
            ]}
            wrapper="span"
            repeat={Infinity}
          />
        </div>

        <p className="mt-8 text-gray-400 max-w-2xl mx-auto leading-8">
          Passionate Computer Science Engineering student building modern,
          responsive, fast, and user-friendly web applications with Next.js,
          React, TypeScript, Tailwind CSS and Firebase.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-semibold"
          >
            🚀 View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-xl border border-cyan-400 hover:bg-cyan-400 hover:text-black transition font-semibold"
          >
            📩 Contact Me
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-slate-900/70 backdrop-blur-md rounded-2xl p-6 border border-slate-700">
            <h3 className="text-4xl font-bold text-cyan-400">10+</h3>
            <p className="text-gray-400 mt-2">Projects Built</p>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-md rounded-2xl p-6 border border-slate-700">
            <h3 className="text-4xl font-bold text-cyan-400">8+</h3>
            <p className="text-gray-400 mt-2">Technologies</p>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-md rounded-2xl p-6 border border-slate-700">
            <h3 className="text-4xl font-bold text-cyan-400">2027</h3>
            <p className="text-gray-400 mt-2">Graduation Year</p>
          </div>

        </div>

      </div>
    </section>
  );
}