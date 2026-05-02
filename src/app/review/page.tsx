'use client';

import Link from 'next/link';
import { useState } from 'react';

type PaymentMethod = 'upi' | 'cards' | 'netbanking' | 'wallets';

export default function Page() {
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>('upi');
  const [upiId, setUpiId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [preference, setPreference] = useState('Window Seat');
  const [irctcId, setIrctcId] = useState('');
  const [verified, setVerified] = useState(false);

  function handleVerify() {
    if (irctcId.trim()) {
      setVerified(true);
      alert(`✅ IRCTC ID "${irctcId}" verified successfully!`);
    } else {
      alert('Please enter your IRCTC User ID first.');
    }
  }

  return (
    <main className="pt-28 pb-20 px-4 md:px-8 max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/* Left Column: Booking Details */}
<div className="lg:col-span-8 space-y-8">
{/* Hero Section: Journey Recap */}
<section className="relative h-48 rounded-xl overflow-hidden shadow-sm">
<img className="absolute inset-0 w-full h-full object-cover" alt="a high-speed Vande Bharat train moving through a lush green Indian landscape with cinematic motion blur and morning mist" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0dXEoKhoNgUbZ8tH2QE_HyDx2OMO3qsR2vclefuBwEgu6G9HPK-axWMZ9nT9wSmkaW88JhWIFBRCda1iPo_LnYQ2JO2ONHZAF3LKN_eoed1CPoA-gRUnsLthWJB9kfXA2UVTxh9jbBggFBfHbg6Ie3PvaMB4rch_3qAGWT46BOWung_-cfwksnwgEffToZ0nZQilnORM087egr7HbxxaleBI6cuRel95ac7I_ay8MFGB4IfUm7awsLdA_oiWTQsQXa_R2z-oM9CAt"/>
<div className="absolute inset-0 bg-gradient-to-r from-on-primary-fixed/80 to-transparent flex flex-col justify-center px-8 text-white">
<p className="label-md uppercase tracking-[0.2em] font-medium opacity-80">Review Journey</p>
<h1 className="text-3xl md:text-4xl font-black tracking-tight mt-2">New Delhi ↔ Varanasi</h1>
<p className="mt-2 text-lg font-light">RailConnect Exp (22436) • Executive Class • Oct 24, 2024</p>
</div>
</section>
{/* Passenger Details */}
<div className="bg-surface-container-lowest rounded-xl p-8 space-y-6">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">person</span>
<h2 className="text-2xl font-bold tracking-tight">Passenger Details</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">IRCTC User ID</label>
<div className="relative">
<input
  className="w-full bg-surface-container-highest border-none border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-t p-4 text-on-surface"
  placeholder="Enter IRCTC ID"
  type="text"
  value={irctcId}
  onChange={e => { setIrctcId(e.target.value); setVerified(false); }}
/>
<button
  onClick={handleVerify}
  className={`absolute right-4 top-4 text-sm font-semibold cursor-pointer transition-colors ${verified ? 'text-tertiary' : 'text-primary hover:text-primary/70'}`}
>
  {verified ? '✓ Verified' : 'Verify'}
</button>
</div>
</div>
</div>
<div className="p-6 bg-surface-container-low rounded-lg border border-outline-variant/15 space-y-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
<div className="md:col-span-5 space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Full Name</label>
<input
  className="w-full bg-surface-container-lowest border-none border-b-2 border-outline-variant focus:border-primary focus:ring-0 p-3"
  placeholder="As per Govt ID"
  type="text"
  value={name}
  onChange={e => setName(e.target.value)}
/>
</div>
<div className="md:col-span-2 space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Age</label>
<input
  className="w-full bg-surface-container-lowest border-none border-b-2 border-outline-variant focus:border-primary focus:ring-0 p-3"
  placeholder="Years"
  type="number"
  value={age}
  onChange={e => setAge(e.target.value)}
/>
</div>
<div className="md:col-span-3 space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Preference</label>
<select
  className="w-full bg-surface-container-lowest border-none border-b-2 border-outline-variant focus:border-primary focus:ring-0 p-3 appearance-none cursor-pointer"
  value={preference}
  onChange={e => setPreference(e.target.value)}
>
<option>Window Seat</option>
<option>Aisle Seat</option>
<option>No Preference</option>
</select>
</div>
<div className="md:col-span-2 flex justify-end">
<button
  className="p-3 text-error hover:bg-error-container/20 rounded-full transition-colors cursor-pointer"
  onClick={() => { setName(''); setAge(''); setPreference('Window Seat'); }}
  title="Clear passenger details"
>
<span className="material-symbols-outlined">delete</span>
</button>
</div>
</div>
<button
  className="flex items-center gap-2 text-primary font-bold text-sm cursor-pointer hover:opacity-70 transition-opacity"
  onClick={() => alert('In a full app, this would add another passenger row. For now, only 1 passenger is supported in this demo.')}
>
<span className="material-symbols-outlined text-lg">add_circle</span>
                            ADD PASSENGER
                        </button>
</div>
</div>
{/* Payment Methods */}
<div className="bg-surface-container-lowest rounded-xl p-8 space-y-8">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">payments</span>
<h2 className="text-2xl font-bold tracking-tight">Payment Method</h2>
</div>
{/* Payment Bento Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{/* UPI */}
<div
  className={`md:col-span-3 p-6 rounded-xl border-2 cursor-pointer relative group transition-all ${selectedPayment === 'upi' ? 'border-primary bg-primary/5' : 'border-outline-variant/30 hover:border-primary/50 bg-surface-container-low'}`}
  onClick={() => setSelectedPayment('upi')}
>
<div className="flex justify-between items-start">
<div className="space-y-4">
<div className="flex items-center gap-2">
<span className="font-bold text-lg">UPI</span>
<span className="px-2 py-0.5 bg-tertiary-container text-on-tertiary-container text-[10px] font-black rounded uppercase">Fastest</span>
</div>
<div className="flex gap-4 items-center">
<img className="h-8 w-auto grayscale group-hover:grayscale-0 transition-all" alt="payment app icon representing mobile payments" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD242NToo35Dl8OpDx0M4Wt2lpw1vvEpdMSJBLLQ4yZVlFIr32YTNEB6nWjpbwnQun-YTynrmMk0INeum7ad7aboxmTzkXnC1TfpuhI7XXngNy8PKqDIWPBHFm_OYQhjvVxKqtr_A5jHNVvRE3c6oiJLQAtM6rDejZ69mJXWJibAtgl4pXa-6-dzzuPpYq__oNEuM-5gKxjVyJ-jwJxBVAvQwqN7SNQdelBUSY1dd1C70CeQLDBeJ_he9w3ug7iaSMLaMclPtaifite"/>
<span className="text-sm font-medium text-on-surface-variant">Paytm, Google Pay, PhonePe</span>
</div>
</div>
<div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedPayment === 'upi' ? 'border-primary' : 'border-outline-variant'}`}>
{selectedPayment === 'upi' && <div className="h-3 w-3 rounded-full bg-primary"></div>}
</div>
</div>
{selectedPayment === 'upi' && (
  <div className="mt-6">
    <input
      className="w-full bg-surface-container-lowest border-none border-b-2 border-primary/30 focus:border-primary focus:ring-0 p-3"
      placeholder="Enter UPI ID (e.g. user@okaxis)"
      type="text"
      value={upiId}
      onChange={e => setUpiId(e.target.value)}
    />
  </div>
)}
</div>
{/* Cards */}
<div
  className={`p-6 rounded-xl border cursor-pointer transition-all group ${selectedPayment === 'cards' ? 'border-primary bg-primary/5' : 'border-outline-variant/30 hover:border-primary/50 bg-surface-container-low'}`}
  onClick={() => setSelectedPayment('cards')}
>
<span className={`material-symbols-outlined mb-4 transition-colors ${selectedPayment === 'cards' ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary'}`}>credit_card</span>
<h3 className="font-bold">Cards</h3>
<p className="text-xs text-on-surface-variant mt-1">Debit &amp; Credit</p>
</div>
{/* Net Banking */}
<div
  className={`p-6 rounded-xl border cursor-pointer transition-all group ${selectedPayment === 'netbanking' ? 'border-primary bg-primary/5' : 'border-outline-variant/30 hover:border-primary/50 bg-surface-container-low'}`}
  onClick={() => setSelectedPayment('netbanking')}
>
<span className={`material-symbols-outlined mb-4 transition-colors ${selectedPayment === 'netbanking' ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary'}`}>account_balance</span>
<h3 className="font-bold">Net Banking</h3>
<p className="text-xs text-on-surface-variant mt-1">All Indian Banks</p>
</div>
{/* Wallets */}
<div
  className={`p-6 rounded-xl border cursor-pointer transition-all group ${selectedPayment === 'wallets' ? 'border-primary bg-primary/5' : 'border-outline-variant/30 hover:border-primary/50 bg-surface-container-low'}`}
  onClick={() => setSelectedPayment('wallets')}
>
<span className={`material-symbols-outlined mb-4 transition-colors ${selectedPayment === 'wallets' ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary'}`}>account_balance_wallet</span>
<h3 className="font-bold">Other Wallets</h3>
<p className="text-xs text-on-surface-variant mt-1">Mobikwik, etc.</p>
</div>
</div>
</div>
</div>
{/* Right Column: Order Summary */}
<div className="lg:col-span-4 sticky top-28">
<div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-slate-900/5 overflow-hidden">
<div className="bg-on-primary-fixed p-6 text-white">
<h2 className="text-xl font-bold tracking-tight">Order Summary</h2>
<p className="text-sm opacity-70">1 Ticket • Journey ID: VB-22436A</p>
</div>
<div className="p-6 space-y-6">
<div className="space-y-4">
<div className="flex justify-between items-center text-sm">
<span className="text-on-surface-variant">Base Fare</span>
<span className="font-medium text-on-surface">₹ 2,450.00</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-on-surface-variant">Catering Charges</span>
<span className="font-medium text-on-surface">₹ 480.00</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-on-surface-variant">GST (5%)</span>
<span className="font-medium text-on-surface">₹ 146.50</span>
</div>
<div className="flex justify-between items-center text-sm text-tertiary">
<span>Platform Discount</span>
<span className="font-medium">-₹ 50.00</span>
</div>
</div>
<div className="pt-6 border-t border-dashed border-outline-variant">
<div className="flex justify-between items-end">
<div>
<p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Total Amount</p>
<p className="text-3xl font-black text-on-surface tracking-tighter">₹ 3,026.50</p>
</div>
<span className="material-symbols-outlined text-primary mb-1" style={{"fontVariationSettings":"'FILL' 1"}}>info</span>
</div>
</div>
<div className="space-y-3 pt-4">
<Link
  href="/ticket"
  className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold py-4 rounded-lg shadow-lg shadow-primary/20 active:scale-[0.98] transition-all flex justify-center items-center gap-2"
>
                                PAY NOW
                                <span className="material-symbols-outlined text-xl">arrow_forward</span>
</Link>
<p className="text-[10px] text-center text-on-surface-variant leading-relaxed px-4">
                                By clicking Pay Now, you agree to the Terms of Service and Refund Policy of Indian Railways.
                            </p>
</div>
</div>
{/* Security Badge */}
<div className="bg-surface-container-low px-6 py-4 flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary">verified_user</span>
<span className="text-xs font-semibold text-on-surface-variant">Secure 256-bit SSL encrypted payment</span>
</div>
</div>
{/* Promo Section */}
<div className="mt-6 p-6 rounded-xl bg-secondary-container/10 border border-secondary/20">
<h4 className="font-bold text-secondary text-sm">Earn 3x Points</h4>
<p className="text-xs text-secondary mt-1">Use your IRCTC SBI Card to earn travel rewards on this booking.</p>
</div>
</div>
</div>
</main>
  );
}