'use client';
import { useState, Suspense } from 'react'; // Added Suspense
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { products, categories } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';

export default function CatalogPage() {
    return (
        <Suspense fallback={<div className="p-12 text-center">Loading Catalogue...</div>}>
            <CatalogContent />
        </Suspense>
    );
}

function CatalogContent() {
    const [activeTab, setActiveTab] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

    const searchParams = useSearchParams();
    const industryParam = searchParams.get('industry');

    const filtered = products.filter(p => {
        // Industry Filter takes precedence over tabs
        if (industryParam) {
            const matchesIndustry = p.industries?.includes(industryParam);
            const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.description.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesIndustry && matchesSearch;
        }

        const matchesCategory = activeTab === "All" || p.category === activeTab;
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="max-w-7xl mx-auto px-6 py-12">
            {/* Product Modal */}
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                    onSelectProduct={setSelectedProduct}
                />
            )}

            <header className="mb-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div>
                        <h1 className="text-5xl font-black uppercase italic mb-2">The Catalogue</h1>
                        <p className="text-slate-500 max-w-lg">Browse our extensive range of locally manufactured and imported products.</p>
                    </div>

                    {/* Search Bar */}
                    <div className="w-full md:w-auto">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full md:w-80 border-b-2 border-slate-300 py-2 pl-2 pr-8 outline-none focus:border-yellow-500 transition-all bg-transparent font-bold uppercase placeholder:font-normal placeholder:capitalize"
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-2 top-2 text-slate-400 group-focus-within:text-yellow-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Industry Active Banner */}
                {industryParam ? (
                    <div className="bg-slate-900 text-white p-6 rounded-lg flex justify-between items-center shadow-lg">
                        <div>
                            <span className="text-xs font-bold uppercase text-slate-400 block mb-1">Active Industry Filter</span>
                            <span className="text-2xl font-black uppercase text-oxblood-600">{industryParam}</span>
                        </div>
                        <Link href="/catalog" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded text-xs font-bold uppercase transition-colors">
                            Clear Filter
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-wrap gap-4 border-b pb-6">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`px-6 py-2 text-xs font-black uppercase transition-all ${activeTab === cat ? 'bg-oxblood-600 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                )}
            </header>

            {filtered.length === 0 ? (
                <div className="py-20 text-center">
                    <p className="text-slate-400 text-xl font-medium">No products found matching your criteria.</p>
                    <button onClick={() => { setActiveTab("All"); setSearchTerm(""); }} className="mt-4 text-yellow-600 font-bold underline">Clear Filters</button>
                    {industryParam && <div className="mt-2"><Link href="/catalog" className="text-sm underline text-slate-500">Back to Full Catalogue</Link></div>}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {filtered.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onClick={() => setSelectedProduct(product)}
                        />
                    ))}
                </div>
            )}
        </main>
    );
}
