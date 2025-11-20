export default function CyberSonicArchitect() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="85"
            height="85"
            viewBox="0 0 320 320"
            role="img"
            aria-labelledby="djTitle djDesc"
            style={{ maxWidth: "320px", margin: "0 auto", display: "block" }}
        >
            <title id="djTitle">Cyber Sonic Architect</title>
            <desc id="djDesc">A futuristic musician with advanced holographic sound controls,
                glowing headphones, and a cybernetic vocalizer, creating digital beats.</desc>

            <defs>
                {/* Main Glow Filter */}
                <filter id="sonicGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* Head/Helmet Gradient - sleek, dark cyber */}
                <linearGradient id="helmetGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>

                {/* Visor Gradient - vibrant, dynamic */}
                <linearGradient id="visorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8C00FF" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#8C00FF" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#8C00FF" stopOpacity="0.2" />
                </linearGradient>

                {/* Jacket/Body Gradient - flexible, tech-infused */}
                <linearGradient id="jacketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#300060" />
                    <stop offset="50%" stopColor="#6000C0" />
                    <stop offset="100%" stopColor="#300060" />
                </linearGradient>

                {/* Holographic Record Gradient - blues/cyans */}
                <radialGradient id="hologramRecordGradient">
                    <stop offset="0%" stopColor="#00e5ff" />
                    <stop offset="50%" stopColor="#00e5ff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.3" />
                </radialGradient>

                {/* Mic Glow */}
                <linearGradient id="micGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#00e5ff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.2" />
                </linearGradient>

                {/* Background Soundwave Gradient */}
                <linearGradient id="bgSoundwave" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8C00FF" stopOpacity="0.0" />
                    <stop offset="50%" stopColor="#8C00FF" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#8C00FF" stopOpacity="0.0" />
                </linearGradient>
            </defs>

            {/* --- BACKGROUND DIGITAL SOUNDSCAPE --- */}
            <g opacity="0.5" filter="url(#sonicGlow)">
                {/* Pulsating Abstract Soundwaves */}
                <path d="M0 100 C80 80, 160 120, 240 100 C300 80, 320 120, 320 100" fill="none" stroke="url(#bgSoundwave)" strokeWidth="2" strokeLinecap="round">
                    <animate attributeName="d" values="M0 100 C80 80, 160 120, 240 100 C300 80, 320 120, 320 100; M0 90 C80 110, 160 70, 240 90 C300 110, 320 70, 320 90; M0 100 C80 80, 160 120, 240 100 C300 80, 320 120, 320 100" dur="6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="6s" repeatCount="indefinite" />
                </path>
                <path d="M0 220 C80 240, 160 200, 240 220 C300 240, 320 200, 320 220" fill="none" stroke="url(#bgSoundwave)" strokeWidth="2" strokeLinecap="round" begin="1s">
                    <animate attributeName="d" values="M0 220 C80 240, 160 200, 240 220 C300 240, 320 200, 320 220; M0 210 C80 190, 160 230, 240 210 C300 190, 320 230, 320 210; M0 220 C80 240, 160 200, 240 220 C300 240, 320 200, 320 220" dur="7s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="7s" repeatCount="indefinite" />
                </path>

                {/* Floating Data Glyphs */}
                <text x="50" y="30" fontSize="14" fill="#00e5ff" opacity="0.3" fontFamily="monospace">SYNC</text>
                <text x="250" y="290" fontSize="14" fill="#8C00FF" opacity="0.3" fontFamily="monospace" begin="0.5s">BPM</text>
            </g>

            {/* --- MAIN SONIC ARCHITECT GROUP --- */}
            <g transform="translate(40,20)">
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="40,20; 40,18; 40,20"
                    dur="5s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                />

                {/* Headphones - sleek, glowing, soundwave visualizer */}
                <g filter="url(#sonicGlow)">
                    <rect x="66" y="36" rx="22" ry="22" width="108" height="70" fill="none" stroke="#6000C0" strokeWidth="2" />
                    <path d="M70 70 A20 20 0 0 1 100 70 A20 20 0 0 1 70 70 Z" fill="#00e5ff" opacity="0.6">
                        <animate attributeName="d" values="M70 70 A20 20 0 0 1 100 70 A20 20 0 0 1 70 70 Z; M70 70 A10 10 0 0 1 100 70 A10 10 0 0 1 70 70 Z; M70 70 A20 20 0 0 1 100 70 A20 20 0 0 1 70 70 Z" dur="0.8s" repeatCount="indefinite" />
                    </path> {/* Left earcup visualizer */}
                    <path d="M130 70 A20 20 0 0 1 160 70 A20 20 0 0 1 130 70 Z" fill="#00e5ff" opacity="0.6" begin="0.4s">
                        <animate attributeName="d" values="M130 70 A20 20 0 0 1 160 70 A20 20 0 0 1 130 70 Z; M130 70 A10 10 0 0 1 160 70 A10 10 0 0 1 130 70 Z; M130 70 A20 20 0 0 1 160 70 A20 20 0 0 1 130 70 Z" dur="0.8s" repeatCount="indefinite" />
                    </path> {/* Right earcup visualizer */}

                    <rect x="54" y="30" rx="6" ry="6" width="12" height="48" fill="#3A0CA3" />
                    <rect x="170" y="30" rx="6" ry="6" width="12" height="48" fill="#3A0CA3" />
                </g>

                {/* Head/Helmet - dark, sleek, integrated with headphones */}
                <circle cx="120" cy="90" r="36" fill="url(#helmetGradient)" stroke="#0f172a" strokeWidth="2" />

                {/* Visor - wide, expressive, pulsating */}
                <g filter="url(#sonicGlow)">
                    <rect x="90" y="80" width="60" height="15" rx="7" fill="url(#visorGradient)" />
                    <rect x="90" y="80" width="10" height="15" rx="5" fill="#FFF" opacity="0.3">
                        <animate attributeName="x" values="90; 140; 90" dur="2s" repeatCount="indefinite" />
                    </rect>
                </g>

                {/* Jacket/Body - flowing, data-infused with glowing lines */}
                <path d="M60 140 C120 250, 180 250, 180 140 L180 220 C180 240, 60 240, 60 220 Z" fill="url(#jacketGradient)" stroke="#300060" strokeWidth="2" />
                {/* Glowing circuit lines on jacket */}
                <g filter="url(#sonicGlow)">
                    <line x1="120" y1="150" x2="100" y2="180" stroke="#00e5ff" strokeWidth="1.5" opacity="0.7">
                        <animate attributeName="stroke-dasharray" from="0 30" to="30 0" dur="1.5s" repeatCount="indefinite" />
                    </line>
                    <line x1="120" y1="150" x2="140" y2="180" stroke="#00e5ff" strokeWidth="1.5" opacity="0.7" begin="0.3s">
                        <animate attributeName="stroke-dasharray" from="0 30" to="30 0" dur="1.5s" repeatCount="indefinite" />
                    </line>
                </g>

                {/* Holographic Turntable / Sound Mixer (replaces record) */}
                <g transform="translate(100,160) rotate(-15 0 0)" filter="url(#sonicGlow)">
                    <rect x="-60" y="-60" width="120" height="120" rx="10" ry="10" fill="url(#hologramRecordGradient)" opacity="0.7">
                        <animate attributeName="rx" values="10;15;10" dur="3s" repeatCount="indefinite" />
                    </rect>
                    {/* Central data core */}
                    <circle cx="0" cy="0" r="20" fill="#FFF" opacity="0.2">
                        <animate attributeName="r" values="20;25;20" dur="2s" repeatCount="indefinite" />
                    </circle>
                    {/* Dynamic sound waveform */}
                    <path d="M-40 0 C-20 -20, 20 -20, 40 0 C20 20, -20 20, -40 0 Z" fill="none" stroke="#FFF" strokeWidth="2" opacity="0.8">
                        <animate attributeName="d" values="M-40 0 C-20 -20, 20 -20, 40 0 C20 20, -20 20, -40 0 Z; M-40 0 C-20 -10, 20 -10, 40 0 C20 10, -20 10, -40 0 Z; M-40 0 C-20 -20, 20 -20, 40 0 C20 20, -20 20, -40 0 Z" dur="1.5s" repeatCount="indefinite" />
                    </path>
                </g>

                {/* Cybernetic Vocalizer / Mic */}
                <g transform="translate(8,140)">
                    <rect x="0" y="0" rx="6" ry="6" width="18" height="60" fill="url(#helmetGradient)" stroke="#0f172a" strokeWidth="2" />
                    <rect x="2" y="-8" width="14" height="16" rx="6" fill="url(#micGlow)" filter="url(#sonicGlow)">
                        <animate attributeName="opacity" values="0.8;1;0.8" dur="1s" repeatCount="indefinite" />
                    </rect>
                    {/* Mic Stand glow */}
                    <line x1="9" y="60" x2="9" y1="90" stroke="#00e5ff" strokeWidth="1" opacity="0.4">
                        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
                    </line>
                </g>
            </g>
        </svg>
    );
}