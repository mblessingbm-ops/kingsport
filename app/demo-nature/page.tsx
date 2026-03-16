import NatureAnimation from '@/components/NatureAnimation';

export default function DemoNaturePage() {
    return (
        <main className="min-h-screen bg-white flex flex-col items-center justify-center p-12">
            <h1 className="text-4xl font-black uppercase mb-12">Nature Animation Prototype</h1>
            <div className="bg-slate-100 p-12 rounded-xl shadow-xl flex flex-col items-center">
                <NatureAnimation />
                <p className="mt-8 text-slate-500 text-sm font-bold uppercase tracking-widest">
                    Replays every 30 seconds
                </p>
            </div>
        </main>
    );
}
