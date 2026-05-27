import { useEffect, useState } from 'react';
import AppShell from '../components/AppShell';
import { addMyGift, getMyGifts, removeGift } from '../services/api';

export default function MyGiftsPage({ auth }) {
  const [form, setForm] = useState({ name: '', url: '', priority: 'High', intensity: 50 });
  const [items, setItems] = useState([]);
  const [viewMode, setViewMode] = useState('grid');

  async function load() {
    const data = await getMyGifts(auth.user.id);
    setItems(data);
  }

  useEffect(() => { load(); }, []);

  async function submit(e) {
    e.preventDefault();
    await addMyGift(auth.user.id, form);
    setForm({ name: '', url: '', priority: 'High', intensity: 50 });
    await load();
  }

  return (
    <div className="bg-red-atmosphere bg-dots min-h-screen">
      <AppShell auth={auth}>
        <div className="pt-8 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-gutter items-start">
            <section className="lg:col-span-4 bg-surface-container-low/90 backdrop-blur-xl border-2 border-on-surface-variant p-gutter shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
              <div className="absolute -top-4 -right-2 bg-primary-container text-on-primary-container px-3 py-1 font-sticker-text text-sticker-text sticker-rotate-pos shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                LAB LOG #092
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Particle Intake</h2>
              <form className="space-y-6" onSubmit={submit}>
                <div className="flex flex-col gap-2">
                  <label className="font-label-mono text-label-mono text-on-surface-variant uppercase">Specimen Name</label>
                  <input
                    className="bg-surface border-2 border-on-surface-variant p-3 font-label-mono focus:ring-0 focus:border-primary transition-colors"
                    placeholder="e.g., Quantum Mechanical Keyboard"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-mono text-label-mono text-on-surface-variant uppercase">Resource URI (Link)</label>
                  <input
                    className="bg-surface border-2 border-on-surface-variant p-3 font-label-mono focus:ring-0 focus:border-primary transition-colors"
                    placeholder="https://store.collider.lab/item-24"
                    type="url"
                    value={form.url}
                    onChange={(e) => setForm({ ...form, url: e.target.value })}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-mono text-label-mono text-on-surface-variant uppercase">Scientific Priority</label>
                  <select
                    className="bg-surface border-2 border-on-surface-variant p-3 font-label-mono focus:ring-0 focus:border-primary transition-colors"
                    value={form.priority}
                    onChange={(e) => setForm({ ...form, priority: e.target.value })}
                  >
                    <option>Critical</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                    Desire Intensity (Voltage): {form.intensity}%
                  </label>
                  <input
                    className="w-full accent-primary h-2 bg-surface-variant rounded-full appearance-none"
                    max="100"
                    min="0"
                    type="range"
                    value={form.intensity}
                    onChange={(e) => setForm({ ...form, intensity: Number(e.target.value) })}
                  />
                </div>
                <button
                  className="w-full bg-primary text-on-primary py-4 border-2 border-on-surface-variant font-headline-lg text-headline-lg-mobile shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:translate-x-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:translate-x-[2px] active:shadow-none transition-all"
                  type="submit"
                >
                  INITIATE COLLISION
                </button>
              </form>
            </section>

            <section className="lg:col-span-6">
              {/* Personal Database Header Card with better contrast */}
              <div className="flex justify-between items-center mb-8 bg-black/40 backdrop-blur-md p-6 border-2 border-[#111d23] rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div>
                  <h2 className="font-headline-xl text-[24px] md:text-[28px] text-white font-extrabold tracking-tight uppercase">Personal Database</h2>
                  <p className="font-label-mono text-[10px] text-slate-300 mt-1 uppercase tracking-wider">
                    SECURE ENCRYPTED STORAGE // {items.length} ACTIVE PARTICLES
                  </p>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                    title={`Switch to ${viewMode === 'grid' ? 'List' : 'Grid'} View`}
                    className="p-2.5 border-2 border-[#111d23] bg-white hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px] rounded flex items-center justify-center text-[#111d23]" 
                    type="button"
                  >
                    {viewMode === 'grid' ? (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="8" y1="6" x2="21" y2="6" />
                        <line x1="8" y1="12" x2="21" y2="12" />
                        <line x1="8" y1="18" x2="21" y2="18" />
                        <line x1="3" y1="6" x2="3.01" y2="6" strokeWidth="3" />
                        <line x1="3" y1="12" x2="3.01" y2="12" strokeWidth="3" />
                        <line x1="3" y1="18" x2="3.01" y2="18" strokeWidth="3" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {viewMode === 'grid' ? (
                /* Grid View */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="group relative bg-white border-2 border-[#111d23] p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded hover:translate-y-[-2px] transition-all duration-200 flex flex-col justify-between min-h-[200px]"
                    >
                      <div className="absolute -top-3.5 -left-2 bg-primary text-white px-3 py-1 font-sticker-text text-[10px] rounded tracking-wider uppercase border border-[#111d23] shadow-sm">
                        {String(item.priority || 'HIGH').toUpperCase()} PRIORITY
                      </div>
                      <div className="font-label-mono text-[9px] text-slate-400 mb-2 mt-2">
                        ID: {item.id.slice(0, 10).toUpperCase()}
                      </div>
                      <h3 className="font-headline-lg text-[18px] text-[#111d23] font-bold mb-3">{item.name}</h3>
                      
                      <div className="space-y-3 mt-auto">
                        <div className="flex justify-between font-label-mono text-[9px] uppercase text-slate-500">
                          <span>Desire Intensity</span>
                          <span className="font-bold">{item.intensity ?? 0}%</span>
                        </div>
                        <div className="h-2.5 bg-slate-100 border border-[#111d23] overflow-hidden rounded-full">
                          <div className="h-full bg-primary rounded-full" style={{ width: `${item.intensity ?? 0}%` }} />
                        </div>
                      </div>
                      
                      <div className="mt-5 flex gap-2">
                        {item.url ? (
                          <a
                            className="flex-1 text-center border-2 border-[#111d23] py-2 font-label-mono text-xs rounded hover:bg-slate-50 transition-colors cursor-pointer text-[#111d23] font-bold"
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            OPEN LINK
                          </a>
                        ) : (
                          <span className="flex-1 text-center border-2 border-dashed border-slate-200 py-2 font-label-mono text-xs rounded text-slate-400">
                            NO LINK
                          </span>
                        )}
                        <button
                          className="border-2 border-primary text-primary px-3 py-2 font-label-mono text-xs rounded hover:bg-primary hover:text-white transition-colors cursor-pointer font-bold"
                          type="button"
                          onClick={() => removeGift('selfGifts', item.id).then(load)}
                        >
                          DELETE
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* List View */
                <div className="flex flex-col gap-4 relative z-10">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="group relative bg-white border-2 border-[#111d23] p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <div className="flex flex-col gap-1.5 md:max-w-[65%] w-full">
                        <div className="flex items-center gap-3">
                          <span className="bg-primary text-white px-2.5 py-0.5 font-sticker-text text-[10px] rounded tracking-wider uppercase border border-[#111d23]">
                            {String(item.priority || 'HIGH').toUpperCase()} PRIORITY
                          </span>
                          <span className="font-label-mono text-[9px] text-slate-400">
                            ID: {item.id.slice(0, 10).toUpperCase()}
                          </span>
                        </div>
                        <h3 className="font-headline-lg text-[18px] text-[#111d23] font-bold mt-2">{item.name}</h3>
                        
                        <div className="w-full mt-3">
                          <div className="flex justify-between font-label-mono text-[9px] uppercase text-slate-500 mb-1">
                            <span>Desire Intensity</span>
                            <span className="font-bold">{item.intensity ?? 0}%</span>
                          </div>
                          <div className="h-2.5 bg-slate-100 border border-[#111d23] overflow-hidden rounded-full">
                            <div className="h-full bg-primary rounded-full" style={{ width: `${item.intensity ?? 0}%` }} />
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 shrink-0 self-end md:self-center w-full md:w-auto mt-2 md:mt-0 justify-end">
                        {item.url ? (
                          <a
                            className="border-2 border-[#111d23] px-4 py-2 font-label-mono text-xs rounded hover:bg-slate-50 transition-colors cursor-pointer text-[#111d23] font-bold text-center"
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            OPEN LINK
                          </a>
                        ) : (
                          <span className="border-2 border-dashed border-slate-200 px-4 py-2 font-label-mono text-xs rounded text-slate-400 text-center">
                            NO LINK
                          </span>
                        )}
                        <button
                          className="border-2 border-primary text-primary px-4 py-2 font-label-mono text-xs rounded hover:bg-primary hover:text-white transition-colors cursor-pointer font-bold text-center"
                          type="button"
                          onClick={() => removeGift('selfGifts', item.id).then(load)}
                        >
                          DELETE
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </AppShell>
    </div>
  );
}
