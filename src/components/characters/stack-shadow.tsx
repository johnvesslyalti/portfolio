export default function StackShadow() {
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
            <title id="ninjaTitle">Stack Shadow</title>
            <desc id="ninjaDesc">
                A detailed, human-like cyber ninja with articulated hands gripping an energy katana, tactical armor, and a glowing visor.
            </desc>

            <defs>
                {/* --- GLOW FILTERS --- */}
                <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <filter id="techGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* --- GRADIENTS --- */}
                <linearGradient id="suitDark" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1f2937" /> {/* Slightly lighter top for form definition */}
                    <stop offset="100%" stopColor="#000000" />
                </linearGradient>
                {/* Metallic armor with a central highlight to suggest curved form */}
                <linearGradient id="armorMetallic" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1f2937" />
                    <stop offset="50%" stopColor="#4b5563" />
                    <stop offset="100%" stopColor="#1f2937" />
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
                <linearGradient id="gloveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#374151" />
                    <stop offset="100%" stopColor="#111827" />
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

                {/* --- TORSO & HEAD --- */}
                <g stroke="#000" strokeWidth="0.5">
                    {/* Base Under-suit (Defined human torso shape) */}
                    <path d="M160 45 C140 45, 125 65, 130 100 C130 130, 120 150, 105 280 L215 280 C200 150, 190 130, 190 100 C195 65, 180 45, 160 45 Z" fill="url(#suitDark)" />

                    {/* Neck Guard & Helmet Base (Separates head from shoulders) */}
                    <path d="M145 60 L175 60 L170 85 L150 85 Z" fill="url(#armorMetallic)" />
                    <path d="M160 35 C145 35, 135 50, 135 75 L185 75 C185 50, 175 35, 160 35 Z" fill="url(#suitDark)" />

                    {/* Fitted Chest Armor */}
                    <path d="M135 85 L185 85 L178 135 L142 135 Z" fill="url(#armorMetallic)" />

                    {/* Segmented Abdominal Plating (Tactical Gear) */}
                    <path d="M145 140 L175 140 L172 155 L148 155 Z" fill="url(#armorMetallic)" />
                    <path d="M148 160 L172 160 L170 175 L150 175 Z" fill="url(#armorMetallic)" />

                    {/* Utility Belt */}
                    <rect x="140" y="180" width="40" height="12" rx="2" fill="url(#suitDark)" stroke="url(#armorMetallic)" />

                    {/* Contoured Shoulder Pads */}
                    <path d="M132 85 C120 90, 115 115, 125 135 L138 125 Z" fill="url(#armorMetallic)" />
                    <path d="M188 85 C200 90, 205 115, 195 135 L182 125 Z" fill="url(#armorMetallic)" />
                </g>

                {/* --- TECH LINES (Subtle details) --- */}
                <g fill="none" stroke="#00e5ff" strokeWidth="0.5" filter="url(#techGlow)" opacity="0.5">
                    <path d="M160 85 L160 135 M148 140 L148 175 M172 140 L172 175" />
                    <path d="M135 75 Q160 85 185 75" opacity="0.3" /> {/* Neck seam */}
                </g>

                {/* --- VISOR --- */}
                <g filter="url(#neonGlow)">
                    <path d="M140 95 L180 95 L175 108 L145 108 Z" fill="#000" />
                    <rect x="145" y="98" width="28" height="4" fill="url(#visorGradient)">
                        <animate attributeName="opacity" values="0.8; 1; 0.8" dur="2s" repeatCount="indefinite" />
                        {/* Subtle scanning movement */}
                        <animateTransform attributeName="transform" type="translate" values="-1 0; 1 0; -1 0" dur="4s" repeatCount="indefinite" />
                    </rect>
                </g>

                {/* --- SCARF --- */}
                <g filter="url(#neonGlow)" opacity="0.9">
                    <path d="M138 120 Q160 140 182 120" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
                    <path d="M182 120 Q210 110 250 90" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round">
                        <animate attributeName="d" values="M182 120 Q210 110 250 90; M182 120 Q210 130 250 110; M182 120 Q210 110 250 90" dur="3s" repeatCount="indefinite" />
                    </path>
                </g>

                {/* --- KATANA & REALISTIC HANDS --- */}
                <g transform="translate(155, 180) rotate(-40)">
                    {/* Blade & Hilt Base */}
                    <rect x="-85" y="-2" width="170" height="4" fill="url(#bladeGradient)" filter="url(#neonGlow)">
                        <animate attributeName="opacity" values="0.8; 1; 0.8" dur="0.2s" repeatCount="indefinite" />
                    </rect>
                    <rect x="-85" y="-1" width="170" height="2" fill="#fff" />
                    <rect x="85" y="-4" width="45" height="8" fill="#374151" stroke="#111827" strokeWidth="0.5" /> {/* Handle */}
                    <rect x="85" y="-8" width="5" height="16" fill="#111827" /> {/* Tsuba */}

                    {/* --- DETAILED HUMAN HANDS GRIPPING HILT --- */}

                    {/* Right Hand (Top hand, closer to guard) */}
                    <g transform="translate(88, -6)">
                        {/* Base palm/thumb muscle wrapped around back */}
                        <path d="M0 4 Q5 -2, 15 -2, 20 4 L18 10 L2 10 Z" fill="#1f2937" />
                        {/* Articulated Fingers wrapping over the front */}
                        <g fill="url(#gloveGradient)" stroke="#000" strokeWidth="0.3">
                            <rect x="2" y="-2" width="5" height="12" rx="2" transform="rotate(-8 2 4)" /> {/* Index */}
                            <rect x="8" y="-3" width="5" height="13" rx="2" transform="rotate(-4 8 4)" /> {/* Middle */}
                            <rect x="14" y="-2" width="5" height="12" rx="2" transform="rotate(2 14 4)" /> {/* Ring */}
                        </g>
                        {/* Thumb knuckle detail */}
                        <circle cx="1" cy="7" r="2.5" fill="#374151" />
                    </g>

                    {/* Left Hand (Bottom hand, lower on hilt) */}
                    <g transform="translate(112, -5)">
                        <path d="M0 4 Q5 -2, 15 -2, 20 4 L18 10 L2 10 Z" fill="#1f2937" />
                        <g fill="url(#gloveGradient)" stroke="#000" strokeWidth="0.3">
                            <rect x="2" y="-1" width="5" height="12" rx="2" transform="rotate(-5 2 5)" />
                            <rect x="8" y="-2" width="5" height="13" rx="2" />
                            <rect x="14" y="-1" width="5" height="12" rx="2" transform="rotate(5 14 5)" />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}