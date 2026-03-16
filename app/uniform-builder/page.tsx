'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/data';
import { useQuote } from '@/hooks/useQuote';
import { Check, Shirt, Briefcase, User, Info } from 'lucide-react';

export default function UniformBuilder() {
    const { addItem, toggleDrawer } = useQuote();
    const [gender, setGender] = useState<'Men' | 'Women'>('Men');
    const [selectedIds, setSelectedIds] = useState<number[]>([]);

    // 1. Filter Corporate Products
    const corporateProducts = products.filter(p => p.category === 'Corporate Wear');

    // 2. Simple categorization (since we don't have sub-cats in data yet)
    // We'll just list them all for now, but in a real app we'd map them strictly.
    const tops = corporateProducts.filter(p =>
        p.name.includes("Shirt") || p.name.includes("Polo") || p.name.includes("Blouse") || p.name.includes("Top"));

    const bottoms = corporateProducts.filter(p =>
        p.name.includes("Trouser") || p.name.includes("Chino") || p.name.includes("Skirt") || p.name.includes("Jeans"));

    const outerwear = corporateProducts.filter(p =>
        p.name.includes("Jacket") || p.name.includes("Blazer") || p.name.includes("Softshell"));

    // Catch-all for anything missed
    const accessories = corporateProducts.filter(p =>
        !tops.includes(p) && !bottoms.includes(p) && !outerwear.includes(p) && !p.name.includes("Pack"));

    const handleToggle = (id: number) => {
        setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const handleAddToQuote = () => {
        const selectedItems = products.filter(p => selectedIds.includes(p.id));
        selectedItems.forEach(item => {
            addItem({
                id: item.id,
                name: `${gender}'s ${item.name} (Uniform)`,
                quantity: 1
            });
        });
        toggleDrawer();
        setSelectedIds([]);
    };

    return (
        <div className="min-h-screen bg-slate-50">


            <main className="max-w-7xl mx-auto px-6 py-12">
                <header className="mb-12 text-center">
                    <span className="text-oxblood-600 font-bold tracking-widest uppercase text-xs">Kingsport Corporate</span>
                    <h1 className="text-4xl md:text-6xl font-black uppercase text-slate-900 mb-6">Uniform Builder</h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Curate the perfect look for your team. Select items below to build a uniform package.
                    </p>
                </header>

                {/* Gender Toggle */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white p-1 rounded-full shadow-sm border border-slate-200 flex">
                        <button
                            onClick={() => setGender('Men')}
                            className={`px-8 py-3 rounded-full text-sm font-bold uppercase transition-all ${gender === 'Men' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
                                }`}
                        >
                            Men&apos;s Collection
                        </button>
                        <button
                            onClick={() => setGender('Women')}
                            className={`px-8 py-3 rounded-full text-sm font-bold uppercase transition-all ${gender === 'Women' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
                                }`}
                        >
                            Women&apos;s Collection
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* LEFT: Selection Area */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Section: Tops */}
                        <section>
                            <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                                <Shirt className="w-6 h-6" /> Tops
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {tops.map(product => (
                                    <ProductSelectCard
                                        key={product.id}
                                        product={product}
                                        selected={selectedIds.includes(product.id)}
                                        onToggle={() => handleToggle(product.id)}
                                    />
                                ))}
                            </div>
                        </section>

                        {/* Section: Bottoms */}
                        <section>
                            <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                                <User className="w-6 h-6" /> Bottoms
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {bottoms.map(product => (
                                    <ProductSelectCard
                                        key={product.id}
                                        product={product}
                                        selected={selectedIds.includes(product.id)}
                                        onToggle={() => handleToggle(product.id)}
                                    />
                                ))}
                            </div>
                        </section>

                        {/* Section: Outerwear */}
                        <section>
                            <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                                <Briefcase className="w-6 h-6" /> Outerwear
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {outerwear.map(product => (
                                    <ProductSelectCard
                                        key={product.id}
                                        product={product}
                                        selected={selectedIds.includes(product.id)}
                                        onToggle={() => handleToggle(product.id)}
                                    />
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* RIGHT: Summary Panel */}
                    <div className="lg:col-span-1 lg:sticky lg:top-24">
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                            <h3 className="text-xl font-black uppercase mb-6 border-b pb-4">Your Uniform Pack</h3>

                            {selectedIds.length === 0 ? (
                                <div className="text-center py-12 text-slate-400">
                                    <Shirt className="w-12 h-12 mx-auto mb-3 opacity-20" />
                                    <p className="text-sm">Select items to build your look.</p>
                                </div>
                            ) : (
                                <div className="space-y-4 mb-8">
                                    {products.filter(p => selectedIds.includes(p.id)).map(item => (
                                        <div key={item.id} className="flex gap-4 items-center bg-slate-50 p-3 rounded-lg">
                                            <div className="relative w-12 h-12 shrink-0 bg-white rounded-md overflow-hidden border">
                                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs font-bold uppercase line-clamp-1">{item.name}</p>
                                                <p className="text-[10px] text-slate-500">{gender}&apos;s Cut</p>
                                            </div>
                                            <button onClick={() => handleToggle(item.id)} className="text-slate-400 hover:text-oxblood-600">
                                                ×
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="space-y-3">
                                <button
                                    onClick={handleAddToQuote}
                                    disabled={selectedIds.length === 0}
                                    className="w-full bg-oxblood-600 text-white font-black py-4 rounded-lg uppercase tracking-widest hover:bg-black hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Review & Quote
                                </button>
                                <p className="text-[10px] text-center text-slate-400 leading-tight">
                                    <Info className="w-3 h-3 inline mr-1" />
                                    This will add the selected items to your quote list where you can specify quantities.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </main >
        </div >
    );
}

function ProductSelectCard({ product, selected, onToggle }: {
    product: { id: number; name: string; image: string; description: string; category: string };
    selected: boolean;
    onToggle: () => void
}) {
    return (
        <div
            onClick={onToggle}
            className={`group cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-300 ${selected ? 'border-oxblood-600 shadow-lg ring-2 ring-oxblood-600/20' : 'border-transparent bg-white shadow-sm hover:shadow-md hover:border-slate-200'
                }`}
        >
            <div className="aspect-[4/5] relative bg-slate-100">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover mix-blend-multiply p-4"
                />

                {selected && (
                    <div className="absolute inset-0 bg-oxblood-600/20 flex items-center justify-center animate-in fade-in">
                        <div className="bg-oxblood-600 text-white rounded-full p-2 shadow-lg scale-110">
                            <Check className="w-6 h-6" strokeWidth={3} />
                        </div>
                    </div>
                )}
            </div>
            <div className="p-4">
                <h4 className={`text-xs font-bold uppercase mb-1 line-clamp-1 ${selected ? 'text-oxblood-600' : 'text-slate-900'}`}>
                    {product.name}
                </h4>
                <p className="text-[10px] text-slate-500 line-clamp-2">{product.description}</p>
            </div>
        </div>
    );
}
