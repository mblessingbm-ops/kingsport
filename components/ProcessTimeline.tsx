'use client';
import {
    PenLine,
    Scissors,
    Printer,
    Tangent,
    ClipboardCheck,
    Package,
    Truck,
} from 'lucide-react';

const steps = [
    { icon: PenLine, label: 'Design', desc: 'Custom graphic design and sampling in-house.' },
    { icon: Scissors, label: 'Cutting', desc: 'Precision die-cutting for zero material waste.' },
    { icon: Printer, label: 'Printing', desc: 'Screen, DTF, sublimation & litho print runs.' },
    { icon: Tangent, label: 'Stitching', desc: 'Industrial overlock and lockstitch construction.' },
    { icon: ClipboardCheck, label: 'QC Check', desc: 'Every unit inspected before packaging.' },
    { icon: Package, label: 'Packaging', desc: 'Branded poly-bags, boxes or retail packing.' },
    { icon: Truck, label: 'Dispatch', desc: 'Our own fleet — same-day Harare delivery.' },
];

export default function ProcessTimeline() {
    return (
        <section className="py-24 bg-zinc-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-14">
                    <span className="text-oxblood-400 text-xs font-bold uppercase tracking-widest">How We Work</span>
                    <h2 className="text-4xl md:text-5xl font-black uppercase mt-2 leading-tight">
                        From <span className="text-oxblood-500">Design</span><br />to Dispatch
                    </h2>
                </div>

                {/* Desktop: horizontal line with nodes */}
                <div className="hidden md:block relative">
                    {/* Connector line */}
                    <div className="absolute top-[2.5rem] left-0 right-0 h-px bg-zinc-700" />
                    <div className="grid grid-cols-7 gap-2">
                        {steps.map((step, i) => (
                            <div key={i} className="flex flex-col items-center group text-center">
                                {/* Node */}
                                <div className="relative z-10 w-10 h-10 rounded-full bg-zinc-900 border-2 border-zinc-700 group-hover:border-oxblood-500 group-hover:bg-oxblood-600 flex items-center justify-center transition-all duration-300 mb-4">
                                    <step.icon className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                                </div>
                                {/* Step number badge */}
                                <span className="text-[10px] font-black uppercase tracking-widest text-oxblood-500 mb-1">0{i + 1}</span>
                                <h3 className="text-sm font-black uppercase tracking-wide mb-2">{step.label}</h3>
                                <p className="text-zinc-500 text-xs leading-relaxed group-hover:text-zinc-300 transition-colors">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile: vertical list */}
                <div className="md:hidden space-y-0">
                    {steps.map((step, i) => (
                        <div key={i} className="flex gap-5">
                            {/* Left: line + node */}
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
                                    <step.icon className="w-4 h-4 text-oxblood-400" />
                                </div>
                                {i < steps.length - 1 && <div className="flex-1 w-px bg-zinc-800 my-1" />}
                            </div>
                            {/* Right: text */}
                            <div className="pb-8">
                                <span className="text-[10px] font-black uppercase tracking-widest text-oxblood-500">0{i + 1}</span>
                                <h3 className="text-sm font-black uppercase tracking-wide mt-1 mb-1">{step.label}</h3>
                                <p className="text-zinc-500 text-xs leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
