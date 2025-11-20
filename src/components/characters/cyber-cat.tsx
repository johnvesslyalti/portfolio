import { useState, useEffect } from 'react';

export default function CyberCat() {
    // State to hold random data safely (prevents hydration errors)
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Generate floating data dust ONLY on the client side
        const generatedParticles = [...Array(15)].map((_, i) => ({
            id: i,
            x: Math.random() * 320,
            y: Math.random() * 320,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.5 + 0.2,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2
        }));
        setParticles(generatedParticles as any);
    }, []);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 320 320"
            role="img"
            aria-labelledby="catTitle catDesc"
            style={{
                maxWidth: "100%",
                height: "auto",
                margin: "0 auto",
                display: "block",
                // Transparent background
            }}
        >
            <title id="catTitle">Cyber-Cat v3.0</title>
            <desc id="catDesc">
                A sleek cyber-cat sitting in a symmetrical server room with glowing data pillars.
            </desc>

            <defs>
                {/* --- FILTERS --- */}
                <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feComponentTransfer in="coloredBlur" result="brightBlur">
                        <feFuncA type="linear" slope="1.5" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode in="brightBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* --- GRADIENTS --- */}
                <linearGradient id="metalBody" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e2e8f0" />
                    <stop offset="50%" stopColor="#94a3b8" />
                    <stop offset="100%" stopColor="#475569" />
                </linearGradient>

                <linearGradient id="blueBeam" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00e5ff" stopOpacity="0" />
                    <stop offset="50%" stopColor="#00e5ff" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
                </linearGradient>

                <linearGradient id="serverDark" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0f172a" />
                    <stop offset="50%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
            </defs>

            {/* ========================================== */}
            {/* LAYER 1: DATA CENTER BACKGROUND (Structured) */}
            {/* ========================================== */}

            {/* Perspective Floor Grid */}
            <g opacity="0.4" filter="url(#neonGlow)">
                <path d="M0 320 L120 200 L200 200 L320 320" fill="none" stroke="#00e5ff" strokeWidth="1" />
                <line x1="160" y1="200" x2="160" y2="320" stroke="#00e5ff" strokeWidth="0.5" />
                <line x1="60" y1="260" x2="260" y2="260" stroke="#00e5ff" strokeWidth="0.5" />
                <line x1="30" y1="290" x2="290" y2="290" stroke="#00e5ff" strokeWidth="0.5" />
            </g>

            {/* Server Pillars (Left & Right) */}
            <g>
                {/* Left Pillar */}
                <rect x="0" y="40" width="40" height="240" fill="url(#serverDark)" stroke="#334155" />
                <rect x="10" y="50" width="20" height="220" fill="none" stroke="#00e5ff" strokeWidth="0.5" opacity="0.3" />
                {/* Blinking Lights Left */}
                <rect x="15" y="60" width="10" height="2" fill="#00e5ff">
                    <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
                </rect>
                <rect x="15" y="80" width="10" height="2" fill="#ff00cc">
                    <animate attributeName="opacity" values="0.2;1;0.2" dur="1.5s" repeatCount="indefinite" />
                </rect>
                <rect x="15" y="120" width="10" height="2" fill="#00e5ff">
                    <animate attributeName="opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite" />
                </rect>

                {/* Right Pillar */}
                <rect x="280" y="40" width="40" height="240" fill="url(#serverDark)" stroke="#334155" />
                <rect x="290" y="50" width="20" height="220" fill="none" stroke="#00e5ff" strokeWidth="0.5" opacity="0.3" />
                {/* Blinking Lights Right */}
                <rect x="295" y="70" width="10" height="2" fill="#00e5ff">
                    <animate attributeName="opacity" values="0.2;1;0.2" dur="2.5s" repeatCount="indefinite" />
                </rect>
                <rect x="295" y="150" width="10" height="2" fill="#ff00cc">
                    <animate attributeName="opacity" values="0.2;1;0.2" dur="1s" repeatCount="indefinite" />
                </rect>
            </g>

            {/* Rear Data Streams (Waterfall Effect) */}
            <g opacity="0.3">
                <rect x="100" y="40" width="2" height="160" fill="url(#blueBeam)">
                    <animate attributeName="y" values="40;200" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                </rect>
                <rect x="220" y="40" width="2" height="160" fill="url(#blueBeam)">
                    <animate attributeName="y" values="40;200" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
                </rect>
            </g>

            {/* Safe Hydrated Particles */}
            <g fill="#fff">
                {particles.map((p: any) => (
                    <circle key={p.id} cx={p.x} cy={p.y} r={p.size} opacity={p.opacity}>
                        <animate attributeName="opacity" values={`${p.opacity}; 1; ${p.opacity}`} dur={`${p.duration}s`} repeatCount="indefinite" />
                        <animate attributeName="cy" values={`${p.y}; ${p.y - 20}`} dur={`${p.duration}s`} repeatCount="indefinite" />
                    </circle>
                ))}
            </g>

            {/* ========================================== */}
            {/* LAYER 2: THE CYBER CAT */}
            {/* ========================================== */}
            <g transform="translate(60, 60)">
                {/* Breathing Animation */}
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="60,60; 60,55; 60,60"
                    dur="4s"
                    repeatCount="indefinite"
                />

                {/* Tail (Curled) */}
                <path d="M140 180 Q180 180 180 140 T160 100" fill="none" stroke="#94a3b8" strokeWidth="12" strokeLinecap="round" />

                {/* Body */}
                <ellipse cx="100" cy="160" rx="60" ry="50" fill="url(#metalBody)" stroke="#1e293b" strokeWidth="2" />
                {/* Body Circuitry */}
                <path d="M60 160 L140 160 M100 120 L100 200" stroke="#00e5ff" strokeWidth="1" opacity="0.3" />

                {/* Head */}
                <circle cx="100" cy="90" r="45" fill="url(#metalBody)" stroke="#1e293b" strokeWidth="2" />

                {/* Ears */}
                <path d="M65 65 L55 25 L85 50 Z" fill="#64748b" stroke="#1e293b" strokeWidth="2" />
                <path d="M135 65 L145 25 L115 50 Z" fill="#64748b" stroke="#1e293b" strokeWidth="2" />
                {/* Ear Inner Glow */}
                <path d="M68 60 L62 35 L80 55 Z" fill="#ff00cc" filter="url(#neonGlow)" opacity="0.8" />
                <path d="M132 60 L138 35 L120 55 Z" fill="#ff00cc" filter="url(#neonGlow)" opacity="0.8" />

                {/* Eyes (The Cool Part) */}
                <g filter="url(#neonGlow)">
                    {/* Sclera */}
                    <ellipse cx="85" cy="90" rx="12" ry="10" fill="#0f172a" />
                    <ellipse cx="115" cy="90" rx="12" ry="10" fill="#0f172a" />
                    {/* Iris */}
                    <circle cx="85" cy="90" r="6" fill="#00e5ff">
                        <animate attributeName="r" values="6;2;6" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="115" cy="90" r="6" fill="#00e5ff">
                        <animate attributeName="r" values="6;2;6" dur="3s" repeatCount="indefinite" />
                    </circle>
                </g>

                {/* Nose & Mouth */}
                <path d="M95 105 L105 105 L100 112 Z" fill="#1e293b" />
                <path d="M100 112 L100 118 M100 118 Q90 125 85 118 M100 118 Q110 125 115 118" fill="none" stroke="#1e293b" strokeWidth="1.5" />

                {/* Whiskers (Neon) */}
                <g stroke="#00e5ff" strokeWidth="1" opacity="0.8" filter="url(#neonGlow)">
                    <line x1="40" y1="100" x2="80" y2="105" />
                    <line x1="40" y1="110" x2="80" y2="110" />
                    <line x1="160" y1="100" x2="120" y2="105" />
                    <line x1="160" y1="110" x2="120" y2="110" />
                </g>

                {/* Collar */}
                <path d="M70 135 Q100 155 130 135" fill="none" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />
                <circle cx="100" cy="145" r="6" fill="#00e5ff" filter="url(#neonGlow)">
                    <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" />
                </circle>

            </g>
        </svg>
    );
}