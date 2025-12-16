export default function AutoMech() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 320 320"
            role="img"
            aria-labelledby="roboTitle roboDesc"
        >
            <title id="roboTitle">auto-mech</title>
            <desc id="roboDesc">
                A modern, glowing robot helper with a scanning display, floating gently,
                surrounded by revolving tech elements.
            </desc>

            <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4A55A2" stopOpacity="1" />
                    <stop offset="100%" stopColor="#2D3468" stopOpacity="1" />
                </linearGradient>

                <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1F2235" stopOpacity="1" />
                    <stop offset="100%" stopColor="#141625" stopOpacity="1" />
                </linearGradient>

                <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#A0A7C2" stopOpacity="1" />
                    <stop offset="50%" stopColor="#Eef2ff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#A0A7C2" stopOpacity="1" />
                </linearGradient>

                <radialGradient id="shadowGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#141625" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#141625" stopOpacity="0" />
                </radialGradient>

                <clipPath id="screenClip">
                    <rect x="26" y="76" rx="12" ry="12" width="148" height="110" />
                </clipPath>
            </defs>

            {/* Background Rotating Ring */}
            <circle
                cx="160"
                cy="160"
                r="130"
                fill="none"
                stroke="#E0E5FF"
                strokeWidth="1.5"
                strokeOpacity="0.2"
                strokeDasharray="15 15"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 160 160"
                    to="360 160 160"
                    dur="60s"
                    repeatCount="indefinite"
                />
            </circle>

            {/* Outer Orbiting Element 1 */}
            <g transform="translate(160,160)">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 0 0"
                    to="360 0 0"
                    dur="20s"
                    repeatCount="indefinite"
                />
                <rect
                    x="-120"
                    y="-10"
                    width="20"
                    height="5"
                    rx="2"
                    fill="#4FC3F7"
                    opacity="0.4"
                    filter="url(#glow)"
                />
                <circle cx="120" cy="10" r="6" fill="#00E5FF" opacity="0.5" filter="url(#glow)" />
            </g>

            {/* Inner Orbiting Element 2 */}
            <g transform="translate(160,160)">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="360 0 0"
                    to="0 0 0"
                    dur="12s"
                    repeatCount="indefinite"
                />
                <circle cx="0" cy="-80" r="4" fill="#FF80AB" opacity="0.6" filter="url(#glow)" />
                <rect
                    x="80"
                    y="0"
                    width="15"
                    height="4"
                    rx="2"
                    fill="#FFD700"
                    opacity="0.4"
                    filter="url(#glow)"
                />
            </g>

            {/* Shadow (Adjusted slightly lower to match new body position) */}
            <ellipse cx="160" cy="290" rx="50" ry="8" fill="url(#shadowGradient)">
                <animate
                    attributeName="rx"
                    dur="4s"
                    values="50; 40; 50"
                    repeatCount="indefinite"
                    keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                    calcMode="spline"
                />
                <animate
                    attributeName="opacity"
                    dur="4s"
                    values="1; 0.6; 1"
                    repeatCount="indefinite"
                    keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                    calcMode="spline"
                />
            </ellipse>

            {/* Main Robot Group - Animation Wrapper */}
            <g>
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    dur="4s"
                    values="0 0; 0 -12; 0 0"
                    repeatCount="indefinite"
                    keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                    calcMode="spline"
                />

                {/* FIX: Changed 'transform' from translate(60,50) to translate(60,80).
                   This lowers the robot so the antenna doesn't clip out of the top 
                   when it floats up. 
                */}
                <g transform="translate(60,80)">

                    {/* Arms */}
                    <rect
                        x="64"
                        y="190"
                        rx="12"
                        ry="12"
                        width="36"
                        height="38"
                        fill="url(#metalGradient)"
                    />
                    <rect
                        x="124"
                        y="190"
                        rx="12"
                        ry="12"
                        width="36"
                        height="38"
                        fill="url(#metalGradient)"
                    />

                    {/* Body */}
                    <rect
                        x="0"
                        y="40"
                        rx="24"
                        ry="24"
                        width="200"
                        height="170"
                        fill="url(#bodyGradient)"
                        stroke="#5C6BC0"
                        strokeWidth="2"
                    />

                    {/* Screen Area */}
                    <g clipPath="url(#screenClip)">
                        <rect
                            x="26"
                            y="76"
                            rx="12"
                            ry="12"
                            width="148"
                            height="110"
                            fill="url(#screenGradient)"
                        />
                        <rect
                            x="26"
                            y="70"
                            width="148"
                            height="20"
                            fill="url(#metalGradient)"
                            opacity="0.1"
                        >
                            <animate
                                attributeName="y"
                                values="60; 200; 60"
                                dur="5s"
                                repeatCount="indefinite"
                            />
                        </rect>
                        {/* Screen Detail Lines */}
                        <rect
                            x="40"
                            y="140"
                            width="40"
                            height="4"
                            rx="2"
                            fill="#4FC3F7"
                            opacity="0.5"
                        />
                        <rect
                            x="40"
                            y="150"
                            width="80"
                            height="4"
                            rx="2"
                            fill="#4FC3F7"
                            opacity="0.3"
                        />
                    </g>

                    {/* Chest Buttons */}
                    <g transform="translate(40,40)" filter="url(#glow)">
                        <circle cx="0" cy="0" r="5" fill="#FFD700">
                            <animate
                                attributeName="opacity"
                                values="1;0.5;1"
                                dur="2s"
                                repeatCount="indefinite"
                            />
                        </circle>
                        <circle cx="28" cy="0" r="5" fill="#00E676">
                            <animate
                                attributeName="opacity"
                                values="1;0.5;1"
                                dur="2s"
                                begin="0.5s"
                                repeatCount="indefinite"
                            />
                        </circle>
                        <circle cx="56" cy="0" r="5" fill="#FF4081">
                            <animate
                                attributeName="opacity"
                                values="1;0.5;1"
                                dur="2s"
                                begin="1s"
                                repeatCount="indefinite"
                            />
                        </circle>
                    </g>

                    {/* Shoulders */}
                    <g transform="translate(-18, 90)">
                        <rect
                            x="0"
                            y="0"
                            rx="10"
                            ry="10"
                            width="36"
                            height="12"
                            fill="url(#metalGradient)"
                        >
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                values="-10 36 6; 10 36 6; -10 36 6"
                                dur="6s"
                                repeatCount="indefinite"
                                calcMode="spline"
                                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
                            />
                        </rect>
                    </g>
                    <g transform="translate(182, 90)">
                        <rect
                            x="0"
                            y="0"
                            rx="10"
                            ry="10"
                            width="36"
                            height="12"
                            fill="url(#metalGradient)"
                        >
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                values="10 0 6; -10 0 6; 10 0 6"
                                dur="6s"
                                repeatCount="indefinite"
                                calcMode="spline"
                                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
                            />
                        </rect>
                    </g>

                    {/* HEAD GROUP */}
                    <g>
                        {/* Head Back */}
                        <rect
                            x="52"
                            y="-26"
                            rx="20"
                            ry="20"
                            width="96"
                            height="64"
                            fill="url(#metalGradient)"
                        />

                        {/* Face Plate */}
                        <rect
                            x="68"
                            y="-6"
                            width="64"
                            height="32"
                            rx="10"
                            fill="#141625"
                        />

                        {/* Antenna (Previously clipping at top) */}
                        <g transform="translate(100, -26)">
                            <g>
                                <line
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="-20"
                                    stroke="#A0A7C2"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                                <circle cx="0" cy="-24" r="6" fill="#FF4081" filter="url(#glow)">
                                    <animate
                                        attributeName="fill"
                                        values="#FF4081;#FF80AB;#FF4081"
                                        dur="1s"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    values="0 0 0; 5 0 0; 0 0 0; -5 0 0; 0 0 0"
                                    dur="5s"
                                    repeatCount="indefinite"
                                    keyTimes="0; 0.1; 0.2; 0.3; 1"
                                />
                            </g>
                        </g>

                        {/* Eyes */}
                        <g filter="url(#glow)">
                            <circle cx="88" cy="10" r="6" fill="#00E5FF">
                                <animate
                                    attributeName="ry"
                                    values="6; 0.1; 6"
                                    dur="4s"
                                    begin="0s"
                                    repeatCount="indefinite"
                                    keyTimes="0; 0.05; 0.1"
                                />
                            </circle>
                            <circle cx="112" cy="10" r="6" fill="#00E5FF">
                                <animate
                                    attributeName="ry"
                                    values="6; 0.1; 6"
                                    dur="4s"
                                    begin="0s"
                                    repeatCount="indefinite"
                                    keyTimes="0; 0.05; 0.1"
                                />
                            </circle>
                        </g>

                        {/* Mouth */}
                        <path
                            d="M88 24 q12 6 24 0"
                            fill="none"
                            stroke="#00E5FF"
                            strokeLinecap="round"
                            strokeWidth="2"
                            opacity="0.8"
                            filter="url(#glow)"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
}