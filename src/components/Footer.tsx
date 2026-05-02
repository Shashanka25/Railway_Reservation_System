import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 dark:bg-black text-slate-400 font-headline text-sm tracking-wide w-full py-12 px-8 border-t border-white/5 mt-auto">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between items-start gap-8">
        <div className="lg:max-w-xs">
          <span className="text-lg font-bold text-white block mb-4 uppercase">RailConnect</span>
          <p className="mb-6 leading-relaxed">The pinnacle of Indian rail engineering. Connecting heritage with the speed of tomorrow.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-orange-500 transition-colors"><span className="material-symbols-outlined">language</span></Link>
            <Link href="#" className="hover:text-orange-500 transition-colors"><span className="material-symbols-outlined">public</span></Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-4">
          <div className="flex flex-col gap-3">
            <span className="text-white font-semibold mb-2">Travel Tools</span>
            <Link href="#" className="hover:text-orange-400 transition-colors">Schedules</Link>
            <Link href="#" className="hover:text-orange-400 transition-colors">PNR Status</Link>
            <Link href="#" className="hover:text-orange-400 transition-colors">Seat Availability</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-white font-semibold mb-2">Support</span>
            <Link href="#" className="hover:text-orange-400 transition-colors">Station Info</Link>
            <Link href="#" className="hover:text-orange-400 transition-colors">Support</Link>
            <Link href="#" className="hover:text-orange-400 transition-colors">Privacy</Link>
          </div>
        </div>
        <div className="lg:text-right flex flex-col gap-4">
          <div className="inline-flex flex-col items-start lg:items-end">
            <span className="text-xs uppercase tracking-[0.2em] mb-1">Official IRCTC Partner</span>
            <div className="h-10 w-24 bg-white/10 rounded flex items-center justify-center">
              <span className="font-black text-white italic">IRCTC</span>
            </div>
          </div>
          <p className="max-w-[240px] ml-auto">© 2024 Indian Railways - RailConnect. High-Speed Travel.</p>
        </div>
      </div>
    </footer>
  );
}
