import { useState } from 'react';
import { collection, getDocs, limit, query } from 'firebase/firestore';
import { db } from '../services/firebase';
import { ensureAnonymousAuth } from '../services/anonAuth';

export default function FirebaseHealthCheck() {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  async function runCheck() {
    setStatus('checking');
    setMessage('Checking Firestore connection...');
    try {
      await ensureAnonymousAuth();
      const snap = await getDocs(query(collection(db, 'users'), limit(1)));
      setStatus('ok');
      setMessage(`Connected. users docs visible: ${snap.size}`);
    } catch (err) {
      setStatus('error');
      setMessage(`Connection failed: ${err?.message || 'Unknown error'}`);
    }
  }

  return (
    <div className="border-2 border-on-surface-variant bg-surface-container-low/70 backdrop-blur-md p-4">
      <div className="font-label-mono text-label-mono uppercase text-on-surface-variant mb-2">
        Firebase Health
      </div>
      <button
        type="button"
        onClick={runCheck}
        disabled={status === 'checking'}
        className="bg-primary-container text-on-primary-container px-4 py-2 font-label-mono text-label-mono uppercase border-2 border-on-surface-variant shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none transition-all"
      >
        {status === 'checking' ? 'Checking...' : 'Run Backend Check'}
      </button>
      {message && (
        <div
          className={[
            'mt-3 font-label-mono text-[10px] border-2 border-on-surface-variant p-2',
            status === 'error'
              ? 'bg-error-container text-on-error-container'
              : status === 'ok'
                ? 'bg-tertiary-fixed/30 text-on-surface'
                : 'bg-surface-variant text-on-surface-variant',
          ].join(' ')}
        >
          {message}
        </div>
      )}
    </div>
  );
}
