'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
    { value: 28, suffix: '+', label: 'Years in Business' },
    { value: 500, suffix: '+', label: 'Clients Served' },
    { value: 9, suffix: '', label: 'In-House Capabilities' },
    { value: 100, suffix: '%', label: 'Local Production' },
];

function CountUp({ target, suffix, started }: { target: number; suffix: string; started: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!started) return;
        let start = 0;
        const duration = 1800;
        const step = Math.ceil(target / (duration / 16));
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 16);
        return () => clearInterval(timer);
    }, [target, started]);

    return (
        <span>{count}{suffix}</span>
    );
}

export default function StatsBanner() {
    const ref = useRef<HTMLDivElement>(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} className="bg-oxblood-700 py-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
                {stats.map((stat, i) => (
                    <div key={i} className="text-center group">
                        <p className="text-4xl md:text-5xl font-black tracking-tighter tabular-nums group-hover:scale-110 transition-transform duration-300 inline-block">
                            <CountUp target={stat.value} suffix={stat.suffix} started={started} />
                        </p>
                        <p className="text-xs font-bold uppercase tracking-widest mt-2 text-oxblood-200 opacity-80">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
