import NatureAnimation from '@/components/NatureAnimation';

export default function EnvironmentPage() {
    return (
        <main className="min-h-screen pt-20 pb-12 bg-white">
            {/* Hero / Header */}
            <section className="max-w-7xl mx-auto px-6 mb-16">
                <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                    Environmental <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                        Policy
                    </span>
                </h1>

            </section>

            {/* Content */}
            <section className="max-w-4xl mx-auto px-6 space-y-12 text-slate-700 leading-relaxed">

                {/* Intro */}
                <p className="text-xl font-medium">
                    As a leading clothing manufacturing company with over twenty-five (25) years of experience in the production of branded apparel, protective clothing, corporate wear, and promotional materials. We recognise our responsibility to operate in an environmentally responsible manner and to minimise the environmental impact of our operations.
                </p>

                {/* Our Commitment */}
                <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-green-500">
                    <h2 className="text-3xl font-black uppercase text-slate-900 mb-6">Our Commitment</h2>
                    <p className="mb-4 font-bold text-slate-900">Kingsport Private Limited is committed to:</p>
                    <ul className="space-y-4 list-disc pl-5">
                        <li>
                            Full compliance with all applicable environmental laws, regulations, and standards in Zimbabwe, including those set by the <span className="font-bold text-green-600">Environmental Management Agency (EMA)</span>.
                        </li>
                        <li>
                            Preventing pollution and reducing environmental harm through responsible use of raw materials, water, energy, and other resources.
                        </li>
                        <li>
                            Safe and responsible management of chemicals, dyes, inks, and other substances used in our manufacturing processes.
                        </li>
                        <li>
                            Reducing waste generation and promoting reuse, recycling, and environmentally responsible disposal practices.
                        </li>
                        <li>
                            Continual improvement of our environmental performance through regular assessment and enhancement of our operational processes.
                        </li>
                    </ul>
                </div>

                {/* Implementation */}
                <div>
                    <h2 className="text-2xl font-black uppercase text-slate-900 mb-4">Implementation and Responsibility</h2>
                    <p>
                        Environmental responsibility is a shared obligation across all levels of the organisation. Management ensures this policy is effectively communicated, implemented, and periodically reviewed. All employees are expected to carry out their duties in a manner consistent with this policy.
                    </p>
                </div>

                {/* Continuous Improvement */}
                <div>
                    <h2 className="text-2xl font-black uppercase text-slate-900 mb-4">Continuous Improvement</h2>
                    <p>
                        Kingsport Private Limited remains committed to adopting practical and sustainable initiatives that support environmental stewardship while maintaining high standards of quality, safety, and operational efficiency.
                    </p>
                </div>

                <div className="pt-8 border-t border-slate-200 text-slate-500 italic text-sm">
                    This policy reflects our long-standing commitment to responsible manufacturing and sustainable business practices.
                </div>

            </section>
            {/* Full Screen Nature Animation Overlay */}
            <NatureAnimation />
        </main>
    );
}
