export default function CyberCodeWizard() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="85"
            height="85"
            viewBox="0 0 320 320"
            role="img"
            aria-labelledby="wizardTitle wizardDesc"
            style={{ maxWidth: "320px", margin: "0 auto", display: "block" }}
        >
            <title id="wizardTitle">Cyber Code Arch-Wizard</title>
            <desc id="wizardDesc">A powerful and majestic futuristic wizard, enveloped in a data-rich cloak, wielding a staff that projects holographic code, with cybernetic enhancements and a commanding presence.</desc>

            <defs>
                {/* Main Glow Filter - increased stdDeviation for broader glow */}
                <filter id="wizardGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* Robe Gradient - deeper, more vibrant purple-blue transition */}
                <linearGradient id="robeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4A00E0" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#8C00FF" stopOpacity="1" />
                    <stop offset="100%" stopColor="#4A00E0" stopOpacity="0.9" />
                </linearGradient>

                {/* Accent Glow Lines - for circuitry on robe/staff */}
                <linearGradient id="accentLineGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.0" />
                    <stop offset="50%" stopColor="#00e5ff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.0" />
                </linearGradient>

                {/* Head/Helmet Base - dark, metallic cyber look */}
                <linearGradient id="helmetBase" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1C212E" />
                    <stop offset="100%" stopColor="#0E1218" />
                </linearGradient>

                {/* Visor Gradient - for dynamic scanning effect */}
                <linearGradient id="visorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#00e5ff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.2" />
                </linearGradient>

                {/* Staff Core Gradient - intense energy */}
                <radialGradient id="staffCoreGlow">
                    <stop offset="0%" stopColor="#00e5ff" />
                    <stop offset="100%" stopColor="#00b0ff" stopOpacity="0" />
                </radialGradient>

                {/* Holographic Text Gradient */}
                <linearGradient id="hologramTextGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.0" />
                    <stop offset="50%" stopColor="#00e5ff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.0" />
                </linearGradient>

                {/* Background Data Field */}
                <linearGradient id="bgDataField" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2c0066" stopOpacity="0.05" />
                    <stop offset="50%" stopColor="#6600cc" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#2c0066" stopOpacity="0.05" />
                </linearGradient>
            </defs>

            {/* --- BACKGROUND DIGITAL AURA/ENVIRONMENT --- */}
            <g opacity="0.6" filter="url(#wizardGlow)">
                {/* Swirling Data Field */}
                <rect x="0" y="0" width="320" height="320" fill="url(#bgDataField)">
                    <animate attributeName="opacity" values="0.05;0.15;0.05" dur="8s" repeatCount="indefinite" />
                </rect>

                {/* Floating Data Runes/Particles */}
                <text x="30" y="50" fontSize="16" fill="#00e5ff" opacity="0.3" fontFamily="monospace">
                    {/* FIXED: Escaped characters below */}
                    <tspan x="30" dy="0">const init = () =&gt; &#123;</tspan>
                    <tspan x="30" dy="18">  await activate();</tspan>
                    <tspan x="30" dy="18">&#125;</tspan>
                    <animateTransform attributeName="transform" type="translate" values="0 0; 10 5; 0 0" dur="10s" repeatCount="indefinite" additive="sum" />
                    <animate attributeName="opacity" values="0.3;0.6;0.3" dur="5s" repeatCount="indefinite" />
                </text>
                <text x="200" y="280" fontSize="14" fill="#8C00FF" opacity="0.2" fontFamily="monospace">
                    {/* FIXED: Escaped characters below */}
                    <tspan x="200" dy="0">if (state === ready) &#123;</tspan>
                    <tspan x="200" dy="16">  render();</tspan>
                    <tspan x="200" dy="16">&#125;</tspan>
                    <animateTransform attributeName="transform" type="translate" values="0 0; -8 -4; 0 0" dur="12s" repeatCount="indefinite" additive="sum" />
                    <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite" />
                </text>

                {/* Energy pulses */}
                <circle cx="160" cy="160" r="20" fill="#00e5ff" opacity="0.05">
                    <animate attributeName="r" values="20;30;20" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.05;0.15;0.05" dur="4s" repeatCount="indefinite" />
                </circle>
            </g>


            {/* --- MAIN WIZARD GROUP --- */}
            <g transform="translate(40,20)">
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="40,20; 40,18; 40,20"
                    dur="6s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                />

                {/* Robe - now with more defined shape and glowing patterns */}
                <path d="M60 260 L40 160 L80 100 L160 50 L240 100 L280 160 L260 260 L160 280 Z"
                    fill="url(#robeGradient)"
                    stroke="#6A1B9A"
                    strokeWidth="2"
                    filter="url(#wizardGlow)">
                    <animate attributeName="fillOpacity" values="0.9;1;0.9" dur="4s" repeatCount="indefinite" />
                </path>

                {/* Robe glowing circuitry / data flow lines */}
                <g filter="url(#wizardGlow)">
                    <line x1="100" y1="180" x2="160" y2="160" stroke="url(#accentLineGlow)" strokeWidth="2" opacity="0.7">
                        <animate attributeName="strokeDasharray" from="0 50" to="50 0" dur="2s" repeatCount="indefinite" />
                    </line>
                    <line x1="160" y1="160" x2="220" y2="180" stroke="url(#accentLineGlow)" strokeWidth="2" opacity="0.7">
                        <animate attributeName="strokeDasharray" from="0 50" to="50 0" dur="2s" repeatCount="indefinite" />
                    </line>
                    <path d="M160 270 A80 40 0 0 1 160 250" fill="none" stroke="#00e5ff" strokeWidth="1.5" opacity="0.5">
                        <animate attributeName="strokeDashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
                    </path>
                </g>

                {/* Sleeves/Arms - more defined, armored look */}
                <path d="M40 160 C30 140, 60 120, 80 130 L80 180 C60 200, 30 180, 40 160 Z" fill="url(#helmetBase)" stroke="#1C212E" strokeWidth="2" /> {/* Left Arm */}
                <path d="M280 160 C290 140, 260 120, 240 130 L240 180 C260 200, 290 180, 280 160 Z" fill="url(#helmetBase)" stroke="#1C212E" strokeWidth="2" /> {/* Right Arm */}

                {/* Head/Helmet - more intricate and cybernetic */}
                <path d="M80 100 A40 40 0 0 1 240 100 L240 120 A40 40 0 0 1 80 120 Z" fill="url(#helmetBase)" stroke="#1C212E" strokeWidth="2" />
                <path d="M120 50 A40 40 0 0 1 200 50 L160 10 Z" fill="url(#helmetBase)" stroke="#1C212E" strokeWidth="2" /> {/* Hat/Hood Top */}

                {/* Visor - now a central, glowing interface */}
                <g filter="url(#wizardGlow)">
                    <rect x="100" y="80" width="80" height="15" rx="7" fill="#00aaff" />
                    <rect x="100" y="80" width="10" height="15" rx="5" fill="url(#visorGradient)">
                        <animate attributeName="x" values="100; 170; 100" dur="2s" repeatCount="indefinite" />
                    </rect>
                </g>

                {/* Staff - dynamic and powerful */}
                <g transform="translate(250, 60) rotate(-20 0 0)"> {/* Adjusted position and rotation */}
                    <rect x="0" y="0" width="10" height="180" rx="5" fill="#1C212E" stroke="#00e5ff" strokeWidth="1" />

                    {/* Staff Core - pulsating energy sphere */}
                    <circle cx="5" cy="0" r="15" fill="url(#staffCoreGlow)" filter="url(#wizardGlow)">
                        <animate attributeName="r" values="15; 20; 15" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1; 0.7; 1" dur="1.5s" repeatCount="indefinite" />
                    </circle>

                    {/* Holographic Code Projection */}
                    <g transform="translate(5, -40)" filter="url(#wizardGlow)">
                        <rect x="-20" y="-20" width="40" height="40" rx="5" fill="url(#hologramTextGlow)" opacity="0.7" />
                        <text x="-15" y="0" fontSize="14" fill="#00e5ff" fontFamily="monospace">
                            <tspan x="-15" dy="0">0101</tspan>
                            <tspan x="-15" dy="16">1010</tspan>
                            <tspan x="-15" dy="16">0101</tspan>
                            <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2s" repeatCount="indefinite" />
                            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -10; 0 0" dur="2s" repeatCount="indefinite" />
                        </text>
                        <rect x="-20" y="-20" width="40" height="40" rx="5" fill="none" stroke="#00e5ff" strokeWidth="1" opacity="0.4">
                            <animateTransform attributeName="transform" type="rotate" values="0 0 0; 360 0 0" dur="10s" repeatCount="indefinite" />
                        </rect>
                    </g>
                </g>
            </g>
        </svg>
    );
}