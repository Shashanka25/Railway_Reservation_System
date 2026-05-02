'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [showPNR, setShowPNR] = useState(false);
  const [pnrInput, setPnrInput] = useState('');
  const [pnrResult, setPnrResult] = useState('');
  const [showNotif, setShowNotif] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  function handlePNRCheck() {
    if (!pnrInput.trim()) {
      setPnrResult('Please enter a PNR number.');
      return;
    }
    // Simulated PNR result
    setPnrResult(`PNR ${pnrInput} → Train 22436 (RailConnect Express) | New Delhi → Varanasi | Oct 24, 2024 | Status: CONFIRMED | Seat: C2-24 (Window)`);
  }

  const navLinks = [
    { label: 'Schedules', href: '/search' },
    { label: 'PNR Status', href: '#', action: () => setShowPNR(v => !v) },
    { label: 'Station Info', href: '#', action: () => alert('🏛️ Station Info\n\nNew Delhi (NDLS): Platform 1-16, Enquiry: 139\nVaranasi Jn (BSB): Platform 1-9, Enquiry: 139\nMumbai CST (CSMT): Platform 1-18, Enquiry: 139') },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-xl shadow-slate-900/5">
        <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-12">
            <Link href="/" className="text-2xl font-black tracking-tighter text-orange-600 dark:text-orange-500 uppercase font-headline">
              RailConnect
            </Link>
            <div className="hidden md:flex gap-8 items-center">
              {navLinks.map(link => (
                link.action ? (
                  <button
                    key={link.label}
                    onClick={link.action}
                    className={`font-headline tracking-tight font-bold transition-colors duration-300 cursor-pointer ${
                      link.label === 'PNR Status' && showPNR
                        ? 'text-orange-600 border-b-2 border-orange-600 pb-1'
                        : 'text-slate-600 dark:text-slate-400 hover:text-orange-500'
                    }`}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`font-headline tracking-tight font-bold transition-colors duration-300 ${
                      pathname === link.href
                        ? 'text-orange-600 border-b-2 border-orange-600 pb-1'
                        : 'text-slate-600 dark:text-slate-400 hover:text-orange-500'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6 relative">
            <div className="relative">
              <button
                onClick={() => { setShowNotif(v => !v); setShowProfile(false); }}
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-orange-500 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined">notifications</span>
              </button>
              {showNotif && (
                <div className="absolute right-0 top-full mt-3 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-outline-variant/20 p-4 w-72 z-50">
                  <p className="font-bold text-sm mb-3 text-on-surface">Notifications</p>
                  <div className="space-y-3">
                    <div className="p-3 bg-primary/5 rounded-lg border-l-2 border-primary">
                      <p className="text-xs font-bold text-primary">BOOKING CONFIRMED</p>
                      <p className="text-xs text-on-surface-variant mt-1">Train 22436 | Oct 24 | PNR: 244-9812233</p>
                    </div>
                    <div className="p-3 bg-surface-container-low rounded-lg">
                      <p className="text-xs font-bold text-on-surface">LOYALTY POINTS</p>
                      <p className="text-xs text-on-surface-variant mt-1">You earned 150 points on your last booking!</p>
                    </div>
                    <div className="p-3 bg-surface-container-low rounded-lg">
                      <p className="text-xs font-bold text-on-surface">TRAIN ON TIME</p>
                      <p className="text-xs text-on-surface-variant mt-1">RailConnect Exp (22436) is running on schedule.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => { setShowProfile(v => !v); setShowNotif(false); }}
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-orange-500 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined">account_circle</span>
              </button>
              {showProfile && (
                <div className="absolute right-0 top-full mt-3 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-outline-variant/20 p-4 w-56 z-50">
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-outline-variant/20">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">person</span>
                    </div>
                    <div>
                      <p className="font-bold text-sm text-on-surface">Rajesh Kumar</p>
                      <p className="text-xs text-on-surface-variant">IRCTC Member</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {['My Bookings', 'Loyalty Points (150)', 'Profile Settings', 'Sign Out'].map(item => (
                      <button
                        key={item}
                        onClick={() => { setShowProfile(false); alert(`→ ${item}`); }}
                        className="w-full text-left px-3 py-2 text-sm text-on-surface-variant hover:bg-surface-container-low hover:text-primary rounded-lg transition-colors cursor-pointer"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* PNR Status Dropdown */}
        {showPNR && (
          <div className="border-t border-outline-variant/10 bg-white/95 dark:bg-slate-900/95 px-8 py-4 max-w-screen-2xl mx-auto">
            <div className="flex flex-wrap gap-3 items-center max-w-xl">
              <label className="text-xs font-bold uppercase tracking-widest text-outline">Check PNR Status</label>
              <input
                className="flex-1 min-w-[180px] bg-surface-container-highest rounded-lg px-4 py-2 text-sm font-medium border-none focus:ring-2 focus:ring-primary"
                placeholder="Enter 10-digit PNR number"
                value={pnrInput}
                onChange={e => { setPnrInput(e.target.value); setPnrResult(''); }}
                onKeyDown={e => e.key === 'Enter' && handlePNRCheck()}
              />
              <button
                onClick={handlePNRCheck}
                className="bg-orange-600 text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-orange-500 transition-colors cursor-pointer"
              >
                Check
              </button>
            </div>
            {pnrResult && (
              <p className="mt-3 text-sm text-on-surface bg-surface-container-low rounded-lg px-4 py-2 max-w-2xl">{pnrResult}</p>
            )}
          </div>
        )}
      </nav>
      {/* Overlay to close dropdowns */}
      {(showNotif || showProfile) && (
        <div className="fixed inset-0 z-40" onClick={() => { setShowNotif(false); setShowProfile(false); }} />
      )}
    </>
  );
}
