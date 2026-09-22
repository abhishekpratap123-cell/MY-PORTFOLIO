{/* Hero Section with Background Photo */}
      <section id="home" className="min-h-screen pt-40 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-between relative overflow-hidden">
        
        {/* Background Image Behind Title */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-25 pointer-events-none">
          <img 
            src="/hero.jpg" 
            alt="Abhishek Pratap" 
            className="w-full h-full object-cover grayscale contrast-125 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]" />
        </div>

        <div className="text-center my-auto relative z-10">
          <div className="inline-block border border-red-600/40 bg-red-600/10 text-red-400 font-mono text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-8">
            CRAFTING DIGITAL EXPERIENCES THAT ENGAGE
          </div>

          <h1 className="text-7xl sm:text-9xl md:text-[13rem] font-black uppercase tracking-tighter leading-none select-none text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-600">
            ABHISHEK
          </h1>

          <p className="max-w-xl mx-auto text-slate-300 text-sm md:text-base font-sans mt-8 leading-relaxed bg-black/40 backdrop-blur-sm p-4 rounded-2xl border border-white/5">
            Final year BCA student & web developer engineering clean, responsive, and visual web applications using HTML, CSS, JavaScript, React, and C++.
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
