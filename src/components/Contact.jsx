import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import ScrollAnimation from "./ScrollAnimation";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [messageLength, setMessageLength] = useState(0);

  const sanitizeInput = (value) => {
    if (!value) return "";
    const temp = document.createElement("div");
    temp.textContent = value;
    return temp.innerHTML.trim();
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isUserBlocked = () => {
    const data = JSON.parse(localStorage.getItem("contactSpamData")) || null;
    if (!data) return false;

    const currentTime = Date.now();
    const timeDiff = currentTime - data.lastSentTime;

    if (timeDiff > 24 * 60 * 60 * 1000) {
      localStorage.removeItem("contactSpamData");
      return false;
    }

    return data.sentCount >= 3;
  };

  const updateUserSpamData = () => {
    const currentTime = Date.now();
    const data = JSON.parse(localStorage.getItem("contactSpamData")) || {
      sentCount: 0,
      lastSentTime: currentTime,
    };

    const timeDiff = currentTime - data.lastSentTime;

    if (timeDiff > 24 * 60 * 60 * 1000) {
      data.sentCount = 1;
      data.lastSentTime = currentTime;
    } else {
      data.sentCount += 1;
      data.lastSentTime = currentTime;
    }

    localStorage.setItem("contactSpamData", JSON.stringify(data));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (isUserBlocked()) {
      toast.error("You’ve reached today’s limit. Try again in 24 hours.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        theme: "dark",
      });
      return;
    }

    const formData = new FormData(form.current);
    const name = sanitizeInput(formData.get("name"));
    const email = sanitizeInput(formData.get("email"));
    const message = sanitizeInput(formData.get("message"));

    // 1. Validation for Empty Fields
    if (!name || !email || !message) {
      toast.error("Please fill in all fields before sending.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        theme: "dark",
      });
      return;
    }

    // 2. Format Validation for Email
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        theme: "dark",
      });
      return;
    }

    // 3. Size Validation for Message (Max 1000)
    if (message.length > 1000) {
      toast.error("Message is too big! Please keep it under 1000 characters.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        theme: "dark",
      });
      return;
    }

    // 4. Size Validation for Name (Max 50)
    if (name.length > 50) {
      toast.error("Name must be under 50 characters.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        theme: "dark",
      });
      return;
    }

    setIsSending(true);

    emailjs
      .send(
        "service_928jxdv",
        "template_eu7itka",
        { name, email, message },
        "szgSGIt4zo7nB1Ikz"
      )
      .then(
        () => {
          toast.success("Email sent successfully!", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: true,
            theme: "dark",
          });
          form.current.reset();
          setMessageLength(0);
          updateSpamData();
        },
        (error) => {
          console.error("EmailJS Error details:", error);
          toast.error("Error sending email. Please try again later.", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: true,
            theme: "dark",
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={4000} hideProgressBar={true} theme="dark" />
      
      <div className="container mx-auto w-[90%] max-w-6xl py-16 space-y-16" id="contact">
        
        {/* Modern Title Display Layer */}
        <h2 className="flex items-center justify-center font-black relative tracking-tight select-none">
          <span className="text-7xl md:text-8xl opacity-[0.04] tracking-widest text-white uppercase">
            Contact
          </span>
          <ScrollAnimation>
            <span className="absolute bg-transparent text-3xl md:text-4xl font-extrabold text-white tracking-wider z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
              GET IN TOUCH
            </span>
          </ScrollAnimation>
        </h2>

        {/* Form and Info Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
          
          {/* Left Block: Communication Channel Meta info */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-white tracking-wide uppercase">
                Don't be shy !
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>

            {/* Structured Minimal Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-zinc-950/40 border border-zinc-900 backdrop-blur-sm rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <CiMail className="text-white text-xl stroke-[0.5]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-zinc-500">Mail Me</span>
                  <p className="text-sm md:text-base text-zinc-200 font-medium font-mono">pratik.777.mane@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-zinc-950/40 border border-zinc-900 backdrop-blur-sm rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <IoIosCall className="text-white text-xl" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-zinc-500">Call Me</span>
                  <p className="text-sm md:text-base text-zinc-200 font-medium font-mono">+91 9156833296</p>
                </div>
              </div>
            </div>

            {/* Social Anchor Channels */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://github.com/CodeWithPratik-777/" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-950 hover:bg-white border border-zinc-800 hover:border-white text-white hover:text-black flex items-center justify-center transition-all duration-300 shadow-md group"
              >
                <IoLogoGithub className="text-xl" />
              </a>
              <a 
                href="https://www.linkedin.com/in/pratik-mane-dev/" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-950 hover:bg-white border border-zinc-800 hover:border-white text-white hover:text-black flex items-center justify-center transition-all duration-300 shadow-md group"
              >
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>

          {/* Right Block: Core Interactive Email Form */}
          <div className="lg:col-span-7">
            <form onSubmit={sendEmail} ref={form} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <input
                    type="text"
                    name="name"
                    maxLength={50}
                    autoComplete="off"
                    placeholder="YOUR NAME"
                    required
                    className="w-full px-5 py-3.5 outline-none bg-zinc-950/40 text-white font-semibold text-sm rounded-xl border border-zinc-900 focus:border-zinc-700 focus:ring-1 focus:ring-zinc-800 backdrop-blur-sm transition duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <input
                    type="email"
                    name="email"
                    autoComplete="off"
                    placeholder="YOUR EMAIL"
                    required
                    className="w-full px-5 py-3.5 outline-none bg-zinc-950/40 text-white font-semibold text-sm rounded-xl border border-zinc-900 focus:border-zinc-700 focus:ring-1 focus:ring-zinc-800 backdrop-blur-sm transition duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2 relative">
                <textarea
                  name="message"
                  rows="7"
                  maxLength={1000}
                  placeholder="YOUR MESSAGE"
                  required
                  onChange={(e) => setMessageLength(e.target.value.length)}
                  className="w-full p-5 outline-none bg-zinc-950/40 text-white font-semibold text-sm rounded-xl border border-zinc-900 focus:border-zinc-700 focus:ring-1 focus:ring-zinc-800 backdrop-blur-sm resize-none transition duration-300"
                />
                <div className="text-right text-xs text-zinc-500 font-mono pr-2 mt-1">
                  {messageLength} / 1000 characters
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full sm:w-48 py-3 rounded-xl font-bold tracking-wider text-xs uppercase transition-all duration-300 border
                    ${
                      isSending
                        ? "bg-zinc-800 text-zinc-500 border-zinc-900 cursor-not-allowed opacity-60"
                        : "bg-white text-black border-white hover:bg-zinc-200 shadow-md hover:shadow-xl cursor-pointer"
                    }`}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}