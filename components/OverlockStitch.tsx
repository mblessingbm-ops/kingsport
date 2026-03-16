'use client';

export default function OverlockStitch() {
    return (
        <div className="relative w-full h-12 mb-8 overflow-hidden select-none">
            <style jsx>{`
        @keyframes stitchMotion {
          0% { left: 0; }
          50% { left: calc(100% - 48px); }
          100% { left: 0; }
        }
        @keyframes stitchMask {
          0% { clip-path: inset(0 100% 0 0); }
          50% { clip-path: inset(0 0 0 0); }
          100% { clip-path: inset(0 100% 0 0); }
        }
        .stitch-head-anim {
          animation: stitchMotion 8s ease-in-out infinite;
        }
        .stitch-mask-anim {
          animation: stitchMask 8s ease-in-out infinite;
        }
      `}</style>

            {/* Stitch Pattern Container with Masking */}
            <div
                className="absolute inset-0 stitch-mask-anim z-0 mix-blend-multiply"
            >
                <div
                    className="absolute top-1/2 left-0 w-full -translate-y-1/2 h-8"
                    style={{
                        backgroundImage: "url('/assets/stitch-pattern.png')",
                        backgroundRepeat: 'repeat-x',
                        backgroundSize: 'auto 100%'
                    }}
                />
            </div>

            {/* Moving Head (Presser Foot) */}
            <div className="absolute top-0 left-0 h-full w-12 z-10 stitch-head-anim flex items-center justify-center mix-blend-multiply">
                <img
                    src="/assets/stitch-foot.png"
                    alt="Sewing Foot"
                    className="h-full w-auto object-contain drop-shadow-sm"
                />
            </div>
        </div>
    );
}
