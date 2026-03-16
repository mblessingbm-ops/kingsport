'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useQuote } from '@/hooks/useQuote';

export default function Navbar() {
    const { toggleDrawer, items } = useQuote();
    const [animate, setAnimate] = useState(false);
    const years = new Date().getFullYear() - 1998;

    useEffect(() => {
        if (items.length > 0) {
            // Delay state update to avoid "setState synchronously in effect" warning
            const timer = setTimeout(() => {
                setAnimate(true);
                setTimeout(() => setAnimate(false), 500);
            }, 0);
            return () => clearTimeout(timer);
        }
    }, [items.length]);

    return (
        <nav className="border-b sticky top-0 bg-white/80 backdrop-blur-md z-[999]">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="text-2xl font-black tracking-tighter uppercase">
                    Kingsport<span className="text-oxblood-900">.</span>
                </div>
                <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-widest">
                    <Link href="/" className="hover:text-oxblood-900">Home</Link>
                    <Link href="/catalog" className="hover:text-oxblood-900">Catalogue</Link>
                    <Link href="/uniform-builder" className="text-oxblood-900 hover:text-black font-black">Uniform Builder</Link>
                    <Link href="/about" className="hover:text-oxblood-900">About - {years} Years</Link>
                    <Link href="/environment" className="hover:text-oxblood-900">The Environment</Link>
                </div>
                <button
                    onClick={toggleDrawer}
                    className={`px-5 py-2 text-xs font-bold uppercase transition-all duration-300 ${animate
                        ? 'bg-oxblood-900 text-white scale-110 shadow-lg shadow-oxblood-900/50'
                        : 'bg-black text-white hover:bg-oxblood-900 hover:text-white'
                        }`}
                >
                    Request Quote {items.length > 0 && `(${items.length})`}
                </button>
            </div>
        </nav>
    );
}
