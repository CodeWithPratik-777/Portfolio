import React from 'react';
import { IoBriefcaseSharp } from "react-icons/io5";
import { HiAcademicCap } from "react-icons/hi2";

export default function EducationAndExperience() {
  return (
    <div className="container mx-auto w-[90%] max-w-6xl py-16 space-y-16" id="timeline">

      {/* Dynamic Header Section Accent */}
      <div className="flex flex-col gap-2 border-l-4 border-white pl-4">
        <h2 className="text-2xl font-black tracking-tight text-white uppercase">Experience & Education</h2>
        <p className="text-zinc-400 text-sm">A professional chronological trace of my engineering and academic journey</p>
      </div>

      {/* Modern Two-Column Timeline Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-start">

        {/* =====================================================
           COLUMN 1: PROFESSIONAL EXPERIENCE TIMELINE
        ===================================================== */}
        <div className="space-y-8 relative before:absolute before:top-4 before:bottom-0 before:left-6 before:w-[1px] before:bg-zinc-800">

          {/* Card 1: Tron Softech */}
          <div className="relative pl-14 group">
            {/* Timeline Icon Anchor Tag */}
            <div className="absolute top-0 left-2 w-9 h-9 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-500 transition duration-300 shadow-xl z-10">
              <IoBriefcaseSharp className="text-white text-base" />
            </div>

            {/* Context Detail Box */}
            <div className="p-6 bg-zinc-950/40 border border-zinc-900 backdrop-blur-sm rounded-2xl space-y-3 hover:border-zinc-800 transition duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs font-semibold bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Duration - 1+ Months
                </span>
                <a
                  href="https://www.tronsoftech.com/website/index.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-zinc-400 hover:text-white underline inline-flex items-center gap-1 transition"
                >
                  Visit Website
                </a>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white">
                  Tron Softech <span className="text-zinc-400 font-medium text-base">| Internship</span>
                </h4>
                <p className="text-zinc-400 text-sm font-medium mt-0.5">App & Web Development</p>
              </div>

              <ul className="text-zinc-400 text-xs sm:text-sm space-y-2 list-disc pl-4 leading-relaxed font-medium">
                <li>Built 2+ mobile applications using Android Studio alongside 5+ scalable frontend web modules.</li>
                <li>Actively tested and debugged software profiles, reducing critical execution issues by 30% for over 50 users.</li>
              </ul>
            </div>
          </div>

          {/* Card 2: PlantWellness Group Project */}
          <div className="relative pl-14 group">
            <div className="absolute top-0 left-2 w-9 h-9 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-500 transition duration-300 shadow-xl z-10">
              <IoBriefcaseSharp className="text-white text-base" />
            </div>

            <div className="p-6 bg-zinc-950/40 border border-zinc-900 backdrop-blur-sm rounded-2xl space-y-3 hover:border-zinc-800 transition duration-300">
              <div>
                <span className="font-mono text-xs font-semibold bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Duration - 1+ Years
                </span>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white">
                  PlantWellness <span className="text-zinc-400 font-medium text-base">| Group Architecture</span>
                </h4>
                <p className="text-zinc-400 text-sm font-medium mt-0.5">AI-Powered Agriculture Platform</p>
              </div>

              <ul className="text-zinc-400 text-xs sm:text-sm space-y-2 list-disc pl-4 leading-relaxed font-medium">
                <li>Trained 25 custom CNN and Scikit-learn models to instantly detect diseases across different plant profiles and recommend treatments.</li>
                <li>Integrated secondary features including an agricultural AI Q&A, real-time weather analytics, soil composition checks, and automated SMS alerts.</li>
              </ul>
            </div>
          </div>

        </div>

        {/* =====================================================
           COLUMN 2: ACADEMIC EDUCATION TIMELINE
        ===================================================== */}
        <div className="space-y-8 relative before:absolute before:top-4 before:bottom-0 before:left-6 before:w-[1px] before:bg-zinc-800">

          {/* Degree 1: MIT ADT University */}
          <div className="relative pl-14 group">
            <div className="absolute top-0 left-2 w-9 h-9 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-500 transition duration-300 shadow-xl z-10">
              <HiAcademicCap className="text-white text-lg" />
            </div>

            <div className="p-6 bg-zinc-950/40 border border-zinc-900 backdrop-blur-sm rounded-2xl space-y-2 hover:border-zinc-800 transition duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs font-semibold bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded-md uppercase tracking-wider">
                  2028 Expected
                </span>
                <a
                  href="https://mituniversity.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-zinc-400 hover:text-white underline transition"
                >
                  MIT ADT University
                </a>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white uppercase tracking-wide">Bachelor of Technology</h4>
                <p className="text-zinc-400 text-sm font-medium mt-0.5">Computer Science & Engineering – AI Specialization</p>
              </div>
            </div>
          </div>

          {/* Degree 2: JSPM Polytechnic */}
          <div className="relative pl-14 group">
            <div className="absolute top-0 left-2 w-9 h-9 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-500 transition duration-300 shadow-xl z-10">
              <HiAcademicCap className="text-white text-lg" />
            </div>

            <div className="p-6 bg-zinc-950/40 border border-zinc-900 backdrop-blur-sm rounded-2xl space-y-2 hover:border-zinc-800 transition duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs font-semibold bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded-md uppercase tracking-wider">
                  2025
                </span>
                <a
                  href="https://jspmjscoe.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-zinc-400 hover:text-white underline transition"
                >
                  JSPM’s Jayawantrao Sawant Polytechnic
                </a>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white uppercase tracking-wide">Higher Secondary Certificate</h4>
                <p className="text-zinc-400 text-sm font-medium mt-0.5">Diploma in Information Technology</p>
              </div>
            </div>
          </div>

          {/* Degree 3: Jijamata Vidyalaya */}
          <div className="relative pl-14 group">
            <div className="absolute top-0 left-2 w-9 h-9 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-500 transition duration-300 shadow-xl z-10">
              <HiAcademicCap className="text-white text-lg" />
            </div>

            <div className="p-6 bg-zinc-950/40 border border-zinc-900 backdrop-blur-sm rounded-2xl space-y-2 hover:border-zinc-800 transition duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs font-semibold bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded-md uppercase tracking-wider">
                  2022
                </span>
                <a
                  href="https://bcud.unipune.ac.in/utilities/college_search/CAAP020190_ENG/Pune_University_College"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-zinc-400 hover:text-white underline transition"
                >
                  Jijamata Vidyalaya, Sarati
                </a>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white uppercase tracking-wide">School Secondary Certificate</h4>
                <p className="text-zinc-400 text-sm font-medium mt-0.5">General Education Curriculum (Grades 1-10)</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}