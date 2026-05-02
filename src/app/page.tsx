'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
  const router = useRouter();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [travelClass, setTravelClass] = useState('Executive Class');

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const searchParams = new URLSearchParams({
      from,
      to,
      date,
      class: travelClass
    });
    router.push(`/search?${searchParams.toString()}`);
  }

  return (
    <main className="pt-20">
{/* Hero & Search Section */}
<section className="relative h-[870px] min-h-[700px] overflow-hidden">
{/* Hero Image with Motion Blur Effect */}
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover" alt="Cinematic beautiful train journey through majestic mountains at sunset" src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=3668&auto=format&fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-on-surface/60 via-transparent to-transparent"></div>
</div>
{/* Hero Content */}
<div className="relative z-10 h-full max-w-screen-2xl mx-auto px-8 flex flex-col justify-center">
<div className="max-w-2xl mb-12">
<span className="label-md uppercase tracking-[0.3em] text-primary-container font-bold mb-4 block">Engineered for Excellence</span>
<h1 className="text-white text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6">
                        IRCTE
                    </h1>
<p className="text-white/80 text-xl max-w-lg leading-relaxed">
                        Experience India's future at 160km/h. Seamless speed meets the soul of Indian hospitality in every journey.
                    </p>
</div>
{/* Search Bar Container */}
<form onSubmit={handleSearch} className="bg-surface/10 backdrop-blur-2xl rounded-xl p-1 shadow-2xl max-w-5xl">
<div className="bg-surface rounded-lg p-6 lg:p-8 flex flex-wrap lg:flex-nowrap items-end gap-6">
<div className="flex-1 min-w-[200px]">
<label className="block text-xs font-bold uppercase tracking-widest text-outline mb-2">From Station</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary">train</span>
<input
  className="w-full pl-10 pr-4 py-3 bg-surface-container-highest border-none focus:ring-0 focus:border-b-2 border-primary rounded-t text-on-surface-variant font-semibold"
  placeholder="New Delhi (NDLS)"
  type="text"
  value={from}
  onChange={e => setFrom(e.target.value)}
/>
</div>
</div>
<div className="flex-1 min-w-[200px]">
<label className="block text-xs font-bold uppercase tracking-widest text-outline mb-2">To Station</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary">location_on</span>
<input
  className="w-full pl-10 pr-4 py-3 bg-surface-container-highest border-none focus:ring-0 focus:border-b-2 border-primary rounded-t text-on-surface-variant font-semibold"
  placeholder="Varanasi (BSB)"
  type="text"
  value={to}
  onChange={e => setTo(e.target.value)}
/>
</div>
</div>
<div className="w-full lg:w-48">
<label className="block text-xs font-bold uppercase tracking-widest text-outline mb-2">Departure</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary">calendar_month</span>
<input
  className="w-full pl-10 pr-4 py-3 bg-surface-container-highest border-none focus:ring-0 focus:border-b-2 border-primary rounded-t text-on-surface-variant font-semibold"
  type="date"
  value={date}
  onChange={e => setDate(e.target.value)}
/>
</div>
</div>
<div className="w-full lg:w-48">
<label className="block text-xs font-bold uppercase tracking-widest text-outline mb-2">Class</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary">airline_seat_recline_extra</span>
<select
  className="w-full pl-10 pr-4 py-3 bg-surface-container-highest border-none focus:ring-0 focus:border-b-2 border-primary rounded-t text-on-surface-variant font-semibold appearance-none"
  value={travelClass}
  onChange={e => setTravelClass(e.target.value)}
>
<option>1st AC</option>
<option>2nd AC</option>
<option>3rd AC</option>
<option>Executive Class</option>
<option>AC Chair Car</option>
<option>Sleeper</option>
</select>
</div>
</div>
<button
  type="submit"
  className="w-full lg:w-auto h-[52px] px-8 bg-gradient-to-tr from-primary to-primary-container text-on-primary font-bold rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
>
<span>Search</span>
<span className="material-symbols-outlined">trending_flat</span>
</button>
</div>
</form>
</div>
</section>
{/* Popular Rail Journeys - Bento Grid */}
<section className="py-24 px-8 max-w-screen-2xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
<div>
<h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Legendary Routes.</h2>
<p className="text-on-surface-variant text-lg">Curated high-speed experiences across the subcontinent.</p>
</div>
<button
  onClick={() => router.push('/search')}
  className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all cursor-pointer"
>
                    Explore all destinations <span className="material-symbols-outlined">east</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full md:h-[600px]">
{/* Large Card */}
<div className="md:col-span-8 group relative overflow-hidden rounded-xl">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Taj Mahal in Agra at sunrise with soft golden light and morning mist" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeCNKshs3fknJXpXrcK5_D3sylPY1QmW5Ux7_t-O4QxCIbyCfT4cDybbLDFDVU2JDkkLBAaBcvzfYnQQzmqqNgxG-1MGQMRgaP0giJKScUNXrmgdnMe1wdhmVVjkcq857c58ppTqo8vj7RylxM351bKK_KLqRexiBTF8BUDY8gM75E4oyOUeoGnvKOTmefg1K4f8dJXADIcfP04d_t-6gbsbmxmlVocVo5luzzo_xeda38JIQg7HzFs7wr8D23pcupUZg6ju9m5pjv"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
<span className="text-primary-container font-bold tracking-widest uppercase text-sm mb-2">Top Selection</span>
<h3 className="text-white text-4xl font-bold mb-4">The Golden Triangle</h3>
<p className="text-white/70 max-w-md mb-6">Connect Delhi, Agra, and Jaipur in record time with premium amenities.</p>
<div className="flex items-center gap-4">
<span className="text-white font-bold text-2xl">₹2,450 <span className="text-sm font-normal opacity-60">starting</span></span>
<button
  onClick={() => router.push('/search')}
  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition-colors cursor-pointer"
>Book Now</button>
</div>
</div>
</div>
{/* Secondary Cards Column */}
<div className="md:col-span-4 grid grid-rows-2 gap-8">
<div
  className="group relative overflow-hidden rounded-xl cursor-pointer"
  onClick={() => router.push('/search')}
>
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Houseboat on the tranquil Kerala backwaters surrounded by coconut palms at dusk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLQy7tBIunftC8aVlldq6ugQx97T22FAYQWVExlfVb3sDC6A2pQYMUjjxx-QHrsOjbzwb3mnLfu1vWcnRMsVymAdsaXAPxgQwdjgVtmKSD4lgwez3ZTSoWDfWibf_Qk86SoE5SM5inG17Pi67SsaFjYMEz4V-hXNTd4cSyOChedJu-khYAlPhkQudG9qIwnKLQCYdDNNR0I8r8Ohg4ltqyl0XNB-XCBymSdnGBM0EtfUfOMg5iu7UUF3YFgKk31oFb1aN1OwUlTTqj"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-secondary-container/90 via-transparent to-transparent flex flex-col justify-end p-8">
<h4 className="text-white text-2xl font-bold mb-2">Kerala Backwaters</h4>
<p className="text-white/80 text-sm mb-4">The scenic southern stretch.</p>
<span className="text-primary-container font-bold">₹1,850</span>
</div>
</div>
<div
  className="group relative overflow-hidden rounded-xl cursor-pointer"
  onClick={() => router.push('/search')}
>
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Distant view of the Himalayan mountains with snow peaks under a clear blue sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcHKqzvvj0p3Sj3fSGh3Rdu7IHhGCexVe_UFz-Vn228vhMdGI9ChMlMf3A6xebS19o9dxxDBjD69G1ycyHInsxcAkatw2XsDZF24y51Bts6MOKgo15vNaoiA-KJpJFOeeCZc5B3Xd_84E25TySLh54-cDUCrTRW3GzCMap6U-up0G0UQ3ejiRi2CmbxUL6_Felsiv33txeppwb1ybH736yMZbvMhS0NoNG_-5w5NcOtqNfTlwuAjJe9q7FK33hRmVCrugt14wU71Me"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-tertiary-container/90 via-transparent to-transparent flex flex-col justify-end p-8">
<h4 className="text-white text-2xl font-bold mb-2">Himalayan Foothills</h4>
<p className="text-white/80 text-sm mb-4">Journey to the majestic peaks.</p>
<span className="text-primary-container font-bold">₹2,100</span>
</div>
</div>
</div>
</div>
</section>
{/* IRCTC Loyalty Banner */}
<section className="py-12 px-8 max-w-screen-2xl mx-auto">
<div className="bg-secondary text-on-secondary rounded-xl p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
{/* Abstract Background Detail */}
<div className="absolute right-0 top-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-4xl text-primary-container" style={{"fontVariationSettings":"'FILL' 1"}}>stars</span>
<h2 className="text-3xl font-black uppercase tracking-tight">IRCTC Premium Rewards</h2>
</div>
<p className="text-white/80 text-lg max-w-xl">
                        Join the elite circle of travelers. Earn up to 5 points for every ₹100 spent and unlock complimentary lounge access at major terminals.
                    </p>
</div>
<div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
<button
  onClick={() => alert('🎉 Welcome to IRCTC Premium Rewards! Sign up to start earning points on every booking.')}
  className="bg-white text-secondary px-8 py-4 rounded-lg font-bold hover:bg-primary-container hover:text-on-primary-container transition-all cursor-pointer"
>
                        Join Loyalty Program
                    </button>
<button
  onClick={() => alert('IRCTC Premium Rewards: Earn 5x points, free lounge access, priority booking, and exclusive discounts on every journey.')}
  className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all cursor-pointer"
>
                        Learn Benefits
                    </button>
</div>
</div>
</section>
{/* Tonal Surface Section: Why Vande Bharat */}
<section className="bg-surface-container-low py-24 px-8 mt-12">
<div className="max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
<div className="flex flex-col items-start">
<div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-3xl text-primary">bolt</span>
</div>
<h3 className="text-2xl font-bold mb-4">160 km/h Precision</h3>
<p className="text-on-surface-variant leading-relaxed">Reduced travel time by up to 45% on major corridors, engineered with indigenous technology for the ultimate stability.</p>
</div>
<div className="flex flex-col items-start">
<div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-3xl text-secondary">restaurant</span>
</div>
<h3 className="text-2xl font-bold mb-4">Culinary Excellence</h3>
<p className="text-on-surface-variant leading-relaxed">Regional specialties curated by world-class chefs, served right at your seat with the warmth of Indian hospitality.</p>
</div>
<div className="flex flex-col items-start">
<div className="w-16 h-16 bg-tertiary/10 rounded-xl flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-3xl text-tertiary">wifi</span>
</div>
<h3 className="text-2xl font-bold mb-4">Connected Journey</h3>
<p className="text-on-surface-variant leading-relaxed">High-speed onboard Wi-Fi, entertainment consoles, and ergonomic rotatable seating for a productive trip.</p>
</div>
</div>
</div>
</section>
</main>
  );
}