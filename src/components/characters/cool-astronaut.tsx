export default function CoolAstronaut() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="85"
            height="85"
            viewBox="0 0 400 600"
            role="img"
            aria-labelledby="astroTitle astroDesc"
            style={{ maxWidth: "400px", margin: "0 auto", display: "block" }}
        >
            <title id="astroTitle">Ultimate Cosmic Explorer</title>
            <desc id="astroDesc">
                A high-fidelity astronaut with thrusters, a HUD visor, and a planet background.
            </desc>

            <defs>
                {/* --- FILTERS --- */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <filter id="thrusterBlur" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" />
                </filter>

                <clipPath id="visorClip">
                    <path d="M155 150 a45 45 0 0 1 90 0 c0 25 -20 45 -45 45 s-45 -20 -45 -45" />
                </clipPath>

                {/* --- GRADIENTS --- */}

                {/* Planet Gradient */}
                <radialGradient id="planetGradient" cx="30%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="1" />
                    <stop offset="50%" stopColor="#6b21a8" stopOpacity="1" />
                    <stop offset="90%" stopColor="#3b0764" stopOpacity="1" />
                </radialGradient>

                {/* Visor */}
                <linearGradient id="visorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00bcd4" />
                    <stop offset="100%" stopColor="#1a237e" />
                </linearGradient>

                {/* Suit Metal */}
                <linearGradient id="suitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#cfd8dc" />
                    <stop offset="50%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#b0bec5" />
                </linearGradient>

                {/* Thruster Fire */}
                <linearGradient id="fireGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffeb3b" />
                    <stop offset="40%" stopColor="#ff9800" />
                    <stop offset="100%" stopColor="#f44336" stopOpacity="0" />
                </linearGradient>
            </defs>

            {/* 1. BACKGROUND LAYER - REMOVED (Transparent) */}

            {/* Distant Planet */}
            <circle cx="320" cy="100" r="60" fill="url(#planetGradient)" opacity="0.8">
                <animate
                    attributeName="cy"
                    values="100; 110; 100"
                    dur="20s"
                    repeatCount="indefinite"
                />
            </circle>

            {/* Drifting Stars (White - visible on dark backgrounds) */}
            <g fill="#FFF" filter="url(#glow)">
                <circle cx="50" cy="50" r="2" opacity="0.5">
                    <animate attributeName="cy" values="50; 550" dur="40s" repeatCount="indefinite" />
                </circle>
                <circle cx="250" cy="30" r="1.5" opacity="0.7">
                    <animate attributeName="cy" values="30; 530" dur="35s" repeatCount="indefinite" />
                </circle>
                <circle cx="350" cy="400" r="2" opacity="0.3">
                    <animate attributeName="cy" values="400; 900" dur="50s" repeatCount="indefinite" />
                </circle>
                <circle cx="100" cy="500" r="1" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
                </circle>
            </g>

            {/* 2. ASTRONAUT GROUP (Zero-G Animation) */}
            <g transform="translate(0, 50)">
                {/* Compound Animation: Bobbing + Slight Rotation */}
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0,50; 0,30; 0,50"
                    dur="6s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                />
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="-2 200 300; 2 200 300; -2 200 300"
                    dur="8s"
                    repeatCount="indefinite"
                    additive="sum"
                />

                {/* Thruster Flames (Behind) */}
                <g transform="translate(0, 20)">
                    <ellipse cx="150" cy="320" rx="10" ry="30" fill="url(#fireGradient)" filter="url(#thrusterBlur)" opacity="0.8">
                        <animate attributeName="ry" values="30; 45; 25; 35" dur="0.2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.8; 0.6; 0.8" dur="0.2s" repeatCount="indefinite" />
                    </ellipse>
                    <ellipse cx="250" cy="320" rx="10" ry="30" fill="url(#fireGradient)" filter="url(#thrusterBlur)" opacity="0.8">
                        <animate attributeName="ry" values="30; 40; 28; 32" dur="0.2s" repeatCount="indefinite" begin="0.1s" />
                        <animate attributeName="opacity" values="0.8; 0.6; 0.8" dur="0.2s" repeatCount="indefinite" />
                    </ellipse>
                </g>

                {/* Backpack */}
                <path
                    d="M130 180 a20 20 0 0 1 20 -20 h100 a20 20 0 0 1 20 20 v140 a20 20 0 0 1 -20 20 h-100 a20 20 0 0 1 -20 -20 z"
                    fill="#90a4ae"
                    stroke="#546e7a"
                    strokeWidth="2"
                />

                {/* Left Arm (Back) */}
                <g transform="rotate(10 140 210)">
                    <rect x="110" y="210" width="30" height="80" rx="15" fill="url(#suitGradient)" stroke="#78909c" strokeWidth="2" />
                    <circle cx="125" cy="280" r="18" fill="#fff" stroke="#78909c" />
                </g>
                {/* Right Arm (Back) */}
                <g transform="rotate(-10 260 210)">
                    <rect x="260" y="210" width="30" height="80" rx="15" fill="url(#suitGradient)" stroke="#78909c" strokeWidth="2" />
                    <circle cx="275" cy="280" r="18" fill="#fff" stroke="#78909c" />
                </g>

                {/* Legs */}
                <g>
                    <rect x="150" y="340" width="45" height="100" rx="10" fill="url(#suitGradient)" stroke="#78909c" strokeWidth="2" />
                    <rect x="150" y="380" width="45" height="10" fill="#546e7a" />

                    <rect x="205" y="340" width="45" height="100" rx="10" fill="url(#suitGradient)" stroke="#78909c" strokeWidth="2" />
                    <rect x="205" y="380" width="45" height="10" fill="#546e7a" />

                    <path d="M145 440 h55 v20 a10 10 0 0 1 -10 10 h-35 a10 10 0 0 1 -10 -10 z" fill="#fff" stroke="#78909c" strokeWidth="2" />
                    <path d="M200 440 h55 v20 a10 10 0 0 1 -10 10 h-35 a10 10 0 0 1 -10 -10 z" fill="#fff" stroke="#78909c" strokeWidth="2" />
                </g>

                {/* Torso */}
                <rect x="120" y="190" width="160" height="160" rx="30" fill="url(#suitGradient)" stroke="#78909c" strokeWidth="2" />

                {/* Chest Plate UI */}
                <rect x="140" y="210" width="120" height="80" rx="10" fill="#eceff1" stroke="#cfd8dc" />
                <rect x="150" y="220" width="30" height="5" fill="#00e676" filter="url(#glow)">
                    <animate attributeName="opacity" values="1;0.4;1" dur="1s" repeatCount="indefinite" />
                </rect>
                <rect x="150" y="230" width="20" height="5" fill="#00e676" filter="url(#glow)" />
                <circle cx="240" cy="240" r="15" fill="#29b6f6" filter="url(#glow)" opacity="0.8" />

                {/* Helmet */}
                <circle cx="200" cy="150" r="70" fill="#fff" stroke="#cfd8dc" strokeWidth="4" />

                {/* Visor Group */}
                <g clipPath="url(#visorClip)">
                    <rect x="110" y="105" width="180" height="90" fill="url(#visorGradient)" />

                    {/* Visor HUD Scanline */}
                    <rect x="110" y="105" width="5" height="90" fill="#00e5ff" opacity="0.5">
                        <animate attributeName="x" values="110; 290; 110" dur="3s" repeatCount="indefinite" />
                    </rect>

                    <path d="M160 120 l20 20 h40 l-20 -20 z" fill="white" opacity="0.3" />
                </g>

                {/* Helmet Antenna */}
                <line x1="140" y1="120" x2="140" y2="80" stroke="#90a4ae" strokeWidth="3" />
                <circle cx="140" cy="80" r="4" fill="#f44336">
                    <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
                </circle>

            </g>

            {/* Foreground Shooting Star */}
            <path d="M350 50 L300 70" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0" filter="url(#glow)">
                <animate attributeName="stroke-dasharray" from="0,100" to="50,0" dur="3s" repeatCount="indefinite" begin="2s" />
                <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin="2s" />
                <animate attributeName="transform" type="translate" from="0 0" to="-100 40" dur="3s" repeatCount="indefinite" begin="2s" />
            </path>

        </svg>
    );
}