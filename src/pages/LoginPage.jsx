import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyManualUser } from '../services/api';
import FirebaseHealthCheck from '../components/FirebaseHealthCheck';

export default function LoginPage({ auth }) {
  const [researcherId, setResearcherId] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      <main className="min-h-screen flex items-center justify-center px-margin-mobile relative z-10">
        <div className="w-full max-w-md bg-surface/95 backdrop-blur-md border-4 border-on-primary-fixed shadow-[8px_8px_0px_0px_rgba(63,0,22,1)] p-8 md:p-12 flex flex-col items-center relative">
          <div className="text-center mb-10 transform -rotate-1">
            <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-primary uppercase tracking-tighter leading-none italic">
              GIFT COLLIDER
            </h1>
            <div className="inline-block bg-tertiary-fixed text-on-tertiary-fixed font-sticker-text text-sticker-text px-3 py-1 mt-2 transform rotate-2 border-2 border-on-surface">
              EXPERIMENTAL UNIT
            </div>
          </div>

          <form className="w-full space-y-6" onSubmit={onSubmit}>
            <div className="space-y-2">
              <label className="font-label-mono text-label-mono text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">id_card</span>
                RESEARCHER_ID
              </label>
              <input
                className="w-full bg-surface-container-lowest border-2 border-on-surface-variant px-4 py-3 font-label-mono focus:outline-none focus:ring-4 focus:ring-tertiary-fixed/50 transition-all placeholder:text-outline-variant"
                placeholder="COLLIDER_ADMIN_01"
                value={researcherId}
                onChange={(e) => setResearcherId(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="font-label-mono text-label-mono text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">lock</span>
                ACCESS_SEQUENCE
              </label>
              <input
                className="w-full bg-surface-container-lowest border-2 border-on-surface-variant px-4 py-3 font-label-mono focus:outline-none focus:ring-4 focus:ring-tertiary-fixed/50 transition-all placeholder:text-outline-variant"
                placeholder="••••••••"
                type="password"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                required
              />
            </div>

            <div className="pt-2">
              <button
                className="w-full bg-tertiary text-on-tertiary font-headline-lg text-headline-lg-mobile md:text-headline-lg py-4 border-2 border-on-surface shadow-[4px_4px_0px_0px_rgba(0,31,36,1)] transition-all flex items-center justify-center gap-3 active:translate-y-[2px] active:shadow-none"
                disabled={loading}
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  bolt
                </span>
                {loading ? 'CHECKING...' : 'INITIATE COLLISION'}
              </button>
            </div>

            {error && (
              <div className="bg-error-container text-on-error-container border-2 border-on-surface-variant p-3 font-label-mono text-[10px]">
                {error}
              </div>
            )}
          </form>

          <div className="mt-8 w-full">
            <FirebaseHealthCheck />
          </div>

          <div className="absolute -bottom-6 -left-6 bg-surface-variant text-on-surface-variant p-2 border-2 border-on-surface-variant font-label-mono text-[10px] transform -rotate-3 hidden md:block">
            SYSTEM_STATUS: STABLE
            <br />
            Uptime: 1,452 hrs
            <br />
            Core_Temp: 273.15 K
          </div>
        </div>
      </main>
    </div>
  );
}
