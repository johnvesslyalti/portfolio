export default function SynthSquirrel() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 400 400"
            fill="none"
            role="img"
            aria-labelledby="squirrelTitle squirrelDesc"
        >
            <title id="squirrelTitle">SynthSquirrel</title>
            <desc id="squirrelDesc">
                A futuristic orange squirrel wearing a blue digital visor and holding a floating holographic acorn.
            </desc>
            <defs>
                <linearGradient
                    id="furGradient"
                    x1={0}
                    y1={0}
                    x2={0}
                    y2={400}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF9F43" />
                    <stop offset={1} stopColor="#EE5A24" />
                </linearGradient>
                <linearGradient
                    id="tailGradient"
                    x1={50}
                    y1={100}
                    x2={350}
                    y2={300}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFC312" />
                    <stop offset={1} stopColor="#F79F1F" />
                </linearGradient>
                <linearGradient
                    id="visorGradient"
                    x1={0}
                    y1={0}
                    x2={400}
                    y2={0}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#1289A7" />
                    <stop offset={1} stopColor="#0652DD" />
                </linearGradient>
                <linearGradient
                    id="acornGradient"
                    x1={0}
                    y1={0}
                    x2={0}
                    y2={1}
                    gradientTransform="rotate(45)"
                >
                    <stop stopColor="#00E1FF" />
                    <stop offset={1} stopColor="#008CFF" />
                </linearGradient>
                <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation={5} />
                    <feOffset dx={0} dy={4} result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA type="linear" slope={0.2} />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            <g transform="translate(0, 0)">
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0,0; 0,-10; 0,0"
                    dur="4s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                />
                <path
                    d="M140 280 C 60 280, 40 160, 100 120 C 140 90, 220 60, 260 120 C 280 150, 260 190, 220 180"
                    stroke="url(#tailGradient)"
                    strokeWidth={45}
                    strokeLinecap="round"
                    fill="none"
                    filter="url(#softShadow)"
                />
                <path
                    d="M140 320 L 260 320 C 280 320, 290 280, 280 240 L 120 240 C 110 280, 120 320, 140 320 Z"
                    fill="url(#furGradient)"
                    filter="url(#softShadow)"
                />
                <ellipse cx={200} cy={280} rx={50} ry={35} fill="#FFF" opacity={0.8} />
                <g transform="translate(200, 190)">
                    <path d="M-50 -40 L -70 -90 L -20 -60 Z" fill="url(#furGradient)" />
                    <path d="M50 -40 L 70 -90 L 20 -60 Z" fill="url(#furGradient)" />
                    <rect
                        x={-70}
                        y={-60}
                        width={140}
                        height={110}
                        rx={45}
                        fill="url(#furGradient)"
                        filter="url(#softShadow)"
                    />
                    <rect x={-70} y={-20} width={140} height={40} rx={10} fill="#333" />
                    <rect
                        x={-65}
                        y={-15}
                        width={130}
                        height={30}
                        rx={8}
                        fill="url(#visorGradient)"
                        opacity={0.9}
                    />
                    <rect
                        x={-65}
                        y={-15}
                        width={130}
                        height={2}
                        fill="#00E1FF"
                        opacity={0.6}
                    >
                        <animate
                            attributeName="y"
                            values="-15; 10; -15"
                            dur="2s"
                            repeatCount="indefinite"
                        />
                    </rect>
                    <path d="M-10 40 Q 0 50, 10 40 L 0 48 Z" fill="#442211" />
                </g>
                <g transform="translate(260, 240)">
                    <circle cx={0} cy={20} r={15} fill="url(#furGradient)" />
                    <g>
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="0,0; 0,-5; 0,0"
                            dur="2s"
                            repeatCount="indefinite"
                        />
                        <g>
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 0 0"
                                to="360 0 0"
                                dur="6s"
                                repeatCount="indefinite"
                            />
                            <circle
                                cx={0}
                                cy={0}
                                r={22}
                                stroke="#00E1FF"
                                strokeWidth={2}
                                strokeDasharray="10 5"
                                fill="none"
                                opacity={0.6}
                            />
                            <path
                                d="M0 -15 L 12 -5 L 0 15 L -12 -5 Z"
                                fill="url(#acornGradient)"
                                stroke="#FFF"
                                strokeWidth={1}
                                opacity={0.9}
                            />
                        </g>
                    </g>
                </g>
                <circle cx={140} cy={260} r={15} fill="url(#furGradient)" />
            </g>
        </svg>
    );
}