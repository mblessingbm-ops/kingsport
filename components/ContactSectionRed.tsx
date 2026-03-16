import { Phone, MapPin } from 'lucide-react';

export default function ContactSectionRed() {
    return (
        <section id="contact" className="py-12 bg-zinc-50">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 h-[500px]">
                {/* Left Tile: Contact Details */}
                <div className="bg-zinc-900 text-white p-8 md:p-12 rounded-2xl flex flex-col justify-center h-full shadow-xl">
                    <div className="mb-8">
                        <h3 className="text-3xl font-black uppercase text-red-600 mb-2">Get in Touch</h3>
                        <p className="text-zinc-400">Speak to our sales team directly.</p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <Phone className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                            <div className="space-y-2 text-lg font-bold">
                                <p>0242 781 073</p>
                                <p>0242 770 712</p>
                                <p>0242 770 922</p>
                                <p>0242 770 607</p>
                                <p>086 770 10 383</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 pt-6 border-t border-zinc-800">
                            <MapPin className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                            <div>
                                <p className="text-xl font-bold">4 Grant Street</p>
                                <p className="text-zinc-400">Harare, Zimbabwe</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Tile: Google Maps */}
                <div className="h-full rounded-2xl overflow-hidden shadow-xl border border-zinc-200 bg-white">
                    <iframe
                        src="https://maps.google.com/maps?q=4%20Grant%20Street%2C%20Harare&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                        title="Kingsport Location"
                    >
                    </iframe>
                </div>
            </div>
        </section>
    );
}
