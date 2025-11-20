export default function CoolAstronaut() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="85"
            height="85"
            viewBox="0 0 400 600"
            role="img"
            aria-labelledby="astroTitle astroDesc"
        >
            <title id="astroTitle">Cosmic Explorer</title>
            <desc id="astroDesc">
                A futuristic astronaut in a high-tech suit floating in zero gravity, 
                surrounded by twinkling stars and a glowing visor.
            </desc>

            <defs>
                {/* Glow Filter for Visor and Stars */}
                <filter id="astroGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* Visor Reflection Gradient */}
                <linearGradient id="visorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38b6ff" stopOpacity="1" />
                    <stop offset="50%" stopColor="#004aad" stopOpacity="1" />
                    <stop offset="100%" stopColor="#001e4d" stopOpacity="1" />
                </linearGradient>

                {/* Main Suit Metallic Gradient */}
                <linearGradient id="suitMainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#e0e8f0" stopOpacity="1" />
                    <stop offset="100%" stopColor="#c8d2df" stopOpacity="1" />
                </linearGradient>

                {/* Suit Blue Accents Gradient */}
                <linearGradient id="suitAccentGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4a90e2" stopOpacity="1" />
                    <stop offset="100%" stopColor="#2a65b0" stopOpacity="1" />
                </linearGradient>
            </defs>

            {/* Background Stars Group */}
            <g fill="#ffd700" filter="url(#astroGlow)">
                <circle cx="100" cy="80" r="3" opacity="0.8">
                    <animate
                        attributeName="opacity"
                        values="0.8;0.3;0.8"
                        dur="3s"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle cx="300" cy="120" r="2" opacity="0.6">
                    <animate
                        attributeName="opacity"
                        values="0.6;1;0.6"
                        dur="4s"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle cx="50" cy="250" r="2" opacity="0.5" />
                <circle cx="350" cy="280" r="3" opacity="0.9" />
                <circle cx="250" cy="50" r="2" opacity="0.7" />
                <circle cx="180" cy="400" r="2" opacity="0.7" />
                <circle cx="320" cy="550" r="2" opacity="0.6" />

                {/* Shooting Star Animation */}
                <path
                    d="M320 60 L280 80"
                    stroke="#1a1c2c"
                    strokeWidth="2"
                    opacity="0.5"
                    strokeLinecap="round"
                >
                    <animate
                        attributeName="stroke-dasharray"
                        from="0, 100"
                        to="100, 0"
                        dur="2s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="opacity"
                        values="0;1;0"
                        dur="2s"
                        repeatCount="indefinite"
                    />
                </path>
            </g>

            {/* Main Astronaut Floating Group */}
            <g transform="translate(0, 50)">
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0,50; 0,40; 0,50"
                    dur="6s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                />

                {/* Backpack */}
                <path
                    d="M140 180 a60 60 0 0 1 120 0 v140 a40 40 0 0 1 -40 40 h-40 a40 40 0 0 1 -40 -40 z"
                    fill="url(#suitMainGradient)"
                    stroke="#b0becb"
                    strokeWidth="3"
                />

                {/* Chest Unit */}
                <rect
                    x="120"
                    y="190"
                    width="160"
                    height="90"
                    rx="20"
                    fill="#9db9d4"
                    stroke="#8a9bb5"
                    strokeWidth="2"
                />
                <rect
                    x="130"
                    y="200"
                    width="140"
                    height="70"
                    rx="15"
                    fill="#a4c1dd"
                    stroke="#9db9d4"
                    strokeWidth="1"
                />

                {/* Helmet */}
                <circle
                    cx="200"
                    cy="150"
                    r="65"
                    fill="#e0e8f0"
                    stroke="#c2d6ea"
                    strokeWidth="5"
                />
                <path
                    d="M155 150 a45 45 0 0 1 90 0 c0 25 -20 45 -45 45 s-45 -20 -45 -45"
                    fill="url(#visorGradient)"
                    stroke="#2c3e50"
                    strokeWidth="2"
                    filter="url(#astroGlow)"
                />
                
                {/* Visor Glare */}
                <ellipse
                    cx="225"
                    cy="135"
                    rx="10"
                    ry="5"
                    fill="white"
                    opacity="0.4"
                    transform="rotate(-30 225 135)"
                />
                
                {/* Antenna */}
                <path
                    d="M165 170 q8 -6 20 0"
                    fill="none"
                    stroke="#93C5FD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    transform="translate(10,-20)"
                />

                {/* Arms Group */}
                <g
                    stroke="url(#suitMainGradient)"
                    strokeWidth="20"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* Left Arm */}
                    <path d="M145 200 q-20 30 -10 80" stroke="#b0becb" strokeWidth="25" />
                    <path
                        d="M145 200 q-20 30 -10 80"
                        fill="none"
                        stroke="url(#suitMainGradient)"
                        strokeWidth="20"
                    />
                    <circle
                        cx="130"
                        cy="270"
                        r="15"
                        fill="url(#suitMainGradient)"
                        stroke="#b0becb"
                        strokeWidth="2"
                    />
                    <path
                        d="M125 285 v15 h10 v-15 z"
                        fill="url(#suitAccentGradient)"
                        stroke="#2a65b0"
                        strokeWidth="1"
                    />

                    {/* Right Arm */}
                    <path d="M255 200 q20 30 10 80" stroke="#b0becb" strokeWidth="25" />
                    <path
                        d="M255 200 q20 30 10 80"
                        fill="none"
                        stroke="url(#suitMainGradient)"
                        strokeWidth="20"
                    />
                    <circle
                        cx="270"
                        cy="270"
                        r="15"
                        fill="url(#suitMainGradient)"
                        stroke="#b0becb"
                        strokeWidth="2"
                    />
                    <path
                        d="M265 285 v15 h10 v-15 z"
                        fill="url(#suitAccentGradient)"
                        stroke="#2a65b0"
                        strokeWidth="1"
                    />
                </g>

                {/* Legs Group */}
                <g fill="url(#suitMainGradient)" stroke="#b0becb" strokeWidth="2">
                    {/* Left Leg */}
                    <rect x="150" y="350" width="40" height="80" rx="15" />
                    <rect x="145" y="420" width="50" height="30" rx="10" />
                    <path
                        d="M155 360 v20 h20 v-20 z"
                        fill="url(#suitAccentGradient)"
                        stroke="#2a65b0"
                        strokeWidth="1"
                    />

                    {/* Right Leg */}
                    <rect x="210" y="350" width="40" height="80" rx="15" />
                    <rect x="205" y="420" width="50" height="30" rx="10" />
                    <path
                        d="M215 360 v20 h20 v-20 z"
                        fill="url(#suitAccentGradient)"
                        stroke="#2a65b0"
                        strokeWidth="1"
                    />
                </g>
            </g>
        </svg>
    );
}