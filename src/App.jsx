import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, X, Menu, ArrowUpRight, Code2, Globe, Github, 
  Linkedin, Mail, MapPin, Sparkles, User, Terminal, Laptop
} from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBioOpen, setIsBioOpen] = useState(false);

  const formspreeEndpoint = "https://formspree.io/f/meaogrrl";

  // Preloader Counter Animation (0 -> 100)
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + 2;
      });
    }, 25);
    return () => clearInterval(timer);
  }, []);

  const projects = [
    {
      title: 'Online Study Portal',
      category: 'EdTech / Web Application',
      desc: 'A comprehensive study portal built for students to access study notes, subject materials, and learning resources seamlessly.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      github: "https://github.com/abhishekpratap123-cell/MYPORTAL",
      demo: "https://abhishekpratap123-cell.github.io/MYPORTAL/"
    },
    {
      title: 'Vivvan Electricals',
      category: 'Commercial Business Web',
      desc: 'A modern commercial business platform created for Vivvan Electricals to showcase services and product catalog.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
      github: "https://github.com/abhishekpratap123-cell/vivaan-electrical",
      demo: "https://abhishekpratap123-cell.github.io/vivaan-electrical/"
    },
    {
      title: 'Interactive Quiz App',
      category: 'Dynamic Web App',
      desc: 'A dynamic web quiz application featuring real-time multiple-choice questions, interactive UI, and instant evaluation.',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      github: "https://github.com/abhishekpratap123-cell/QUIZ",
      demo: "https://abhishekpratap123-cell.github.io/QUIZ/"
    }
  ];

  const timeline = [
    {
      period: '2023 — PRESENT',
      role: 'BCA Undergrad & Web Developer',
      type: 'ACADEMICS & PROJECTS',
      desc: 'Pursuing Bachelor of Computer Applications (3rd Year). Building modern web applications using HTML, CSS, JavaScript, React, and C++.'
    },
    {
      period: '2024 — PRESENT',
      role: 'Frontend & CS Practitioner',
      type: 'SKILL DEVELOPMENT',
      desc: 'Focused on core Web Fundamentals, Object-Oriented Programming (OOPs), and Data Structures like Stacks & Queues.'
    }
  ];

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 bg-[#080808] flex flex-col items-center justify-center text-white font-mono">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-8xl md:text-9xl font-black tracking-tighter"
        >
          {counter}
        </motion.div>
        <div className="mt-8 text-xs tracking-widest uppercase text-red-500 font-bold border-t border-white/10 pt-4 px-6">
          ABHISHEK PRATAP
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] text-slate-100 font-sans relative selection:bg-red-600 selection:text-white overflow-x-hidden">
      
      {/* Background Radial Red Glow */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-red-600/15 blur-[160px] pointer-events-none rounded-full" />

      {/* Header / Nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-6 flex justify-between items-center backdrop-blur-md bg-[#080808]/60 border-b border-white/5">
        <a href="#home" className="text-xs font-mono tracking-widest text-slate-300 uppercase flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-600 inline-block animate-pulse" />
          SHAPING IDEAS INTO REALITY.
        </a>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsBioOpen(true)}
            className="hidden md:flex items-center gap-2 text-xs font-mono bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-red-600 transition duration-300"
          >
            <User size={14} /> Profile Bio
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-white/10 hover:bg-red-600 text-white font-mono text-xs px-5 py-2.5 rounded-full border border-white/10 transition duration-300 flex items-center gap-2"
          >
            MENU {isMenuOpen ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>
      </nav>

      {/* Side Slide Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-y-0 right-0 z-50 w-full md:w-[400px] bg-[#0d0d0d] border-l border-white/10 p-10 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <span className="font-mono text-xs text-red-500 uppercase tracking-widest">// NAVIGATION</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-white/10 rounded-full">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-6 font-mono text-3xl font-black">
              {['HOME', 'PHILOSOPHY', 'PROJECTS', 'EXPERIENCE', 'CONTACT'].map((item, idx) => (
                <a 
                  key={idx}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block hover:text-red-500 transition duration-200 tracking-tight"
                >
                  0{idx + 1}. {item}
                </a>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6 font-mono text-xs text-slate-400">
              <p>ABHISHEK PRATAP — BCA 3RD YEAR</p>
              <p className="mt-1 text-slate-500">Tailored Dark Aesthetic Portfolio</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-40 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-between relative">
        <div className="text-center my-auto">
          {/* Tagline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block border border-red-600/40 bg-red-600/10 text-red-400 font-mono text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-8"
          >
            CRAFTING DIGITAL EXPERIENCES THAT ENGAGE
          </motion.div>

          {/* Giant Typography (Video Inspired) */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-7xl sm:text-9xl md:text-[14rem] font-black uppercase tracking-tighter leading-none select-none text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-600"
          >
            ABHISHEK
          </motion.h1>

          <p className="max-w-xl mx-auto text-slate-400 text-sm md:text-base font-sans mt-8 leading-relaxed">
            Final year BCA student & web developer engineering clean, responsive, and visual web applications using HTML, CSS, JavaScript, React, and C++.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 font-mono text-xs">
            <a 
              href="#projects" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-full transition duration-300 shadow-xl shadow-red-600/25 flex items-center gap-2"
            >
              Explore Work <ArrowUpRight size={16} />
            </a>
            <button 
              onClick={() => setIsBioOpen(true)}
              className="bg-white/5 border border-white/10 hover:border-red-500 text-slate-200 px-8 py-3.5 rounded-full transition duration-300"
            >
              View Profile Bio
            </button>
          </div>
        </div>

        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 font-mono text-xs gap-4">
          <span>WEB DEVELOPER & COMPUTER SCIENCE UNDERGRAD</span>
          <span className="animate-bounce">SCROLL DOWN ↓</span>
        </div>
      </section>

      {/* Bio Modal */}
      <AnimatePresence>
        {isBioOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#111111] border border-red-600/40 rounded-3xl max-w-lg w-full p-8 relative shadow-2xl"
            >
              <button 
                onClick={() => setIsBioOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 rounded-full bg-white/5"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center font-black text-xl text-white shadow-lg shadow-red-600/30">
                  AP
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Abhishek Pratap</h3>
                  <p className="text-xs font-mono text-red-400">BCA 3rd Year Student</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm leading-relaxed mb-6">
                <p>
                  Hi! I am Abhishek Pratap, a passionate computer applications undergraduate focused on frontend design, web programming, and core computer science logic.
                </p>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl font-mono text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Degree:</span>
                    <span className="text-white font-bold">BCA (Final Year)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Focus:</span>
                    <span className="text-white font-bold">Web Development & C++</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Status:</span>
                    <span className="text-red-400 font-bold">Open to Opportunities</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setIsBioOpen(false)}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-mono font-bold py-3 rounded-xl transition text-xs"
              >
                CLOSE BIO
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* The Philosophy Section (Video Inspired Hands / Art Banner) */}
      <section id="philosophy" className="py-28 px-6 md:px-12 max-w-6xl mx-auto border-t border-white/10">
        <div className="text-center">
          <span className="font-mono text-xs text-red-500 uppercase tracking-widest">// THE PHILOSOPHY</span>
          <h2 className="text-4xl md:text-6xl font-black mt-3 mb-10 tracking-tight uppercase">
            CREATING WITH PURPOSE
          </h2>

          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-r from-red-950/40 via-black to-red-950/40 p-10 md:p-16 my-8">
            <div className="max-w-3xl mx-auto">
              <Sparkles className="w-10 h-10 text-red-500 mx-auto mb-6" />
              <p className="text-lg md:text-2xl font-light text-slate-200 leading-relaxed italic">
                "I believe great software is born at the intersection of engineering precision and clean user-centric design. Every line of code is an opportunity to create something that provides real value."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Projects Grid */}
      <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <span className="font-mono text-xs text-red-500 uppercase tracking-widest">// FEATURED WORK</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mt-2">
              Selected Projects
            </h2>
          </div>
          <p className="text-slate-400 font-mono text-xs max-w-xs">
            A showcasing of live web applications and study portals developed using modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 hover:border-red-600/50 transition duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="font-mono text-[10px] text-red-400 uppercase tracking-widest block mb-3">
                  {proj.category}
                </span>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-red-500 transition">{proj.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">{proj.desc}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="text-[11px] font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-full text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 font-mono text-xs pt-4 border-t border-white/5">
                  <a 
                    href={proj.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1 text-slate-400 hover:text-white transition"
                  >
                    <Code2 size={14} /> Code
                  </a>
                  <a 
                    href={proj.demo} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1 text-red-400 hover:text-red-300 transition font-bold ml-auto"
                  >
                    Live Demo <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience / Timeline Section */}
      <section id="experience" className="py-24 px-6 md:px-12 max-w-5xl mx-auto border-t border-white/10">
        <span className="font-mono text-xs text-red-500 uppercase tracking-widest">// JOURNEY</span>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mt-2 mb-16">
          Where I've Been
        </h2>

        <div className="space-y-8">
          {timeline.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-8 hover:border-red-600/40 transition flex flex-col md:flex-row gap-6 justify-between items-start"
            >
              <div className="font-mono text-xs text-red-500 min-w-[140px] pt-1">
                {item.period}
                <span className="block text-[10px] text-slate-500 mt-1">{item.type}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{item.role}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 px-6 md:px-12 max-w-6xl mx-auto border-t border-white/10">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-red-500 uppercase tracking-widest">// GET IN TOUCH</span>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight mt-3">
            Let's Create Something <br />
            <span className="text-red-600">Extraordinary</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          <div className="bg-[#0e0e0e] border border-white/10 rounded-3xl p-8 space-y-6 font-mono text-xs">
            <h3 className="text-lg font-bold font-sans text-white">Contact Details</h3>
            
            <div className="space-y-4 text-slate-300">
              <div className="flex items-center gap-3">
                <Mail className="text-red-500" size={16} />
                <span>abhishekpratap123.cell@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-red-500" size={16} />
                <span>India</span>
              </div>
              <div className="flex items-center gap-3">
                <Terminal className="text-red-500" size={16} />
                <span className="text-red-400">Status: Open to opportunities</span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex gap-4">
              <a href="https://github.com/abhishekpratap123-cell" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-xl hover:bg-red-600 transition">
                <Github size={18} />
              </a>
            </div>
          </div>

          <form action={formspreeEndpoint} method="POST" className="space-y-4 font-mono text-xs">
            <input 
              type="text" 
              name="name" 
              required 
              placeholder="YOUR NAME" 
              className="w-full bg-[#0e0e0e] border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-red-600 text-white" 
            />
            <input 
              type="email" 
              name="email" 
              required 
              placeholder="YOUR EMAIL" 
              className="w-full bg-[#0e0e0e] border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-red-600 text-white" 
            />
            <textarea 
              name="message" 
              rows="4" 
              required 
              placeholder="YOUR MESSAGE" 
              className="w-full bg-[#0e0e0e] border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-red-600 text-white" 
            />
            <button 
              type="submit" 
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-2xl transition flex items-center justify-center gap-2 text-xs uppercase tracking-widest shadow-lg shadow-red-600/30"
            >
              Send Message <Send size={14} />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center font-mono text-xs text-slate-600 border-t border-white/5">
        © {new Date().getFullYear()} ABHISHEK PRATAP — CRAFTED WITH PASSION.
      </footer>

    </div>
  );
}