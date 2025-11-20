export default function CyberSonicArchitect() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 320 320"
            role="img"
            aria-labelledby="djTitle djDesc"
            style={{
                maxWidth: "100%",
                height: "auto",
                margin: "0 auto",
                display: "block",
                // Transparent background preserved
            }}
        >
            <title id="djTitle">Cyber Sonic Architect</title>
            <desc id="djDesc">
                A cybernetic DJ manipulating a holographic mixing desk with an equalizer visor.
            </desc>

            <defs>
                {/* --- FILTERS --- */}
                <filter id="soundGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feComponentTransfer in="coloredBlur" result="brightBlur">
                        <feFuncA type="linear" slope="1.5" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode in="brightBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* --- GRADIENTS --- */}
                <linearGradient id="visorEq" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ff00cc" />
                    <stop offset="50%" stopColor="#00e5ff" />
                    <stop offset="100%" stopColor="#ff00cc" />
                </linearGradient>

                <linearGradient id="suitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#240046" /> {/* Deep Purple */}
                    <stop offset="100%" stopColor="#10002b" /> {/* Darker Purple */}
                </linearGradient>

                <linearGradient id="holoDeck" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.1" />
                </linearGradient>
            </defs>

            {/* ========================================== */}
            {/* LAYER 1: BACKGROUND AUDIO VISUALIZER */}
            {/* ========================================== */}
            <g transform="translate(0, 50)" opacity="0.4">
                {/* Bar 1 */}
                <rect x="60" y="100" width="10" height="60" rx="2" fill="#ff00cc">
                    <animate attributeName="y" values="100;140;80;100" dur="1.2s" repeatCount="indefinite" />
                    <animate attributeName="height" values="60;20;80;60" dur="1.2s" repeatCount="indefinite" />
                </rect>
                {/* Bar 2 */}
                <rect x="80" y="80" width="10" height="80" rx="2" fill="#7000ff">
                    <animate attributeName="y" values="80;120;60;80" dur="0.9s" repeatCount="indefinite" />
                    <animate attributeName="height" values="80;40;100;80" dur="0.9s" repeatCount="indefinite" />
                </rect>
                {/* Bar 3 (Center) */}
                <rect x="230" y="90" width="10" height="70" rx="2" fill="#00e5ff">
                    <animate attributeName="y" values="90;130;50;90" dur="1.5s" repeatCount="indefinite" />
                    <animate attributeName="height" values="70;30;110;70" dur="1.5s" repeatCount="indefinite" />
                </rect>
                {/* Bar 4 */}
                <rect x="250" y="110" width="10" height="50" rx="2" fill="#ff00cc">
                    <animate attributeName="y" values="110;140;90;110" dur="1.1s" repeatCount="indefinite" />
                    <animate attributeName="height" values="50;20;70;50" dur="1.1s" repeatCount="indefinite" />
                </rect>

                {/* Bass Pulse Ring behind character */}
                <circle cx="160" cy="120" r="60" fill="none" stroke="#7000ff" strokeWidth="1" opacity="0.3">
                    <animate attributeName="r" values="60;75;60" dur="0.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0;0.3" dur="0.5s" repeatCount="indefinite" />
                </circle>
            </g>

            {/* ========================================== */}
            {/* LAYER 2: THE DJ (ARCHITECT) */}
            {/* ========================================== */}
            <g transform="translate(60, 40)">
                {/* Hover Animation */}
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="60,40; 60,35; 60,40"
                    dur="3s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                />

                {/* --- HEADPHONES (Massive Tech Units) --- */}
                <rect x="45" y="65" width="20" height="50" rx="6" fill="#10002b" stroke="#00e5ff" strokeWidth="1" />
                <rect x="135" y="65" width="20" height="50" rx="6" fill="#10002b" stroke="#00e5ff" strokeWidth="1" />
                {/* Headband */}
                <path d="M55 70 C55 30, 145 30, 145 70" fill="none" stroke="#333" strokeWidth="8" strokeLinecap="round" />
                <path d="M55 70 C55 30, 145 30, 145 70" fill="none" stroke="#ff00cc" strokeWidth="2" strokeDasharray="4 4" opacity="0.8" />

                {/* --- HELMET --- */}
                <path d="M65 70 C65 50, 135 50, 135 70 L135 110 C135 130, 65 130, 65 110 Z" fill="url(#suitGradient)" stroke="#4b5563" strokeWidth="1" />

                {/* --- VISOR (The Equalizer Eyes) --- */}
                <path d="M70 85 H130 V105 H70 Z" fill="#000" />
                {/* Animated EQ Bars inside Visor */}
                <g fill="url(#visorEq)" filter="url(#soundGlow)">
                    <rect x="75" y="90" width="8" height="10">
                        <animate attributeName="height" values="10;5;12;8" dur="0.4s" repeatCount="indefinite" />
                        <animate attributeName="y" values="90;95;88;92" dur="0.4s" repeatCount="indefinite" />
                    </rect>
                    <rect x="87" y="90" width="8" height="10">
                        <animate attributeName="height" values="8;12;4;10" dur="0.3s" repeatCount="indefinite" />
                        <animate attributeName="y" values="92;88;96;90" dur="0.3s" repeatCount="indefinite" />
                    </rect>
                    <rect x="99" y="90" width="8" height="10">
                        <animate attributeName="height" values="12;6;14;12" dur="0.5s" repeatCount="indefinite" />
                        <animate attributeName="y" values="88;94;86;88" dur="0.5s" repeatCount="indefinite" />
                    </rect>
                    <rect x="111" y="90" width="8" height="10">
                        <animate attributeName="height" values="5;10;6;5" dur="0.4s" repeatCount="indefinite" />
                        <animate attributeName="y" values="95;90;94;95" dur="0.4s" repeatCount="indefinite" />
                    </rect>
                </g>

                {/* --- TORSO --- */}
                <path d="M65 120 L135 120 L150 220 L50 220 Z" fill="url(#suitGradient)" />
                {/* Glowing Collar */}
                <path d="M75 120 L125 120 L100 150 Z" fill="none" stroke="#ff00cc" strokeWidth="1" opacity="0.7" filter="url(#soundGlow)" />


                {/* ========================================== */}
                {/* LAYER 3: THE HOLOGRAPHIC MIXER */}
                {/* ========================================== */}
                <g transform="translate(100, 170)">

                    {/* Floating Disc 1 (Left) */}
                    <g transform="translate(-40, 0)">
                        <ellipse cx="0" cy="0" rx="35" ry="12" fill="url(#holoDeck)" stroke="#00e5ff" strokeWidth="1" opacity="0.6" filter="url(#soundGlow)">
                            <animateTransform attributeName="transform" type="rotate" values="0 0 0; 360 0 0" dur="8s" repeatCount="indefinite" />
                        </ellipse>
                        <ellipse cx="0" cy="0" rx="20" ry="6" fill="none" stroke="#ff00cc" strokeWidth="1" opacity="0.8">
                            <animateTransform attributeName="transform" type="rotate" values="360 0 0; 0 0 0" dur="4s" repeatCount="indefinite" />
                        </ellipse>
                        {/* Rising Beat Particles */}
                        <circle cx="0" cy="0" r="2" fill="#00e5ff">
                            <animate attributeName="cy" values="0;-40" dur="1s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="1;0" dur="1s" repeatCount="indefinite" />
                        </circle>
                    </g>

                    {/* Floating Disc 2 (Right) */}
                    <g transform="translate(40, 10)">
                        <ellipse cx="0" cy="0" rx="35" ry="12" fill="url(#holoDeck)" stroke="#00e5ff" strokeWidth="1" opacity="0.6" filter="url(#soundGlow)">
                            <animateTransform attributeName="transform" type="rotate" values="360 0 0; 0 0 0" dur="8s" repeatCount="indefinite" />
                        </ellipse>
                        <ellipse cx="0" cy="0" rx="25" ry="8" fill="none" stroke="#ff00cc" strokeWidth="1" strokeDasharray="2 4" opacity="0.8">
                            <animateTransform attributeName="transform" type="rotate" values="0 0 0; 360 0 0" dur="3s" repeatCount="indefinite" />
                        </ellipse>
                        <circle cx="0" cy="0" r="2" fill="#ff00cc">
                            <animate attributeName="cy" values="0;-40" dur="1.2s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="1;0" dur="1.2s" repeatCount="indefinite" />
                        </circle>
                    </g>

                    {/* Connecting Data Stream */}
                    <path d="M-40 0 Q0 20 40 10" fill="none" stroke="#00e5ff" strokeWidth="2" strokeDasharray="5 5" opacity="0.5">
                        <animate attributeName="stroke-dashoffset" values="10;0" dur="0.5s" repeatCount="indefinite" />
                    </path>
                </g>

                {/* Hands interacting with hologram */}
                <g transform="translate(60, 165)">
                    <circle cx="0" cy="0" r="5" fill="#10002b" stroke="#00e5ff" strokeWidth="1" />
                    <animateTransform attributeName="transform" type="translate" values="60,165; 60,160; 60,165" dur="0.5s" repeatCount="indefinite" />
                </g>
                <g transform="translate(140, 175)">
                    <circle cx="0" cy="0" r="5" fill="#10002b" stroke="#ff00cc" strokeWidth="1" />
                    <animateTransform attributeName="transform" type="translate" values="140,175; 140,180; 140,175" dur="0.5s" begin="0.2s" repeatCount="indefinite" />
                </g>

            </g>
        </svg>
    );
}