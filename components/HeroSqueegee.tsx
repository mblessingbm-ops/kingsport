'use client';

import { useEffect, useState } from 'react';

// Use placeholders for now as we can't copy assets
const heroImages = [
    "https://placehold.co/1920x1080/1e293b/white?text=Safety+Gear",
    "https://placehold.co/1920x1080/334155/white?text=Corporate+Wear",
    "https://placehold.co/1920x1080/0f172a/white?text=Promotional",
    "https://placehold.co/1920x1080/475569/white?text=Manufacturing",
];

const CHANGE_DELAY = 4500;
const ANIMATION_DURATION = 1500;

export default function HeroSqueegee() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);


    useEffect(() => {
        const nextIdx = (currentIndex + 1) % heroImages.length;

        const timer = setTimeout(() => {
            if (isAnimating) return;

            setNextIndex(nextIdx);
            setIsAnimating(true);

            setTimeout(() => {
                setCurrentIndex(nextIdx);
                setIsAnimating(false);
            }, ANIMATION_DURATION);
        }, CHANGE_DELAY);

        return () => clearTimeout(timer);
    }, [currentIndex, isAnimating]);

    return (
        <div className="relative w-full h-[600px] md:h-[80vh] overflow-hidden bg-slate-900 rounded-xl">
            {/* Current Image (Bottom) */}
            <img
                src={heroImages[currentIndex]}
                alt="Hero Current"
                className="absolute top-0 left-0 w-full h-full object-cover z-10"
            />

            {/* Next Image (Top, Reveal) */}
            <img
                src={heroImages[nextIndex]}
                alt="Hero Next"
                className={`absolute top-0 left-0 w-full h-full object-cover z-20 transition-all ${isAnimating ? 'animate-revealLeft' : 'opacity-0'
                    }`}
                style={{
                    // If not animating, hide it. If animating, CSS animation handles clip-path.
                    // But 'opacity-0' hides it when idle so it doesn't block 'current'.
                    // When 'isAnimating' is true, we remove opacity-0? 
                    // Actually, let's strictly follow the CSS logic: 
                    // next has z-index 10, clipped 100%.
                    opacity: 1, // Always visible logic-wise, but clipped.
                    clipPath: isAnimating ? undefined : 'inset(0 0 0 100%)'
                }}
            />

            {/* Squeegee Bar */}
            <div
                className={`absolute top-0 bottom-0 w-2 bg-oxblood-900 z-30 shadow-2xl ${isAnimating ? 'animate-squeegeeMove opacity-100' : 'opacity-0 left-full'
                    }`}
            />

            {/* Overlay Content (Optional, stays on top) */}
            <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
                {/* You can put static text here if needed, or animating text */}
            </div>
        </div>
    );
}
