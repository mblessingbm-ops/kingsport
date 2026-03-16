import HeroSqueegee from '@/components/HeroSqueegee';
import Link from 'next/link';

export default function DemoPage() {
    return (
        <main className="min-h-screen p-8 bg-slate-50">
            <div className="max-w-7xl mx-auto space-y-8">
                <header className="flex justify-between items-center">
                    <h1 className="text-3xl font-black uppercase">Hero Animation Demo</h1>
                    <Link href="/" className="text-sm font-bold underline hover:text-yellow-600">Back to Home</Link>
                </header>

                <section className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
                    <HeroSqueegee />
                </section>

                <div className="prose">
                    <h3>Implementation Notes</h3>
                    <p>This demo uses a CSS <code>clip-path</code> animation synchronized with a sliding yellow bar (&quot;squeegee&quot;) to transition between images.</p>
                    <p>Currently using placeholder images because access to local assets was restricted.</p>
                </div>
            </div>
        </main>
    );
}
