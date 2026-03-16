'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useQuote } from '@/hooks/useQuote';
import { Menu, X } from 'lucide-react';

export default function NavbarRed() {
    const { toggleDrawer, items } = useQuote();
    const [animate, setAnimate] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const years = new Date().getFullYear() - 1998;

    useEffect(() => {
        if (items.length > 0) {
            const timer = setTimeout(() => {
                setAnimate(true);
                setTimeout(() => setAnimate(false), 500);
            }, 0);
            return () => clearTimeout(timer);
        }
    }, [items.length]);

    // Close mobile menu when route changes or escape is pressed
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/catalog', label: 'Catalogue' },
        { href: '/uniform-builder', label: 'Uniform Builder' },
        { href: `/about`, label: `About — ${years} Years` },
    ];

    return (
        <>
            <nav className="border-b border-zinc-700 sticky top-0 bg-zinc-900/90 backdrop-blur-md z-[999] text-white">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-black tracking-tighter uppercase">
                        Kingsport<span className="text-oxblood-600">.</span>
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-widest text-slate-300">
                        {navLinks.map(l => (
                            <Link key={l.href} href={l.href} className="hover:text-oxblood-500 transition-colors">
                                {l.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Desktop Quote Button */}
                        <button
                            onClick={toggleDrawer}
                            className={`hidden md:block px-5 py-2 text-xs font-bold uppercase transition-all duration-300 ${animate
                                ? 'bg-oxblood-600 text-white scale-110 shadow-lg shadow-oxblood-600/50'
                                : 'bg-white text-zinc-900 hover:bg-oxblood-600 hover:text-white'
                                }`}
                        >
                            Request Quote {items.length > 0 && `(${items.length})`}
                        </button>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMobileOpen(v => !v)}
                            className="md:hidden p-2 text-white hover:text-oxblood-400 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/60 z-[997] md:hidden"
                        onClick={() => setMobileOpen(false)}
                    />
                    {/* Slide-down panel */}
                    <div className="fixed top-20 left-0 right-0 bg-zinc-900 z-[998] md:hidden border-b border-zinc-700 animate-in slide-in-from-top duration-200">
                        <div className="flex flex-col px-6 py-6 gap-1">
                            {navLinks.map(l => (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-white font-bold uppercase tracking-widest text-sm py-3 border-b border-zinc-800 hover:text-oxblood-400 transition-colors"
                                >
                                    {l.label}
                                </Link>
                            ))}
                            <button
                                onClick={() => { setMobileOpen(false); toggleDrawer(); }}
                                className="mt-4 bg-oxblood-600 text-white font-black text-sm uppercase tracking-widest py-3 w-full hover:bg-white hover:text-black transition-all"
                            >
                                Request Quote {items.length > 0 && `(${items.length})`}
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
