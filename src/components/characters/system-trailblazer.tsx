export default function SystemTrailblazer() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="180 180 440 440"
            width="120"
            height="120"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            style={{ background: 'transparent', overflow: 'visible' }}
        >
            <title>system-trailblazer</title>

            <defs>
                {/* FILTERS */}
                <filter id="hyperGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feColorMatrix
                        in="blur"
                        type="matrix"
                        values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"
                        result="goo"
                    />
                    <feComposite in="SourceGraphic" in2="goo" operator="over" />
                    <feGaussianBlur stdDeviation="2" result="softGlow" />
                    <feMerge>
                        <feMergeNode in="softGlow" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* GRADIENTS */}
                <linearGradient id="armorDark" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e1b4b" />
                    <stop offset="100%" stopColor="#020617" />
                </linearGradient>

                <linearGradient id="cloakGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4c1d95" />
                    <stop offset="100%" stopColor="#2e1065" />
                </linearGradient>

                <linearGradient id="energyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d946ef" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>

                <linearGradient id="swordPlasma" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#e879f9" />
                    <stop offset="40%" stopColor="#ffffff" />
                    <stop offset="60%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
            </defs>

            {/* MAIN GROUP */}
            <g transform="translate(400, 350)">

                {/* BACKGROUND EFFECT */}
                <g transform="scale(1, 0.4) translate(0, 300)">
                    <ellipse cx="0" cy="0" rx="180" ry="180" fill="none" stroke="#8b5cf6" strokeWidth="2" opacity="0">
                        <animate attributeName="rx" values="50; 250" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="ry" values="50; 250" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.8; 0" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="stroke-width" values="4; 0" dur="1.5s" repeatCount="indefinite" />
                    </ellipse>
                </g>

                {/* CHARACTER */}
                <g>
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        values="0,0; 0,-8; 0,0"
                        dur="3s"
                        repeatCount="indefinite"
                    />

                    {/* CLOAK — Refined */}
                    <path
                        d="M-40 -60 C -100 -40, -180 20, -200 100 
                           L -160 90 C -150 120, -130 150, -170 190
                           L -130 170 C -80 200, -20 180, 20 150 
                           L -20 -40 Z"
                        fill="url(#cloakGrad)"
                        opacity="0.9"
                    >
                        <animate
                            attributeName="d"
                            dur="2.2s"
                            repeatCount="indefinite"
                            values="
                                M-40 -60 C -100 -40, -180 20, -200 100 
                                L -160 90 C -150 120, -130 150, -170 190
                                L -130 170 C -80 200, -20 180, 20 150 
                                L -20 -40 Z;

                                M-40 -60 C -90 -50, -170 10, -210 90 
                                L -170 80 C -150 110, -140 140, -190 170
                                L -140 150 C -100 190, -40 170, 10 140 
                                L -20 -40 Z;

                                M-40 -60 C -100 -40, -180 20, -200 100 
                                L -160 90 C -150 120, -130 150, -170 190
                                L -130 170 C -80 200, -20 180, 20 150 
                                L -20 -40 Z
                            "
                        />
                    </path>

                    {/* LEGS — Fully upgraded */}
                    {/* Right Leg (Back) */}
                    <g transform="translate(35, 75)">
                        <path
                            d="M0 -20 C 25 0, 40 35, 35 70 L 10 90 L -10 45 Z"
                            fill="url(#armorDark)"
                            stroke="#1e1b4b"
                            strokeWidth="1.6"
                        />
                        <path
                            d="M10 90 C 5 110, 0 140, 20 165 L 55 170 L 65 135 L 35 85 Z"
                            fill="url(#armorDark)"
                            stroke="#312e81"
                            strokeWidth="1.6"
                        />
                        <path
                            d="M15 165 L 65 165 L 80 180 L 20 180 Z"
                            fill="#0f172a"
                            stroke="#1e1b4b"
                            strokeWidth="2"
                        />
                    </g>

                    {/* Left Leg (Front) */}
                    <g transform="translate(-40, 75)">
                        <path
                            d="M-5 -20 C -30 0, -50 35, -40 70 L -10 95 L 25 55 Z"
                            fill="url(#armorDark)"
                            stroke="#312e81"
                            strokeWidth="1.6"
                        />
                        <path
                            d="M-40 70 C -55 95, -60 130, -35 160 L 15 170 L 40 125 L 10 75 Z"
                            fill="url(#armorDark)"
                            stroke="#312e81"
                            strokeWidth="1.6"
                        />
                        <path
                            d="M-20 160 L -70 170 L -40 185 L 25 180 L 40 160 L 0 150 Z"
                            fill="#020617"
                            stroke="#1e1b4b"
                            strokeWidth="2"
                        />
                        <path
                            d="M-25 60 L -35 120"
                            stroke="#d946ef"
                            strokeWidth="3"
                            strokeLinecap="round"
                            opacity="0.7"
                            filter="url(#hyperGlow)"
                        />
                    </g>

                    {/* TORSO */}
                    <path
                        d="M-40 -20 L40 -20 L25 80 L-25 80 Z"
                        fill="url(#armorDark)"
                        stroke="#312e81"
                        strokeWidth="1.4"
                    />

                    <path
                        d="M-18 10 L18 10 M-12 28 L12 28 M-5 45 L5 45"
                        stroke="#d946ef"
                        strokeWidth="2"
                        opacity="0.65"
                        filter="url(#hyperGlow)"
                    />

                    {/* HEAD — Cleaner shape */}
                    <g transform="translate(0, -50)">
                        <path
                            d="M-32 -28 C -32 -50, 32 -50, 32 -28 
                               L 36 18 L 0 38 L -36 18 Z"
                            fill="#172554"
                        />
                        <path d="M-20 -10 L20 -10 L15 28 L-15 28 Z" fill="#000" />
                        <path d="M-12 4 L12 4 L10 12 L-10 12 Z" fill="#fff" filter="url(#hyperGlow)" />
                        <path
                            d="M15 4 L60 -20 L15 12"
                            fill="url(#energyGrad)"
                            opacity="0.6"
                            filter="url(#hyperGlow)"
                        >
                            <animate
                                attributeName="d"
                                values="M15 4 L60 -20 L15 12; M15 4 L65 -25 L15 12; M15 4 L60 -20 L15 12"
                                dur="0.25s"
                                repeatCount="indefinite"
                            />
                        </path>
                    </g>

                    {/* ARMS */}
                    <path
                        d="M-40 -20 L-75 20 L-55 65"
                        stroke="#1e1b4b"
                        strokeWidth="18"
                        strokeLinecap="round"
                        fill="none"
                    />

                    <g transform="translate(40, -10)">
                        <path
                            d="M0 0 L32 32 L22 65"
                            stroke="#1e1b4b"
                            strokeWidth="16"
                            strokeLinecap="round"
                            fill="none"
                        />
                        <rect x="12" y="55" width="22" height="26" fill="#312e81" rx="4" />

                        <g transform="translate(22, 75) rotate(-140)">
                            <rect x="-5" y="-20" width="10" height="40" fill="#000" stroke="#4c1d95" />
                            <rect x="-15" y="20" width="30" height="5" fill="#4c1d95" />

                            {/* Sword Blade */}
                            <path
                                d="M-4 25 L-4 185 L0 200 L4 185 L4 25 Z"
                                fill="url(#swordPlasma)"
                                filter="url(#hyperGlow)"
                            >
                                <animate
                                    attributeName="opacity"
                                    values="0.8; 1; 0.8"
                                    dur="0.5s"
                                    repeatCount="indefinite"
                                />
                            </path>

                            <rect x="-10" y="100" width="2" height="2" fill="#fff">
                                <animate attributeName="y" values="100; 220" dur="1s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="1; 0" dur="1s" repeatCount="indefinite" />
                            </rect>
                        </g>
                    </g>

                    {/* SCARF */}
                    <path
                        d="M-20 -30 Q 20 -20, 60 -40 T 140 -50"
                        fill="none"
                        stroke="#d946ef"
                        strokeWidth="4"
                        strokeLinecap="round"
                        filter="url(#hyperGlow)"
                    >
                        <animate
                            attributeName="d"
                            dur="3s"
                            repeatCount="indefinite"
                            values="
                                M-20 -30 Q 20 -20, 60 -40 T 140 -50;
                                M-20 -30 Q 20 -10, 60 -60 T 140 -30;
                                M-20 -30 Q 20 -20, 60 -40 T 140 -50
                            "
                        />
                    </path>
                </g>
            </g>
        </svg>
    );
}
