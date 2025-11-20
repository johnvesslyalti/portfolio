export default function CyberCat() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="85"
            height="85"
            viewBox="0 0 320 320"
            role="img"
            aria-labelledby="catTitle catDesc"
            style={{ maxWidth: "320px", margin: "0 auto", display: "block" }}
        >
            <title id="catTitle">Cyber-Cat</title>
            <desc id="catDesc">
                A futuristic, glowing cyber-cat with animated features and a sleek design,
                set against a transparent, data center-like background. (No tail version)
            </desc>

            <defs>
                {/* Glow Filter */}
                <filter id="catGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* Body Gradient (Slightly metallic/glossy) */}
                <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f0f2f5" />
                    <stop offset="50%" stopColor="#e0e3e6" />
                    <stop offset="100%" stopColor="#c5c8cc" />
                </linearGradient>

                {/* Head Gradient (Softer, but still sleek) */}
                <linearGradient id="headGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#d5dae0" />
                    <stop offset="100%" stopColor="#b5bcc2" />
                </linearGradient>

                {/* Cyber Element Glow (for background lines/shapes) */}
                <linearGradient id="cyberGlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00e5ff" stopOpacity="0" />
                    <stop offset="50%" stopColor="#00e5ff" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
                </linearGradient>
            </defs>

            {/* --- CYBER DATA CENTER BACKGROUND ELEMENTS (Transparent) --- */}
            <g opacity="0.4" filter="url(#catGlow)">
                {/* Holographic Floor Grid - perspective effect */}
                <path d="M0 280 L80 160 L240 160 L320 280 Z" fill="none" stroke="#00e5ff" strokeWidth="1" opacity="0.1" />
                <line x1="160" y1="160" x2="160" y2="280" stroke="#00e5ff" strokeWidth="0.5" opacity="0.1" />
                <line x1="80" y1="160" x2="0" y2="280" stroke="#00e5ff" strokeWidth="0.5" opacity="0.1" />
                <line x1="240" y1="160" x2="320" y2="280" stroke="#00e5ff" strokeWidth="0.5" opacity="0.1" />

                <path d="M0 280 L320 280 M40 220 L280 220 M80 160 L240 160" fill="none" stroke="#00e5ff" strokeWidth="0.5" opacity="0.1" />

                {/* Floating Data Packets/Cubes */}
                <rect x="20" y="50" width="15" height="15" fill="#00e5ff" opacity="0.1" transform="rotate(30 27.5 57.5)">
                    <animateTransform attributeName="transform" type="translate" values="0 0; 20 10; 0 0" dur="5s" repeatCount="indefinite" additive="sum" />
                    <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2s" repeatCount="indefinite" />
                </rect>
                <rect x="270" y="90" width="10" height="10" fill="#00e5ff" opacity="0.08" transform="rotate(60 275 95)">
                    <animateTransform attributeName="transform" type="translate" values="0 0; -15 25; 0 0" dur="6s" repeatCount="indefinite" additive="sum" />
                    <animate attributeName="opacity" values="0.08;0.3;0.08" dur="2.5s" repeatCount="indefinite" />
                </rect>
                <rect x="100" y="20" width="12" height="12" fill="#00e5ff" opacity="0.12" transform="rotate(15 106 26)">
                    <animateTransform attributeName="transform" type="translate" values="0 0; -5 30; 0 0" dur="4.5s" repeatCount="indefinite" additive="sum" />
                    <animate attributeName="opacity" values="0.12;0.5;0.12" dur="1.8s" repeatCount="indefinite" />
                </rect>

                {/* Dynamic Circuit Traces */}
                <path d="M20 200 C50 180, 100 220, 150 200 C200 180, 270 220, 300 200"
                    fill="none" stroke="url(#cyberGlowGradient)" strokeWidth="2" strokeLinecap="round">
                    <animate attributeName="stroke-dasharray" from="0 100" to="100 0" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" />
                </path>
                <path d="M300 50 C250 70, 200 30, 150 50 C100 70, 50 30, 20 50"
                    fill="none" stroke="url(#cyberGlowGradient)" strokeWidth="1.5" strokeLinecap="round" begin="1s">
                    <animate attributeName="stroke-dasharray" from="0 100" to="100 0" dur="5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="5s" repeatCount="indefinite" />
                </path>
            </g>

            {/* --- MAIN CAT GROUP --- */}
            <g transform="translate(40,40)">
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="40,40; 40,30; 40,40"
                    dur="4s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                />

                {/* Body */}
                <ellipse cx="120" cy="170" rx="78" ry="58" fill="url(#bodyGradient)" />

                {/* Head */}
                <circle cx="120" cy="92" r="56" fill="url(#headGradient)" />

                {/* Ears - Glowing - FIXED ALIGNMENT (Symmetric around x=120) */}
                <g filter="url(#catGlow)">
                    <path d="M76 60 L90 24 L104 60 Z" fill="#00e5ff" /> {/* Left Ear */}
                    <path d="M136 60 L150 24 L164 60 Z" fill="#00e5ff" /> {/* Right Ear */}
                </g>

                {/* Inner Ears - Metallic Detail - FIXED ALIGNMENT */}
                <path d="M82 55 L90 34 L98 55 Z" fill="#b0bec5" />
                <path d="M142 55 L150 34 L158 55 Z" fill="#b0bec5" />

                {/* Eyes - Glowing and Blinking */}
                <g filter="url(#catGlow)">
                    {/* Left Eye */}
                    <circle cx="104" cy="92" r="8" fill="#FFF">
                        <animate
                            attributeName="r"
                            values="8; 0.5; 8"
                            dur="3s"
                            repeatCount="indefinite"
                            keyTimes="0; 0.05; 0.1"
                        />
                    </circle>
                    {/* Right Eye */}
                    <circle cx="136" cy="92" r="8" fill="#FFF">
                        <animate
                            attributeName="r"
                            values="8; 0.5; 8"
                            dur="3s"
                            repeatCount="indefinite"
                            keyTimes="0; 0.05; 0.1"
                        />
                    </circle>

                    {/* Digital Pupils */}
                    <circle cx="104" cy="92" r="4" fill="#00e5ff" opacity="0.8" />
                    <circle cx="136" cy="92" r="4" fill="#00e5ff" opacity="0.8" />
                </g>

                {/* Nose */}
                <ellipse cx="120" cy="110" rx="8" ry="6" fill="#F94144" />

                {/* Whiskers - Animated and Glowing */}
                <g
                    stroke="#2B2D42"
                    strokeWidth="3"
                    strokeLinecap="round"
                    filter="url(#catGlow)"
                    opacity="0.8"
                >
                    {/* Left Side Whiskers */}
                    <path d="M70 100 h-36">
                        <animate
                            attributeName="x2"
                            values="34; 29; 34"
                            dur="2s"
                            repeatCount="indefinite"
                        />
                    </path>
                    <path d="M70 112 h-36">
                        <animate
                            attributeName="x2"
                            values="34; 29; 34"
                            dur="2s"
                            begin="0.2s"
                            repeatCount="indefinite"
                        />
                    </path>

                    {/* Right Side Whiskers */}
                    <path d="M170 100 h36">
                        <animate
                            attributeName="x2"
                            values="206; 211; 206"
                            dur="2s"
                            repeatCount="indefinite"
                        />
                    </path>
                    <path d="M170 112 h36">
                        <animate
                            attributeName="x2"
                            values="206; 211; 206"
                            dur="2s"
                            begin="0.2s"
                            repeatCount="indefinite"
                        />
                    </path>
                </g>

                {/* Futuristic Collar */}
                <rect
                    x="90"
                    y="145"
                    width="60"
                    height="10"
                    rx="5"
                    fill="#546e7a"
                    stroke="#37474f"
                    strokeWidth="1"
                />
                <circle cx="120" cy="150" r="5" fill="#00e5ff" filter="url(#catGlow)">
                    <animate
                        attributeName="opacity"
                        values="1;0.5;1"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                </circle>
            </g>
        </svg>
    );
}