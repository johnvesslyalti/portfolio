export default function SonicWeaver() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="150 100 500 500"
            width="120"
            height="120"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            style={{
                background: 'transparent',
                display: 'block',
                margin: '0 auto',
                overflow: 'visible'
            }}
        >
            <title>The Sonic Weaver</title>

            <defs>
                {/* --- PRO FILTERS --- */}
                
                {/* 1. Lens Flare / Volumetric Bloom */}
                <filter id="godTierGlow" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feColorMatrix in="blur" type="matrix" values="
                        0 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 20 -8" result="goo" />
                    <feComposite in="SourceGraphic" in2="goo" operator="over" />
                    <feGaussianBlur stdDeviation="2" result="soft"/>
                    <feMerge>
                        <feMergeNode in="soft"/>
                        <feMergeNode in="soft"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>

                {/* --- GRADIENTS --- */}
                
                {/* Armor: Matte Black to Gunmetal */}
                <linearGradient id="techWearDark" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#334155" />
                    <stop offset="100%" stopColor="#020617" />
                </linearGradient>

                {/* Visor: Cyberpunk Gradient */}
                <linearGradient id="visorShine" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d946ef" />
                    <stop offset="50%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>

                {/* Hologram: Cyan Transparency */}
                <linearGradient id="holoGlass" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.1" />
                </linearGradient>
            </defs>

            {/* =================================================
                GROUP: MAIN SCENE (Centered)
               ================================================= */}
            <g transform="translate(400, 350)">

                {/* --- LAYER 1: BACKGROUND HUD RINGS (Behind Character) --- */}
                <g opacity="0.4" filter="url(#godTierGlow)">
                    <ellipse cx="0" cy="0" rx="200" ry="200" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5 10">
                        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="30s" repeatCount="indefinite" />
                    </ellipse>
                    <path d="M-180 0 A 180 180 0 0 1 180 0" fill="none" stroke="#d946ef" strokeWidth="2" opacity="0.5">
                        <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="15s" repeatCount="indefinite" />
                    </path>
                </g>


                {/* --- LAYER 2: THE CHARACTER (The Weaver) --- */}
                <g>
                    {/* Heavy Breathing / Floating Animation */}
                    <animateTransform attributeName="transform" type="translate" values="0,0; 0,-10; 0,0" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1; 0.45 0 0.55 1" />

                    {/* 2.1 TECH-WEAR JACKET (Voluminous Silhouette) */}
                    <path 
                        d="M-70 -80 C -100 -70, -120 -20, -110 50 L -90 150 L -60 160 L -40 100 L 40 100 L 60 160 L 90 150 L 110 50 C 120 -20, 100 -70, 70 -80 Z" 
                        fill="url(#techWearDark)" 
                        stroke="#1e293b" 
                        strokeWidth="2"
                    />
                    {/* Jacket Details (Straps/Padding) */}
                    <path d="M-110 50 L -40 60 M 110 50 L 40 60" stroke="#000" strokeWidth="3" opacity="0.5" />
                    <path d="M-40 100 L 40 100" stroke="#334155" strokeWidth="1" /> {/* Zipper line */}

                    {/* 2.2 HEAD & HELMET */}
                    <g transform="translate(0, -70)">
                        {/* Hood/Collar */}
                        <path d="M-50 10 L 50 10 L 60 50 L -60 50 Z" fill="#1e293b" />
                        
                        {/* Helmet Main Shape */}
                        <path d="M-40 -40 C -40 -70, 40 -70, 40 -40 L 45 10 L 0 30 L -45 10 Z" fill="#0f172a" stroke="#334155" strokeWidth="2" />
                        
                        {/* THE VISOR (Reflective Surface) */}
                        <path d="M-35 -10 L 35 -10 L 30 15 L -30 15 Z" fill="#000" />
                        <path d="M-35 -10 L 35 -10 L 30 15 L -30 15 Z" fill="url(#visorShine)" opacity="0.9" filter="url(#godTierGlow)">
                             {/* Glitch Flicker */}
                             <animate attributeName="opacity" values="0.9; 1; 0.9; 0.5; 0.9" dur="5s" repeatCount="indefinite" />
                        </path>
                        
                        {/* Headphones / Comm Units */}
                        <rect x="-50" y="-20" width="10" height="30" rx="2" fill="#334155" />
                        <rect x="40" y="-20" width="10" height="30" rx="2" fill="#334155" />
                        <circle cx="-55" cy="-25" r="2" fill="#22d3ee" filter="url(#godTierGlow)"> {/* Antenna Light */}
                            <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
                        </circle>
                    </g>

                    {/* 2.3 ARMS (Reaching OUT to interface) */}
                    {/* Left Arm */}
                    <path d="M-100 40 L -140 80 L -110 120" fill="none" stroke="#1e293b" strokeWidth="25" strokeLinecap="round" />
                    <g transform="translate(-120, 120) rotate(-20)">
                         {/* Gauntlet */}
                         <rect x="-15" y="-10" width="30" height="25" fill="#334155" rx="4" />
                         <circle cx="0" cy="2" r="6" fill="#d946ef" filter="url(#godTierGlow)" />
                    </g>

                    {/* Right Arm */}
                    <path d="M100 40 L 140 80 L 110 120" fill="none" stroke="#1e293b" strokeWidth="25" strokeLinecap="round" />
                    <g transform="translate(120, 120) rotate(20)">
                         {/* Gauntlet */}
                         <rect x="-15" y="-10" width="30" height="25" fill="#334155" rx="4" />
                         <circle cx="0" cy="2" r="6" fill="#22d3ee" filter="url(#godTierGlow)" />
                    </g>

                    {/* 2.4 RIM LIGHTING (The "Pro" Touch) */}
                    {/* Light from hologram reflecting on jacket shoulders */}
                    <path d="M-100 -10 Q -70 -40 -40 -20" fill="none" stroke="#22d3ee" strokeWidth="2" opacity="0.6" filter="url(#godTierGlow)" />
                    <path d="M100 -10 Q 70 -40 40 -20" fill="none" stroke="#d946ef" strokeWidth="2" opacity="0.6" filter="url(#godTierGlow)" />

                </g>

                {/* --- LAYER 3: FOREGROUND INTERFACE (In front of Character) --- */}
                <g transform="translate(0, 80)">
                    
                    {/* 3.1 MAIN CONTROL RING (3D Perspective) */}
                    <ellipse cx="0" cy="0" rx="160" ry="60" fill="none" stroke="#22d3ee" strokeWidth="3" filter="url(#godTierGlow)">
                         <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="8s" repeatCount="indefinite" />
                    </ellipse>
                    
                    {/* 3.2 FLOATING DATA STREAMS (Rising Bars) */}
                    <rect x="-80" y="-20" width="6" height="40" fill="#22d3ee" opacity="0.8" filter="url(#godTierGlow)">
                         <animate attributeName="height" values="10; 60; 20; 40" dur="0.6s" repeatCount="indefinite" />
                         <animate attributeName="y" values="0; -30; 0; -10" dur="0.6s" repeatCount="indefinite" />
                    </rect>
                    <rect x="-60" y="-10" width="6" height="20" fill="#22d3ee" opacity="0.6">
                         <animate attributeName="height" values="20; 40; 10" dur="0.4s" repeatCount="indefinite" />
                    </rect>
                    
                    <rect x="80" y="-30" width="6" height="50" fill="#d946ef" opacity="0.8" filter="url(#godTierGlow)">
                         <animate attributeName="height" values="20; 70; 30" dur="0.7s" repeatCount="indefinite" />
                         <animate attributeName="y" values="0; -30; 0" dur="0.7s" repeatCount="indefinite" />
                    </rect>
                     <rect x="60" y="-10" width="6" height="20" fill="#d946ef" opacity="0.6">
                         <animate attributeName="height" values="10; 30; 10" dur="0.5s" repeatCount="indefinite" />
                    </rect>

                    {/* 3.3 CENTER HOLOGRAPHIC CORE */}
                    <circle cx="0" cy="0" r="20" fill="url(#holoGlass)" stroke="#fff" strokeWidth="1" filter="url(#godTierGlow)">
                         <animate attributeName="r" values="20; 25; 20" dur="0.5s" repeatCount="indefinite" />
                         <animate attributeName="opacity" values="0.5; 1; 0.5" dur="0.5s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* 3.4 PARTICLES (The Drop) */}
                    <circle cx="-50" cy="0" r="2" fill="#fff">
                        <animate attributeName="cy" values="0; -100" dur="1s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1; 0" dur="1s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="50" cy="10" r="2" fill="#fff">
                        <animate attributeName="cy" values="10; -120" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1; 0" dur="1.5s" repeatCount="indefinite" />
                    </circle>

                </g>

            </g>
        </svg>
    );
}