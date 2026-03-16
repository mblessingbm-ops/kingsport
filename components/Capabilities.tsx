'use client'
import useEmblaCarousel from 'embla-carousel-react';
import {
    Scissors,
    Tangent, // Embroidery? Needle is not in lucide defaults sometimes, using Scissors/Tangent/etc. checking docs if possible. 
    // Let's use generic icons or specific ones that usually exist.
    Printer,
    Palette,
    Truck,
    PackageCheck,
    Headset,
    Shirt,
    Stamp
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Capabilities() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true });
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    useEffect(() => {
        if (!emblaApi) return;

        const updateState = () => {
            setCanScrollPrev(emblaApi.canScrollPrev());
            setCanScrollNext(emblaApi.canScrollNext());
        };

        emblaApi.on('select', updateState);
        emblaApi.on('reInit', updateState);
        updateState();
    }, [emblaApi]);

    const caps = [
        { name: 'Manufacturing', desc: 'In-house cutting and garment construction ensuring complete control over quality.', icon: Scissors },
        { name: 'Embroidery', desc: 'High-density stitching for a premium, long-lasting corporate look.', icon: Tangent }, // Tangent looks like a stitch/math? Maybe not. Let's use generic.
        // Actually, I'll use standard Lucide icons that map well. 
        // Needle -> not standard. Scissors is good for manufacturing. 
        // Embroidery -> Feather? Pen? Let's use `Stamp` or similar. 
        // Or `Activity` for stitch lines.
        { name: 'Screen Printing', desc: 'Best for large logos and high-volume promotional runs.', icon: Palette },
        { name: 'Heat Transfer', desc: 'Perfect for complex, multi-color designs on PPE.', icon: Stamp },
        { name: 'Dye Sublimation', desc: 'Full-color fabric customization for vibrant, all-over prints.', icon: Shirt },
        { name: 'DTF Printing', desc: 'Direct-to-Film versatility for detailed prints on any fabric.', icon: Printer },
        { name: 'Logistics', desc: 'Dedicated delivery fleet and distribution network across Zimbabwe.', icon: Truck },
        { name: 'Packaging', desc: 'Final quality checks and professional packing for every order.', icon: PackageCheck },
        { name: 'Support', desc: 'Dedicated customer service and after-sales support.', icon: Headset },
    ];

    return (
        <section className="py-24 bg-slate-950 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl md:text-5xl font-black uppercase border-l-8 border-oxblood-900 pl-6 leading-none">
                        Our <br />
                        <span className="text-oxblood-900">Capabilities</span>
                    </h2>
                    <div className="flex gap-2">
                        <button
                            onClick={() => emblaApi?.scrollPrev()}
                            disabled={!canScrollPrev}
                            className="p-3 border border-slate-700 hover:bg-oxblood-900 hover:text-white hover:border-oxblood-900 transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
                        >
                            ←
                        </button>
                        <button
                            onClick={() => emblaApi?.scrollNext()}
                            disabled={!canScrollNext}
                            className="p-3 border border-slate-700 hover:bg-oxblood-900 hover:text-white hover:border-oxblood-900 transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
                        >
                            →
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                    <div className="flex gap-6">
                        {caps.map((item, idx) => (
                            <div key={idx} className="flex-[0_0_85%] md:flex-[0_0_350px] min-w-0">
                                <div className="h-full border border-slate-800 bg-slate-900/50 p-8 hover:border-oxblood-900/50 group transition-colors">
                                    <div className="mb-6 text-oxblood-900 opacity-80 group-hover:opacity-100 transition-opacity">
                                        <item.icon size={48} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-bold uppercase mb-3 tracking-wide">{item.name}</h3>
                                    <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
