export default function SyntaxSage() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 320 320"
            role="img"
            aria-labelledby="wizardTitle wizardDesc"
            style={{
                maxWidth: "100%",
                height: "auto",
                margin: "0 auto",
                display: "block",
                // Transparent background
            }}
        >
            <title id="wizardTitle">syntax-sage</title>
            <desc id="wizardDesc">
                A mysterious technomancer in a void-cloak casting floating hexadecimal spells.
            </desc>

            <defs>
                {/* --- FILTERS --- */}
                <filter id="magicBloom" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feComponentTransfer in="coloredBlur" result="brightBlur">
                        <feFuncA type="linear" slope="2" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode in="brightBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <filter id="glitchDisplace">
                    <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="1" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
                </filter>

                {/* --- GRADIENTS --- */}
                {/* The Cloak: Deep Void to Electric Purple */}
                <linearGradient id="voidCloak" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1a0b2e" />
                    <stop offset="60%" stopColor="#2d1b4e" />
                    <stop offset="100%" stopColor="#7600bc" />
                </linearGradient>

                {/* The Magic: Code Stream */}
                <linearGradient id="codeStream" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#00e5ff" stopOpacity="0" />
                    <stop offset="50%" stopColor="#00e5ff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#fff" stopOpacity="0.8" />
                </linearGradient>

                {/* Staff Core */}
                <radialGradient id="staffCore">
                    <stop offset="0%" stopColor="#fff" />
                    <stop offset="40%" stopColor="#00ff9d" />
                    <stop offset="100%" stopColor="#00ff9d" stopOpacity="0" />
                </radialGradient>
            </defs>

            {/* ========================================== */}
            {/* LAYER 1: BACKGROUND DATA AURA */}
            {/* ========================================== */}
            <g transform="translate(160, 160)">
                {/* Orbiting Binary Ring */}
                <circle cx="0" cy="0" r="110" fill="none" stroke="#2d1b4e" strokeWidth="1" strokeDasharray="10 20" opacity="0.5">
                    <animateTransform attributeName="transform" type="rotate" values="0 0 0; 360 0 0" dur="20s" repeatCount="indefinite" />
                </circle>
                <circle cx="0" cy="0" r="90" fill="none" stroke="#7600bc" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3">
                    <animateTransform attributeName="transform" type="rotate" values="360 0 0; 0 0 0" dur="15s" repeatCount="indefinite" />
                </circle>
            </g>

            {/* ========================================== */}
            {/* LAYER 2: THE TECHNOMANCER */}
            {/* ========================================== */}
            <g transform="translate(60, 50)">
                {/* Levitation Effect */}
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="60,50; 60,40; 60,50"
                    dur="5s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                />

                {/* --- THE CLOAK (Body) --- */}
                {/* Main Robe Shape */}
                <path d="M70 60 C70 30, 130 30, 130 60 L145 180 L130 240 L70 240 L55 180 Z" fill="url(#voidCloak)" />

                {/* Glitchy Hem (The robe turns into data at the bottom) */}
                <g fill="#7600bc" opacity="0.6">
                    <rect x="60" y="242" width="8" height="15" rx="2">
                        <animate attributeName="y" values="242;260" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.6;0" dur="1.5s" repeatCount="indefinite" />
                    </rect>
                    <rect x="80" y="242" width="5" height="10" rx="1">
                        <animate attributeName="y" values="242;255" dur="1.2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.6;0" dur="1.2s" repeatCount="indefinite" />
                    </rect>
                    <rect x="100" y="245" width="10" height="20" rx="2">
                        <animate attributeName="y" values="245;270" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.6;0" dur="2s" repeatCount="indefinite" />
                    </rect>
                    <rect x="130" y="240" width="6" height="12" rx="1">
                        <animate attributeName="y" values="240;255" dur="1.8s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.6;0" dur="1.8s" repeatCount="indefinite" />
                    </rect>
                </g>

                {/* Robe Trim / Circuitry */}
                <path d="M80 60 L80 220 M120 60 L120 220" stroke="#3c2a6b" strokeWidth="2" />
                <path d="M80 100 L120 100 M80 140 L120 140" stroke="#3c2a6b" strokeWidth="1" opacity="0.5" />

                {/* --- THE HEAD (Void Hood) --- */}
                {/* Hood Shape */}
                <path d="M65 60 C65 20, 135 20, 135 60 L135 90 C135 100, 110 110, 100 110 C90 110, 65 100, 65 90 Z" fill="#1a0b2e" />
                {/* Face Shadow */}
                <ellipse cx="100" cy="75" rx="25" ry="30" fill="#000" opacity="0.6" />

                {/* GLOWING EYES (The only visible face feature) */}
                <g filter="url(#magicBloom)">
                    <rect x="85" y="70" width="10" height="6" fill="#00e5ff">
                        <animate attributeName="opacity" values="1;0.6;1" dur="3s" repeatCount="indefinite" />
                    </rect>
                    <rect x="105" y="70" width="10" height="6" fill="#00e5ff">
                        <animate attributeName="opacity" values="1;0.6;1" dur="3s" repeatCount="indefinite" />
                    </rect>
                </g>

                {/* --- ARMS --- */}
                {/* Left Arm (Holding Magic) */}
                <path d="M65 80 C50 120, 40 130, 30 140" stroke="#2d1b4e" strokeWidth="18" strokeLinecap="round" fill="none" />
                {/* Right Arm (Holding Staff) */}
                <path d="M135 80 C150 120, 160 130, 170 140" stroke="#2d1b4e" strokeWidth="18" strokeLinecap="round" fill="none" />


                {/* ========================================== */}
                {/* LAYER 3: THE MAGIC (Left Hand) */}
                {/* ========================================== */}
                <g transform="translate(30, 130)">
                    {/* Hand */}
                    <circle cx="0" cy="0" r="8" fill="#1a0b2e" stroke="#7600bc" />

                    {/* Floating Code Runes */}
                    <g transform="translate(0, -20)" filter="url(#magicBloom)">
                        <text x="-10" y="0" fontSize="12" fill="url(#codeStream)" fontFamily="monospace" fontWeight="bold">
                            {`{ }`}
                            <animate attributeName="y" values="0;-10;0" dur="2s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
                        </text>
                        <text x="-12" y="-15" fontSize="10" fill="url(#codeStream)" fontFamily="monospace" opacity="0.7">
                            &lt;/&gt;
                            <animate attributeName="y" values="-15;-25;-15" dur="2.5s" repeatCount="indefinite" />
                        </text>
                        <text x="5" y="-10" fontSize="10" fill="url(#codeStream)" fontFamily="monospace" opacity="0.7">
                            0x
                            <animate attributeName="y" values="-10;-20;-10" dur="2.2s" repeatCount="indefinite" />
                        </text>
                    </g>
                </g>

                {/* ========================================== */}
                {/* LAYER 4: THE STAFF (Right Hand) */}
                {/* ========================================== */}
                <g transform="translate(170, 140)">
                    {/* Hand */}
                    <circle cx="0" cy="0" r="8" fill="#1a0b2e" stroke="#7600bc" />

                    {/* Floating Staff Segments (Anti-Gravity) */}
                    <g filter="url(#magicBloom)">
                        {/* Bottom Segment */}
                        <rect x="-2" y="10" width="4" height="80" rx="2" fill="#000" stroke="#3c2a6b">
                            <animate attributeName="y" values="10;15;10" dur="4s" repeatCount="indefinite" />
                        </rect>
                        {/* Middle Segment */}
                        <rect x="-3" y="-30" width="6" height="35" rx="1" fill="#1a0b2e" stroke="#00ff9d">
                            <animate attributeName="y" values="-30;-35;-30" dur="4s" repeatCount="indefinite" />
                        </rect>
                        {/* Top Segment (The Crystal) */}
                        <g transform="translate(0, -55)">
                            {/* Spinning Crystal */}
                            <path d="M0 -15 L10 0 L0 15 L-10 0 Z" fill="url(#staffCore)" stroke="#fff" strokeWidth="1">
                                <animateTransform attributeName="transform" type="rotate" values="0 0 0; 360 0 0" dur="6s" repeatCount="indefinite" />
                            </path>
                            {/* Energy Rings */}
                            <ellipse cx="0" cy="0" rx="15" ry="5" fill="none" stroke="#00ff9d" strokeWidth="1" opacity="0.6">
                                <animateTransform attributeName="transform" type="rotate" values="360 0 0; 0 0 0" dur="3s" repeatCount="indefinite" />
                            </ellipse>
                        </g>
                    </g>
                </g>

            </g>
        </svg>
    );
}