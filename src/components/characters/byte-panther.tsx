export default function BytePanther() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 320"
            width="120"
            height="120"
            style={{
                maxWidth: "400px",
                margin: "0 auto",
                display: "block",
                overflow: "visible" // Allows the glow to spill outside slightly
            }}
        >
            <title>byte-panther</title>
            <defs>
                {/* High-Contrast Metal Gradient */}
                <linearGradient id="metalBody" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#374151" /> {/* Dark Grey */}
                    <stop offset="50%" stopColor="#111827" /> {/* Almost Black */}
                    <stop offset="100%" stopColor="#000000" /> {/* Black */}
                </linearGradient>

                {/* Holographic Visor Gradient */}
                <linearGradient id="holoVisor" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.9" /> {/* Indigo */}
                    <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" /> {/* Violet */}
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.9" /> {/* Pink */}
                </linearGradient>

                {/* Neon Glow Filter */}
                <filter id="vectorGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>

            {/* --- GROUND SHADOW (Anchors the floating cat) --- */}
            <ellipse cx="160" cy="260" rx="40" ry="6" fill="#000" opacity="0.3">
                <animate
                    attributeName="rx"
                    values="40; 30; 40"
                    dur="4s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                />
                <animate
                    attributeName="opacity"
                    values="0.3; 0.1; 0.3"
                    dur="4s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                />
            </ellipse>

            {/* --- MAIN CHARACTER GROUP (Floating) --- */}
            <g transform="translate(160, 160)">
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="160,160; 160,145; 160,160"
                    dur="4s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                />

                {/* 1. TAIL (Mechanical Segmentation) */}
                <path
                    d="M50 60 Q80 60 80 10"
                    fill="none"
                    stroke="#374151"
                    strokeWidth="8"
                    strokeLinecap="round"
                >
                    <animate attributeName="d" values="M50 60 Q80 60 80 10; M50 60 Q90 40 85 -10; M50 60 Q80 60 80 10" dur="3s" repeatCount="indefinite" />
                </path>

                {/* 2. BODY ARMOR */}
                <path
                    d="M-50 80 L-40 10 L40 10 L50 80 Z"
                    fill="url(#metalBody)"
                    stroke="#6366f1"
                    strokeWidth="2"
                />

                {/* Chest Reactor (Pulse) */}
                <circle cx="0" cy="45" r="10" fill="#111" stroke="#6366f1" strokeWidth="1" />
                <circle cx="0" cy="45" r="5" fill="#6366f1">
                    <animate attributeName="opacity" values="0.5; 1; 0.5" dur="2s" repeatCount="indefinite" />
                </circle>

                {/* 3. HEAD HELMET */}
                <g transform="translate(0, -20)">
                    {/* Helmet Shell */}
                    <path
                        d="M-45 10 L-40 -45 L-15 -35 L15 -35 L40 -45 L45 10 Q30 35 0 35 Q-30 35 -45 10 Z"
                        fill="url(#metalBody)"
                        stroke="#8b5cf6"
                        strokeWidth="2"
                    />

                    {/* Ear Antennas */}
                    <path d="M-40 -45 L-35 -65 L-20 -38" fill="none" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" />
                    <path d="M40 -45 L35 -65 L20 -38" fill="none" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" />

                    {/* 4. VISOR (The Face) */}
                    <path
                        d="M-35 -5 Q0 10 35 -5 L35 -15 Q0 -5 -35 -15 Z"
                        fill="url(#holoVisor)"
                        stroke="#ec4899"
                        strokeWidth="1"
                    />

                    {/* Scanner Line Animation (Inside Visor) */}
                    <line x1="-30" y1="-10" x2="30" y2="-10" stroke="#fff" strokeWidth="1" opacity="0.8">
                        <animate attributeName="y1" values="-14; -6; -14" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="y2" values="-14; -6; -14" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0; 1; 0" dur="1.5s" repeatCount="indefinite" />
                    </line>

                    {/* Glossy Reflection on Helmet (Makes it look 3D) */}
                    <path d="M-20 -40 Q0 -35 20 -40 L15 -30 Q0 -25 -15 -30 Z" fill="#fff" opacity="0.1" />
                </g>

                {/* 5. FLOATING HANDS */}
                <circle cx="-35" cy="40" r="12" fill="#1f2937" stroke="#6366f1" strokeWidth="2">
                    <animateTransform attributeName="transform" type="translate" values="0 0; 0 -4; 0 0" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="35" cy="40" r="12" fill="#1f2937" stroke="#6366f1" strokeWidth="2">
                    <animateTransform attributeName="transform" type="translate" values="0 0; 0 -4; 0 0" dur="2s" repeatCount="indefinite" begin="1s" />
                </circle>

            </g>
        </svg>
    );
}