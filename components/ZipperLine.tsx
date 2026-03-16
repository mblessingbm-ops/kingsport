'use client';

export default function ZipperLine() {
    return (
        <div className="relative w-full h-8 mb-8 overflow-hidden select-none">
            <style jsx>{`
        @keyframes zipMotion {
          0% { left: 0; }
          22% { left: calc(100% - 48px); } /* Move Right */
          28% { left: calc(100% - 48px); } /* Pause */
          50% { left: 0; } /* Return */
          100% { left: 0; } /* Wait */
        }
        @keyframes chainMask {
          0% { clip-path: inset(0 0 0 0); }
          22% { clip-path: inset(0 0 0 calc(100% - 48px)); }
          28% { clip-path: inset(0 0 0 calc(100% - 48px)); }
          50% { clip-path: inset(0 0 0 0); }
          100% { clip-path: inset(0 0 0 0); }
        }
        .zipper-head-anim {
          animation: zipMotion 9s ease-in-out infinite;
        }
        .chain-mask-anim {
          animation: chainMask 9s ease-in-out infinite;
        }
      `}</style>

            {/* Chain Container with Masking */}
            <div
                className="absolute inset-0 chain-mask-anim"
            >
                <div
                    className="absolute top-1/2 left-0 w-full -translate-y-1/2 h-3 mix-blend-multiply"
                    style={{
                        backgroundImage: "url('/assets/zipper-chain.png')",
                        backgroundRepeat: 'repeat-x',
                        backgroundSize: 'auto 100%',
                        filter: 'contrast(1.2)'
                    }}
                />
            </div>

            {/* Moving Head */}
            <div className="absolute top-0 left-0 h-full w-12 z-10 zipper-head-anim flex items-center justify-center mix-blend-multiply">
                <img
                    src="/assets/zipper-head.png"
                    alt="Zipper"
                    className="h-full w-auto object-contain drop-shadow-xl -rotate-90"
                />
            </div>
        </div>
    );
}
