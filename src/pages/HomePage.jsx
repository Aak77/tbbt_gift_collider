import { Link } from 'react-router-dom';
import AppShell from '../components/AppShell';
import experimentalBundleImg from '../assets/experimental_bundle.png';
import avatarImg from '../assets/avatar.png';

export default function HomePage({ auth }) {
  return (
    <div className="bg-red-atmosphere bg-dots min-h-screen relative overflow-hidden">
      {/* Floating accent particles */}
      <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-white/10 blur-sm animate-pulse" />
      <div className="absolute top-48 right-1/4 w-3 h-3 rounded-full bg-white/20 blur-xs" />
      <div className="absolute top-[400px] left-1/3 w-6 h-6 rounded-full bg-[#00daf3]/10 blur-sm" />
      <div className="absolute top-[600px] right-20 w-4 h-4 rounded-full bg-primary/20 blur-xs" />

      {/* Atom Watermark Overlay */}
      <div className="absolute top-[35%] left-[50%] lg:left-[55%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-15 text-white select-none">
        <svg className="w-[450px] h-[450px] md:w-[600px] md:h-[600px]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          {/* Central nucleus */}
          <circle cx="50" cy="50" r="5" className="fill-white stroke-2" />
          <circle cx="48" cy="48" r="0.8" className="fill-white/80" />
          <circle cx="51.5" cy="49.5" r="0.8" className="fill-white/80" />
          <circle cx="49" cy="52" r="0.8" className="fill-white/80" />
          {/* Orbits */}
          <ellipse cx="50" cy="50" rx="35" ry="12" className="stroke-white/40 stroke-[1.2]" transform="rotate(30, 50, 50)" />
          <ellipse cx="50" cy="50" rx="35" ry="12" className="stroke-white/40 stroke-[1.2]" transform="rotate(90, 50, 50)" />
          <ellipse cx="50" cy="50" rx="35" ry="12" className="stroke-white/40 stroke-[1.2]" transform="rotate(150, 50, 50)" />
          {/* Electron dots */}
          <circle cx="85" cy="50" r="1.5" className="fill-[#00daf3]" transform="rotate(30, 50, 50)" />
          <circle cx="15" cy="50" r="1.5" className="fill-primary" transform="rotate(90, 50, 50)" />
          <circle cx="85" cy="50" r="1.5" className="fill-white" transform="rotate(150, 50, 50)" />
        </svg>
      </div>

      <AppShell auth={auth}>
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto space-y-12 relative z-10 pt-8">
          
          {/* Section 1: Hero Card */}
          <section className="relative">
            <div className="grid lg:grid-cols-2 gap-gutter items-center bg-white border-[3px] border-primary p-8 md:p-12 relative overflow-hidden rounded shadow-sm">
              <div className="z-10">
                <span className="inline-block bg-primary text-white font-sticker-text text-[11px] px-4 py-1.5 skew-x-[-12deg] mb-6 shadow-sm uppercase tracking-wider font-extrabold">
                  CONFIDENTIAL LAB REPORT
                </span>
                <h1 className="font-headline-xl text-[44px] md:text-[52px] leading-[1.05] text-[#111d23] mb-6 font-extrabold tracking-tight">
                  Gift Giving is Now{' '}
                  <span className="text-primary relative inline-block">
                    a
                    <span className="absolute left-0 bottom-1 w-full h-[3px] bg-primary" />
                  </span>{' '}
                  <span className="text-primary relative inline-block">
                    Science.
                    <span className="absolute left-0 bottom-1 w-full h-[3px] bg-primary" />
                  </span>
                </h1>
                <p className="font-body-md text-slate-600 max-w-[500px] mb-8 text-[15px] leading-relaxed">
                  We&apos;ve accelerated generosity to 99% the speed of light. Smash atoms, pair preferences, and eliminate the &quot;Awkward Thank You&quot; particle from the universe.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/my-gifts" className="inline-block bg-primary hover:bg-[#d81b60] text-white px-8 py-4 font-label-mono text-label-mono uppercase border-2 border-[#111d23] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer text-center">
                    Initialize Collider
                  </Link>
                  <Link to="/feeds" className="inline-block bg-white hover:bg-slate-50 text-[#111d23] px-8 py-4 font-label-mono text-label-mono uppercase border-2 border-[#111d23] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer text-center">
                    Friends Feed
                  </Link>
                </div>
              </div>

              {/* Right Illustration Card */}
              <div className="relative flex justify-center items-center">
                <div className="bg-white border-2 border-[#111d23] p-4 flex justify-center items-center rounded relative max-w-md w-full">
                  <img
                    className="w-full h-auto cyan-glow animate-glow"
                    alt="Collider illustration"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9cmMuu2Xjlt-LzaLjsAeDL179mX28JnFyLfWkRXzQsfPRl0ClULQiJj2J114E0Kq-GpSmIQcZXJvk3OE4aTqrYfZkOqR_J6U2ZMWzSUsZOEPkLe0jlSt6I40R8eodBfaAIYhaU2xl5DtgZZNgk-attAsLutAIF8r8ui9hY6gwiHwXqmeUumHEoGFRl0dzhsrbWA3O73aHBRBsKo8VhCehyIlHJQLCiRHDuySXiB4eTpGyrSRP9824H0xMB5KnhAx4vrODmhsZrGAp"
                  />
                  <div className="absolute top-3 right-3 bg-[#9cf0ff] text-[#001f24] font-sticker-text text-[10px] px-3 py-1 border-2 border-[#111d23] uppercase tracking-wider font-extrabold rotate-[3deg] shadow-sm">
                    HIGH VELOCITY Gifting
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Notebook & Caution Row */}
          <section className="relative">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              
              {/* Engineering Notebook */}
              <div className="bg-[#ddeaf2] border-2 border-[#111d23] p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded relative z-10">
                <h3 className="font-headline-lg text-[20px] text-primary mb-5 font-extrabold uppercase tracking-tight">Engineering Notebook v.2.4</h3>
                <div className="space-y-4">
                  <div>
                    <span className="font-label-mono text-[11px] text-primary font-bold block mb-1">OBSERVATION:</span>
                    <p className="font-body-sm text-[13px] text-slate-700 font-medium">Generic socks represent a 45% drop in holiday enthusiasm.</p>
                  </div>
                  <div>
                    <span className="font-label-mono text-[11px] text-primary font-bold block mb-1">HYPOTHESIS:</span>
                    <p className="font-body-sm text-[13px] text-slate-700 font-medium">Precision tracking of &quot;Wish Atoms&quot; can prevent sock-related boredom.</p>
                  </div>
                  <div>
                    <span className="font-label-mono text-[11px] text-primary font-bold block mb-1">CONCLUSION:</span>
                    <p className="font-body-sm text-[13px] text-slate-700 font-medium">The Gift Collider is required for family holiday stability.</p>
                  </div>
                </div>
              </div>

              {/* Caution Card with Floating Plus Button */}
              <div className="relative">
                <div className="bg-[#eae2cf] border-2 border-[#111d23] p-8 flex flex-col items-center justify-center text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded relative z-10 min-h-[295px]">
                  <div className="bg-primary text-white w-14 h-14 rounded border-2 border-[#111d23] flex items-center justify-center mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="3" />
                    </svg>
                  </div>
                  <h3 className="font-headline-lg text-[20px] text-[#111d23] mb-2 font-extrabold tracking-tight uppercase">CAUTION</h3>
                  <p className="font-body-sm text-[13px] text-slate-700 font-medium max-w-xs leading-relaxed">Unexpected joy levels may exceed lab safety parameters.</p>
                </div>

                {/* Floating Action Button (FAB) */}
                <div className="absolute -bottom-5 -right-3 z-20">
                  <button className="bg-primary hover:bg-[#d81b60] text-white w-12 h-12 rounded-full border-2 border-[#111d23] flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px] transition-all duration-200 cursor-pointer">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          </section>

          {/* Section 3: Collision Process Steps */}
          <section>
            <div className="flex items-center gap-4 mb-8 mt-12 relative z-10">
              <h2 className="font-headline-lg text-[26px] text-white font-extrabold">The Collision Process</h2>
              <div className="h-0.5 flex-grow border-t-2 border-dashed border-white/20 relative">
                <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#00daf3] animate-ping" />
                <div className="absolute right-1/2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#00daf3]" />
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 relative z-10">
              
              {/* Phase 1 */}
              <div className="relative bg-white border-2 border-[#111d23] border-b-[6px] border-b-primary p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="font-label-mono text-[10px] text-primary font-bold uppercase mb-3">Phase 01</div>
                <div className="w-16 h-16 bg-[#007c8b] rounded flex items-center justify-center border-2 border-[#111d23] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-4">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </div>
                <h4 className="font-headline-lg text-[18px] text-[#111d23] font-extrabold mb-2">Add Gifts</h4>
                <p className="font-body-sm text-[13px] text-slate-600 italic leading-relaxed">
                  Inject your desires into the collider stream. No filter needed.
                </p>
                
                {/* Chevron Connector pointing to Phase 2 (visible on desktop) */}
                <div className="hidden lg:block absolute right-[-24px] top-1/2 -translate-y-1/2 z-20 text-primary">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative bg-white border-2 border-[#111d23] border-b-[6px] border-b-primary p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="font-label-mono text-[10px] text-primary font-bold uppercase mb-3">Phase 02</div>
                <div className="w-16 h-16 bg-primary rounded flex items-center justify-center border-2 border-[#111d23] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-4">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </div>
                <h4 className="font-headline-lg text-[18px] text-[#111d23] font-extrabold mb-2">Share with Friends</h4>
                <p className="font-body-sm text-[13px] text-slate-600 italic leading-relaxed">
                  Synchronize particle streams with your inner circle for maximum impact.
                </p>

                {/* Chevron Connector pointing to Result (visible on desktop) */}
                <div className="hidden lg:block absolute right-[-24px] top-1/2 -translate-y-1/2 z-20 text-primary">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>

              {/* Result */}
              <div className="bg-white border-2 border-[#111d23] border-b-[6px] border-b-primary p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="font-label-mono text-[10px] text-primary font-bold uppercase mb-3">Result</div>
                <div className="w-16 h-16 bg-[#9cf0ff] rounded flex items-center justify-center border-2 border-[#111d23] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-4">
                  <svg className="w-8 h-8 text-[#111d23]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <circle cx="9" cy="9" r="1.5" fill="currentColor" stroke="none" />
                    <circle cx="15" cy="9" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <h4 className="font-headline-lg text-[18px] text-[#111d23] font-extrabold mb-2">No More Bad Gifts</h4>
                <p className="font-body-sm text-[13px] text-slate-600 italic leading-relaxed">
                  Total annihilation of disappointment. Pure, radiated gratitude.
                </p>
              </div>

            </div>
          </section>

          {/* Section 4: Experimental Bundle & Lab Pass */}
          <section className="bg-[#eef3f6] border-2 border-[#111d23] p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Polaroid Frame */}
              <div className="flex justify-center">
                <div className="bg-white border-2 border-[#111d23] p-4 shadow-[6px_6px_0px_0px_#b0004a] rotate-[-3deg] transition-transform hover:rotate-0 duration-300 max-w-[240px] w-full">
                  <div className="flex justify-between font-label-mono text-[9px] text-[#b0004a] font-bold mb-2">
                    <span>Serial: #GC-992-B</span>
                    <span>LAB CERTIFIED</span>
                  </div>
                  <div className="border border-slate-200 rounded overflow-hidden mb-3 bg-slate-950 aspect-square flex items-center justify-center">
                    <img 
                      src={experimentalBundleImg} 
                      alt="Experimental Bundle" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-headline-lg text-[14px] text-[#111d23] text-center font-extrabold uppercase tracking-tight">
                    Experimental Bundle
                  </p>
                </div>
              </div>

              {/* Discovery Description */}
              <div>
                <div className="space-y-4">
                  <div>
                    <span className="inline-block bg-[#4a4739] text-[#e8e2cf] font-sticker-text text-[10px] px-3 py-1 skew-x-[-12deg] mb-3 uppercase tracking-wider font-extrabold">
                      Latest Discovery
                    </span>
                    <h4 className="font-headline-lg text-[22px] text-[#111d23] font-extrabold mb-3 relative inline-block">
                      Quantum Gifting Protocols Enabled
                      <span className="absolute left-0 bottom-0.5 w-full h-[2px] bg-[#111d23]" />
                    </h4>
                    <p className="font-body-sm text-[14px] text-slate-600 leading-relaxed mb-6 font-medium">
                      Our latest experiments prove that a gift&apos;s value is directly proportional to the collider&apos;s energy output. Sign up for a Lab Pass to unlock higher-tier gift synthesis and rare sticker packs.
                    </p>
                  </div>
                  
                  <button className="bg-[#122226] hover:bg-[#1e2f33] text-white px-6 py-3 font-label-mono text-label-mono inline-block uppercase border-2 border-[#111d23] hover:translate-y-[-2px] transition-all duration-200 cursor-pointer shadow-sm">
                    Apply for Lab Pass
                  </button>
                </div>
              </div>

            </div>
          </section>

          {/* About the Developer Section */}
          <section className="relative z-10 mt-16 max-w-4xl mx-auto w-full">
            <div className="bg-gradient-to-br from-sky-200/95 to-sky-100/95 backdrop-blur-md border-2 border-[#111d23] p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(17,29,35,1)] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(17,29,35,1)] transition-all duration-300 rounded-lg flex flex-col md:flex-row items-center gap-6 md:gap-8 relative overflow-hidden group">
              {/* Sky blue gradient aesthetic line */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500" />
              
              {/* Left: Profile Image */}
              <div className="shrink-0 relative">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-[#111d23] shadow-md group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={avatarImg} 
                    alt="Developer Ayush Kamble" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#111d23] shadow-sm animate-pulse" />
              </div>

              {/* Right: Text content */}
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block bg-[#00616d] text-white font-label-mono text-[9px] px-2.5 py-0.5 rounded uppercase tracking-wider font-extrabold mb-2.5 shadow-sm">
                  Developer
                </span>
                <h3 className="font-headline-lg text-[22px] md:text-[24px] text-[#111d23] font-extrabold tracking-tight mb-2">
                  Ayush Kamble
                </h3>
                <p className="font-body-sm text-[13.5px] text-slate-700 leading-relaxed font-medium">
                  Hi, I’m Ayush — a Computer Engineering student from Mumbai who loves building modern web experiences, experimenting with embedded systems, exploring fintech and AI-driven ideas. I enjoy creating projects that are both useful and visually clean, while constantly learning new technologies and improving my skills as a developer.
                </p>
              </div>
            </div>
          </section>

          {/* Footer Section */}
          <footer className="mt-16 pt-8 pb-12 border-t-2 border-dashed border-white/20 relative z-10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-[11px] font-label-mono">
            <div>
              <span className="font-bold text-white block mb-1 text-[13px] tracking-tight">Gift Collider</span>
              <span>&copy; 2026 Gift Collider Engineering Lab. No particles were harmed during gifting.</span>
            </div>
            <div className="flex gap-6">
              <a href="#safety" className="hover:text-white transition-colors">Safety Protocols</a>
              <a href="#specs" className="hover:text-white transition-colors">Hardware Specs</a>
              <a href="#credits" className="hover:text-white transition-colors">Lab Credits</a>
            </div>
          </footer>

        </div>
      </AppShell>
    </div>
  );
}
