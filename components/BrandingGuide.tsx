export default function BrandingGuide() {
    const methods = [
        { name: 'Embroidery', desc: 'High-density stitching for a premium, long-lasting look.', icon: '🪡' },
        { name: 'Screen Printing', desc: 'Best for large logos and high-volume promotional runs.', icon: '🎨' },
        { name: 'Heat Transfer', desc: 'Perfect for complex, multi-color designs on PPE.', icon: '🔥' },
    ];

    return (
        <section className="py-20 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-black uppercase mb-12 border-l-4 border-oxblood-900 pl-4">
                    Professional Branding Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {methods.map((m) => (
                        <div key={m.name} className="group border border-slate-700 p-8 hover:bg-slate-800 transition-colors">
                            <div className="text-4xl mb-4">{m.icon}</div>
                            <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-oxblood-900 transition-colors">
                                {m.name}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
