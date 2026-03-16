'use client';
import { useEffect, useState } from 'react';

export default function NatureAnimation() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [drops, setDrops] = useState<{ left: string; top: string; delay: string; duration: string }[]>([]);

    // 1. Handle Scroll Progress with Smoothing (Lerp)
    useEffect(() => {
        let currentProgress = 0;
        let targetProgress = 0;
        let animationFrameId: number;

        const updateProgress = () => {
            // Calculate distance to target
            const diff = targetProgress - currentProgress;

            // If difference is small enough, snap to target to save CPU
            if (Math.abs(diff) < 0.001) {
                currentProgress = targetProgress;
            } else {
                // Lerp factor (0.1 = smooth, 0.05 = smoother/slower)
                currentProgress += diff * 0.08;
            }

            setScrollProgress(currentProgress);
            animationFrameId = requestAnimationFrame(updateProgress);
        };

        const handleScroll = () => {
            const footer = document.querySelector('footer');
            if (!footer) return;

            // We want the animation to finish exactly when the top of the footer 
            // enters the viewport (i.e., reaches the bottom of the screen).
            const animationEndPoint = footer.offsetTop - window.innerHeight;

            // Check to avoid divide by zero if page is short
            if (animationEndPoint <= 0) {
                targetProgress = 1;
                return;
            }

            const progress = Math.min(Math.max(window.scrollY / animationEndPoint, 0), 1);
            targetProgress = progress;
        };

        window.addEventListener('scroll', handleScroll);
        // Start loop
        updateProgress();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // 2. Initialize Rain Drops (Full Screen width)
    // 2. Initialize Rain Drops (Full Screen width)
    useEffect(() => {
        // Use a timeout to push this to the next tick, avoiding potential synchronous flush issues if any
        const timeout = setTimeout(() => {
            setDrops(
                Array.from({ length: 40 }).map(() => ({
                    left: `${Math.random() * 100}%`,
                    top: `-${Math.random() * 20}%`, // Start slightly above viewport
                    duration: `${0.8 + Math.random() * 0.5}s`,
                    delay: `${Math.random() * 2}s`
                }))
            );
        }, 0);
        return () => clearTimeout(timeout);
    }, []);

    // Tree Growth Calculation (Starts at 0.3 scale, grows to 1.2)
    // It grows as you scroll.
    const treeScale = 0.3 + (scrollProgress * 0.9);

    // Fruit Opacity: Only visible near the end of scrolling (> 90%)
    const fruitOpacity = scrollProgress > 0.9 ? (scrollProgress - 0.9) * 10 : 0;

    return (
        <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">

            {/* Rain Container - Falls from Header (Full Screen) */}
            <div className="absolute inset-0">
                {drops.map((drop, i) => (
                    <div
                        key={i}
                        className="absolute bg-blue-400 w-0.5 h-6 opacity-60 animate-rain"
                        style={{
                            left: drop.left,
                            top: drop.top,
                            animationDuration: drop.duration,
                            animationDelay: drop.delay
                        }}
                    />
                ))}
            </div>

            {/* Tree Container - Fixed at Bottom Right */}
            {/* Stops growing when footer is reached (max scroll) */}
            <div
                className="absolute bottom-0 right-4 w-64 h-64 origin-bottom will-change-transform"
                style={{ transform: `scale(${treeScale})` }}
            >
                <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                >
                    {/* Trunk */}
                    <path
                        d="M45,100 L55,100 L55,60 L45,60 Z"
                        fill="#8B4513"
                    />

                    {/* Canopy */}
                    <g className="origin-center animate-sway">
                        <circle cx="50" cy="45" r="25" fill="#228B22" />
                        <circle cx="30" cy="55" r="18" fill="#228B22" />
                        <circle cx="70" cy="55" r="18" fill="#228B22" />
                        <circle cx="50" cy="25" r="18" fill="#32CD32" />
                    </g>

                    {/* Fruits (TextBlooms) - Reduce, Reuse, Recycle */}
                    <g style={{ opacity: fruitOpacity, transition: 'opacity 0.5s ease' }}>

                        {/* Fruit 1: Reduce */}
                        <circle cx="30" cy="40" r="12" fill="#e63f66" /> {/* Oxblood-ish Red */}
                        <text x="30" y="40" fontSize="5" fill="white" textAnchor="middle" dy="2" fontWeight="bold">REDUCE</text>

                        {/* Fruit 2: Reuse */}
                        <circle cx="70" cy="40" r="12" fill="#e63f66" />
                        <text x="70" y="40" fontSize="5" fill="white" textAnchor="middle" dy="2" fontWeight="bold">REUSE</text>

                        {/* Fruit 3: Recycle */}
                        <circle cx="50" cy="20" r="12" fill="#e63f66" />
                        <text x="50" y="20" fontSize="5" fill="white" textAnchor="middle" dy="2" fontWeight="bold">RECYCLE</text>
                    </g>
                </svg>
            </div>

            {/* Styles for Rain Animation */}
            <style jsx>{`
                @keyframes rain {
                    0% { transform: translateY(0); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(100vh); opacity: 0; }
                }
                .animate-rain {
                    animation-name: rain;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                }
                 @keyframes sway {
                    0%, 100% { transform: rotate(-2deg); }
                    50% { transform: rotate(2deg); }
                }
                .animate-sway {
                    animation: sway 4s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
