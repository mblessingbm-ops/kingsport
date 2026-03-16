'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, HardHat, Shovel, ShieldCheck, GraduationCap, Factory } from 'lucide-react';

const industries = [
    {
        name: 'Mining',
        icon: HardHat,
        image: '/assets/products/hard-hat.png', // Using product images as generic backgrounds for now
        color: 'bg-zinc-800'
    },
    {
        name: 'Construction',
        icon: Factory,
        image: '/assets/products/safety-shoes.png',
        color: 'bg-yellow-600'
    },
    {
        name: 'Agriculture',
        icon: Shovel,
        image: '/assets/products/heavy-gumboots.png',
        color: 'bg-green-700'
    },
    {
        name: 'Corporate',
        icon: Briefcase,
        image: '/assets/products/cotton-tshirt.png',
        color: 'bg-blue-800'
    },
    {
        name: 'Security',
        icon: ShieldCheck,
        image: '/assets/products/reflective-vest.png',
        color: 'bg-slate-900'
    },
    {
        name: 'Schools',
        icon: GraduationCap,
        image: '/assets/products/pique-polo.png', // Using polo as generic school uniform representation for now
        color: 'bg-oxblood-700'
    }
];

export default function ShopByIndustry() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black uppercase text-slate-900 mb-4">Shop By Industry</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        We understand the specific safety and branding requirements of your sector.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((ind) => (
                        <Link
                            key={ind.name}
                            href={`/catalog?industry=${ind.name}`}
                            className="group relative h-64 overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Background Overlay */}
                            <div className={`absolute inset-0 ${ind.color} opacity-90 group-hover:opacity-100 transition-opacity z-10`} />

                            {/* Subtle Background Image */}
                            {/* Subtle Background Image */}
                            <Image
                                src={ind.image}
                                alt={ind.name}
                                fill
                                className="object-cover mix-blend-overlay opacity-20 grayscale group-hover:scale-110 transition-transform duration-700"
                            />

                            <div className="relative z-20 h-full flex flex-col items-center justify-center text-white">
                                <ind.icon className="w-12 h-12 mb-4 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-3xl font-black uppercase tracking-tight">{ind.name}</h3>
                                <span className="mt-4 text-xs font-bold uppercase tracking-widest border border-white/30 px-4 py-2 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                                    View Products
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
