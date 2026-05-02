'use client';

import Link from 'next/link';
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const BOOKED_SEATS = [2, 5, 12, 18, 19, 24];

function SeatSelectionContent() {
  const searchParams = useSearchParams();
  const selectedClass = searchParams.get('class') || 'Executive Class';
  const isChairCar = ['Executive Class', 'AC Chair Car'].includes(selectedClass);

  const [selectedSeats, setSelectedSeats] = useState<number[]>([7]);
  const [preference, setPreference] = useState('No Preference');

  function toggleSeat(i: number) {
    if (BOOKED_SEATS.includes(i)) return;
    setSelectedSeats(prev =>
      prev.includes(i) ? prev.filter(s => s !== i) : [...prev, i]
    );
  }

  const baseFare = isChairCar ? 2845 : 1850;
  const catering = isChairCar ? 365 : 0;
  const taxes = 112;
  const total = (baseFare + catering + taxes) * selectedSeats.length;

  const preferenceOptions = isChairCar 
    ? ['No Preference', 'Window Seat', 'Aisle Seat']
    : ['No Preference', 'Lower', 'Middle', 'Upper', 'Side Lower', 'Side Upper'];

  return (
    <main className="pt-24 pb-12 px-4 md:px-8 max-w-screen-2xl mx-auto min-h-screen">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/* Left: Seat Selection Canvas */}
<div className="lg:col-span-8 space-y-8">
<div className="flex flex-col gap-2">
<h1 className="text-4xl md:text-5xl font-black tracking-tighter text-on-surface">{selectedClass}</h1>
<p className="text-on-surface-variant font-medium tracking-wide flex items-center gap-2">
<span className="material-symbols-outlined text-sm">info</span> Coach {isChairCar ? 'E1' : 'B1'} • {isChairCar ? '2x2 Premium Seating' : 'Sleeper Seating'}
                    </p>
</div>
{/* Legend */}
<div className="flex flex-wrap gap-6 p-6 bg-surface-container-low rounded-xl">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest"></div>
<span className="text-sm font-semibold tracking-tight uppercase text-on-surface-variant">Available</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-primary shadow-lg shadow-primary/20"></div>
<span className="text-sm font-semibold tracking-tight uppercase text-on-surface-variant">Selected</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-inverse-surface/10 flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant/40 text-lg">close</span>
</div>
<span className="text-sm font-semibold tracking-tight uppercase text-on-surface-variant">Booked</span>
</div>
</div>
{/* Train Coach Layout */}
<div className="bg-surface-container-low rounded-3xl p-8 md:p-12 relative overflow-hidden">
{/* Glass Texture Decoration */}
<div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 blur-3xl rounded-full"></div>
<div className="relative z-10 max-w-lg mx-auto">
{/* Front of Coach Indicator */}
<div className="flex flex-col items-center mb-12 opacity-40">
<span className="material-symbols-outlined text-4xl">arrow_upward</span>
<span className="text-xs font-bold tracking-[0.3em] uppercase mt-2">Front of Coach</span>
</div>

{isChairCar ? (
    <div className="grid grid-cols-5 gap-y-8">
    {Array.from({ length: 32 }).map((_, idx) => {
        const i = idx + 1;
        const isBooked = BOOKED_SEATS.includes(i);
        const isSelected = selectedSeats.includes(i);
        const seatLabel = Math.ceil(i/4) + String.fromCharCode(64 + ((i-1)%4 + 1));
        const colInRow = (i-1)%4;

        let classes = "w-12 h-14 md:w-16 md:h-18 rounded-xl flex flex-col items-center justify-center transition-all duration-300 relative group ";
        if (isBooked) {
            classes += "bg-inverse-surface/5 cursor-not-allowed";
        } else if (isSelected) {
            classes += "bg-primary text-white shadow-xl shadow-primary/30 scale-105 cursor-pointer";
        } else {
            classes += "bg-surface-container-highest hover:bg-primary-container/20 hover:scale-105 cursor-pointer";
        }

        return (
            <div key={i} className="contents">
                {colInRow === 2 && (
                    <div className="col-span-1 flex items-center justify-center text-[10px] font-bold text-on-surface-variant/20 uppercase tracking-widest rotate-90">Aisle</div>
                )}
                <div className={classes} onClick={() => toggleSeat(i)} title={isBooked ? 'Seat already booked' : isSelected ? 'Click to deselect' : 'Click to select'}>
                    <span className="text-[10px] font-bold opacity-60 mb-1">{seatLabel}</span>
                    <span className={`material-symbols-outlined ${isSelected ? '' : 'text-on-surface-variant'}`} style={isSelected ? {fontVariationSettings: "'FILL' 1"} : undefined}>
                        event_seat
                    </span>
                    {isBooked && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="material-symbols-outlined text-on-surface-variant/20">block</span>
                        </div>
                    )}
                </div>
            </div>
        );
    })}
    </div>
) : (
    <div className="grid grid-cols-6 gap-y-6">
    {Array.from({ length: 25 }).map((_, idx) => {
        const i = idx + 1;
        const isBooked = BOOKED_SEATS.includes(i);
        const isSelected = selectedSeats.includes(i);
        const seatLabel = i.toString();
        const pos = (i-1) % 5;
        
        let typeLabel = '';
        let colClass = '';
        if (pos === 0) { colClass = 'col-start-4'; typeLabel = 'LB'; }
        if (pos === 1) { colClass = 'col-start-5'; typeLabel = 'MB'; }
        if (pos === 2) { colClass = 'col-start-6'; typeLabel = 'UB'; }
        if (pos === 3) { colClass = 'col-start-1'; typeLabel = 'SL'; }
        if (pos === 4) { colClass = 'col-start-2'; typeLabel = 'SU'; }
        
        let classes = `w-12 h-14 md:w-16 md:h-18 rounded-xl flex flex-col items-center justify-center transition-all duration-300 relative group cursor-pointer ${colClass} `;
        if (isBooked) classes += "bg-inverse-surface/5 cursor-not-allowed";
        else if (isSelected) classes += "bg-primary text-white shadow-xl scale-105";
        else classes += "bg-surface-container-highest hover:bg-primary-container/20 hover:scale-105";

        return (
            <div key={i} className="contents">
                {pos === 0 && (
                    <div className="col-start-3 row-span-1 flex items-center justify-center text-[10px] font-bold text-on-surface-variant/20 uppercase tracking-widest rotate-90">Aisle</div>
                )}
                <div className={classes} onClick={() => toggleSeat(i)} title={isBooked ? 'Booked' : 'Select Seat'}>
                    <span className="text-[10px] font-bold opacity-60 mb-1">{seatLabel}</span>
                    <span className="text-[10px] font-black">{typeLabel}</span>
                    {isBooked && (
                        <div className="absolute inset-0 flex items-center justify-center bg-surface-container-low/50 rounded-xl">
                            <span className="material-symbols-outlined text-on-surface-variant/40">block</span>
                        </div>
                    )}
                </div>
            </div>
        );
    })}
    </div>
)}

{/* Back of Coach Indicator */}
<div className="flex flex-col items-center mt-12 opacity-20">
<span className="text-xs font-bold tracking-[0.3em] uppercase mb-2">Washrooms &amp; Galley</span>
<span className="material-symbols-outlined text-4xl">arrow_downward</span>
</div>
</div>
</div>
</div>
{/* Right: Trip Summary Sidebar */}
<aside className="lg:col-span-4 sticky top-24 space-y-6">
<div className="bg-surface-container-lowest p-8 rounded-3xl shadow-xl shadow-slate-900/5 relative overflow-hidden group">
{/* Subtle Gradient Accent */}
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full transform transition-transform group-hover:scale-110"></div>
<div className="relative z-10 space-y-8">
<div>
<h2 className="text-2xl font-black tracking-tight mb-6">Trip Summary</h2>
<div className="space-y-6">
{/* Route Information */}
<div className="flex items-start gap-4">
<div className="flex flex-col items-center gap-1 pt-1">
<div className="w-3 h-3 rounded-full border-2 border-primary"></div>
<div className="w-0.5 h-12 bg-surface-container-highest"></div>
<div className="w-3 h-3 rounded-full bg-secondary"></div>
</div>
<div className="flex-1 space-y-6">
<div>
<p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Departure</p>
<h3 className="text-lg font-bold leading-none">New Delhi</h3>
<p className="text-sm text-on-surface-variant">06:00 AM, NDLS</p>
</div>
<div>
<p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Arrival</p>
<h3 className="text-lg font-bold leading-none">Varanasi Jn</h3>
<p className="text-sm text-on-surface-variant">02:00 PM, BSB</p>
</div>
</div>
</div>
</div>
</div>
{/* Train Details */}
<div className="p-4 bg-surface-container-low rounded-2xl flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
<span className="material-symbols-outlined text-primary">train</span>
</div>
<div>
<p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Train 22436</p>
<p className="text-sm font-bold">RailConnect Exp</p>
</div>
</div>
<span className="text-xs font-bold px-2 py-1 bg-white rounded text-primary">{selectedClass}</span>
</div>

{/* Preference Dropdown */}
<div className="p-4 bg-surface-container-low rounded-2xl">
  <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Seat Preference</label>
  <select 
    className="w-full bg-white border border-outline-variant rounded-lg p-2 text-sm font-semibold focus:ring-2 focus:ring-primary focus:border-primary outline-none"
    value={preference}
    onChange={(e) => setPreference(e.target.value)}
  >
    {preferenceOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
  </select>
</div>

{/* Seats selected info */}
{selectedSeats.length > 0 && (
  <div className="p-3 bg-primary/5 rounded-xl text-sm font-semibold text-primary">
    Selected: {selectedSeats.map(s => {
      if (isChairCar) return Math.ceil(s/4) + String.fromCharCode(64 + ((s-1)%4 + 1));
      else return s.toString();
    }).join(', ')}
  </div>
)}
{/* Price Breakdown */}
<div className="space-y-4 pt-4">
<div className="flex justify-between text-sm text-on-surface-variant">
<span>Base Fare × {selectedSeats.length}</span>
<span>₹ {(baseFare * selectedSeats.length).toLocaleString()}</span>
</div>
<div className="flex justify-between text-sm text-on-surface-variant">
<span>Catering Charges</span>
<span>₹ {(catering * selectedSeats.length).toLocaleString()}</span>
</div>
<div className="flex justify-between text-sm text-on-surface-variant">
<span>Taxes &amp; Fees</span>
<span>₹ {(taxes * selectedSeats.length).toLocaleString()}</span>
</div>
<div className="pt-4 flex justify-between items-end border-t border-outline-variant/30">
<div>
<p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Total Amount</p>
<p className="text-3xl font-black tracking-tighter">₹ {total.toLocaleString()}</p>
</div>
<span className="text-[10px] font-bold text-primary underline cursor-pointer">View Details</span>
</div>
</div>
{/* Action Button */}
{selectedSeats.length > 0 ? (
  <Link href="/review" className="w-full py-5 rounded-2xl bg-gradient-to-br from-primary to-primary-container text-white font-black tracking-tight text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:opacity-95 transition-all flex items-center justify-center gap-3 group">
                            Proceed to Payment
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
  </Link>
) : (
  <button disabled className="w-full py-5 rounded-2xl bg-surface-container-high text-on-surface-variant font-black tracking-tight text-lg cursor-not-allowed flex items-center justify-center gap-3 opacity-60">
    Select a Seat to Continue
  </button>
)}
</div>
</div>
{/* Coach Feature Bento */}
<div className="grid grid-cols-2 gap-4">
<div className="bg-surface-container-low p-4 rounded-2xl">
<span className="material-symbols-outlined text-primary mb-2">wifi</span>
<p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Free Wi-Fi</p>
</div>
<div className="bg-surface-container-low p-4 rounded-2xl">
<span className="material-symbols-outlined text-primary mb-2">restaurant</span>
<p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Premium Meals</p>
</div>
</div>
</aside></div>
</main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="pt-32 text-center">Loading seat selection...</div>}>
      <SeatSelectionContent />
    </Suspense>
  );
}