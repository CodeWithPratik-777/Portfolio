import React, { useMemo, useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Generates organic stellar points and micro-asteroids with natural variations
  const spaceElements = useMemo(() => {
    const starCount = isSmallScreen ? 15 : 35;
    const rockCount = isSmallScreen ? 2 : 5;

    const stars = Array.from({ length: starCount }).map(() => ({
      type: "star",
      size: Math.random() * 1.5 + 0.5,
      xPos: Math.random() * 100,
      yPos: Math.random() * 75,
      duration: 4 + Math.random() * 4, // Balanced speed variables for real star twinkling physics
      delay: Math.random() * -5,
    }));

    const rocks = Array.from({ length: rockCount }).map(() => ({
      type: "rock",
      size: Math.random() * 3 + 2,
      xPos: Math.random() * 100,
      yPos: Math.random() * 60,
      duration: 25 + Math.random() * 20, // Slow, weighted drift rates
      delay: Math.random() * -15,
      rotation: Math.random() * 360
    }));

    return [...stars, ...rocks];
  }, [isSmallScreen]);

  return (
    <>
      <div className="relative min-h-screen w-full bg-[#030305] flex items-center justify-start px-6 sm:px-16 md:px-24 lg:px-32 overflow-hidden select-none">

        {/* =====================================================
           CINEMATIC DEEP SKY BACKGROUND ENGINE
        ===================================================== */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">

          {/* Subtle Ambient Soft Corona Backdrop */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150vw] sm:w-[120vw] md:w-[90vw] lg:w-[70vw] h-[40vh] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,rgba(244,244,245,0.01)_50%,transparent_80%)] blur-[90px] md:blur-[130px] translate-y-[15%] z-0" />

          {/* Natural Atmospheric Elements Render Block */}
          <div className="absolute inset-0 z-10">
            {spaceElements.map((element, i) => {
              if (element.type === "star") {
                return (
                  <span
                    key={i}
                    className="absolute bg-zinc-400 rounded-full will-change-transform animate-stellar-twinkle"
                    style={{
                      top: `${element.yPos}%`,
                      left: `${element.xPos}%`,
                      width: `${element.size}px`,
                      height: `${element.size}px`,
                      animationDuration: `${element.duration}s`,
                      animationDelay: `${element.delay}s`,
                    }}
                  />
                );
              } else {
                return (
                  <svg
                    key={i}
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute text-zinc-800/40 opacity-50 will-change-transform animate-asteroid-drift"
                    style={{
                      top: `${element.yPos}%`,
                      left: `${element.xPos}%`,
                      width: `${element.size}px`,
                      height: `${element.size}px`,
                      transform: `rotate(${element.rotation}deg)`,
                      animationDuration: `${element.duration}s`,
                      animationDelay: `${element.delay}s`,
                    }}
                  >
                    <path d="M12 2L19 5L22 11L17 19L9 22L3 17L2 9L7 3L12 2Z" fill="currentColor" />
                  </svg>
                );
              }
            })}
          </div>

          {/* =====================================================
             LAYER 4: DETAILED GEOMETRIC HORIZON (PLANET/MOON)
          ===================================================== */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[170vw] sm:w-[130vw] md:w-[90vw] lg:w-[70vw] aspect-square rounded-full bg-[#050508] border-t border-zinc-500/30 shadow-[0_-30px_100px_rgba(255,255,255,0.08),0_-10px_35px_rgba(244,244,245,0.04)] z-10 overflow-hidden animate-moon-rise">

            {/* Organic Organic Surface Maps (Craters, Ridges, Topography) */}
            <div className="w-full h-full rounded-full opacity-35 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03)_0%,transparent_40%)] relative">

              {/* Surface Crater Matrix Detail 1 */}
              <div className="absolute top-[3%] left-[45%] w-8 h-4 rounded-full border border-zinc-800/40 bg-zinc-950/40 blur-[0.5px] transform -rotate-12" />
              <div className="absolute top-[4.5%] left-[47%] w-2 h-1 bg-zinc-700/20 rounded-full" />

              {/* Surface Crater Matrix Detail 2 (Micro Surface Patch) */}
              <div className="absolute top-[2%] left-[30%] w-12 h-5 rounded-full border border-zinc-900/50 bg-zinc-950/30 blur-[1px]" />

              {/* Surface Crater Matrix Detail 3 (Structural Fracture Line) */}
              <div className="absolute top-[1.5%] left-[58%] w-6 h-3 rounded-full border border-zinc-800/40 bg-zinc-950/40 blur-[0.5px] transform rotate-15" />

              {/* Ray Trace Vector Highlights */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-400/20 to-transparent" />
            </div>
          </div>

        </div>

        {/* =====================================================
           EDITORIAL LEFT-ALIGNED MAIN INTERFACE TYPOGRAPHY
        ===================================================== */}
        <div className="w-full max-w-4xl relative z-20 flex flex-col items-start text-left space-y-6 animate-page-reveal bg-transparent">

          <div className="space-y-2 w-full bg-transparent">
            <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-500 bg-transparent">
              Hi there, I'm
            </h3>
            <div className="overflow-hidden py-1 bg-transparent">
              <h1 className="font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500 leading-tight uppercase select-none drop-shadow-[0_20px_25px_rgba(0,0,0,0.95)]">
                Pratik Mane
              </h1>
            </div>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-zinc-400 max-w-xl font-medium leading-relaxed tracking-wide bg-transparent">
            Building modern full-stack web applications, developing intelligent AI solutions, and solving real-world problems with  {" "}
            <span className="text-white font-semibold font-mono border-b border-zinc-800 pb-0.5 inline-block min-w-[130px] sm:min-w-[160px] md:min-w-[190px] text-left select-all bg-transparent">
              <Typewriter
                words={[
                  "Web Development",
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Deep Learning",
                  "Database Management",
                  "...and more",
                ]}
                loop={0}
                cursor
                cursorStyle="▊"
                typeSpeed={50}
                deleteSpeed={35}
                delaySpeed={2000}
              />
            </span>
          </p>

          <div className="pt-2 w-full sm:w-auto bg-transparent">
            <a
              href="#about"
              className="px-6 py-3.5 bg-[#0a0a0f]/40 hover:bg-white text-zinc-400 hover:text-black font-bold tracking-wider text-[11px] uppercase rounded-xl border border-zinc-900 hover:border-white transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl backdrop-blur-xs"
            >
              Explore Portfolio
              <span className="font-sans transition-transform duration-300 group-hover:translate-y-0.5 text-xs bg-transparent">
                ↓
              </span>
            </a>
          </div>

        </div>
      </div>

      {/* =====================================================
         HIGH-PERFORMANCE PERFORMANCE TRANSITIONS
      ===================================================== */}
      <style>{`
        /* Smooth, linear horizontal astrophotography twinkling keyframes */
        @keyframes stableTwinkle {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.55; }
        }

        /* Micro-drifting flight vectors for asteroidal dust nodes */
        @keyframes dynamicRockDrift {
          0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          100% { transform: translateY(-50px) translateX(25px) rotate(45deg); }
        }

        /* Structured deep fluid rise curve execution */
        @keyframes moonRiseTransition {
          0% {
            transform: translate(-50%, 115%);
          }
          100% {
            transform: translate(-50%, 82%);
          }
        }
        
        /* Clean fade opacity interpolation step */
        @keyframes typographyEntrance {
          0% {
            opacity: 0;
            transform: translateY(14px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-stellar-twinkle {
          animation: stableTwinkle ease-in-out infinite alternate;
        }

        .animate-asteroid-drift {
          animation: dynamicRockDrift linear infinite;
        }

        .animate-moon-rise {
          animation: moonRiseTransition 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-page-reveal {
          opacity: 0;
          animation: typographyEntrance 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.7s forwards;
        }
      `}</style>
    </>
  );
}