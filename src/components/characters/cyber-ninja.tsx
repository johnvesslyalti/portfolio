export default function CyberNinja() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 320 320"
            role="img"
            aria-labelledby="ninjaTitle ninjaDesc"
            style={{
                maxWidth: "100%",
                height: "auto",
                margin: "0 auto",
                display: "block",
            }}
        >
            <title id="ninjaTitle">Shadow Cyber Ninja</title>
            <desc id="ninjaDesc">
                A menacing silhouette of a cyber ninja with a glowing visor and energy katana.
            </desc>

            <defs>
                {/* --- GLOW FILTERS --- */}
                <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* --- GRADIENTS --- */}
                <linearGradient id="shadowBody" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#111827" />
                    <stop offset="100%" stopColor="#000000" />
                </linearGradient>

                <linearGradient id="visorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#ff0000" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0.5" />
                </linearGradient>

                <linearGradient id="bladeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00e5ff" />
                    <stop offset="50%" stopColor="#fff" />
                    <stop offset="100%" stopColor="#00e5ff" />
                </linearGradient>
            </defs>

            {/* --- FLOATING ANIMATION --- */}
            <g transform="translate(0, 10)">
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0,10; 0,5; 0,10"
                    dur="4s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                />

                {/* --- MAIN BODY (Silhouette) --- */}
                {/* Hood and Shoulders - One solid shape to ensure alignment */}
                <path
                    d="M160 50 C130 50, 110 80, 110 110 C110 130, 60 150, 40 280 L280 280 C260 150, 210 130, 210 110 C210 80, 190 50, 160 50 Z"
                    fill="url(#shadowBody)"
                    stroke="#1f2937"
                    strokeWidth="1"
                />

                {/* --- VISOR (The focal point) --- */}
                <g filter="url(#neonGlow)">
                    {/* Main Visor Strip */}
                    <path d="M130 115 L190 115 L185 125 L135 125 Z" fill="#000" />
                    <rect x="135" y="118" width="50" height="4" fill="url(#visorGradient)">
                        <animate attributeName="opacity" values="0.8; 1; 0.8" dur="2s" repeatCount="indefinite" />
                        {/* Glitch Effect */}
                        <animate attributeName="width" values="50; 48; 50; 50; 50" dur="3s" repeatCount="indefinite" />
                    </rect>
                </g>

                {/* --- SCARF (Flowing in wind) --- */}
                <g filter="url(#neonGlow)" opacity="0.9">
                    <path
                        d="M120 140 Q160 160 200 140"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />
                    {/* Long flowing part */}
                    <path d="M200 140 Q240 130 280 110" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round">
                        <animate attributeName="d" values="M200 140 Q240 130 280 110; M200 140 Q240 160 280 130; M200 140 Q240 130 280 110" dur="3s" repeatCount="indefinite" />
                    </path>
                </g>

                {/* --- KATANA (Across the chest) --- */}
                <g transform="translate(160, 180) rotate(-45)">
                    {/* Blade Glow */}
                    <rect x="-80" y="-2" width="160" height="4" fill="url(#bladeGradient)" filter="url(#neonGlow)">
                        <animate attributeName="opacity" values="0.8; 1; 0.8" dur="0.2s" repeatCount="indefinite" />
                    </rect>
                    {/* Blade Core */}
                    <rect x="-80" y="-1" width="160" height="2" fill="#fff" />

                    {/* Handle */}
                    <rect x="80" y="-4" width="40" height="8" fill="#374151" />
                    {/* Handguard */}
                    <rect x="80" y="-8" width="5" height="16" fill="#111827" />
                </g>

                {/* --- CYBER PARTICLES --- */}
                <rect x="100" y="200" width="4" height="4" fill="#00e5ff" opacity="0">
                    <animate attributeName="y" values="200; 100" dur="2s" repeatCount="indefinite" begin="0s" />
                    <animate attributeName="opacity" values="0; 1; 0" dur="2s" repeatCount="indefinite" begin="0s" />
                </rect>
                <rect x="220" y="220" width="3" height="3" fill="#00e5ff" opacity="0">
                    <animate attributeName="y" values="220; 120" dur="2.5s" repeatCount="indefinite" begin="1s" />
                    <animate attributeName="opacity" values="0; 1; 0" dur="2.5s" repeatCount="indefinite" begin="1s" />
                </rect>
            </g>
        </svg>
    );
}