import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { IoOpenOutline } from "react-icons/io5";
import { FaFlagCheckered, FaLightbulb, FaCode, FaPaintBrush, FaServer } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { P1, P2, P3, P4, P5, P6 } from "../assets/MyWorkImages/index";

const iconMap = {
  "Concept & Research": <FaLightbulb className="text-yellow-400 text-xl" />,
  "Model Development": <FaCode className="text-green-400 text-xl" />,
  "Frontend Design": <FaPaintBrush className="text-pink-400 text-xl" />,
  "Backend Integration": <FaServer className="text-blue-400 text-xl" />,
  "Deployment": <FaFlagCheckered className="text-purple-400 text-xl" />,
};

const majorProjects = [
  {
    id: 1,
    title: "AI News Verifier",
    description:
      "An AI-powered web application that detects whether a news article is real or fake using a custom BiLSTM model with an Attention mechanism. Users can analyze news from a URL or manually enter article content, while Google Gemini generates summaries and explanations to help them better understand the prediction.",
    image: P6,
    projectLink: "https://www.linkedin.com/posts/pratik-mane-dev_artificialintelligence-machinelearning-deeplearning-ugcPost-7478502640927137792-BeSJ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3gJ68BUuHSMDnKevJhGyEZI2TmNxN5phc",
    githubLink: "https://github.com/CodeWithPratik-777/AI-News-Verifier",
    journey: [
      {
        title: "Concept & Research",
        desc: "Researched how fake news and clickbait headlines spread online. Analyzed text patterns and gathered news datasets to plan how to train a model to catch fake articles."
      },
      {
        title: "Model Development",
        desc: "Built a deep learning model that processes the headline and body text separately in parallel. Added an attention layer to help the model focus on key words and optimized the decision threshold to 0.53 for better accuracy."
      },
      {
        title: "Frontend Design",
        desc: "Designed a premium dark cyber-grid dashboard using Tailwind CSS. Added glassmorphism cards, animated confidence bars, a circular progress gauge, and a custom micro-alert for copying plaintext."
      },
      {
        title: "Backend Integration",
        desc: "Built a Flask API backend to connect the deep learning model with the frontend. Integrated BeautifulSoup and lxml to scrape clean article text from URLs, and used Gemini to generate the linguistic explanations and keyword highlights."
      },
      {
        title: "Deployment",
        desc: "Configured the app dependencies and cleaned up the environment for public hosting. Added client-side URL validation regex to instantly drop bad links and prevent unneeded server requests."
      }
    ]
  },
  {
    id: 2,
    title: "PlantWellness",
    description:
      "AI-powered platform to instantly detect leaf diseases, suggest tailored cures, and provide farmers and gardeners with actionable insights. " +
      "Features include weather suitability checks, soil analysis, community updates, and AI Q&A for agricultural queries. " +
      "Integrated payment options for premium tools and real-time SMS alerts make it a complete plant wellness solution.",
    image: P1,
    projectLink: "https://lnkd.in/p/dCSBamjp",
    githubLink: "https://github.com/CodeWithPratik-777/Plant-Wellness",
    journey: [
      {
        title: "Concept & Research",
        desc: "Analyzed the need for instant plant disease detection for farmers and gardeners. Explored datasets from Kaggle and custom sources to prepare training data."
      },
      {
        title: "Model Development",
        desc: "Developed 25 AI models, one per plant type, using CNN and Scikit-learn. Implemented image augmentation and optimized for high accuracy."
      },
      {
        title: "Frontend Design",
        desc: "Created a clean and responsive UI with Bootstrap for uploading images and viewing results. Focused on user-friendly layouts and interactions."
      },
      {
        title: "Backend Integration",
        desc: "Built the backend using Node.js and Flask, and used MongoDB for data storage. Connected AI models to the frontend and implemented features like weather checks, soil analysis, and location-based advice."
      },
      {
        title: "Deployment",
        desc: "Deployed the system on Render with full functionality, real-time SMS alerts, and payment integration for premium features."
      }
    ]
  },
  {
    id: 3,
    title: "StartWithTech",
    description:
      "A tech blogging platform for creators to share ideas, posts, and tutorials in a responsive and smooth interface. " +
      "Includes features like CKEditor for easy content creation and intuitive navigation for readers. " +
      "Optimized for speed and mobile-friendly experience, making tech blogging effortless and engaging.",
    image: P5,
    projectLink: "https://lnkd.in/p/dmPUZZuk",
    githubLink: "https://github.com/CodeWithPratik-777/StartWithTech",
    journey: [
      {
        title: "Concept & Research",
        desc: "Researched the need for a smooth blogging platform for tech creators. Planned features like CKEditor, responsive posts, and navigation."
      },
      {
        title: "Model Development",
        desc: "Developed core React components for creating and viewing posts. Focused on seamless user interaction and content management."
      },
      {
        title: "Frontend Design",
        desc: "Styled the platform using Tailwind CSS, ensuring responsive design and clean typography. Enhanced UI consistency and readability."
      },
      {
        title: "Backend Integration",
        desc: "Connected frontend to Node.js backend and MongoDB database for post storage and retrieval. Implemented efficient API routes."
      },
      {
        title: "Deployment",
        desc: "Deployed the platform with full functionality, fast load times, and mobile-friendly experience. Tested user flows and editing tools thoroughly."
      }
    ]
  }
];

const uiUxProjects = [
  {
    id: 4,
    title: "KindLift",
    description:
      "Smooth, animated donation platform that simplifies giving and showcases impact through engaging scroll-based interactions. " +
      "Designed to work seamlessly across all devices, it offers a clean UI with intuitive donation flow. " +
      "Built to create an emotional connection with donors while ensuring accessibility and responsive layouts.",
    image: P2,
    projectLink: "https://lnkd.in/p/dvJqj9HJ",
    githubLink: "https://github.com/CodeWithPratik-777/kindlift",
    journey: [
      {
        title: "Concept & Research",
        desc: "Conceptualized a simple and emotional donation platform to increase engagement. Analyzed user experience for seamless donation flow."
      },
      {
        title: "Model Development",
        desc: "Developed core React components to handle donation interactions and animations. Focused on efficient rendering and smooth scroll-based effects."
      },
      {
        title: "Frontend Design",
        desc: "Designed a visually appealing and responsive layout using Tailwind CSS and Framer Motion. Ensured accessibility and mobile optimization."
      },
      {
        title: "Backend Integration",
        desc: "Integrated React frontend with backend APIs for tracking donations and user interactions. Ensured smooth communication and real-time updates."
      },
      {
        title: "Deployment",
        desc: "Deployed the website ensuring cross-device compatibility and fast load times. Tested scroll-triggered animations and UI responsiveness thoroughly."
      }
    ]
  },
  {
    id: 5,
    title: "Skylight",
    description:
      "Animated event schedule platform that highlights sessions, speakers, and timelines in a sleek and interactive way. " +
      "Smooth animations and readable layouts make it easy for users to explore events. " +
      "Built to engage users while maintaining fast load times and responsive performance across devices.",
    image: P3,
    projectLink: "https://lnkd.in/p/d84G6mtf",
    githubLink: "https://github.com/CodeWithPratik-777/skylight",
    journey: [
      {
        title: "Concept & Research",
        desc: "Planned an interactive schedule display for events and sessions. Studied event websites to optimize navigation and UX."
      },
      {
        title: "Model Development",
        desc: "Developed the React structure and integrated dynamic event components. Focused on efficient state management and data flow."
      },
      {
        title: "Frontend Design",
        desc: "Styled the website with Tailwind CSS and added smooth animations using Framer Motion. Enhanced readability and visual appeal."
      },
      {
        title: "Backend Integration",
        desc: "Connected frontend with event data APIs for real-time schedule updates. Ensured smooth data loading and error handling."
      },
      {
        title: "Deployment",
        desc: "Deployed the website with optimized performance and cross-browser testing. Verified animations and responsiveness on all devices."
      }
    ]
  },
  {
    id: 6,
    title: "AlwaysBeyondMotion",
    description:
      "A visually striking website template featuring 3D animations and smooth scroll-triggered interactions. " +
      "Built for brands seeking an immersive and modern online presence. " +
      "Mobile-friendly and optimized for performance, delivering a premium experience.",
    image: P4,
    projectLink: "https://lnkd.in/p/dCub2C7z",
    journey: [
      {
        title: "Concept & Research",
        desc: "Anaylzed client needs for a modern, 3D-enabled website template. Studied interactive web design trends and competitor websites."
      },
      {
        title: "Model Development",
        desc: "Built React components and implemented dynamic animations with GSAP. Developed modular 3D visual elements for reusability."
      },
      {
        title: "Frontend Design",
        desc: "Designed the UI with Tailwind CSS, ensuring smooth scroll-triggered animations and responsive layout. Focused on user engagement."
      },
      {
        title: "Backend Integration",
        desc: "Implemented Node.js routing to handle page requests and future backend content. Ensured smooth integration between frontend and backend functionality."
      },
      {
        title: "Deployment",
        desc: "Launched the site with optimized performance, fast loading, and interactive 3D visuals. Delivered a polished and professional experience."
      }
    ]
  }
];

export default function PremiumGallery() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewJourney, setViewJourney] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setViewJourney(false);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const renderProjectGrid = (projectList) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectList.map((project) => (
        <div
          key={project.id}
          className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer bg-black border border-zinc-900 hover:border-zinc-800 transition duration-300"
          onClick={() => openModal(project)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-60 object-cover opacity-90 group-hover:opacity-100 transition duration-300"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center backdrop-blur-xs">
            <button className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-xl font-bold hover:bg-zinc-200 transition text-sm shadow-xl">
              <IoOpenOutline className="text-base stroke-[3]" /> View Project
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full space-y-16">
      
      {/* Category Section 1: Major Engineering */}
      <section className="space-y-6">
        <div className="flex flex-col gap-1 border-l-4 border-white pl-4">
          <h3 className="text-xl font-black tracking-tight text-white uppercase">Major Engineering Projects</h3>
          <p className="text-zinc-400 text-sm">Full-Stack Intelligence Platforms & Machine Learning Systems</p>
        </div>
        {renderProjectGrid(majorProjects)}
      </section>

      {/* Category Section 2: UI/UX Development */}
      <section className="space-y-6">
        <div className="flex flex-col gap-1 border-l-4 border-zinc-500 pl-4">
          <h3 className="text-xl font-black tracking-tight text-white uppercase">UI/UX & Interactive Design</h3>
          <p className="text-zinc-400 text-sm">Motion Design, Component Micro-Interactions, and Immersive Interfaces</p>
        </div>
        {renderProjectGrid(uiUxProjects)}
      </section>

      {/* Shared Interactive Modal Engine Container */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative w-full max-w-3xl bg-zinc-950 text-white rounded-2xl shadow-2xl border border-zinc-900 flex flex-col max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 25 } }}
              exit={{ scale: 0.95, opacity: 0, transition: { duration: 0.15 } }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-3xl text-zinc-400 hover:text-white transition z-10 cursor-pointer"
                onClick={closeModal}
              >
                <IoIosCloseCircle />
              </button>

              {!viewJourney ? (
                <div className="p-6 flex flex-col gap-4 overflow-y-auto">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full rounded-xl mb-2 object-cover max-h-[40vh] border border-zinc-900"
                  />
                  <h2 className="text-2xl font-black tracking-wide text-white">{selectedProject.title}</h2>
                  <p className="text-zinc-400 text-sm leading-relaxed font-medium">{selectedProject.description}</p>

                  <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-zinc-900">
                    {selectedProject.projectLink && selectedProject.projectLink !== "#" && (
                      <a
                        href={selectedProject.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black px-5 py-2.5 rounded-xl font-bold hover:bg-zinc-200 transition flex items-center gap-2 text-xs uppercase tracking-wider shadow-lg"
                      >
                        <IoOpenOutline className="stroke-[3]" /> Explore Project
                      </a>
                    )}
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-zinc-900 text-white border border-zinc-800 px-5 py-2.5 rounded-xl font-bold hover:bg-zinc-800 transition flex items-center gap-2 text-xs uppercase tracking-wider"
                      >
                        <IoOpenOutline className="stroke-[3]" /> Source Code
                      </a>
                    )}
                    {selectedProject.journey && (
                      <button
                        onClick={() => setViewJourney(true)}
                        className="bg-zinc-900 text-zinc-300 border border-zinc-800 hover:text-white px-5 py-2.5 rounded-xl font-bold hover:bg-zinc-800 transition flex items-center gap-2 text-xs uppercase tracking-wider cursor-pointer"
                      >
                        <IoOpenOutline className="stroke-[3]" /> View Journey
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="p-6 overflow-y-auto flex flex-col gap-4 max-h-[85vh]">
                  <h2 className="text-xl font-black uppercase tracking-wider mb-4 border-b border-zinc-900 pb-3 text-zinc-200">
                    Project Architecture Journey
                  </h2>
                  
                  <div className="space-y-4 overflow-y-auto pr-1">
                    {selectedProject.journey.map((step, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 border border-zinc-900 p-5 rounded-xl bg-zinc-950/50 hover:border-zinc-800 transition duration-300"
                      >
                        <div className="flex-shrink-0 mt-0.5">{iconMap[step.title] || <FaLightbulb className="text-zinc-500 text-xl" />}</div>
                        <div className="space-y-1">
                          <h3 className="text-sm font-bold uppercase tracking-wider text-white">{step.title}</h3>
                          <p className="text-zinc-400 text-sm leading-relaxed font-medium">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-zinc-900 flex justify-end">
                    <button
                      onClick={() => setViewJourney(false)}
                      className="bg-white text-black px-6 py-2.5 rounded-xl font-bold hover:bg-zinc-200 transition text-xs uppercase tracking-wider cursor-pointer shadow-lg"
                    >
                      Back To Details
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}