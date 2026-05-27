import { Link, useLocation } from 'react-router-dom';
import avatarImg from '../assets/avatar.png';
import sheldonAvatar from '../assets/sheldon_avatar.png';

export default function AppShell({ auth, children }) {
  const location = useLocation();

  const nav = [
    { to: '/', label: 'Home' },
    { to: '/my-gifts', label: 'Database' },
    { to: '/feeds', label: 'Feeds' },
  ];

  const sidebarItems = [
    { 
      to: '/', 
      label: 'HOME', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3h12" />
          <path d="M12 3v12" />
          <path d="M9 12h6" />
          <path d="M19 21H5a2 2 0 0 1-1.92-2.56l3.42-10.26A2 2 0 0 1 8.42 7h7.16a2 2 0 0 1 1.92 1.18l3.42 10.26A2 2 0 0 1 19 21z" />
        </svg>
      ) 
    },
    { 
      to: '/my-gifts', 
      label: 'GIFT DATABASE', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      ) 
    },
    { 
      to: '/feeds', 
      label: 'FRIEND FEEDS', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ) 
    },
  ];

  return (
    <div className="min-h-screen font-body-md text-[#111d23] antialiased overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white border-b-2 border-primary/20 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4">
        <div className="flex items-center gap-4">
          <span className="font-headline-lg text-primary italic tracking-tighter text-2xl font-bold">Gift Collider</span>
          <nav className="hidden md:flex gap-8 ml-10">
            {nav.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  className={[
                    'font-label-mono text-label-mono pb-1 border-b-2 transition-all duration-200',
                    isActive
                      ? 'text-primary border-primary font-bold'
                      : 'text-slate-500 border-transparent hover:text-primary',
                    'hover:translate-y-[-1px]',
                  ].join(' ')}
                  to={item.to}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="p-2 text-primary hover:scale-110 transition-transform cursor-pointer"
            aria-label="Notifications"
            title="Notifications"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>
          <button
            type="button"
            className="p-2 text-primary hover:scale-110 transition-transform cursor-pointer"
            aria-label="Settings"
            title="Settings"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
          <div className="flex items-center ml-2">
            <div 
              onClick={auth.logout}
              title="Click to logout"
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30 shadow-sm cursor-pointer hover:border-primary transition-colors"
            >
              <img 
                src={avatarImg} 
                alt="Researcher Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex pt-20">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-80 bg-[#faf9f8] text-[#111d23] p-6 min-h-[calc(100vh-80px)] gap-8 border-r-2 border-[#111d23] fixed left-0 top-20 bottom-0 overflow-y-auto z-30">
          <div className="px-2">
            <div className="font-label-mono text-[10px] tracking-wider text-slate-500 uppercase mb-1">Lead Investigator</div>
            <h3 className="font-headline-xl text-primary font-extrabold text-[22px] leading-tight tracking-tight uppercase">
              {auth.user?.name || 'Lab Chief'}
            </h3>
            <div className="font-label-mono text-[10px] text-slate-500 mt-1">Level 4 Collider</div>
          </div>

          <nav className="flex flex-col gap-4">
            {sidebarItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={[
                    'flex items-center gap-3 px-4 py-3 rounded font-label-mono text-label-mono border-2 transition-all duration-200',
                    isActive
                      ? 'bg-primary text-white border-[#111d23] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                      : 'text-[#111d23] border-transparent hover:bg-[#111d23]/5',
                  ].join(' ')}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.label === 'FRIEND FEEDS' && (
                    <span className="w-2.5 h-2.5 rounded-full bg-primary ml-auto animate-pulse" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Sheldon Cooper Dossier Card */}
          <div className="border-2 border-[#111d23] bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 rounded">
            <div className="font-label-mono text-[9px] tracking-wider text-slate-500 uppercase mb-3 font-bold">
              Made For sheldon Cooper
            </div>
            <div className="border-2 border-[#111d23] bg-surface-container-lowest overflow-hidden aspect-square w-full mb-3 rounded relative shadow-sm">
              <img
                src={sheldonAvatar}
                alt="Sheldon Cooper"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-2 left-2 bg-[#9cf0ff] text-[#001f24] font-sticker-text text-[9px] px-2 py-0.5 border border-[#111d23] uppercase tracking-wider font-extrabold shadow-sm rounded">
                Advisor mode: ON
              </div>
            </div>
            <div className="min-w-0">
              <div className="font-headline-lg-mobile text-[15px] text-[#111d23] font-extrabold tracking-tight">
                Sheldon Cooper
              </div>
              <div className="mt-1.5 font-label-mono text-[10px] text-slate-600 leading-relaxed">
                Ask for optimal gift collisions. Avoid sock particles.
              </div>
            </div>
          </div>

          <button 
            type="button"
            className="flex items-center justify-center gap-2 mt-auto px-4 py-3 rounded font-label-mono text-label-mono bg-[#0a2327] text-white border-2 border-[#111d23] shadow-[4px_4px_0px_0px_#00daf3] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#00daf3] transition-all duration-200 uppercase cursor-pointer"
          >
            <span>New Experiment</span>
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 pb-20 lg:ml-80">{children}</main>
      </div>
    </div>
  );
}
