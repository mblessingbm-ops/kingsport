

export default function LabourStandardsPage() {
    return (
        <main className="min-h-screen pt-20 pb-12 bg-white">
            {/* Hero / Header */}
            <section className="max-w-7xl mx-auto px-6 mb-16">
                <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                    Labour <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-oxblood-600 to-oxblood-500">
                        Standards
                    </span>
                </h1>
            </section>

            {/* Content */}
            <section className="max-w-4xl mx-auto px-6 space-y-12 text-slate-700 leading-relaxed">
                {/* Intro */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-black uppercase text-slate-900">Kingsport Private Limited</h2>
                    <p className="text-xl font-medium">
                        Kingsport Private Limited is committed to upholding fair labour standards and conducting its operations in a lawful, ethical, and socially responsible manner. We recognise the dignity and rights of all workers and strictly oppose all forms of child labour.
                    </p>
                </div>

                {/* Our Commitment */}
                <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-oxblood-500">
                    <h2 className="text-3xl font-black uppercase text-slate-900 mb-6">Our Commitment</h2>
                    <p className="mb-4 font-bold text-slate-900">Kingsport Private Limited commits to:</p>
                    <ul className="space-y-4 list-disc pl-5">
                        <li>
                            Full compliance with all applicable labour laws and regulations of Zimbabwe, including those governing minimum working age, wages, working hours, and conditions of employment.
                        </li>
                        <li>
                            Prohibiting the employment of children below the legally permissible working age in any aspect of our operations.
                        </li>
                        <li>
                            Ensuring that no young persons are engaged in work that is hazardous, harmful, or likely to interfere with their education, health, or development.
                        </li>
                        <li>
                            Upholding fair employment practices that promote equality, respect, and non-discrimination.
                        </li>
                        <li>
                            Maintaining a safe and healthy working environment for all employees.
                        </li>
                    </ul>
                </div>

                {/* Implementation */}
                <div>
                    <h2 className="text-2xl font-black uppercase text-slate-900 mb-4">Implementation</h2>
                    <p>
                        All employees, supervisors, and management are responsible for ensuring compliance with this policy. Age verification shall form part of our recruitment process, and any violation of this policy will result in disciplinary action in line with company procedures and the law.
                    </p>
                </div>

                {/* Reporting and Enforcement */}
                <div>
                    <h2 className="text-2xl font-black uppercase text-slate-900 mb-4">Reporting and Enforcement</h2>
                    <p>
                        Kingsport Private Limited encourages employees and stakeholders to report any suspected breaches of labour standards or child labour practices. All reports will be treated seriously and addressed promptly.
                    </p>
                </div>

                <div className="pt-8 border-t border-slate-200 text-slate-500 italic text-sm">
                    This policy reflects our commitment to ethical labour practices and responsible manufacturing.
                </div>
            </section>
        </main>
    );
}
