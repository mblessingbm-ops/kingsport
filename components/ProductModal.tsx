'use client';
import { products } from '@/lib/data';
import { useQuote } from '@/hooks/useQuote';
import { useState } from 'react';
import { X, Check } from 'lucide-react';
import Image from 'next/image';

interface Product {
    id: number;
    name: string;
    category: string;
    image: string;
    description: string;
    specs: string[];
    featured: boolean;
    industries?: string[];
}

interface ProductModalProps {
    product: Product;
    onClose: () => void;
    onSelectProduct: (product: Product) => void;
}

export default function ProductModal({ product, onClose, onSelectProduct }: ProductModalProps) {
    const { addItem } = useQuote();
    const [isAdded, setIsAdded] = useState(false);

    // Find related products: same category, not the current one, limit to 3
    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 3);

    const handleAddToQuote = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        addItem({
            id: product.id,
            name: product.name,
            quantity: 1
        });
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl relative z-10 overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-auto overflow-y-auto md:overflow-visible">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 bg-white/50 hover:bg-white rounded-full transition-colors"
                >
                    <X className="w-6 h-6 text-slate-900" />
                </button>

                {/* Left: Image */}
                <div className="w-full md:w-1/2 p-6 md:p-12 bg-slate-50 flex items-center justify-center relative min-h-[300px] md:min-h-[400px]">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain drop-shadow-xl mix-blend-multiply p-6"
                    />
                </div>

                {/* Right: Details */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
                    <div className="mb-auto">
                        <span className="text-oxblood-600 font-bold uppercase tracking-widest text-xs mb-2 block">
                            {product.category}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4 text-slate-900">
                            {product.name}
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            {product.description}
                        </p>

                        <div className="mb-6">
                            <h3 className="font-bold uppercase text-sm mb-3 text-slate-900">Specifications</h3>
                            <ul className="grid grid-cols-1 gap-2">
                                {product.specs.map((spec, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                                        <div className="w-1.5 h-1.5 bg-oxblood-500 rounded-full" />
                                        {spec}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Industry Badges */}
                        {product.industries && product.industries.length > 0 && (
                            <div className="mb-6">
                                <h3 className="font-bold uppercase text-sm mb-3 text-slate-900">Suited For</h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.industries.map((industry, i) => (
                                        <span
                                            key={i}
                                            className="text-[11px] font-bold uppercase tracking-wider border border-oxblood-500 text-oxblood-600 px-3 py-1 rounded-full"
                                        >
                                            {industry}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                        <button
                            onClick={handleAddToQuote}
                            disabled={isAdded}
                            className={`w-full py-4 font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${isAdded
                                ? 'bg-green-600 text-white'
                                : 'bg-oxblood-600 text-white hover:bg-slate-900 hover:text-white'
                                }`}
                        >
                            {isAdded ? (
                                <>Added to Quote <Check className="w-5 h-5" /></>
                            ) : (
                                'Add to Quote'
                            )}
                        </button>
                    </div>

                    {/* Related Products Section */}
                    {relatedProducts.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-slate-100">
                            <h3 className="font-bold uppercase text-sm mb-4 text-slate-400">You Might Also Need</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {relatedProducts.map(rp => (
                                    <div
                                        key={rp.id}
                                        onClick={() => onSelectProduct(rp)}
                                        className="group cursor-pointer"
                                    >
                                        <div className="bg-slate-50 rounded-lg p-2 mb-2 group-hover:bg-oxblood-50 transition-colors relative h-20">
                                            <Image
                                                src={rp.image}
                                                alt={rp.name}
                                                fill
                                                className="object-contain mix-blend-multiply p-2"
                                            />
                                        </div>
                                        <p className="text-xs font-bold uppercase leading-tight group-hover:text-oxblood-600 transition-colors line-clamp-2">
                                            {rp.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
}
