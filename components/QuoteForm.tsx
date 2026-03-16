'use client';
import { useState } from 'react';
import { useQuote } from '@/hooks/useQuote';
import { sendQuote } from '@/app/actions/sendQuote';

export default function QuoteForm({ onSuccess }: { onSuccess?: () => void }) {
    const { items } = useQuote();
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.currentTarget);
        await sendQuote(formData, items);
        // Logic handled by server action or simulated here. 
        // For now, we simulate success for the UI demo as per user request flow.

        console.log("Submitting quote...");

        setTimeout(() => {
            setStatus('success');
            if (onSuccess) onSuccess();
        }, 2000);
    };

    if (status === 'success') {
        return (
            <div className="text-center py-10 animate-in fade-in zoom-in">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-black uppercase">Request for Quote Sent</h3>
                <p className="text-sm text-slate-500 mt-2">Check your email for confirmation.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 animate-in slide-in-from-bottom-4 pb-4">
            <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-slate-400">Full Name</label>
                <input name="contact" required type="text" className="w-full border-b-2 border-slate-200 p-2 focus:border-oxblood-500 outline-none transition-colors" />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-slate-400">Company (Optional)</label>
                    <input name="company" type="text" className="w-full border-b-2 border-slate-200 p-2 focus:border-oxblood-500 outline-none transition-colors" />
                </div>
                <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-slate-400">Phone</label>
                    <input name="phone" required type="tel" className="w-full border-b-2 border-slate-200 p-2 focus:border-oxblood-500 outline-none transition-colors" />
                </div>
            </div>

            <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-slate-400">Email Address</label>
                <input name="email" required type="email" className="w-full border-b-2 border-slate-200 p-2 focus:border-oxblood-500 outline-none transition-colors" />
            </div>

            <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-slate-400">Additional Instructions / Product Codes</label>
                <p className="text-[10px] text-slate-400 italic mb-2">
                    Looking for a specific imported item? Enter the product code here (e.g., An Amrod code like <strong>POUCH-2310</strong>).
                </p>
                <textarea name="instructions" rows={3} className="w-full border-b-2 border-slate-200 p-2 focus:border-oxblood-500 outline-none transition-colors" placeholder="e.g. Branding requirements, or product codes like POUCH-2310..." />
            </div>

            <button
                disabled={status === 'sending'}
                className="w-full bg-black text-white font-black py-4 uppercase tracking-widest hover:bg-oxblood-900 hover:text-white transition-all disabled:bg-slate-300"
            >
                {status === 'sending' ? 'SENDING...' : 'CONFIRM REQUEST'}
            </button>
        </form>
    );
}
