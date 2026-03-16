'use client';
import Link from 'next/link';
import { useState } from 'react';
import ProcessTimeline from '@/components/ProcessTimeline';

export default function AboutPage() {
    const [topImageId, setTopImageId] = useState<number | null>(null);

    // Generate 13 scattered images with random-ish positions/rotations distributed along the page
    // Spreading them down to roughly the second last paragraph (approx 80-90% of height)
    // Starting lower (top-[120px]) to avoid navbar overlap
    const images = [
        { id: 1, label: 'Production Line', rotation: 'rotate-2', top: 'top-[140px]', left: 'left-0', zIndex: 10 },
        { id: 2, label: 'Quality Control', rotation: '-rotate-1', top: 'top-[180px]', left: 'right-10', zIndex: 20 },
        { id: 3, label: 'Embroidery Unit', src: '/assets/about/embroidery-unit.png', rotation: 'rotate-3', top: 'top-[250px]', left: 'left-10', zIndex: 30 },
        { id: 4, label: 'Fabric Storage', rotation: '-rotate-2', top: 'top-[320px]', left: 'right-20', zIndex: 15 },
        { id: 5, label: 'Cutting Table', src: '/assets/about/cutting-table.png', rotation: 'rotate-1', top: 'top-[400px]', left: 'left-20', zIndex: 25 },
        { id: 6, label: 'Dispatch', rotation: '-rotate-3', top: 'top-[500px]', left: 'right-0', zIndex: 12 },
        { id: 7, label: 'Printing Dept', rotation: 'rotate-2', top: 'top-[600px]', left: 'left-5', zIndex: 22 },
        { id: 8, label: 'Stitching', src: '/assets/about/stitching.png', rotation: '-rotate-1', top: 'top-[700px]', left: 'right-16', zIndex: 18 },
        { id: 9, label: 'Final Ironing', rotation: 'rotate-1', top: 'top-[800px]', left: 'left-16', zIndex: 28 },
        { id: 10, label: 'Packaging', rotation: '-rotate-2', top: 'top-[900px]', left: 'right-8', zIndex: 14 },
        { id: 11, label: 'Design Studio', src: '/assets/about/design-studio.png', rotation: 'rotate-3', top: 'top-[1000px]', left: 'left-8', zIndex: 24 },
        { id: 12, label: 'Showroom', rotation: '-rotate-1', top: 'top-[1100px]', left: 'right-24', zIndex: 16 },
        { id: 13, label: 'Team', rotation: 'rotate-1', top: 'top-[1200px]', left: 'left-24', zIndex: 26 },
    ];

    return (
        <main className="min-h-screen pt-20 pb-12 bg-white">
            {/* Hero / Header */}
            <section className="max-w-7xl mx-auto px-6 mb-16">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                    Kingsport <br />
                    Investments <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-oxblood-600 to-oxblood-800">
                        Private Limited
                    </span>
                </h1>
            </section>

            {/* Content Grid */}
            <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative">

                {/* Left Column: Text Content */}
                <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                    <p>
                        Kingsport Investments Private Limited is a Zimbabwean manufacturing company established in 1998, specialising in the production of branded apparel, protective clothing, corporate wear, and promotional materials. With over twenty-five years of experience, Kingsport has grown into a trusted name in local manufacturing, known for consistency, quality, and dependable delivery.
                    </p>
                    <p>
                        We operate as a fully integrated, one-stop manufacturing facility, offering end-to-end solutions that cover the entire production cycle. Our in-house capabilities include cutting and sewing, automated screen printing, lithographic printing, embroidery, digital transfer printing, dye sublimation, and graphic design. This integrated approach allows us to maintain strict quality control, flexible production volumes, and efficient turnaround times.
                    </p>

                    {/* Tagline Box */}
                    <div className="bg-slate-50 p-8 rounded-xl border-l-4 border-oxblood-500 my-8 shadow-sm">
                        <p className="text-2xl font-black text-slate-900 italic text-center leading-snug">
                            &ldquo;If you are proud of your corporate image... show it&rdquo;
                        </p>
                    </div>

                    <p>
                        Based in Harare, Kingsport services a broad and diverse market. Our clients include government ministries and parastatals, non-governmental organisations, schools, corporate institutions, and individual customers. This wide client base reflects our ability to adapt to varying requirements, specifications, and compliance standards while maintaining a consistently high level of workmanship.
                    </p>
                    <p>
                        Over the years, Kingsport has built strong working relationships with some of the most reputable institutions in the country, delivering products that meet demanding standards for functionality, branding, and durability. Our experience working across both public and private sectors has positioned us as a reliable manufacturing partner for projects of varying scale and complexity.
                    </p>
                    <p>
                        At Kingsport, we understand that a strong corporate image is critical. Our operations are driven by quality, innovation, creativity, and reliability, ensuring that every garment and promotional item we produce reinforces our clients’ brands and objectives.
                    </p>
                    <p>
                        With a solid foundation in local manufacturing and a forward-looking approach to technology and sustainability, Kingsport Investments Private Limited continues to strengthen its position as a leading apparel and protective clothing manufacturer in Zimbabwe and beyond.
                    </p>


                    {/* Labour Standards Section (Moved from Nav) */}
                    {/* Labour Standards & Environment Links */}
                    <div className="mt-8 space-y-4 pt-8 border-t border-slate-100">

                        {/* Labour Standards */}
                        <div className="flex items-center justify-between group cursor-pointer hover:bg-slate-50 p-4 rounded-lg transition-colors border border-transparent hover:border-slate-200">
                            <div>
                                <h3 className="text-xl font-black uppercase text-slate-900 group-hover:text-oxblood-600 transition-colors">Ethical Standards</h3>
                                <p className="text-sm text-slate-500">Read about our commitment to fair labour practices.</p>
                            </div>
                            <Link href="/labour-standards" className="bg-black text-white px-6 py-2 rounded-full text-xs font-bold uppercase group-hover:bg-oxblood-600 group-hover:text-white transition-all">
                                View Policy
                            </Link>
                        </div>

                        {/* Environment */}
                        <div className="flex items-center justify-between group cursor-pointer hover:bg-slate-50 p-4 rounded-lg transition-colors border border-transparent hover:border-slate-200">
                            <div>
                                <h3 className="text-xl font-black uppercase text-slate-900 group-hover:text-oxblood-600 transition-colors">Sustainability</h3>
                                <p className="text-sm text-slate-500">Our approach to environmental responsibility.</p>
                            </div>
                            <Link href="/environment" className="bg-black text-white px-6 py-2 rounded-full text-xs font-bold uppercase group-hover:bg-oxblood-600 group-hover:text-white transition-all">
                                View Policy
                            </Link>
                        </div>

                    </div>
                </div>

                {/* Right Column: Scattered Collage */}
                <div className="relative w-full mt-10 lg:mt-0 hidden lg:block">
                    {/* Container specifically for the collage */}
                    <div className="relative w-full h-full min-h-[1400px]">
                        {images.map((img) => (
                            <div
                                key={img.id}
                                className={`absolute ${img.top} ${img.left} ${img.rotation} transition-all duration-300 hover:scale-105 shadow-xl cursor-pointer`}
                                style={{
                                    zIndex: topImageId === img.id ? 100 : img.zIndex, // Boost zIndex if active
                                }}
                                onMouseEnter={() => setTopImageId(img.id)}
                            >
                                {/** @ts-ignore */}
                                {img.src ? (
                                    <div className="w-48 md:w-56 aspect-[4/3] rounded-lg bg-white border-4 border-white shadow-md overflow-hidden relative">
                                        <img /** @ts-ignore */
                                            src={img.src} /** @ts-ignore */
                                            alt={img.label}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 w-full bg-black/60 p-2">
                                            <p className="text-white text-xs font-bold text-center uppercase tracking-wider">{img.label}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-40 md:w-48 aspect-[4/5] rounded-lg bg-slate-200 border-4 border-white flex items-center justify-center text-slate-400 font-bold text-center p-4">
                                        {img.label}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <ProcessTimeline />
        </main>
    );
}
