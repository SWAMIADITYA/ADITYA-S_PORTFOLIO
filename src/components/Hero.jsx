// import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
// import Projects from './Projects';

// export default function Hero() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-slate-900 
//                     flex items-center justify-center pt-20 px-6">
//       <div className="max-w-4xl mx-auto text-center">
        
//       <div className="mb-8 animate-pulse">
//   <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r 
//                   from-purple-500 to-pink-500 p-[4px] shadow-xl shadow-pink-500/50">
//     <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-gray-900">
//       <img 
//         src="/myImg.jpg" 
//         alt="Profile" 
//         className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
//       />
//     </div>
//   </div>
// </div>



//         <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
//           Hi, I'm <span className="bg-gradient-to-r from-secondary to-accent 
//                                    bg-clip-text text-transparent">Aditya Swami</span>
//         </h1>

//         <p className="text-xl md:text-2xl text-gray-300 mb-4">
//           Full Stack Developer & Creative Problem Solver
//         </p>

//         <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
//           I craft beautiful, responsive web applications that users love. 
//           Specializing in React, Spring Boot, and modern web technologies.
//         </p>

//         <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
//           <button
//           className="px-8 py-3 bg-gradient-to-r from-secondary to-accent 
//                             hover:shadow-lg hover:shadow-secondary/50 rounded-lg 
//                             font-semibold transition transform hover:scale-105 
//                             text-white">
//             View My Work <ArrowRight className="inline ml-2" size={20} />
//           </button>
//           <button 
//           onClick={() => window.open("/Aditya_Swami_Resume.pdf")}
//           className="px-8 py-3 border-2 border-secondary text-secondary 
//                             hover:bg-secondary hover:text-primary rounded-lg 
//                             font-semibold transition">
//             Download CV 
//           </button>
//         </div>

//         <div className="flex gap-6 justify-center">
//           <a href="https://github.com/SWAMIADITYA" className="p-3 bg-secondary bg-opacity-10 hover:bg-opacity-20 
//                                 rounded-lg transition transform hover:scale-110">
//             <Github size={24} className="text-secondary" />
//           </a>
//           <a href="https://www.linkedin.com/in/aditya-swami-67b8b7221/" className="p-3 bg-secondary bg-opacity-10 hover:bg-opacity-20 
//                                 rounded-lg transition transform hover:scale-110">
//             <Linkedin size={24} className="text-secondary" />
//           </a>
//           <a href="#contact" className="p-3 bg-secondary bg-opacity-10 hover:bg-opacity-20 
//                                 rounded-lg transition transform hover:scale-110">
//             <Mail size={24} className="text-secondary" />
//           </a>
//         </div>

//         <div className="mt-20 text-secondary">
//           ↓ Scroll to explore
//         </div>
//       </div>
//     </div>
//   );
// }

// -----------------------------------------------------------------------
// import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
// import Projects from './Projects';

// export default function Hero() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-slate-900 
//                     flex items-center justify-center pt-20 px-6">
//       <div className="max-w-4xl mx-auto text-center 
//                       animate-hero-fade will-change-transform">
        
//         {/* PROFILE + RING */}
//         <div className="mb-8 inline-block animate-profile-float">
//           <div className="relative w-36 h-36 mx-auto">
//             {/* animated gradient ring */}
//             <div className="absolute inset-0 rounded-full p-[4px] ring-gradient -z-10 shadow-xl shadow-pink-500/40"></div>

//             <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-gray-900 transform transition-transform duration-500 hover:scale-105">
//               <img 
//                 src="/myImg.jpg" 
//                 alt="Profile" 
//                 className="w-full h-full object-cover" 
//               />
//             </div>
//           </div>
//         </div>

//         {/* MAIN TITLE */}
//         <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white opacity-0 translate-y-4 animate-stagger fade-up-1">
//           Hi, I'm <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Aditya Swami</span>
//         </h1>

//         {/* TYPEWRITER SUBTITLE */}
//         <p className="text-xl md:text-2xl text-gray-300 mb-4 opacity-0 translate-y-4 animate-stagger fade-up-2">
//           <span className="inline-block mr-2">Full Stack Developer &amp;</span>
//           <span className="typewriter inline-block" aria-hidden="true">
//             Creative Problem Solver
//           </span>
//         </p>

//         {/* DESCRIPTION */}
//         <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 translate-y-4 animate-stagger fade-up-3">
//           I craft beautiful, responsive web applications that users love. 
//           Specializing in React, Spring Boot, and modern web technologies.
//         </p>

//         {/* ACTIONS */}
//         <div className="flex flex-col md:flex-row gap-6 justify-center mb-12 opacity-0 translate-y-4 animate-stagger fade-up-4">
//           <button
//             className="px-8 py-3 bg-gradient-to-r from-secondary to-accent 
//                        hover:shadow-lg hover:shadow-secondary/50 rounded-lg 
//                        font-semibold transition transform hover:scale-105 
//                        text-white flex items-center gap-2">
//             View My Work <ArrowRight size={20} />
//           </button>

//           <button 
//             onClick={() => window.open("/Aditya_Swami_Resume.pdf")}
//             className="px-8 py-3 border-2 border-secondary text-secondary 
//                        hover:bg-secondary hover:text-primary rounded-lg 
//                        font-semibold transition">
//             Download CV 
//           </button>
//         </div>

//         {/* SOCIALS */}
//         <div className="flex gap-6 justify-center opacity-0 translate-y-4 animate-stagger fade-up-5">
//           <a href="https://github.com/SWAMIADITYA" className="p-3 bg-secondary bg-opacity-10 hover:bg-opacity-20 
//                                 rounded-lg transition transform hover:scale-110">
//             <Github size={24} className="text-secondary" />
//           </a>
//           <a href="https://www.linkedin.com/in/aditya-swami-67b8b7221/" className="p-3 bg-secondary bg-opacity-10 hover:bg-opacity-20 
//                                 rounded-lg transition transform hover:scale-110">
//             <Linkedin size={24} className="text-secondary" />
//           </a>
//           <a href="#contact" className="p-3 bg-secondary bg-opacity-10 hover:bg-opacity-20 
//                                 rounded-lg transition transform hover:scale-110">
//             <Mail size={24} className="text-secondary" />
//           </a>
//         </div>

//         {/* SCROLL HINT */}
//         <div className="mt-20 text-secondary opacity-90 animate-bounce-slow">
//           ↓ Scroll to explore
//         </div>
//       </div>

//       {/* ---- Custom CSS for animations (no external deps) ---- */}
//       <style>{`
//         /* entrance for the whole hero */
//         .animate-hero-fade {
//           animation: heroFade 700ms ease-out both;
//         }
//         @keyframes heroFade {
//           from { opacity: 0; transform: translateY(8px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }

//         /* subtle float for profile */
//         .animate-profile-float {
//           animation: floatY 5s ease-in-out infinite;
//         }
//         @keyframes floatY {
//           0% { transform: translateY(0); }
//           50% { transform: translateY(-6px); }
//           100% { transform: translateY(0); }
//         }

//         /* glowing animated gradient ring */
//         .ring-gradient {
//           background: conic-gradient(from 0deg, #9b5cf6, #f472b6, #f97316, #60a5fa, #9b5cf6);
//           filter: blur(6px);
//           opacity: 0.9;
//           transform: scale(1.04);
//           transition: transform 400ms ease;
//           box-shadow: 0 8px 30px rgba(99,102,241,0.12);
//         }
//         .ring-gradient:hover {
//           transform: scale(1.08);
//         }

//         /* typewriter effect (pure css) */
//         .typewriter {
//           display: inline-block;
//           white-space: nowrap;
//           overflow: hidden;
//           border-right: 2px solid rgba(255,255,255,0.6);
//           animation: typing 2.8s steps(28, end) 0.6s 1 normal both, blink-caret 700ms step-end infinite;
//           max-width: 0ch;
//         }
//         @keyframes typing {
//           from { max-width: 0ch; }
//           to   { max-width: 28ch; } /* adapt if text length changes */
//         }
//         @keyframes blink-caret {
//           50% { border-color: transparent; }
//         }

//         /* staggered reveal helper classes */
//         .animate-stagger { animation-duration: 600ms; animation-fill-mode: both; }
//         .fade-up-1 { animation-name: fadeUp; animation-delay: 0.15s; }
//         .fade-up-2 { animation-name: fadeUp; animation-delay: 0.25s; }
//         .fade-up-3 { animation-name: fadeUp; animation-delay: 0.35s; }
//         .fade-up-4 { animation-name: fadeUp; animation-delay: 0.45s; }
//         .fade-up-5 { animation-name: fadeUp; animation-delay: 0.55s; }

//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(10px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }

//         /* slow bounce for scroll hint */
//         .animate-bounce-slow {
//           animation: bounceSlow 1.6s infinite ease-in-out;
//         }
//         @keyframes bounceSlow {
//           0%,100% { transform: translateY(0); opacity: 0.9; }
//           50% { transform: translateY(-8px); opacity: 1; }
//         }

//         /* small accessibility: reduce animation for prefers-reduced-motion */
//         @media (prefers-reduced-motion: reduce) {
//           .animate-hero-fade,
//           .animate-profile-float,
//           .animate-stagger,
//           .animate-bounce-slow,
//           .typewriter {
//             animation: none !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


// -----------------------------------------------------



import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';


export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary via-primary to-slate-900 
                    flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* FANTASY BACKGROUND LAYERS */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
        {/* twinkling stars */}
        <div className="absolute inset-0 starfield"></div>

        {/* soft nebula blobs */}
        <div className="absolute -left-20 -top-28 w-[520px] h-[520px] nebula nebula-1"></div>
        <div className="absolute -right-28 -bottom-32 w-[620px] h-[620px] nebula nebula-2"></div>

        {/* subtle particle orbs */}
        <div className="absolute inset-0 orbs"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center animate-hero-fade will-change-transform relative z-10">
        
        {/* PROFILE + ROTATING HALO */}
        <div className="mb-8 inline-block animate-profile-float">
          <div className="relative w-40 h-40 mx-auto">
            {/* rotating halo */}
            <svg className="absolute -inset-2 w-full h-full -z-10 rotate-animation" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="g1" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.08)"/>
                  <stop offset="40%" stopColor="rgba(155,92,246,0.15)"/>
                  <stop offset="100%" stopColor="rgba(249,115,22,0.05)"/>
                </radialGradient>
              </defs>
              <circle cx="100" cy="100" r="90" fill="none" stroke="url(#g1)" strokeWidth="6" strokeLinecap="round" />
            </svg>

            {/* shimmering gradient ring */}
            <div className="absolute inset-0 rounded-full p-[6px] gradient-ring -z-20 shadow-glow"></div>

            <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-gray-900 transform transition-transform duration-500 hover:scale-105">
              <img 
                src="/myImg.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* tiny sparkles around profile */}
            <div className="absolute -left-3 -top-3 sparkle" />
            <div className="absolute right-2 bottom-2 sparkle delay-2" />
          </div>
        </div>

        {/* MAIN TITLE - shimmer */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white opacity-0 translate-y-6 animate-stagger fade-up-1">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-secondary via-accent to-pink-400 bg-clip-text text-transparent shimmer-text inline-block">
            Aditya Swami
          </span>
        </h1>

        {/* TYPEWRITER SUBTITLE (gentle) */}
        <p className="text-xl md:text-2xl text-gray-300 mb-4 opacity-0 translate-y-6 animate-stagger fade-up-2">
          <span className="inline-block mr-2">Full Stack Developer &amp;</span>
          <span className="typewriter inline-block" aria-hidden="true">
            Creative Problem Solver
          </span>
        </p>

        {/* DESCRIPTION */}
        <p className="text-lg text-gray-300/80 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 translate-y-6 animate-stagger fade-up-3">
          I craft beautiful, responsive web applications that users love.
          Specializing in React, Spring Boot, and modern web technologies.
        </p>

        {/* ACTIONS - neon buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-12 opacity-0 translate-y-6 animate-stagger fade-up-4">
          <button
            className="px-8 py-3 bg-gradient-to-r from-secondary to-accent 
                       hover:shadow-[0_10px_30px_rgba(99,102,241,0.18)] rounded-2xl 
                       font-semibold transition transform hover:scale-105 
                       text-white flex items-center gap-2 neon-btn">
            View My Work <ArrowRight size={20} />
          </button>

          <button 
            onClick={() => window.open("/Aditya_Swami_Resume.pdf")}
            className="px-8 py-3 border-2 border-secondary text-secondary 
                       hover:bg-secondary hover:text-primary rounded-2xl 
                       font-semibold transition neon-outline">
            Download CV 
          </button>
        </div>

        {/* SOCIALS */}
        <div className="flex gap-6 justify-center opacity-0 translate-y-6 animate-stagger fade-up-5">
          <a href="https://github.com/SWAMIADITYA" className="p-3 bg-secondary bg-opacity-10 hover:bg-opacity-25 
                                rounded-xl transition transform hover:scale-110 social-btn">
            <Github size={24} className="text-secondary" />
          </a>
          <a href="https://www.linkedin.com/in/aditya-swami-67b8b7221/" className="p-3 bg-secondary bg-opacity-10 hover:bg-opacity-25 
                                rounded-xl transition transform hover:scale-110 social-btn">
            <Linkedin size={24} className="text-secondary" />
          </a>
          <a href="#contact" className="p-3 bg-secondary bg-opacity-10 hover:bg-opacity-25 
                                rounded-xl transition transform hover:scale-110 social-btn">
            <Mail size={24} className="text-secondary" />
          </a>
        </div>

        {/* SCROLL HINT */}
        <div className="mt-20 text-secondary opacity-90 animate-bounce-slow">
          ↓ Scroll to explore
        </div>
      </div>

      {/* ---- Custom CSS for animations (pure CSS, no deps) ---- */}
      <style>{`
        /* ---------- Background: stars ---------- */
        .starfield {
          background-image:
            radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.9) 50%, transparent 51%),
            radial-gradient(1px 1px at 40% 60%, rgba(255,255,255,0.8) 50%, transparent 51%),
            radial-gradient(1px 1px at 70% 30%, rgba(255,255,255,0.9) 50%, transparent 51%),
            radial-gradient(1px 1px at 85% 75%, rgba(255,255,255,0.7) 50%, transparent 51%),
            radial-gradient(1px 1px at 20% 80%, rgba(255,255,255,0.6) 50%, transparent 51%);
          opacity: 0.6;
          animation: twinkle 6s linear infinite;
          filter: drop-shadow(0 0 6px rgba(255,255,255,0.06));
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.55; transform: translateZ(0); }
          50% { opacity: 0.95; }
        }

        /* ---------- Nebula blobs ---------- */
        .nebula {
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.55;
          mix-blend-mode: screen;
          transform: translate3d(0,0,0);
          animation: nebulaFloat 14s linear infinite;
        }
        .nebula-1 {
          background: radial-gradient(circle at 30% 30%, rgba(155,92,246,0.32), transparent 35%),
                      radial-gradient(circle at 70% 70%, rgba(59,130,246,0.18), transparent 45%);
          animation-direction: alternate;
        }
        .nebula-2 {
          background: radial-gradient(circle at 40% 60%, rgba(244,114,182,0.22), transparent 35%),
                      radial-gradient(circle at 80% 20%, rgba(249,115,22,0.12), transparent 45%);
          animation-duration: 18s;
        }
        @keyframes nebulaFloat {
          0% { transform: translateY(0) rotate(0deg) scale(1); }
          50% { transform: translateY(-18px) rotate(20deg) scale(1.03); }
          100% { transform: translateY(0) rotate(0deg) scale(1); }
        }

        /* ---------- particle orbs ---------- */
        .orbs::before, .orbs::after {
          content: "";
          position: absolute;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0.1));
          box-shadow:
            120px 60px 40px rgba(155,92,246,0.08),
            260px 140px 60px rgba(99,102,241,0.06),
            420px 260px 80px rgba(249,115,22,0.05),
            80px 320px 50px rgba(244,114,182,0.04);
          opacity: 0.9;
          filter: blur(2px);
          animation: orbDrift 20s linear infinite;
        }
        .orbs::after { animation-duration: 28s; transform: translateY(40px); opacity: 0.8; }

        @keyframes orbDrift {
          0% { transform: translate3d(0,0,0) scale(1); opacity: 0.9; }
          50% { transform: translate3d(-20px,-18px,0) scale(1.05); opacity: 0.7; }
          100% { transform: translate3d(0,0,0) scale(1); opacity: 0.9; }
        }

        /* ---------- rotating halo svg ---------- */
        .rotate-animation { animation: spinSlow 14s linear infinite; opacity: 0.85; filter: blur(2px); }
        @keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        /* ---------- gradient ring and glow ---------- */
        .gradient-ring {
          background: conic-gradient(from 0deg, rgba(155,92,246,0.6), rgba(244,114,182,0.5), rgba(249,115,22,0.35), rgba(96,165,250,0.45));
          transform: scale(1.02);
          transition: transform 420ms ease;
        }
        .gradient-ring:hover { transform: scale(1.06); }
        .shadow-glow { box-shadow: 0 20px 60px rgba(99,102,241,0.12); }

        /* little sparkles */
        .sparkle {
          width: 10px;
          height: 10px;
          background: radial-gradient(circle, rgba(255,255,255,1), rgba(255,255,255,0.1));
          filter: blur(0.8px);
          transform: rotate(15deg);
          border-radius: 50%;
          box-shadow: 0 0 12px rgba(255,255,255,0.6);
          animation: sparklePop 2.8s infinite;
        }
        .sparkle.delay-2 { animation-delay: 0.6s; }
        @keyframes sparklePop {
          0% { transform: scale(0.7) translateY(0); opacity: 0.6; }
          50% { transform: scale(1.05) translateY(-6px); opacity: 1; }
          100% { transform: scale(0.7) translateY(0); opacity: 0.6; }
        }

        /* ---------- shimmer text ---------- */
        .shimmer-text {
          position: relative;
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: -80% 0; }
          50% { background-position: 80% 0; }
          100% { background-position: -80% 0; }
        }

        /* ---------- typewriter effect ---------- */
        .typewriter {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          border-right: 2px solid rgba(255,255,255,0.55);
          animation: typing 2.6s steps(28, end) 0.4s 1 normal both, blink-caret 700ms step-end infinite;
          max-width: 0ch;
        }
        @keyframes typing {
          from { max-width: 0ch; }
          to   { max-width: 28ch; }
        }
        @keyframes blink-caret { 50% { border-color: transparent; } }

        /* ---------- neon buttons ---------- */
        .neon-btn {
          box-shadow: 0 6px 20px rgba(99,102,241,0.12), inset 0 -2px 10px rgba(0,0,0,0.12);
          transition: box-shadow 220ms ease, transform 220ms ease;
        }
        .neon-btn:hover {
          box-shadow: 0 20px 40px rgba(99,102,241,0.22), 0 0 30px rgba(155,92,246,0.18);
        }

        .neon-outline {
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          box-shadow: 0 6px 20px rgba(155,92,246,0.04);
          transition: box-shadow 220ms ease, transform 220ms ease;
        }
        .neon-outline:hover {
          box-shadow: 0 14px 30px rgba(155,92,246,0.12);
          transform: translateY(-3px);
        }

        .social-btn {
          transition: box-shadow .25s ease, transform .25s ease;
        }
        .social-btn:hover { box-shadow: 0 10px 30px rgba(99,102,241,0.08); }

        /* ---------- staggered reveal ---------- */
        .animate-stagger { animation-duration: 700ms; animation-fill-mode: both; }
        .fade-up-1 { animation-name: fadeUp; animation-delay: 0.12s; }
        .fade-up-2 { animation-name: fadeUp; animation-delay: 0.22s; }
        .fade-up-3 { animation-name: fadeUp; animation-delay: 0.32s; }
        .fade-up-4 { animation-name: fadeUp; animation-delay: 0.42s; }
        .fade-up-5 { animation-name: fadeUp; animation-delay: 0.52s; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); filter: blur(4px); }
          to   { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        /* profile float */
        .animate-profile-float { animation: floatY 6s ease-in-out infinite; }
        @keyframes floatY {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }

        /* slow bounce for scroll hint */
        .animate-bounce-slow {
          animation: bounceSlow 1.6s infinite ease-in-out;
        }
        @keyframes bounceSlow {
          0%,100% { transform: translateY(0); opacity: 0.9; }
          50% { transform: translateY(-8px); opacity: 1; }
        }

        /* hero entrance */
        .animate-hero-fade { animation: heroFade 700ms cubic-bezier(.2,.9,.3,1) both; }
        @keyframes heroFade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* spinner & glow helpers */
        .rotate-animation { transform-origin: 50% 50%; }

        /* accessibility: reduce motion */
        @media (prefers-reduced-motion: reduce) {
          .nebula, .orbs::before, .orbs::after, .rotate-animation, .animate-profile-float,
          .animate-stagger, .shimmer-text, .typewriter, .starfield {
            animation: none !important;
          }
        }

      `}</style>
    </div>
  );
}
