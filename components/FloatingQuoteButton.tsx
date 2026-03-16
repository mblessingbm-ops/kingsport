'use client';
import { useQuote } from '@/hooks/useQuote';

export default function FloatingQuoteButton() {
    const { toggleDrawer, isOpen, items } = useQuote();

    if (isOpen) return null;

    return (
        <div className="fixed bottom-6 right-6 z-[998] flex items-center gap-3 group">
            {items.length > 0 && (
                <span className="bg-white border border-slate-200 text-slate-800 text-xs font-bold px-3 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    {items.length} item{items.length !== 1 ? 's' : ''} in quote
                </span>
            )}
            <div className="relative">
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full bg-oxblood-600 opacity-30 animate-ping" />
                <button
                    onClick={toggleDrawer}
                    aria-label="Request a Quote"
                    className="relative bg-oxblood-600 hover:bg-black text-white font-black text-xs uppercase tracking-widest px-5 py-4 rounded-full shadow-2xl shadow-oxblood-900/40 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Request Quote{items.length > 0 ? ` (${items.length})` : ''}
                </button>
            </div>
        </div>
    );
}
