import React from 'react';
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="absolute top-0 inset-x-0 w-full z-50 py-4 px-6 md:px-12 select-none">
      <nav className="container mx-auto max-w-5xl h-14 bg-zinc-950/30 border border-zinc-900/80 backdrop-blur-md rounded-2xl flex items-center justify-between px-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        
        {/* Left Side: Clean Typographic Monogram */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
          <p className="font-mono text-xs font-bold tracking-[0.25em] text-zinc-200 uppercase cursor-default">
            Pratik.M
          </p>
        </div>

        {/* Right Side: High-Contrast Social Action Anchors */}
        <div>
          <ul className="flex items-center gap-5 text-[11px] font-bold uppercase tracking-wider text-zinc-400">
            <li className="transition-colors duration-300 hover:text-white">
              <a
                href="https://www.linkedin.com/in/pratik-mane-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 cursor-pointer"
              >
                <FaLinkedin className="text-sm opacity-80" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </li>
            
            {/* Minimal Separation Line */}
            <span className="h-3 w-[1px] bg-zinc-800" />

            <li className="transition-colors duration-300 hover:text-white">
              <a
                href="https://github.com/CodeWithPratik-777/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 cursor-pointer"
              >
                <IoLogoGithub className="text-sm opacity-80" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </li>
          </ul>
        </div>

      </nav>
    </header>
  );
}