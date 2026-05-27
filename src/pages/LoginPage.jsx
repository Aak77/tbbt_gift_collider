import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyManualUser } from '../services/api';
import FirebaseHealthCheck from '../components/FirebaseHealthCheck';
import avatarImg from '../assets/avatar.png';

export default function LoginPage({ auth }) {
  const [researcherId, setResearcherId] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const demoResearcherId = import.meta.env.VITE_DEMO_RESEARCHER_ID || 'COLLIDER_ADMIN_01';
  const demoAccessCode = import.meta.env.VITE_DEMO_ACCESS_CODE || '123456';

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const user = await verifyManualUser(researcherId.trim(), accessCode.trim());
      if (!user) {
        setError('Access denied. User must be manually seeded in Firestore.');
      } else {
        auth.login(user);
        navigate('/');
      }
    } catch {
      setError('Firebase not configured or unreachable. Check .env and Firestore.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen font-body-md text-on-background relative overflow-hidden">
      <div className="absolute inset-0 bg-deep-red-env z-0" />
      <div className="absolute inset-0 blueprint-grid z-0" />

      {/* Spinning Atom 1 (Huge background element, bottom-right) */}
      <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] md:w-[700px] md:h-[700px] pointer-events-none opacity-20 text-[#00daf3]/10 select-none z-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <circle cx="50" cy="50" r="5" className="fill-white/20 stroke-2 animate-pulse" />
          <circle cx="48" cy="48" r="0.8" className="fill-white/40" />
          <circle cx="51.5" cy="49.5" r="0.8" className="fill-white/40" />
          <circle cx="49" cy="52" r="0.8" className="fill-white/40" />
          
          <g className="animate-spin-slow animate-spin" style={{ transformOrigin: '50px 50px' }}>
            <ellipse cx="50" cy="50" rx="35" ry="12" className="stroke-current stroke-[1.2]" transform="rotate(30, 50, 50)" />
            <circle cx="85" cy="50" r="1.8" className="fill-[#00daf3]/80" transform="rotate(30, 50, 50)" />
          </g>
          <g className="animate-spin-reverse-slow" style={{ transformOrigin: '50px 50px' }}>
            <ellipse cx="50" cy="50" rx="35" ry="12" className="stroke-current stroke-[1.2]" transform="rotate(90, 50, 50)" />
            <circle cx="15" cy="50" r="1.8" className="fill-primary/80" transform="rotate(90, 50, 50)" />
          </g>
          <g className="animate-spin-medium" style={{ transformOrigin: '50px 50px' }}>
            <ellipse cx="50" cy="50" rx="35" ry="12" className="stroke-current stroke-[1.2]" transform="rotate(150, 50, 50)" />
            <circle cx="85" cy="50" r="1.8" className="fill-white/80" transform="rotate(150, 50, 50)" />
          </g>
        </svg>
      </div>

      {/* Spinning Atom 2 (Medium background element, top-left) */}
      <div className="absolute -top-10 -left-10 w-[300px] h-[300px] pointer-events-none opacity-15 text-primary/10 select-none z-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <circle cx="50" cy="50" r="5" className="fill-white/20 stroke-2 animate-pulse" />
          <circle cx="48" cy="48" r="0.8" className="fill-white/40" />
          <circle cx="51.5" cy="49.5" r="0.8" className="fill-white/40" />
          <circle cx="49" cy="52" r="0.8" className="fill-white/40" />
          
          <g className="animate-spin-slow animate-spin" style={{ transformOrigin: '50px 50px' }}>
            <ellipse cx="50" cy="50" rx="35" ry="12" className="stroke-current stroke-[1.2]" transform="rotate(30, 50, 50)" />
            <circle cx="85" cy="50" r="1.8" className="fill-[#00daf3]/80" transform="rotate(30, 50, 50)" />
          </g>
          <g className="animate-spin-reverse-slow" style={{ transformOrigin: '50px 50px' }}>
            <ellipse cx="50" cy="50" rx="35" ry="12" className="stroke-current stroke-[1.2]" transform="rotate(90, 50, 50)" />
            <circle cx="15" cy="50" r="1.8" className="fill-primary/80" transform="rotate(90, 50, 50)" />
          </g>
          <g className="animate-spin-medium" style={{ transformOrigin: '50px 50px' }}>
            <ellipse cx="50" cy="50" rx="35" ry="12" className="stroke-current stroke-[1.2]" transform="rotate(150, 50, 50)" />
            <circle cx="85" cy="50" r="1.8" className="fill-white/80" transform="rotate(150, 50, 50)" />
          </g>
        </svg>
      </div>

      <main className="h-screen max-h-screen flex flex-col items-center justify-center py-4 md:py-6 px-margin-mobile relative z-10 gap-3 md:gap-4 overflow-hidden">
        <div className="w-full max-w-md bg-surface/95 backdrop-blur-md border-4 border-on-primary-fixed shadow-[6px_6px_0px_0px_rgba(63,0,22,1)] p-5 md:p-6 flex flex-col items-center relative rounded">
          <div className="text-center mb-4 md:mb-5 transform -rotate-1">
            <h1 className="font-headline-xl text-[24px] md:text-[28px] text-primary uppercase tracking-tighter leading-none italic font-extrabold">
              GIFT COLLIDER
            </h1>
            <div className="inline-block bg-[#9cf0ff] text-[#001f24] font-sticker-text text-[9px] px-3 py-1 transform rotate-2 border-2 border-[#111d23] rounded uppercase tracking-wider font-extrabold shadow-sm">
              EXPERIMENTAL UNIT
            </div>
          </div>

          <form className="w-full space-y-3 md:space-y-4" onSubmit={onSubmit}>
            <div className="space-y-1">
              <label className="font-label-mono text-[10px] text-on-surface-variant flex items-center gap-1.5 font-bold">
                <svg className="w-3.5 h-3.5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <line x1="7" y1="8" x2="17" y2="8" />
                  <line x1="7" y1="12" x2="17" y2="12" />
                  <line x1="7" y1="16" x2="13" y2="16" />
                </svg>
                RESEARCHER_ID
              </label>
              <input
                className="w-full bg-surface-container-lowest border-2 border-on-surface-variant px-3 py-2 font-label-mono text-[12px] focus:outline-none focus:ring-2 focus:ring-[#9cf0ff]/50 transition-all placeholder:text-outline-variant rounded"
                placeholder="COLLIDER_ADMIN_01"
                value={researcherId}
                onChange={(e) => setResearcherId(e.target.value)}
                required
              />
            </div>

            <div className="space-y-1">
              <label className="font-label-mono text-[10px] text-on-surface-variant flex items-center gap-1.5 font-bold">
                <svg className="w-3.5 h-3.5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                ACCESS_SEQUENCE
              </label>
              <input
                className="w-full bg-surface-container-lowest border-2 border-on-surface-variant px-3 py-2 font-label-mono text-[12px] focus:outline-none focus:ring-2 focus:ring-[#9cf0ff]/50 transition-all placeholder:text-outline-variant rounded"
                placeholder="••••••••"
                type="password"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                required
              />
            </div>

            <div className="pt-1">
              <button
                className="w-full bg-[#00616d] hover:bg-[#007c8b] text-white font-headline-lg text-[15px] py-2.5 border-2 border-[#111d23] shadow-[3px_3px_0px_0px_rgba(0,31,36,1)] transition-all flex items-center justify-center gap-2 active:translate-y-[2px] active:shadow-none font-extrabold uppercase rounded cursor-pointer"
                disabled={loading}
              >
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                {loading ? 'CHECKING...' : 'INITIATE COLLISION'}
              </button>
            </div>

            {error && (
              <div className="bg-error-container text-on-error-container border-2 border-on-surface-variant p-2 font-label-mono text-[9px] rounded">
                {error}
              </div>
            )}

            <div className="border-2 border-on-surface-variant bg-surface-container-low/70 p-3 rounded">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <div className="font-label-mono text-[9px] uppercase text-on-surface-variant font-bold">
                    Demo Credentials
                  </div>
                  <div className="mt-1 font-label-mono text-[9px] text-on-surface-variant leading-tight">
                    ID: <span className="text-on-surface font-semibold">{demoResearcherId}</span>
                    <br />
                    CODE: <span className="text-on-surface font-semibold">{demoAccessCode}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setResearcherId(demoResearcherId);
                    setAccessCode(demoAccessCode);
                  }}
                  className="shrink-0 bg-primary-container text-on-primary-container px-2.5 py-1.5 font-label-mono text-[9px] uppercase border-2 border-on-surface-variant shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none transition-all rounded font-bold cursor-pointer hover:bg-[#d81b60]"
                >
                  Use Demo
                </button>
              </div>
            </div>
          </form>

          <div className="mt-4 w-full">
            <FirebaseHealthCheck />
          </div>

          <div className="absolute -bottom-5 -left-5 bg-surface-variant text-on-surface-variant p-2 border-2 border-on-surface-variant font-label-mono text-[9px] transform -rotate-3 hidden md:block rounded shadow-sm">
            SYSTEM_STATUS: STABLE
            <br />
            Core_Temp: 273.15 K
          </div>
        </div>

        {/* About the Developer Section */}
        <div className="w-full max-w-md bg-gradient-to-br from-sky-200/95 to-sky-100/95 backdrop-blur-md border-2 border-[#111d23] p-4 shadow-[4px_4px_0px_0px_rgba(17,29,35,1)] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(17,29,35,1)] transition-all duration-300 rounded flex flex-col items-center gap-2.5 relative overflow-hidden group z-10">
          {/* Sky blue gradient aesthetic line */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500" />
          
          {/* Top part: Image and title inside a centered flex layout */}
          <div className="flex items-center gap-3 w-full">
            <div className="shrink-0 relative">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#111d23] shadow-sm group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={avatarImg} 
                  alt="Developer Ayush Kamble" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-[#111d23] shadow-sm animate-pulse" />
            </div>
            
            <div className="min-w-0">
              <span className="inline-block bg-[#00616d] text-white font-label-mono text-[8px] px-2 py-0.5 rounded uppercase tracking-wider font-extrabold mb-0.5 shadow-sm">
                Developer
              </span>
              <h3 className="font-headline-lg text-[15px] text-[#111d23] font-extrabold tracking-tight">
                Ayush Kamble
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="font-body-sm text-[11.5px] text-slate-700 leading-relaxed font-medium text-left">
            Hi, I’m Ayush — a Computer Engineering student from Mumbai who loves building modern web experiences, experimenting with embedded systems, exploring fintech and AI-driven ideas. I enjoy creating projects that are both useful and visually clean, while constantly learning new technologies and improving my skills as a developer.
          </p>
        </div>
      </main>
    </div>
  );
}

