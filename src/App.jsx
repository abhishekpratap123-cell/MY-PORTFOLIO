import React, { useState, useEffect } from 'react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBioOpen, setIsBioOpen] = useState(false);

  const formspreeEndpoint = "https://formspree.io/f/meaogrrl";

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + 2;
      });
    }, 20);
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
      period: '2024 — PRESENT',
      role: 'BCA Undergrad & Web Developer',
      type: 'ACADEMICS & PROJECTS',
      desc: 'Pursuing Bachelor of Computer Applications. Building modern web applications using HTML, CSS, JavaScript, React, and C++.'
    },
    {
      period: '2025 — PRESENT',
      role: 'Frontend & CS Practitioner',
      type: 'SKILL DEVELOPMENT',
      desc: 'Focused on core Web Fundamentals, Object-Oriented Programming (OOPs), and Data Structures like Stacks & Queues.'
    }
  ];

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 bg-[#080808] flex flex-col items-center justify-center text-white font-mono">
        <div className="text-8xl md:text-9xl font-black tracking-tighter">
          {counter}
        </div>
        <div className="mt-8 text-xs tracking-widest uppercase text-red-500 font-bold border-t border-white/10 pt-4 px-6">
          ABHISHEK PRATAP
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] text-slate-100 font-sans relative selection:bg-red-600 selection:text-white overflow-x-hidden">
      
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/15 blur-[150px] pointer-events-none rounded-full" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-6 flex justify-between items-center backdrop-blur-md bg-[#080808]/60 border-b border-white/5">
        <a href="#home" className="text-xs font-mono tracking-widest text-slate-300 uppercase flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-600 inline-block animate-pulse" />
          SHAPING IDEAS INTO REALITY
        </a>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsBioOpen(true)}
            className="hidden md:flex items-center gap-2 text-xs font-mono bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-red-600 transition duration-300"
          >
            Profile Bio
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-white/10 hover:bg-red-600 text-white font-mono text-xs px-5 py-2.5 rounded-full border border-white/10 transition duration-300"
          >
            MENU {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Drawer Menu */}
      <div className={`fixed inset-y-0 right-0 z-50 w-full md:w-[380px] bg-[#0d0d0d] border-l border-white/10 p-10 flex flex-col justify-between transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center">
          <span className="font-mono text-xs text-red-500 uppercase tracking-widest">// NAVIGATION</span>
          <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-white/10 rounded-full text-lg">
            ✕
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
          <p>ABHISHEK PRATAP — BCA UNDERGRAD</p>
          <p className="mt-1 text-slate-500">Tailored Dark Aesthetic Portfolio</p>
        </div>
      </div>

      {/* Hero Section with Embedded Background Photo */}
      <section id="home" className="min-h-screen pt-40 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-between relative overflow-hidden">
        
        {/* Background Photo Display Behind Typography */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
          <img 
            src="https://i.ibb.co/L5hYfT3/1000077793.png" 
            alt="Abhishek Pratap Workspace" 
            className="w-full h-full object-cover grayscale contrast-125 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-[#080808]" />
        </div>

        <div className="text-center my-auto relative z-10">
          <div className="inline-block border border-red-600/40 bg-red-600/10 text-red-400 font-mono text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-8">
            CRAFTING DIGITAL EXPERIENCES THAT ENGAGE
          </div>

          <h1 className="text-7xl sm:text-9xl md:text-[13rem] font-black uppercase tracking-tighter leading-none select-none text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-600">
            ABHISHEK
          </h1>

          <p className="max-w-xl mx-auto text-slate-300 text-sm md:text-base font-sans mt-8 leading-relaxed bg-black/50 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl">
            BCA student & web developer engineering clean, responsive, and visual web applications using HTML, CSS, JavaScript, React, and C++.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 font-mono text-xs">
            <a 
              href="#projects" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-full transition duration-300 shadow-xl shadow-red-600/25"
            >
              Explore Work ↗
            </a>
            <button 
              onClick={() => setIsBioOpen(true)}
              className="bg-white/10 border border-white/20 hover:border-red-500 text-slate-200 px-8 py-3.5 rounded-full transition duration-300 backdrop-blur-md"
            >
              View Profile Bio
            </button>
          </div>
        </div>

        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-slate-400 font-mono text-xs gap-4 relative z-10">
          <span>WEB DEVELOPER & COMPUTER SCIENCE UNDERGRAD</span>
          <span className="animate-bounce">SCROLL DOWN ↓</span>
        </div>
      </section>

      {/* Bio Modal */}
      {isBioOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#111111] border border-red-600/40 rounded-3xl max-w-lg w-full p-8 relative shadow-2xl">
            <button 
              onClick={() => setIsBioOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 rounded-full bg-white/5"
            >
              ✕
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center font-black text-xl text-white shadow-lg shadow-red-600/30">
                AP
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Abhishek Pratap</h3>
                <p className="text-xs font-mono text-red-400">BCA Undergrad</p>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed mb-6">
              <p>
                Hi! I am Abhishek Pratap, a passionate computer applications undergraduate focused on frontend design, web programming, and core computer science logic.
              </p>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl font-mono text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Degree:</span>
                  <span className="text-white font-bold">BCA</span>
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
          </div>
        </div>
      )}

      {/* Philosophy */}
      <section id="philosophy" className="py-28 px-6 md:px-12 max-w-6xl mx-auto border-t border-white/10">
        <div className="text-center">
          <span className="font-mono text-xs text-red-500 uppercase tracking-widest">// THE PHILOSOPHY</span>
          <h2 className="text-4xl md:text-6xl font-black mt-3 mb-10 tracking-tight uppercase">
            CREATING WITH PURPOSE
          </h2>

          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-r from-red-950/40 via-black to-red-950/40 p-10 md:p-16 my-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-2xl font-light text-slate-200 leading-relaxed italic">
                "I believe great software is born at the intersection of engineering precision and clean user-centric design. Every line of code is an opportunity to create something that provides real value."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
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
            <div 
              key={idx}
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
                    Code
                  </a>
                  <a 
                    href={proj.demo} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1 text-red-400 hover:text-red-300 transition font-bold ml-auto"
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
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

      {/* Contact */}
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
              <div>📧 abhishekpratap123.cell@gmail.com</div>
              <div>📍 India</div>
              <div className="text-red-400">⚡ Status: Open to opportunities</div>
            </div>

            <div className="pt-6 border-t border-white/10 flex gap-4">
              <a href="https://github.com/abhishekpratap123-cell" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-xl hover:bg-red-600 transition">
                GitHub ↗
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
              Send Message ➔
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
