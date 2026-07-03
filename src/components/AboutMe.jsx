import React from 'react';
import ProfileImg from "../assets/profile.jpg";
import ScrollAnimation from './ScrollAnimation';

const PortfolioPdf = 'https://codewithpratik-777.github.io/Portfolio/Pratik_Mane_CV.pdf';

export default function AboutMe() {

    const calculateExactAge = () => {
        const today = new Date();
        const birthDate = new Date(2005, 6, 14); 
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const downloadCV = (url) => {
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', fileName);
        aTag.setAttribute('target', '_blank');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    };

    return (
        <div className="container mx-auto w-[90%] max-w-6xl py-16 space-y-16" id="about">
            
            {/* Header section with minimal tracking layer */}
            <h2 className="flex items-center justify-center font-black relative tracking-tight">
                <span className="text-7xl md:text-8xl opacity-[0.04] tracking-widest text-white select-none uppercase">
                    Resume
                </span>
                <ScrollAnimation>
                    <span className="absolute bg-transparent text-3xl md:text-4xl font-extrabold text-white tracking-wider z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                        ABOUT ME
                    </span>
                </ScrollAnimation>
            </h2>

            {/* Split Grid Configuration Core */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4">
                
                {/* Profile Ingestion Wrapper Column */}
                <div className="lg:col-span-4 flex justify-center">
                    <div className="relative p-2 rounded-full bg-gradient-to-b from-zinc-800 to-zinc-950 border border-zinc-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group">
                        <img 
                            src={ProfileImg} 
                            alt="Profile" 
                            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover object-top filter grayscale group-hover:grayscale-0 transition duration-500" 
                            loading="lazy" 
                        />
                    </div>
                </div>

                {/* Info Text Metadata Block Columns */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="border-l-4 border-white pl-4 mb-4">
                        <h3 className="text-xl font-bold tracking-widest text-white uppercase">Personal Info</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm md:text-base">
                        <div className="space-y-3 font-medium text-zinc-400">
                            <p className="flex justify-between border-b border-zinc-900/60 pb-2">
                                <span className="text-zinc-500">First Name:</span> <span className="text-zinc-200">Pratik</span>
                            </p>
                            <p className="flex justify-between border-b border-zinc-900/60 pb-2">
                                <span className="text-zinc-500">Last Name:</span> <span className="text-zinc-200">Mane</span>
                            </p>
                            <p className="flex justify-between border-b border-zinc-900/60 pb-2">
                                <span className="text-zinc-500">Age:</span> <span className="text-zinc-200 font-mono">{calculateExactAge()} Years</span>
                            </p>
                            <p className="flex justify-between border-b border-zinc-900/60 pb-2">
                                <span className="text-zinc-500">Nationality:</span> <span className="text-zinc-200">Indian</span>
                            </p>
                        </div>

                        <div className="space-y-3 font-medium text-zinc-400">
                            <p className="flex justify-between border-b border-zinc-900/60 pb-2">
                                <span className="text-zinc-500">Address:</span> <span className="text-zinc-200">Pune, India</span>
                            </p>
                            <p className="flex justify-between border-b border-zinc-900/60 pb-2">
                                <span className="text-zinc-500">Email:</span> <span className="text-zinc-200 break-all pl-2 text-right">pratik.777.mane@gmail.com</span>
                            </p>
                            <p className="flex justify-between border-b border-zinc-900/60 pb-2">
                                <span className="text-zinc-500">Languages:</span> <span className="text-zinc-200 text-right">English, Hindi, Marathi</span>
                            </p>
                        </div>
                    </div>

                    <div className="pt-4 flex justify-center sm:justify-start">
                        <button
                          onClick={() => downloadCV(PortfolioPdf)}
                          className="px-8 py-3 bg-zinc-950 hover:bg-white text-zinc-300 hover:text-black font-semibold tracking-wider text-xs uppercase rounded-xl border border-zinc-800 hover:border-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
                        >
                            Download CV
                        </button>
                    </div>
                </div>
            </div>

            {/* Micro-Metrics Metric Grid Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                {[
                    { value: '1+', text: 'Years of group projects experience' },
                    { value: '6+', text: "Months of industry experience" },
                    { value: '5+', text: 'Project works completed' },
                    { value: '10+', text: "Skills and active hobbies" },
                    { value: '2+', text: 'Completed courses & training' },
                    { value: '3+', text: 'Awards and achievements won' }
                ].map((card, idx) => (
                    <div 
                        key={idx} 
                        className="p-6 bg-zinc-950/40 border border-zinc-900 backdrop-blur-sm rounded-2xl flex flex-col justify-between group hover:border-zinc-800 transition duration-300"
                    >
                        <div className="text-3xl font-black text-white tracking-tight font-mono">
                            {card.value}
                        </div>
                        <div className="flex items-center gap-3 mt-4">
                            <span className="w-6 h-[1px] bg-zinc-700 block flex-shrink-0 group-hover:w-8 group-hover:bg-white transition-all duration-300" />
                            <p className="text-xs uppercase tracking-wider font-semibold text-zinc-400 group-hover:text-zinc-200 transition duration-300 leading-relaxed">
                                {card.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}