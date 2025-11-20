export default function CyberNinja2() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 320 320"
            role="img"
            aria-labelledby="roninTitle roninDesc"
            style={{
                maxWidth: "100%",
                height: "auto",
                margin: "0 auto",
                display: "block",
            }}
        >
            <title id="roninTitle">The Neon Ronin</title>
            <desc id="roninDesc">
                A stylized, high-tech ninja silhouette standing before a digital sun with a pulsing energy katana.
            </desc>

            <defs>
                {/* --- FILTERS --- */}
                <filter id="intenseGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                    <feComponentTransfer in="coloredBlur" result="brightBlur">
                        <feFuncA type="linear" slope="3" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode in="brightBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <filter id="glitchBlur" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="1 0" />
                </filter>

                {/* --- GRADIENTS --- */}
                {/* The Digital Sun */}
                <linearGradient id="sunGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ff0055" />
                    <stop offset="50%" stopColor="#7000ff" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </linearGradient>

                {/* The Armor (Dark, sleek) */}
                <linearGradient id="armorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#020617" />
                </linearGradient>

                {/* The Blade (Cyan Plasma) */}
                <linearGradient id="bladeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00e5ff" />
                    <stop offset="50%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#00e5ff" />
                </linearGradient>
            </defs>

            {/* ========================================== */}
            {/* LAYER 1: ATMOSPHERE (BACKGROUND) */}
            {/* ========================================== */}

            {/* The Retro Sun */}
            <circle cx="160" cy="140" r="90" fill="url(#sunGradient)" opacity="0.8" />

            {/* Sun Grid Lines (Cutout effect) */}
            <g stroke="#000000" strokeWidth="2" opacity="0.3">
                <line x1="70" y1="100" x2="250" y2="100" />
                <line x1="70" y1="120" x2="250" y2="120" />
                <line x1="70" y1="145" x2="250" y2="145" />
                <line x1="70" y1="175" x2="250" y2="175" />
                <line x1="70" y1="210" x2="250" y2="210" />
            </g>

            {/* Floor Grid (Perspective) */}
            <g transform="translate(0, 220)" opacity="0.5">
                <path d="M0 0 L320 0" stroke="#7000ff" strokeWidth="2" />
                <path d="M160 0 L0 100" stroke="#7000ff" strokeWidth="1" opacity="0.5" />
                <path d="M160 0 L320 100" stroke="#7000ff" strokeWidth="1" opacity="0.5" />
                <path d="M160 0 L160 100" stroke="#7000ff" strokeWidth="1" opacity="0.5" />
                <path d="M160 0 L80 100" stroke="#7000ff" strokeWidth="1" opacity="0.3" />
                <path d="M160 0 L240 100" stroke="#7000ff" strokeWidth="1" opacity="0.3" />

                {/* Moving Horizon Lines */}
                <line x1="0" y1="80" x2="320" y2="80" stroke="#7000ff" strokeWidth="1" opacity="0">
                    <animate attributeName="y1" values="0;100" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="0;100" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                </line>
            </g>

            {/* ========================================== */}
            {/* LAYER 2: THE RONIN (FOREGROUND) */}
            {/* ========================================== */}
            <g transform="translate(60, 40)">
                {/* Idle Breathing/Hover Animation */}
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="60,40; 60,35; 60,40"
                    dur="4s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                />

                {/* --- SCARF (The "Motion" Element) --- */}
                <path
                    d="M90 75 Q60 75 40 60 T0 40"
                    fill="none"
                    stroke="#00e5ff"
                    strokeWidth="6"
                    strokeLinecap="round"
                    filter="url(#intenseGlow)"
                    opacity="0.8"
                >
                    <animate attributeName="d"
                        values="M90 75 Q60 75 40 60 T0 40; M90 75 Q50 85 30 50 T-10 30; M90 75 Q60 75 40 60 T0 40"
                        dur="3s"
                        repeatCount="indefinite"
                    />
                </path>

                {/* --- BODY SILHOUETTE --- */}
                {/* Legs */}
                <path d="M70 180 L50 260 L80 260 L90 180 Z" fill="url(#armorGradient)" /> {/* Left Leg */}
                <path d="M130 180 L150 260 L120 260 L110 180 Z" fill="url(#armorGradient)" /> {/* Right Leg */}

                {/* Hips/Belt Area */}
                <path d="M70 160 L130 160 L110 190 L90 190 Z" fill="#0f172a" />

                {/* Torso (Triangle Taper) */}
                <path d="M60 80 L140 80 L130 160 L70 160 Z" fill="url(#armorGradient)" />

                {/* Armor Details (Glowing Lines) */}
                <path d="M80 90 L85 140" stroke="#333" strokeWidth="2" />
                <path d="M120 90 L115 140" stroke="#333" strokeWidth="2" />
                <circle cx="100" cy="110" r="3" fill="#ff0055" filter="url(#intenseGlow)">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                </circle>

                {/* Shoulders */}
                <path d="M50 80 L70 80 L70 110 L55 100 Z" fill="#334155" />
                <path d="M150 80 L130 80 L130 110 L145 100 Z" fill="#334155" />

                {/* Arms */}
                <rect x="45" y="80" width="15" height="50" rx="4" fill="url(#armorGradient)" transform="rotate(5 45 80)" />
                <rect x="140" y="80" width="15" height="50" rx="4" fill="url(#armorGradient)" transform="rotate(-5 140 80)" />

                {/* --- HEAD / HELMET --- */}
                <g transform="translate(100, 65)">
                    {/* Helmet Base */}
                    <path d="M-25 -20 L25 -20 L20 20 L0 30 L-20 20 Z" fill="#020617" stroke="#334155" strokeWidth="2" />

                    {/* The Visor (Cyberpunk classic) */}
                    <path d="M-25 -10 L25 -10 L20 5 L-20 5 Z" fill="#000" />
                    <rect x="-20" y="-8" width="40" height="4" fill="#00e5ff" filter="url(#intenseGlow)">
                        {/* Glitch Flicker Animation */}
                        <animate attributeName="opacity" values="1;0.8;1;0.3;1;1;0.8" dur="4s" repeatCount="indefinite" />
                        <animate attributeName="width" values="40;38;40" dur="0.2s" repeatCount="indefinite" />
                    </rect>

                    {/* Helmet Ears/Tech */}
                    <path d="M-25 -20 L-30 -40 L-15 -25" fill="#334155" />
                    <path d="M25 -20 L30 -40 L15 -25" fill="#334155" />
                </g>

                {/* --- THE WEAPON (KATANA) --- */}
                {/* Held diagonally across the back */}
                <g transform="translate(140, 100) rotate(-30)">
                    {/* Hilt */}
                    <rect x="-5" y="-10" width="10" height="30" fill="#111" stroke="#333" />
                    {/* Guard */}
                    <rect x="-12" y="-15" width="24" height="5" fill="#333" />
                    {/* Blade (Glowing Energy) */}
                    <path d="M-3 -15 L-3 -110 L0 -120 L3 -110 L3 -15 Z" fill="url(#bladeGradient)" filter="url(#intenseGlow)">
                        <animate attributeName="opacity" values="0.8;1;0.8" dur="0.1s" repeatCount="indefinite" />
                    </path>
                    {/* Blade Core (Solid White for intensity) */}
                    <line x1="0" y1="-15" x2="0" y2="-115" stroke="#fff" strokeWidth="2" />
                </g>

            </g>
        </svg>
    );
}