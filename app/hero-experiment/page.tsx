import Link from 'next/link';

export default function HeroExperiment() {
    return (
        <main className="min-h-screen">
            {/* Hero Section with New Background */}
            <section className="relative h-screen flex items-center overflow-hidden">

                {/* Background Image Layer */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/assets/tug-of-war.png')",
                        backgroundPosition: 'center center'
                    }}
                >
                    {/* Overlay Gradient to ensure text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <div className="max-w-3xl space-y-6">
                        <div className="inline-block bg-yellow-500 text-black font-bold px-4 py-2 uppercase tracking-widest text-xs mb-4">
                            Since 1998 — Zimbabwean Quality
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-slate-900 drop-shadow-sm">
                            Built for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-700">
                                The Toughest
                            </span>
                        </h1>
                        <p className="text-xl text-slate-800 font-medium max-w-lg leading-relaxed drop-shadow-sm">
                            Established manufacturers of protective clothing, uniforms, and branded promotional solutions.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <Link
                                href="/catalog"
                                className="bg-black text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-yellow-500 hover:text-black transition-all shadow-xl"
                            >
                                View Catalogue
                            </Link>
                            <button className="border-2 border-black bg-white/50 backdrop-blur-sm px-8 py-4 font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
