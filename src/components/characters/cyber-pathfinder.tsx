export default function CyberPathfinder() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="85"
            height="85"
            viewBox="0 0 320 320"
            role="img"
            aria-labelledby="scoutTitle scoutDesc"
            style={{ maxWidth: "320px", margin: "0 auto", display: "block" }}
        >
            <title id="scoutTitle">Ultimate Cyber Pathfinder</title>
            <desc id="scoutDesc">
                A tactical cyber-scout consulting a holographic wrist-map in a digital landscape.
            </desc>

            <defs>
                {/* --- FILTERS --- */}
                <filter id="scoutGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* --- GRADIENTS --- */}

                {/* Hologram Projection (Fade to top) */}
                <linearGradient id="holoGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.0" />
                </linearGradient>

                {/* Suit Armor - Dark & Sleek */}
                <linearGradient id="armorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="50%" stopColor="#334155" />
                    <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>

                {/* Visor - Reflective Gold/Orange */}
                <linearGradient id="visorReflect" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#f59e0b" stopOpacity="1" />
                    <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.8" />
                </linearGradient>

                {/* Neon Accents */}
                <linearGradient id="neonCyan" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.0" />
                    <stop offset="50%" stopColor="#00e5ff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.0" />
                </linearGradient>

                {/* Background Grid Fade */}
                <linearGradient id="gridFade" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00e5ff" stopOpacity="0" />
                    <stop offset="50%" stopColor="#00e5ff" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.6" />
                </linearGradient>
            </defs>

            {/* ========================================== */}
            {/* LAYER 1: DIGITAL LANDSCAPE BACKGROUND */}
            {/* ========================================== */}
            <g opacity="0.5" filter="url(#scoutGlow)">
                {/* Perspective Grid (The Trail) */}
                <path d="M0 300 L100 200 L220 200 L320 300" fill="none" stroke="url(#gridFade)" strokeWidth="1" />
                <line x1="160" y1="200" x2="160" y2="320" stroke="url(#gridFade)" strokeWidth="1" />
                <line x1="100" y1="200" x2="40" y2="320" stroke="url(#gridFade)" strokeWidth="1" />
                <line x1="220" y1="200" x2="280" y2="320" stroke="url(#gridFade)" strokeWidth="1" />

                {/* Floating Waypoint Marker (The "Trail Marker") */}
                <g transform="translate(250, 150)">
                    <animateTransform attributeName="transform" type="translate" values="250,150; 250,140; 250,150" dur="3s" repeatCount="indefinite" />
                    {/* Diamond Shape */}
                    <path d="M0 -15 L10 0 L0 15 L-10 0 Z" fill="none" stroke="#00e5ff" strokeWidth="2">
                        <animateTransform attributeName="transform" type="rotate" values="0 0 0; 360 0 0" dur="6s" repeatCount="indefinite" />
                    </path>
                    {/* Center Core */}
                    <circle cx="0" cy="0" r="4" fill="#00e5ff">
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite" />
                    </circle>
                    {/* Vertical tether line */}
                    <line x1="0" y1="20" x2="0" y2="100" stroke="#00e5ff" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                </g>

                {/* Distant Data Mountains */}
                <path d="M40 200 L80 160 L120 200" fill="none" stroke="#00e5ff" strokeWidth="1" opacity="0.2">
                    <animate attributeName="opacity" values="0.1;0.3;0.1" dur="5s" repeatCount="indefinite" />
                </path>
            </g>


            {/* ========================================== */}
            {/* LAYER 2: THE CYBER SCOUT */}
            {/* ========================================== */}
            <g transform="translate(40, 40)">
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="40,40; 40,38; 40,40"
                    dur="6s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                />

                {/* --- BACKPACK (Tech Rig) --- */}
                <rect x="40" y="80" width="60" height="90" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                {/* Antenna */}
                <line x1="50" y1="80" x2="50" y2="40" stroke="#64748b" strokeWidth="2" />
                <circle cx="50" cy="40" r="3" fill="#ef4444">
                    <animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite" />
                </circle>

                {/* --- BODY ARMOR --- */}
                {/* Torso */}
                <path d="M70 100 L170 100 L160 200 L80 200 Z" fill="url(#armorGradient)" stroke="#0f172a" strokeWidth="1" />
                <path d="M70 100 L170 100 L180 130 L60 130 Z" fill="#334155" /> {/* Shoulder pads connection */}

                {/* Chest Light */}
                <rect x="105" y="130" width="30" height="5" rx="2" fill="#00e5ff" filter="url(#scoutGlow)">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
                </rect>

                {/* Legs - Tech Pants */}
                <path d="M90 200 L85 260 L110 260 L115 200 Z" fill="url(#armorGradient)" stroke="#0f172a" />
                <path d="M150 200 L155 260 L130 260 L125 200 Z" fill="url(#armorGradient)" stroke="#0f172a" />

                {/* Knee Guards */}
                <rect x="88" y="220" width="24" height="15" rx="3" fill="#334155" />
                <rect x="128" y="220" width="24" height="15" rx="3" fill="#334155" />

                {/* --- HEAD / HELMET --- */}
                {/* Helmet Shape */}
                <path d="M95 90 C95 60, 145 60, 145 90 L145 105 C145 115, 95 115, 95 105 Z" fill="url(#armorGradient)" stroke="#334155" strokeWidth="2" />
                {/* Visor - Tactical Glass */}
                <path d="M100 85 H140 V95 H100 Z" fill="url(#visorReflect)" filter="url(#scoutGlow)">
                    <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite" />
                </path>
                {/* Helmet Side Tech */}
                <rect x="142" y="80" width="6" height="20" rx="2" fill="#475569" />

                {/* --- ARMS & HOLOGRAM --- */}

                {/* Right Arm (holding side) */}
                <path d="M170 105 L190 150 L180 160" fill="none" stroke="#334155" strokeWidth="12" strokeLinecap="round" />
                <circle cx="180" cy="160" r="8" fill="#1e293b" /> {/* Hand */}

                {/* Left Arm (With Hologram Projector) */}
                {/* Upper Arm */}
                <line x1="70" y1="105" x2="55" y2="140" stroke="#334155" strokeWidth="14" strokeLinecap="round" />
                {/* Forearm (Raised) */}
                <line x1="55" y1="140" x2="90" y2="140" stroke="#334155" strokeWidth="12" strokeLinecap="round" />
                {/* Wrist Gauntlet */}
                <rect x="80" y="132" width="15" height="16" rx="2" fill="#475569" stroke="#00e5ff" strokeWidth="1" />

                {/* --- THE HOLOGRAPHIC MAP PROJECTION --- */}
                <g transform="translate(95, 140)">
                    {/* Hologram Light Cone */}
                    <path d="M0 0 L60 -50 L100 -30 L10 10 Z" fill="url(#holoGradient)" opacity="0.6" filter="url(#scoutGlow)">
                        <animate attributeName="opacity" values="0.4;0.7;0.4" dur="0.1s" repeatCount="indefinite" /> {/* Flicker effect */}
                    </path>

                    {/* Floating Terrain Wireframe inside Hologram */}
                    <g transform="translate(20, -30) scale(0.5)" opacity="0.9">
                        <path d="M0 20 L20 0 L40 20 L60 0" fill="none" stroke="#00e5ff" strokeWidth="2">
                            <animate attributeName="d" values="M0 20 L20 0 L40 20 L60 0; M0 0 L20 20 L40 0 L60 20; M0 20 L20 0 L40 20 L60 0" dur="4s" repeatCount="indefinite" />
                        </path>
                        <rect x="0" y="0" width="60" height="40" fill="none" stroke="#00e5ff" strokeWidth="1" strokeDasharray="4 2" />
                        {/* Destination Dot */}
                        <circle cx="50" cy="10" r="4" fill="#ef4444">
                            <animate attributeName="r" values="4;6;4" dur="0.5s" repeatCount="indefinite" />
                        </circle>
                    </g>
                </g>

            </g>
        </svg>
    );
}