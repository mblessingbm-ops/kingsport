export default function TrustBadgeRed() {
    const years = new Date().getFullYear() - 1998;
    return (
        <div className="bg-oxblood-600 text-white py-4 px-6 inline-flex items-center gap-4 shadow-lg shadow-oxblood-900/20">
            <div className="text-4xl font-black">{years}</div>
            <div className="leading-tight">
                <p className="font-black uppercase text-xs tracking-tighter">Years of Zimbabwean</p>
                <p className="font-black uppercase text-xs tracking-tighter">Manufacturing Excellence</p>
            </div>
        </div>
    );
}
