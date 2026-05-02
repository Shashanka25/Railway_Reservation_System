'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';

function SearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const fromStr = searchParams.get('from') || 'New Delhi (NDLS)';
  const toStr = searchParams.get('to') || 'Varanasi (BSB)';
  const dateStr = searchParams.get('date') || '15 May 2025';
  
  const fromCity = fromStr.split(' (')[0] || 'New Delhi';
  const toCity = toStr.split(' (')[0] || 'Varanasi';
  
  const fromCode = fromStr.match(/\(([^)]+)\)/)?.[1] || 'NDLS';
  const toCode = toStr.match(/\(([^)]+)\)/)?.[1] || 'BSB';
  
  // Generate a consistent mock distance
  let hash = 0;
  const strForHash = fromCode + toCode;
  for (let i = 0; i < strForHash.length; i++) {
    hash = strForHash.charCodeAt(i) + ((hash << 5) - hash);
  }
  const distance = 300 + (Math.abs(hash) % 1500);

  const [activeFilters, setActiveFilters] = useState<string[]>(['RailConnect Exp']);
  const [activeDeparture, setActiveDeparture] = useState<string>('Morning');

  function toggleFilter(name: string) {
    setActiveFilters(prev =>
      prev.includes(name) ? prev.filter(f => f !== name) : [...prev, name]
    );
  }

  return (
    <main className="mt-24 px-8 max-w-screen-2xl mx-auto pb-24">
{/* Search Info Header (Asymmetric Layout) */}
<div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
<div className="max-w-2xl">
<h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4 leading-none">
                    {fromCity} <span className="text-orange-500">→</span> {toCity}
                </h1>
<p className="text-body-lg text-on-surface-variant max-w-md">
                    Experience the future of Indian rail. Premium high-speed connections for your spiritual journey.
                </p>
</div>
<div className="bg-surface-container-low p-6 rounded-xl flex flex-wrap gap-8 items-center border border-outline-variant/10">
<div>
<p className="text-[10px] uppercase tracking-widest font-bold text-outline mb-1">Travel Date</p>
<p className="font-bold text-lg">{dateStr}</p>
</div>
<div>
<p className="text-[10px] uppercase tracking-widest font-bold text-outline mb-1">Passengers</p>
<p className="font-bold text-lg">02 Adults</p>
</div>
<button
  onClick={() => router.push('/')}
  className="kinetic-gradient text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all cursor-pointer"
>
                    Modify Search
                </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
{/* Filters Sidebar (Surface Tiering) */}
<aside className="lg:col-span-3 sticky top-32 space-y-8">
<div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
<h3 className="font-bold text-xl mb-6">Refine Results</h3>
{/* Train Type Filter */}
<div className="mb-8">
<p className="text-[10px] uppercase tracking-widest font-black text-primary mb-4">Train Type</p>
<div className="space-y-3">
{['RailConnect Exp', 'Rajdhani', 'Shatabdi'].map(name => (
  <label key={name} className="flex items-center gap-3 cursor-pointer group">
    <input
      type="checkbox"
      checked={activeFilters.includes(name)}
      onChange={() => toggleFilter(name)}
      className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer"
    />
    <span className={`font-medium group-hover:text-primary transition-colors ${activeFilters.includes(name) ? 'text-primary' : ''}`}>{name}</span>
  </label>
))}
</div>
</div>
{/* Departure Time */}
<div>
<p className="text-[10px] uppercase tracking-widest font-black text-primary mb-4">Departure</p>
<div className="grid grid-cols-2 gap-2">
{['Early Morning', 'Morning', 'Afternoon', 'Night'].map(time => (
  <button
    key={time}
    onClick={() => setActiveDeparture(time)}
    className={`p-3 rounded-lg text-sm font-bold transition-all cursor-pointer ${
      activeDeparture === time
        ? 'bg-primary-container text-on-primary-container'
        : 'bg-surface-container-low hover:bg-primary-container hover:text-on-primary-container'
    }`}
  >{time}</button>
))}
</div>
</div>
</div>
<div className="rounded-xl overflow-hidden relative h-64 group cursor-pointer shadow-lg" onClick={() => router.push('/seat-selection?class=Executive+Class')}>
<img alt="Vande Bharat train moving through the scenic Western Ghats at high speed" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBixMLwkMIVuA9CwEcWjbRnp7V9MUDvTwrZLsMnMbnW_iJCxQGoYmwwMUeWUe5VJC68RrvVYmG0a7ubJrqkbQ48zhQHEoy-kQFbDyFQX4jaSDvDt1ycKtzWeR0Mq-eAfGOjE6rCpNHaYxHPxMCT37jIH1scMrMdeCh3vCKGgOj8AYgY4HhuofCC0fCb1aIy7XaHifbV6XHqER9_Sx_PosPNsIZliwvLPVnDMBJe53BlNpNSq1GKTSnq6dyMY9qpcD0kexxIbMdZQdQ7"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
<p className="text-white font-black text-lg leading-tight mb-1">Upgrade to Executive Class</p>
<p className="text-white/70 text-xs">Experience world-class hospitality on wheels.</p>
</div>
</div>
</aside>
{/* Results List (Tonal Layering) */}
<div className="lg:col-span-9 space-y-6">
{/* Train Card 1: Vande Bharat */}
<div className="bg-surface-container-lowest rounded-xl p-1 shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden border border-outline-variant/10">
<div className="bg-primary/5 px-8 py-3 flex justify-between items-center">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>speed</span>
<span className="font-black text-primary tracking-widest text-xs uppercase">Premium High Speed</span>
</div>
<span className="text-[10px] font-bold text-on-surface-variant">Operates Daily</span>
</div>
<div className="p-8">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
<div className="flex-1">
<h2 className="text-2xl font-black mb-1">RailConnect Express (22436)</h2>
<p className="text-sm text-outline font-medium">{fromCode} <span className="material-symbols-outlined align-middle text-sm">arrow_forward</span> {toCode}</p>
</div>
<div className="flex items-center gap-12 text-center">
<div>
<p className="text-2xl font-black">06:00</p>
<p className="text-[10px] font-bold text-outline">{fromCity.toUpperCase()}</p>
</div>
<div className="flex flex-col items-center min-w-[120px]">
<p className="text-[10px] font-black text-primary uppercase tracking-tighter mb-1">08h 00m</p>
<div className="w-full h-[2px] bg-outline-variant relative">
<div className="absolute -top-1 left-0 w-2 h-2 rounded-full bg-outline"></div>
<div className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(143,78,0,0.5)]"></div>
</div>
<p className="text-[10px] font-bold text-outline mt-1 uppercase">Direct • {distance} km</p>
</div>
<div>
<p className="text-2xl font-black">14:00</p>
<p className="text-[10px] font-bold text-outline">{toCity.toUpperCase()}</p>
</div>
</div>
</div>
{/* Class Toggles (Bento-style selection) */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
<Link href="/seat-selection?class=Executive+Class" className="p-4 rounded-lg bg-primary-container text-on-primary-container ring-2 ring-primary ring-offset-2 flex flex-col items-start transition-all cursor-pointer hover:opacity-90">
<span className="font-black text-sm">EC</span>
<span className="text-xl font-bold mt-1">₹3,120</span>
<span className="text-[10px] font-bold mt-1 opacity-70">AVAILABLE 24</span>
</Link>
<Link href="/seat-selection?class=AC+Chair+Car" className="p-4 rounded-lg bg-surface-container-low hover:bg-surface-container-high flex flex-col items-start transition-all cursor-pointer">
<span className="font-black text-sm">CC</span>
<span className="text-xl font-bold mt-1">₹1,750</span>
<span className="text-[10px] font-bold mt-1 text-tertiary">AVAILABLE 82</span>
</Link>
<button className="p-4 rounded-lg bg-surface-container-low opacity-50 cursor-not-allowed flex flex-col items-start transition-all" disabled title="Not applicable for this train">
<span className="font-black text-sm">1A</span>
<span className="text-xl font-bold mt-1">N/A</span>
<span className="text-[10px] font-bold mt-1 text-error">NOT APPLICABLE</span>
</button>
<button className="p-4 rounded-lg bg-surface-container-low opacity-50 cursor-not-allowed flex flex-col items-start transition-all" disabled title="Not applicable for this train">
<span className="font-black text-sm">2A</span>
<span className="text-xl font-bold mt-1">N/A</span>
<span className="text-[10px] font-bold mt-1 text-error">NOT APPLICABLE</span>
</button>
</div>
</div>
</div>
{/* Train Card 2: Rajdhani */}
<div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm hover:shadow-md transition-all border border-outline-variant/10">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
<div className="flex-1">
<h2 className="text-2xl font-black mb-1">NDLS BSB Rajdhani (20504)</h2>
<p className="text-sm text-outline font-medium">{fromCode} <span className="material-symbols-outlined align-middle text-sm">arrow_forward</span> {toCode}</p>
</div>
<div className="flex items-center gap-12 text-center">
<div>
<p className="text-2xl font-black">19:10</p>
<p className="text-[10px] font-bold text-outline uppercase">{fromCity}</p>
</div>
<div className="flex flex-col items-center min-w-[120px]">
<p className="text-[10px] font-black text-secondary uppercase tracking-tighter mb-1">09h 45m</p>
<div className="w-full h-[2px] bg-outline-variant relative">
<div className="absolute -top-1 left-0 w-2 h-2 rounded-full bg-outline"></div>
<div className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-secondary"></div>
</div>
<p className="text-[10px] font-bold text-outline mt-1 uppercase">Direct • {distance} km</p>
</div>
<div>
<p className="text-2xl font-black">04:55</p>
<p className="text-[10px] font-bold text-outline uppercase">{toCity}</p>
</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
<button
  className="p-4 rounded-lg bg-surface-container-low hover:bg-surface-container-high flex flex-col items-start transition-all cursor-pointer"
  onClick={() => alert('Waiting list: 1A class has 4 passengers ahead. You can still book — your ticket will be confirmed if someone cancels.')}
>
<span className="font-black text-sm">1A</span>
<span className="text-xl font-bold mt-1">₹3,450</span>
<span className="text-[10px] font-bold mt-1 text-error">WAITING 04</span>
</button>
<Link href="/seat-selection?class=2nd+AC" className="p-4 rounded-lg bg-surface-container-low hover:bg-surface-container-high flex flex-col items-start transition-all cursor-pointer">
<span className="font-black text-sm">2A</span>
<span className="text-xl font-bold mt-1">₹2,050</span>
<span className="text-[10px] font-bold mt-1 text-tertiary">AVAILABLE 12</span>
</Link>
<Link href="/seat-selection?class=3rd+AC" className="p-4 rounded-lg bg-surface-container-low hover:bg-surface-container-high flex flex-col items-start transition-all cursor-pointer">
<span className="font-black text-sm">3A</span>
<span className="text-xl font-bold mt-1">₹1,450</span>
<span className="text-[10px] font-bold mt-1 text-tertiary">AVAILABLE 45</span>
</Link>
<div className="flex items-center justify-center border-2 border-dashed border-outline-variant rounded-lg cursor-pointer hover:border-primary transition-colors" onClick={() => alert('More class options: SL (Sleeper) — ₹890 (Available), 2S (Second Sitting) — ₹310 (Available 120)')}>
<p className="text-[10px] font-bold text-outline">MORE CLASSES</p>
</div>
</div>
</div>
{/* Train Card 3: Shatabdi */}
<div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm hover:shadow-md transition-all border border-outline-variant/10">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
<div className="flex-1">
<h2 className="text-2xl font-black mb-1">New Delhi Shatabdi (12002)</h2>
<p className="text-sm text-outline font-medium">{fromCode} <span className="material-symbols-outlined align-middle text-sm">arrow_forward</span> {toCode}</p>
</div>
<div className="flex items-center gap-12 text-center">
<div>
<p className="text-2xl font-black">06:10</p>
<p className="text-[10px] font-bold text-outline uppercase">{fromCity}</p>
</div>
<div className="flex flex-col items-center min-w-[120px]">
<p className="text-[10px] font-black text-secondary uppercase tracking-tighter mb-1">08h 15m</p>
<div className="w-full h-[2px] bg-outline-variant relative">
<div className="absolute -top-1 left-0 w-2 h-2 rounded-full bg-outline"></div>
<div className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-secondary"></div>
</div>
<p className="text-[10px] font-bold text-outline mt-1 uppercase">Direct • {distance} km</p>
</div>
<div>
<p className="text-2xl font-black">14:25</p>
<p className="text-[10px] font-bold text-outline uppercase">{toCity}</p>
</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
<button
  className="p-4 rounded-lg bg-surface-container-low hover:bg-surface-container-high flex flex-col items-start transition-all cursor-pointer"
  onClick={() => alert('Waiting list: EC class has 12 passengers ahead. You may still book — tickets confirm closer to the journey date.')}
>
<span className="font-black text-sm">EC</span>
<span className="text-xl font-bold mt-1">₹2,840</span>
<span className="text-[10px] font-bold mt-1 text-error">WAITING 12</span>
</button>
<Link href="/seat-selection?class=AC+Chair+Car" className="p-4 rounded-lg bg-surface-container-low hover:bg-surface-container-high flex flex-col items-start transition-all cursor-pointer">
<span className="font-black text-sm">CC</span>
<span className="text-xl font-bold mt-1">₹1,620</span>
<span className="text-[10px] font-bold mt-1 text-tertiary">AVAILABLE 08</span>
</Link>
</div>
</div>
</div>
</div>
</main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="pt-32 text-center">Loading search results...</div>}>
      <SearchContent />
    </Suspense>
  );
}