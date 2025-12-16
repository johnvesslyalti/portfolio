export default function CloudOrbiter() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 320 320"
            role="img"
            aria-labelledby="astroTitle astroDesc"
            style={{
                maxWidth: "100%",
                height: "auto",
                margin: "0 auto",
                display: "block",
            }}
        >
            <title id="astroTitle">Cloud Orbiter</title>
            <desc id="astroDesc">
                A cool, heavy-duty mech astronaut with neon accents floating in zero-g.
            </desc>

            <defs>
                <filter id="spaceGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                    <feComponentTransfer in="coloredBlur" result="brightBlur">
                        <feFuncA type="linear" slope="2" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode in="brightBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <linearGradient id="mechArmorChrome" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="rotate(45)">
                    <stop offset="0%" stopColor="#1a2332" />
                    <stop offset="40%" stopColor="#374151" />
                    <stop offset="50%" stopColor="#A5F3FC" />
                    <stop offset="60%" stopColor="#374151" />
                    <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>

                <linearGradient id="goldVisorShiny" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#5B21B6" />
                    <stop offset="45%" stopColor="#F59E0B" />
                    <stop offset="55%" stopColor="#D97706" />
                    <stop offset="100%" stopColor="#78350F" />
                </linearGradient>

                <linearGradient id="ionThrustBright" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00e5ff" />
                    <stop offset="80%" stopColor="#00e5ff" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
                </linearGradient>
            </defs>

            {/* --- TETHER --- */}
            <g opacity="0.8" transform="translate(160, 160)">
                <path
                    d="M0 0 C-50 -50, -100 -20, -120 -80"
                    fill="none"
                    stroke="#00e5ff"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    filter="url(#spaceGlow)"
                    opacity="0.5"
                >
                    <animate attributeName="d"
                        values="M0 0 C-50 -50, -100 -20, -120 -80; M0 0 C-30 -80, -120 -40, -100 -100; M0 0 C-50 -50, -100 -20, -120 -80"
                        dur="10s"
                        repeatCount="indefinite"
                    />
                </path>
                <circle cx="-120" cy="-80" r="4" fill="#ef4444" filter="url(#spaceGlow)">
                    <animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="cx" values="-120;-100;-120" dur="10s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="-80;-100;-80" dur="10s" repeatCount="indefinite" />
                </circle>
            </g>

            {/* --- ASTRONAUT --- */}
            <g transform="translate(100, 40)">
                {/* Float animation */}
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="100,40; 100,30; 100,45; 100,40"
                    dur="8s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.45 0 0.55 1; 0.45 0 0.55 1; 0.45 0 0.55 1"
                />
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="0 60 100; 2 60 100; -2 60 100; 0 60 100"
                    dur="12s"
                    repeatCount="indefinite"
                    additive="sum"
                />

                {/* Backpack */}
                <rect x="10" y="60" width="100" height="120" rx="10" fill="#1f2937" stroke="#00e5ff" strokeWidth="2" filter="url(#spaceGlow)" />
                <rect x="15" y="65" width="90" height="110" rx="5" fill="url(#mechArmorChrome)" opacity="0.5" />

                {/* Thrusters */}
                <g transform="translate(0, 50)">
                    <rect x="-5" y="0" width="10" height="20" fill="#374151" />
                    <path d="M-5 20 L5 20 L0 40 Z" fill="url(#ionThrustBright)" filter="url(#spaceGlow)">
                        <animate attributeName="opacity" values="1;0.6;1" dur="0.5s" repeatCount="indefinite" />
                        <animate attributeName="d" values="M-5 20 L5 20 L0 40 Z; M-5 20 L5 20 L0 55 Z; M-5 20 L5 20 L0 40 Z" dur="0.2s" repeatCount="indefinite" />
                    </path>
                    <rect x="115" y="0" width="10" height="20" fill="#374151" />
                    <path d="M115 20 L125 20 L120 40 Z" fill="url(#ionThrustBright)" filter="url(#spaceGlow)">
                        <animate attributeName="opacity" values="1;0.6;1" dur="0.5s" begin="0.1s" repeatCount="indefinite" />
                        <animate attributeName="d" values="M115 20 L125 20 L120 40 Z; M115 20 L125 20 L120 60 Z; M115 20 L125 20 L120 40 Z" dur="0.2s" begin="0.1s" repeatCount="indefinite" />
                    </path>
                </g>

                {/* === LEGS & HIPS (FIXED ALIGNMENT) === */}
                <g transform="translate(0, 180)">
                    {/* Hip/Pelvis: Width 20-100 matches torso bottom perfectly now */}
                    <path d="M20 0 L100 0 L90 25 L30 25 Z" fill="#374151" stroke="#00e5ff" strokeWidth="1" />

                    {/* Left Leg - Moved inward to x=35 */}
                    <g transform="translate(35, 20)">
                        {/* Thigh */}
                        <path d="M0 0 L-5 35 L20 35 L15 0 Z" fill="url(#mechArmorChrome)" stroke="#00e5ff" strokeWidth="1" />
                        {/* Knee */}
                        <circle cx="7.5" cy="35" r="6" fill="#1f2937" stroke="#00e5ff" strokeWidth="2" filter="url(#spaceGlow)" />
                        {/* Boot */}
                        <path d="M0 40 L-5 80 L25 85 L20 40 Z" fill="url(#mechArmorChrome)" stroke="#00e5ff" strokeWidth="1" />
                    </g>

                    {/* Right Leg - Moved inward to x=85 */}
                    <g transform="translate(85, 20)">
                        {/* Thigh */}
                        <path d="M0 0 L5 35 L-20 35 L-15 0 Z" fill="url(#mechArmorChrome)" stroke="#00e5ff" strokeWidth="1" />
                        {/* Knee */}
                        <circle cx="-7.5" cy="35" r="6" fill="#1f2937" stroke="#00e5ff" strokeWidth="2" filter="url(#spaceGlow)" />
                        {/* Boot */}
                        <path d="M0 40 L5 80 L-25 85 L-20 40 Z" fill="url(#mechArmorChrome)" stroke="#00e5ff" strokeWidth="1" />
                    </g>
                </g>
                {/* === END LEGS === */}

                {/* Main Body Armor */}
                <path d="M30 80 L90 80 L100 180 L20 180 Z" fill="url(#mechArmorChrome)" stroke="#00e5ff" strokeWidth="2" filter="url(#spaceGlow)" />

                {/* Chest Control Panel */}
                <rect x="40" y="100" width="40" height="30" fill="#000" stroke="#00e5ff" strokeWidth="1" filter="url(#spaceGlow)" />
                <rect x="45" y="105" width="10" height="2" fill="#00e5ff" filter="url(#spaceGlow)" />
                <rect x="45" y="110" width="20" height="2" fill="#00e5ff" filter="url(#spaceGlow)" />
                <rect x="45" y="115" width="5" height="2" fill="#ef4444" filter="url(#spaceGlow)">
                    <animate attributeName="opacity" values="1;0;1" dur="0.8s" repeatCount="indefinite" />
                </rect>
                <rect x="75" y="105" width="2" height="20" fill="#00e5ff" filter="url(#spaceGlow)" opacity="0.5">
                    <animate attributeName="x" values="75;45;75" dur="2s" repeatCount="indefinite" />
                </rect>

                {/* Helmet Base */}
                <path d="M25 80 C25 30, 95 30, 95 80 L95 90 L25 90 Z" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" />

                {/* Visor */}
                <path d="M30 75 C30 45, 90 45, 90 75 L90 85 C90 90, 30 90, 30 85 Z" fill="url(#goldVisorShiny)" stroke="#F59E0B" strokeWidth="1" />
                <path d="M35 60 Q60 50 85 60 Q80 48 60 48 Q40 48 35 60 Z" fill="#fff" opacity="0.3" filter="url(#spaceGlow)" />
                <path d="M40 55 Q60 50 80 55" fill="none" stroke="#fff" strokeWidth="2" opacity="0.4" />

                {/* Tailored Antenna */}
                <g transform="translate(92, 65)">
                    <path d="M0 0 L5 5 L5 15 L0 20 Z" fill="#4b5563" />
                    <rect x="5" y="2" width="3" height="6" fill="#6b7280" />
                    <rect x="6" y="8" width="2" height="8" fill="#9ca3af" />
                    <rect x="5" y="16" width="3" height="4" fill="#6b7280" />
                    <rect x="4" y="-4" width="6" height="4" fill="#374151" stroke="#00e5ff" strokeWidth="0.5" />
                    <circle cx="7" cy="-2" r="2" fill="#00e5ff" filter="url(#spaceGlow)">
                        <animate attributeName="opacity" values="1;0.4;1" dur="1s" repeatCount="indefinite" />
                    </circle>
                </g>

                {/* Arms */}
                <path d="M25 85 C10 100, 10 130, 20 140" stroke="#374151" strokeWidth="16" strokeLinecap="round" fill="none" />
                <circle cx="20" cy="140" r="8" fill="#1f2937" stroke="#00e5ff" strokeWidth="2" filter="url(#spaceGlow)" />

                <path d="M95 85 C110 100, 120 90, 130 80" stroke="#374151" strokeWidth="16" strokeLinecap="round" fill="none" />
                <circle cx="130" cy="80" r="8" fill="#1f2937" stroke="#00e5ff" strokeWidth="2" filter="url(#spaceGlow)" />
            </g>
        </svg>
    );
}