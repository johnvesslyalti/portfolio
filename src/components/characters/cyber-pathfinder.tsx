export default function CyberPathfinder() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="85"
            height="85"
            viewBox="0 0 320 320"
            role="img"
            aria-labelledby="scoutTitle scoutDesc"
            style={{
                maxWidth: "100%",
                height: "auto",
                margin: "0 auto",
                display: "block",
                // Removed background styles for transparency
            }}
        >
            <title id="scoutTitle">Cyber Pathfinder</title>
            <desc id="scoutDesc">
                A high-tech scout projecting a complex holographic map in a neon landscape with a transparent background.
            </desc>

            <defs>
                {/* --- FILTERS --- */}
                <filter id="neonBloom" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                    <feComponentTransfer in="coloredBlur" result="brightBlur">
                        <feFuncA type="linear" slope="1.5" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode in="brightBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <filter id="glitchShake">
                    <feTurbulence type="fractalNoise" baseFrequency="0.15" numOctaves="1" result="warp" />
                    <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="2" in="SourceGraphic" in2="warp" />
                </filter>

                {/* --- GRADIENTS --- */}
                {/* Synthwave Sun */}
                <linearGradient id="sunGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ff00cc" />
                    <stop offset="100%" stopColor="#330033" stopOpacity="0" />
                </linearGradient>

                {/* Hologram Beam */}
                <linearGradient id="holoBeam" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.6" />
                    <stop offset="80%" stopColor="#00e5ff" stopOpacity="0" />
                </linearGradient>

                {/* Armor */}
                <linearGradient id="techArmor" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2d2d44" />
                    <stop offset="50%" stopColor="#1a1a2e" />
                    <stop offset="100%" stopColor="#0f0f1a" />
                </linearGradient>

                {/* Visor Sweep */}
                <linearGradient id="visorSweep" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ff00cc" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#00e5ff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ff00cc" stopOpacity="0.5" />
                </linearGradient>
            </defs>

            {/* ========================================== */}
            {/* LAYER 1: SYNTHWAVE BACKGROUND */}
            {/* ========================================== */}

            {/* Digital Sun */}
            <circle cx="160" cy="100" r="60" fill="url(#sunGradient)" opacity="0.4">
                <animate attributeName="opacity" values="0.4;0.6;0.4" dur="4s" repeatCount="indefinite" />
            </circle>
            {/* Sun Grid Lines */}
            <path d="M100 70 H220 M100 80 H220 M100 95 H220 M100 115 H220" stroke="#1a1b2e" strokeWidth="2" opacity="0.3" />

            {/* Moving Floor Grid */}
            <g transform="translate(0, 220)" opacity="0.5">
                {/* Perspective Lines */}
                <path d="M0 100 L100 0 M320 100 L220 0 M160 100 L160 0 M60 100 L130 0 M260 100 L190 0" stroke="#ff00cc" strokeWidth="1" />
                {/* Horizontal Lines (Moving forward effect) */}
                <line x1="0" y1="20" x2="320" y2="20" stroke="#ff00cc" strokeWidth="1" opacity="0.5">
                    <animate attributeName="y1" values="0;100" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="0;100" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.2;1;0" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="0" y1="50" x2="320" y2="50" stroke="#ff00cc" strokeWidth="1" opacity="0.5">
                    <animate attributeName="y1" values="0;100" dur="2s" begin="1s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="0;100" dur="2s" begin="1s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.2;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
                </line>
            </g>

            {/* Floating Data Bits */}
            <g fill="#00e5ff" opacity="0.4">
                <text x="250" y="150" fontSize="8" fontFamily="monospace">0101</text>
                <text x="280" y="180" fontSize="8" fontFamily="monospace">1010</text>
                <animateTransform attributeName="transform" type="translate" values="0,0; 0,-10; 0,0" dur="5s" repeatCount="indefinite" />
            </g>


            {/* ========================================== */}
            {/* LAYER 2: THE CYBER SCOUT */}
            {/* ========================================== */}
            <g transform="translate(60, 60)">
                {/* Hover Animation */}
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="60,60; 60,55; 60,60"
                    dur="4s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                />

                {/* --- BACKPACK / RIG --- */}
                <rect x="40" y="80" width="60" height="90" rx="8" fill="#1f2033" stroke="#4b5563" strokeWidth="1" />
                <path d="M55 80 V50" stroke="#555" strokeWidth="3" />
                <circle cx="55" cy="45" r="3" fill="#ff00cc" filter="url(#neonBloom)">
                    <animate attributeName="opacity" values="1;0.3;1" dur="0.8s" repeatCount="indefinite" />
                </circle>

                {/* --- ARMOR --- */}
                {/* Torso */}
                <path d="M65 100 L175 100 L160 210 L80 210 Z" fill="url(#techArmor)" stroke="#00e5ff" strokeWidth="0.5" />

                {/* Glowing Power Lines on Chest */}
                <path d="M90 140 L150 140" stroke="#00e5ff" strokeWidth="2" filter="url(#neonBloom)" strokeDasharray="60">
                    <animate attributeName="stroke-dashoffset" values="60;0;60" dur="3s" repeatCount="indefinite" />
                </path>
                <path d="M95 150 L145 150" stroke="#00e5ff" strokeWidth="1" opacity="0.5" />

                {/* Legs */}
                <path d="M90 210 L85 270 L110 270 L115 210 Z" fill="url(#techArmor)" />
                <path d="M150 210 L155 270 L130 270 L125 210 Z" fill="url(#techArmor)" />
                {/* Knee LEDs */}
                <rect x="90" y="230" width="15" height="4" fill="#00e5ff" filter="url(#neonBloom)" />
                <rect x="135" y="230" width="15" height="4" fill="#00e5ff" filter="url(#neonBloom)" />

                {/* --- HEAD --- */}
                <path d="M95 90 C95 60, 145 60, 145 90 L145 105 C145 120, 95 120, 95 105 Z" fill="#1f2033" stroke="#4b5563" strokeWidth="2" />
                {/* Visor with Scanning Animation */}
                <path d="M100 88 H140 V98 H100 Z" fill="#000" />
                <rect x="102" y="90" width="10" height="6" fill="url(#visorSweep)" filter="url(#neonBloom)">
                    <animate attributeName="x" values="100;128;100" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="width" values="10;5;10" dur="2s" repeatCount="indefinite" />
                </rect>

                {/* --- ARMS --- */}
                {/* Right Arm (Resting) */}
                <path d="M175 105 L195 150 L185 170" fill="none" stroke="#2d2d44" strokeWidth="14" strokeLinecap="round" />

                {/* Left Arm (Active) */}
                <g>
                    <line x1="65" y1="105" x2="45" y2="145" stroke="#2d2d44" strokeWidth="14" strokeLinecap="round" />
                    <line x1="45" y1="145" x2="90" y2="145" stroke="#2d2d44" strokeWidth="12" strokeLinecap="round" />
                    {/* Gauntlet */}
                    <rect x="82" y="136" width="18" height="18" rx="4" fill="#333" stroke="#00e5ff" strokeWidth="1" />
                </g>

                {/* ========================================== */}
                {/* LAYER 3: THE HOLOGRAM (The Cool Part) */}
                {/* ========================================== */}
                <g transform="translate(100, 135)">

                    {/* 1. The Light Projection Cone */}
                    <path d="M0 10 L70 -50 L110 -50 L20 10 Z" fill="url(#holoBeam)" opacity="0.5" filter="url(#neonBloom)">
                        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="0.15s" repeatCount="indefinite" />
                    </path>

                    {/* 2. Floating Wireframe Globe/Map */}
                    <g transform="translate(50, -40) scale(0.8)">

                        {/* Outer Ring - Spinning Slow */}
                        <ellipse cx="40" cy="20" rx="40" ry="15" fill="none" stroke="#00e5ff" strokeWidth="1" strokeDasharray="5 5" opacity="0.8">
                            <animateTransform attributeName="transform" type="rotate" from="0 40 20" to="360 40 20" dur="10s" repeatCount="indefinite" />
                        </ellipse>

                        {/* Inner Ring - Spinning Fast Opposite */}
                        <ellipse cx="40" cy="20" rx="25" ry="8" fill="none" stroke="#ff00cc" strokeWidth="1" strokeDasharray="2 2" opacity="0.9">
                            <animateTransform attributeName="transform" type="rotate" from="360 40 20" to="0 40 20" dur="4s" repeatCount="indefinite" />
                        </ellipse>

                        {/* Central Core - Pulse */}
                        <circle cx="40" cy="20" r="4" fill="#fff" filter="url(#neonBloom)">
                            <animate attributeName="r" values="3;5;3" dur="1s" repeatCount="indefinite" />
                        </circle>

                        {/* Vertical Axis Line */}
                        <line x1="40" y1="0" x2="40" y2="40" stroke="#00e5ff" strokeWidth="1" opacity="0.5" />
                    </g>

                    {/* 3. Rising Hologram Particles */}
                    <circle cx="80" cy="-20" r="1" fill="#00e5ff" opacity="0">
                        <animate attributeName="cy" values="10;-50" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="100" cy="-30" r="1" fill="#ff00cc" opacity="0">
                        <animate attributeName="cy" values="10;-50" dur="2s" begin="0.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
                    </circle>

                </g>

            </g>
        </svg>
    );
}