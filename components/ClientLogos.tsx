'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';

const clients = [
    "Unki Mine",
    "Mimosa Mining Co.",
    "Zimplats",
    "Delta Beverages",
    "Schweppes Zimbabwe",
    "OK Zimbabwe",
    "Pick n Pay",
    "Halsteds"
];

export default function ClientLogos() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true });

    useEffect(() => {
        if (!emblaApi) return;

        const autoplay = setInterval(() => {
            if (emblaApi.canScrollNext()) {
                emblaApi.scrollNext();
            } else {
                emblaApi.scrollTo(0);
            }
        }, 3000);

        return () => clearInterval(autoplay);
    }, [emblaApi]);

    return (
        <section className="py-12 bg-slate-50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">
                    Trusted by Industry Leaders
                </p>
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-12 select-none">
                        {clients.map((client, idx) => (
                            <div key={idx} className="flex-[0_0_auto] min-w-0">
                                <span className="text-xl md:text-2xl font-black text-slate-300 uppercase whitespace-nowrap hover:text-slate-400 transition-colors cursor-default">
                                    {client}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
