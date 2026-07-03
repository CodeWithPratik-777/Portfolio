import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Clean, modern inline layout progress tracker component
const SkillBar = ({ name, value }) => (
  <div className="space-y-2 p-4 bg-zinc-950/40 rounded-xl border border-zinc-900 backdrop-blur-sm hover:border-zinc-800 transition duration-300">
    <div className="flex justify-between items-center text-sm">
      <span className="font-medium text-zinc-200 tracking-wide">{name}</span>
      <span className="font-mono text-xs font-semibold bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded-md">
        {value}%
      </span>
    </div>
    <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-900">
      <motion.div 
        className="h-full bg-gradient-to-r from-zinc-400 to-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.15)]"
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  </div>
);

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript (ES6+)", value: 80 },
      { name: "Python", value: 80 },
      { name: "Java", value: 70 },
      { name: "SQL", value: 80 },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", value: 70 },
      { name: "HTML5", value: 90 },
      { name: "CSS3", value: 85 },
      { name: "Tailwind CSS", value: 80 },
      { name: "Bootstrap", value: 90 },
      { name: "Responsive Design", value: 85 },
      { name: "Framer Motion", value: 60 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", value: 80 },
      { name: "REST APIs", value: 80 },
      { name: "JWT & Authentication", value: 75 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "Express.js", value: 75 },
      { name: "Flask", value: 75 },
      { name: "TensorFlow", value: 60 },
      { name: "Keras", value: 60 },
      { name: "Scikit-learn", value: 65 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", value: 80 },
      { name: "Mongoose", value: 70 },
      { name: "MySQL", value: 80 },
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Machine Learning", value: 65 },
      { name: "Deep Learning", value: 60 },
      { name: "Natural Language Processing", value: 65 },
      { name: "CNN", value: 65 },
      { name: "Model Training", value: 65 },
      { name: "Data Preprocessing", value: 70 },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git", value: 75 },
      { name: "GitHub", value: 80 },
      { name: "Postman", value: 70 },
      { name: "Netlify", value: 60 },
      { name: "Render", value: 60 },
    ],
  },
];

export default function MySkills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCategories = activeCategory === "All"
    ? skillCategories
    : skillCategories.filter((c) => c.category === activeCategory);

  return (
    <div className="container mx-auto w-[90%] max-w-7xl py-12 space-y-12">
      {/* Dynamic Upper Layout Accent */}
      <div className="flex flex-col gap-2 border-l-4 border-white pl-4">
        <h2 className="text-2xl font-black tracking-tight text-white uppercase">Technical Capabilities</h2>
        <p className="text-zinc-400 text-sm">Core specializations across software development and data structures</p>
      </div>

      {/* Main Adaptive Layout Core */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        
        {/* Navigation Filters Panel Side Anchor: Static on Mobile, Sticky on Large Screen Profiles */}
        <div className="w-full lg:w-64 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 scrollbar-none snap-x static lg:sticky lg:top-24 z-10 bg-transparent">
          <button
            onClick={() => setActiveCategory("All")}
            className={`snap-center whitespace-nowrap text-left px-5 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all duration-300 border w-auto lg:w-full cursor-pointer
              ${activeCategory === "All"
                ? "bg-white text-black border-white shadow-[0_4px_12px_rgba(255,255,255,0.1)]"
                : "bg-transparent text-zinc-400 border-zinc-900 hover:text-white hover:border-zinc-700"
              }`}
          >
            All Areas
          </button>
          
          {skillCategories.map((section, idx) => {
            const isActive = activeCategory === section.category;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(section.category)}
                className={`snap-center whitespace-nowrap text-left px-5 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all duration-300 border w-auto lg:w-full cursor-pointer
                  ${isActive
                    ? "bg-white text-black border-white shadow-[0_4px_12px_rgba(255,255,255,0.1)]"
                    : "bg-transparent text-zinc-400 border-zinc-900 hover:text-white hover:border-zinc-700"
                  }`}
              >
                {section.category}
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Target Grid Area */}
        <div className="flex-1 w-full">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="space-y-10"
            >
              {filteredCategories.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-sm font-bold tracking-widest text-zinc-400 uppercase border-b border-zinc-900 pb-2">
                    {section.category}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {section.skills.map((skill, i) => (
                      <SkillBar key={i} name={skill.name} value={skill.value} />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}