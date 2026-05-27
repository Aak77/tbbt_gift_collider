import { useEffect, useMemo, useState } from 'react';
import AppShell from '../components/AppShell';
import { getMyGifts, listUsers } from '../services/api';

export default function FeedsPage({ auth }) {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [gifts, setGifts] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingGifts, setLoadingGifts] = useState(false);
  const [error, setError] = useState('');

  const selectedUser = useMemo(
    () => users.find((u) => u.id === selectedUserId) || null,
    [users, selectedUserId],
  );

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoadingUsers(true);
      setError('');
      try {
        const all = await listUsers();
        if (!mounted) return;
        setUsers(all);
        const defaultPick = all.find((u) => u.id !== auth.user?.id) || all[0] || null;
        setSelectedUserId(defaultPick?.id || '');
      } catch (e) {
        if (!mounted) return;
        setError(e?.message || 'Failed to load users');
      } finally {
        if (mounted) setLoadingUsers(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [auth.user?.id]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (!selectedUserId) {
        setGifts([]);
        return;
      }
      setLoadingGifts(true);
      setError('');
      try {
        const list = await getMyGifts(selectedUserId);
        if (!mounted) return;
        // Prefer showing high intensity first.
        list.sort((a, b) => (Number(b.intensity || 0) - Number(a.intensity || 0)));
        setGifts(list);
      } catch (e) {
        if (!mounted) return;
        setError(e?.message || 'Failed to load gifts');
      } finally {
        if (mounted) setLoadingGifts(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [selectedUserId]);

  return (
    <div className="bg-red-atmosphere bg-dots min-h-screen overflow-x-hidden">
      <AppShell auth={auth}>
        <div className="pt-6 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col lg:flex-row gap-gutter">
            <aside className="w-full lg:w-[35%] flex flex-col gap-6">
              <div className="glass-panel border-2 border-on-surface-variant p-6 rounded-none relative">
                <div className="absolute -top-3 -right-3 bg-tertiary-fixed-dim text-on-tertiary-fixed font-sticker-text text-sticker-text px-3 py-1 border-2 border-on-surface-variant shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-2">
                  ACTIVE LAB
                </div>
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">group</span>
                  Fellow Researchers
                </h2>

                {loadingUsers ? (
                  <div className="font-label-mono text-label-mono text-on-surface-variant">Loading...</div>
                ) : users.length === 0 ? (
                  <div className="font-label-mono text-label-mono text-on-surface-variant">
                    No users found in Firestore `users` collection.
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    {users
                      .filter((u) => u.id !== auth.user?.id)
                      .map((u) => {
                        const active = u.id === selectedUserId;
                        return (
                          <button
                            key={u.id}
                            type="button"
                            onClick={() => setSelectedUserId(u.id)}
                            className={[
                              'text-left border-2 border-on-surface-variant p-3 flex items-center gap-3',
                              active
                                ? 'bg-primary-container text-on-primary-container shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5'
                                : 'bg-surface-container-low hover:bg-surface-container-high transition-colors',
                            ].join(' ')}
                          >
                            <div className="w-10 h-10 rounded-full bg-surface-variant border-2 border-on-surface-variant flex items-center justify-center">
                              <span className="material-symbols-outlined text-primary">science</span>
                            </div>
                            <div className="min-w-0">
                              <div className="font-headline-lg-mobile text-sm truncate">
                                {u.name || u.researcherId || u.id.slice(0, 6)}
                              </div>
                              <div className="font-label-mono text-[10px] uppercase opacity-80 truncate">
                                {u.researcherId || u.id}
                              </div>
                            </div>
                            <div className="ml-auto">
                              <span className="material-symbols-outlined">{active ? 'radar' : 'chevron_right'}</span>
                            </div>
                          </button>
                        );
                      })}
                  </div>
                )}
              </div>
            </aside>

            <section className="w-full lg:w-[65%]">
              <div className="glass-panel border-2 border-on-surface-variant p-6 md:p-8 rounded-none min-h-[600px] relative overflow-hidden">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
                  <div>
                    <p className="font-label-mono text-label-mono text-tertiary uppercase mb-1">
                      Observation Target: {selectedUser?.researcherId || 'N/A'}
                    </p>
                    <h1 className="font-headline-xl text-headline-xl text-on-surface leading-tight">
                      {selectedUser?.name ? `${selectedUser.name}'s Gift List` : "Subject's Gift List"}
                    </h1>
                    <p className="font-label-mono text-label-mono text-on-surface-variant mt-2">
                      {loadingGifts ? 'Collecting particles...' : `${gifts.length} particles detected`}
                    </p>
                  </div>
                </div>

                {error ? (
                  <div className="bg-error-container text-on-error-container border-2 border-on-surface-variant p-4 font-label-mono text-[10px]">
                    {error}
                  </div>
                ) : null}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  {gifts.map((item) => (
                    <div
                      key={item.id}
                      className="group relative bg-surface-container-lowest border-2 border-on-surface-variant p-4 hover:translate-y-[-4px] transition-all glow-cyan"
                    >
                      <div className="absolute -top-3 -left-2 bg-tertiary text-on-tertiary px-3 py-1 font-sticker-text text-sticker-text sticker-rotate-neg z-10">
                        {(item.priority || 'HIGH').toString().toUpperCase()}
                      </div>
                      <div className="font-label-mono text-[10px] text-on-surface-variant mb-2">
                        ID: {item.id.slice(0, 10).toUpperCase()}
                      </div>
                      <h3 className="font-headline-lg text-headline-lg-mobile mb-2">{item.name}</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between font-label-mono text-[10px] uppercase">
                          <span>Desire Intensity</span>
                          <span>{item.intensity ?? 0}%</span>
                        </div>
                        <div className="h-3 bg-surface-container-high border border-on-surface-variant overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${item.intensity ?? 0}%` }} />
                        </div>
                      </div>
                      {item.url ? (
                        <a
                          className="mt-4 block w-full text-center border-2 border-on-surface-variant p-2 font-label-mono text-label-mono hover:bg-surface-variant transition-colors"
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          OPEN LINK
                        </a>
                      ) : (
                        <div className="mt-4 w-full text-center border-2 border-on-surface-variant p-2 font-label-mono text-label-mono text-on-surface-variant">
                          NO LINK
                        </div>
                      )}
                    </div>
                  ))}

                  {!loadingGifts && gifts.length === 0 ? (
                    <div className="border-2 border-on-surface-variant p-6 bg-surface-container-lowest text-on-surface-variant">
                      No gifts found for this researcher yet.
                    </div>
                  ) : null}
                </div>
              </div>
            </section>
          </div>
        </div>
      </AppShell>
    </div>
  );
}

