'use client';
import { useState } from 'react';
import { useQuote } from '@/hooks/useQuote';
import Image from 'next/image';
// import { toast } from 'sonner'; // Assuming we might want toasts later, but for now just raw logic

// Defining props based on data structure
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

export default function ProductCard({ product, onClick }: { product: Product, onClick?: () => void }) {
    const { addItem } = useQuote();
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToQuote = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent opening modal when clicking add button
        addItem({
            id: product.id,
            name: product.name,
            quantity: 1
        });

        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className="group cursor-pointer" onClick={onClick}>
            <div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-[4/5] mb-4">
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10" />
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20">
                    <span className="bg-black text-white text-[10px] font-black uppercase px-2 py-1 tracking-widest">
                        {product.category}
                    </span>
                </div>
            </div>

            <h3 className="text-lg font-bold uppercase tracking-tight">{product.name}</h3>
            <p className="text-slate-500 text-sm mt-1 line-clamp-1">{product.description}</p>

            <div className="mt-4 flex flex-col gap-2">
                <button
                    onClick={handleAddToQuote}
                    disabled={isAdded}
                    className={`w-full text-xs font-black uppercase py-3 tracking-widest transition-all duration-300 ${isAdded
                        ? 'bg-green-600 text-white scale-105'
                        : 'bg-black text-white hover:bg-oxblood-600 hover:text-white'
                        }`}
                >
                    {isAdded ? 'Added to Quote ✓' : 'Add to Quote for Direct Factory Price'}
                </button>
            </div>
        </div>
    );
}
