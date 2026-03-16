'use client';
import { useEffect, useState } from 'react';
import { useQuote } from '@/hooks/useQuote';
import QuoteForm from './QuoteForm';

export default function QuoteDrawer() {
    const { items, isOpen, toggleDrawer, removeItem, updateQuantity } = useQuote();
    const [view, setView] = useState<'list' | 'form'>('list');

    // Reset view when drawer closes
    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(() => setView('list'), 0);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[1000] flex justify-end">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/40" onClick={toggleDrawer} />

            {/* Drawer */}
            <div className="relative w-full max-w-md bg-white h-full shadow-2xl p-8 flex flex-col animate-in slide-in-from-right duration-300">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-black uppercase tracking-tighter">
                        {view === 'list' ? 'Your Quote' : 'Finalize Request'}
                    </h2>
                    <button onClick={toggleDrawer} className="text-slate-400 hover:text-black font-bold">CLOSE</button>
                </div>

                {view === 'list' ? (
                    <>
                        <div className="flex-1 overflow-y-auto space-y-6">
                            {items.length === 0 ? (
                                <p className="text-slate-400 italic">No items added yet...</p>
                            ) : (
                                items.map(item => (
                                    <div key={item.id} className="flex justify-between border-b pb-4 border-slate-100">
                                        <div>
                                            <h4 className="font-bold text-sm uppercase">{item.name}</h4>
                                            <div className="flex items-center gap-3 mt-1">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="w-5 h-5 flex items-center justify-center bg-slate-100 hover:bg-black hover:text-white rounded text-xs font-bold transition-colors"
                                                >
                                                    -
                                                </button>
                                                <p className="text-xs text-slate-500 font-bold w-4 text-center">{item.quantity}</p>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-5 h-5 flex items-center justify-center bg-slate-100 hover:bg-black hover:text-white rounded text-xs font-bold transition-colors"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-[10px] text-oxblood-500 font-bold uppercase mt-1"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-200">
                            <button
                                onClick={() => setView('form')}
                                disabled={items.length === 0}
                                className="w-full bg-oxblood-600 text-white font-black py-4 uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Proceed to Finalize
                            </button>
                            <p className="text-[10px] text-center mt-4 text-slate-400">
                                Kingsport: {new Date().getFullYear() - 1998} Years of Quality PPE & Apparel
                            </p>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex flex-col">
                        <button
                            onClick={() => setView('list')}
                            className="text-xs font-bold text-slate-500 hover:text-black mb-6 flex items-center gap-1 self-start"
                        >
                            ← Back to items
                        </button>

                        <div className="flex-1 overflow-y-auto">
                            <QuoteForm onSuccess={() => setTimeout(toggleDrawer, 3000)} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
