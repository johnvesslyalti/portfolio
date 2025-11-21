import React from "react";

export default function AbyssalVanguardFullBody() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            // Increased viewbox height to accommodate legs
            viewBox="100 50 600 800"
            width="120"
            height="160" // Adjusted height for aspect ratio
            preserveAspectRatio="xMidYMid meet"
            role="img"
            style={{
                background: 'transparent',
                display: 'block',
                margin: '0 auto',
                overflow: 'visible'
            }}
        >
            <title>The Abyssal Vanguard - Full Body Hydro Spec</title>

            <defs>
                {/* --- WATER FX FILTERS --- */}
                <filter id="causticLight">
                    <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise">
                        <animate attributeName="baseFrequency" values="0.05;0.06;0.05" dur="8s" repeatCount="indefinite" />
                    </feTurbulence>
                    <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.3 0" in="noise" result="coloredNoise" />
                    <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" />
                </filter>

                <filter id="waterBlur" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* --- GRADIENTS --- */}
                <linearGradient id="abyssMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="50%" stopColor="#0f172a" />
                    <stop offset="100%" stopColor="#020617" />
                </linearGradient>

                <linearGradient id="godRay" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#67e8f9" stopOpacity="0" />
                </linearGradient>

                <linearGradient id="bubbleTrail" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>

                <linearGradient id="cleanNeon" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#67e8f9" />
                </linearGradient>

                <linearGradient id="sharpVisor" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.9" />
                    <stop offset="45%" stopColor="#0284c7" stopOpacity="0.4" />
                    <stop offset="55%" stopColor="#0284c7" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.9" />
                </linearGradient>
            </defs>

            {/* =================================================
                GROUP: SCENE
               ================================================= */}
            <g transform="translate(400, 350)">

                {/* --- LAYER 1: VOLUMETRIC LIGHT RAYS --- */}
                <g transform="rotate(-15)">
                    <path d="M-300 -500 L -150 500 L -50 -500 Z" fill="url(#godRay)">
                        <animate attributeName="opacity" values="0.8; 1; 0.8" dur="6s" repeatCount="indefinite" />
                        <animateTransform attributeName="transform" type="translate" values="-10 0; 10 0; -10 0" dur="8s" repeatCount="indefinite" />
                    </path>
                    <path d="M-50 -500 L 100 500 L 150 -500 Z" fill="url(#godRay)">
                        <animate attributeName="opacity" values="0.6; 0.9; 0.6" dur="7s" begin="1s" repeatCount="indefinite" />
                    </path>
                    <path d="M150 -500 L 300 500 L 400 -500 Z" fill="url(#godRay)">
                        <animate attributeName="opacity" values="0.5; 0.8; 0.5" dur="5s" begin="0.5s" repeatCount="indefinite" />
                    </path>
                </g>

                {/* --- LAYER 2: THE CHARACTER (With Caustic Overlay) --- */}
                <g>
                    {/* Floating Animation */}
                    <animateTransform attributeName="transform" type="translate" values="0,0; 0,-10; 0,0" dur="6s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1; 0.45 0 0.55 1" />

                    {/* 2.1 THRUSTER PLUMES */}
                    <g>
                        <path d="M-130 -100 L -150 -200 L -110 -200 Z" fill="url(#bubbleTrail)">
                            <animate attributeName="d" values="M-130 -100 L -150 -200 L -110 -200 Z; M-130 -100 L -160 -190 L -120 -210 Z; M-130 -100 L -150 -200 L -110 -200 Z" dur="0.2s" repeatCount="indefinite" />
                        </path>
                        <path d="M130 -100 L 110 -200 L 150 -200 Z" fill="url(#bubbleTrail)">
                            <animate attributeName="d" values="M130 -100 L 110 -200 L 150 -200 Z; M130 -100 L 100 -210 L 140 -190 Z; M130 -100 L 110 -200 L 150 -200 Z" dur="0.2s" begin="0.1s" repeatCount="indefinite" />
                        </path>
                    </g>

                    {/* 2.2 MAIN CHARACTER BODY */}
                    <g>
                        <path d="M-90 -60 C -120 -40, -140 20, -110 100 L -80 140 L 80 140 L 110 100 C 140 20, 120 -40, 90 -60 L 50 -80 L -50 -80 Z" fill="url(#abyssMetal)" stroke="#1e293b" strokeWidth="2" />

                        {/* Caustic Light Overlay */}
                        <path d="M-90 -60 C -120 -40, -140 20, -110 100 L -80 140 L 80 140 L 110 100 C 140 20, 120 -40, 90 -60 L 50 -80 L -50 -80 Z" fill="#ccfbf1" filter="url(#causticLight)" opacity="0.3" style={{ mixBlendMode: "overlay" }} />

                        <path d="M-60 -80 L 60 -80 L 70 0 L 40 80 L -40 80 L -70 0 Z" fill="url(#abyssMetal)" stroke="#334155" strokeWidth="1" />
                        <path d="M-70 0 L 70 0 M -40 80 L -40 0 M 40 80 L 40 0" fill="none" stroke="#0f172a" strokeWidth="1.5" />

                        <circle cx="0" cy="0" r="22" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                        <circle cx="0" cy="0" r="14" fill="#0ea5e9" filter="url(#waterBlur)">
                            <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
                        </circle>
                    </g>

                    {/* 2.3 HELMET */}
                    <g transform="translate(0, -80)">
                        <path d="M-50 0 C -50 -60, 50 -60, 50 0 L 55 40 L -55 40 Z" fill="url(#abyssMetal)" stroke="#334155" strokeWidth="2" />
                        <path d="M-42 -2 L 42 -2 L 37 32 L -37 32 Z" fill="#1e293b" stroke="#334155" />
                        <path d="M-38 2 L 38 2 L 33 28 L -33 28 Z" fill="url(#sharpVisor)" />
                        <path d="M-55 35 L -55 50 L 55 50 L 55 35" fill="none" stroke="url(#abyssMetal)" strokeWidth="10" strokeLinecap="square" />
                    </g>

                    {/* 2.4 THRUSTER PACK */}
                    <g>
                        <path d="M-110 0 L -140 -50 L -120 -100 L -80 -30 Z" fill="url(#abyssMetal)" stroke="#334155" />
                        <path d="M110 0 L 140 -50 L 120 -100 L 80 -30 Z" fill="url(#abyssMetal)" stroke="#334155" />
                    </g>

                    {/* 2.5 ARMS & TRIDENT */}
                    <g transform="translate(110, 140) rotate(-15)">
                        <rect x="-18" y="-60" width="36" height="50" fill="url(#abyssMetal)" rx="4" stroke="#334155" />
                        <g transform="translate(0, -20)">
                            <rect x="-6" y="-140" width="12" height="200" fill="url(#abyssMetal)" stroke="#334155" />
                            <rect x="-4" y="-15" width="8" height="20" fill="url(#cleanNeon)" filter="url(#waterBlur)" />
                            <path d="M-15 -140 L 0 -180 L 15 -140 L 0 -120 Z" fill="url(#cleanNeon)" filter="url(#waterBlur)" stroke="#ccfbf1" strokeWidth="1" />
                            <path d="M-6 -140 L -25 -170 L -20 -175 L 0 -130" fill="#1e293b" stroke="#0ea5e9" strokeWidth="2" />
                            <path d="M6 -140 L 25 -170 L 20 -175 L 0 -130" fill="#1e293b" stroke="#0ea5e9" strokeWidth="2" />
                        </g>
                    </g>
                    <g transform="translate(-100, 130) rotate(20)">
                        <rect x="-18" y="-60" width="36" height="50" fill="url(#abyssMetal)" rx="4" stroke="#334155" />
                    </g>

                    {/* =================================================
                        NEW SECTION: LEGS & FINS
                       ================================================= */}
                    <g transform="translate(0, 140)">
                        {/* Hips/Pelvis Armor */}
                        <path d="M-60 0 L 60 0 L 40 40 L -40 40 Z" fill="url(#abyssMetal)" stroke="#334155" />
                        <circle cx="0" cy="20" r="10" fill="#1e293b" stroke="#334155" />

                        {/* Left Leg */}
                        <g transform="translate(-50, 30) rotate(10)">
                            {/* Thigh */}
                            <path d="M-30 0 L 30 0 L 20 80 L -20 80 Z" fill="url(#abyssMetal)" stroke="#334155" />
                            {/* Knee Joint */}
                            <circle cx="0" cy="80" r="15" fill="#1e293b" stroke="#334155" />
                            <circle cx="0" cy="80" r="8" fill="#0ea5e9" filter="url(#waterBlur)" opacity="0.7" />
                            {/* Shin/Calf */}
                            <path d="M-25 90 L 25 90 L 15 180 L -15 180 Z" fill="url(#abyssMetal)" stroke="#334155" />
                            {/* Heavy Boot with Fin */}
                            <path d="M-30 180 L 30 180 L 40 220 L -40 220 Z" fill="url(#abyssMetal)" stroke="#334155" />
                            <path d="M-40 220 L -80 280 L 0 260 Z" fill="url(#abyssMetal)" stroke="#334155" opacity="0.8" /> {/* Fin Blade */}
                            <path d="M-30 220 L -60 270" stroke="#0ea5e9" strokeWidth="2" opacity="0.5" /> {/* Fin detail */}
                        </g>

                        {/* Right Leg */}
                        <g transform="translate(50, 30) rotate(-5)">
                            {/* Thigh */}
                            <path d="M-30 0 L 30 0 L 20 80 L -20 80 Z" fill="url(#abyssMetal)" stroke="#334155" />
                            {/* Knee Joint */}
                            <circle cx="0" cy="80" r="15" fill="#1e293b" stroke="#334155" />
                            <circle cx="0" cy="80" r="8" fill="#0ea5e9" filter="url(#waterBlur)" opacity="0.7" />
                            {/* Shin/Calf */}
                            <path d="M-25 90 L 25 90 L 15 180 L -15 180 Z" fill="url(#abyssMetal)" stroke="#334155" />
                            {/* Heavy Boot with Fin */}
                            <path d="M-30 180 L 30 180 L 40 220 L -40 220 Z" fill="url(#abyssMetal)" stroke="#334155" />
                            <path d="M40 220 L 80 280 L 0 260 Z" fill="url(#abyssMetal)" stroke="#334155" opacity="0.8" /> {/* Fin Blade */}
                            <path d="M30 220 L 60 270" stroke="#0ea5e9" strokeWidth="2" opacity="0.5" /> {/* Fin detail */}
                        </g>
                    </g>

                </g>

                {/* --- LAYER 3: FOREGROUND PARTICLES --- */}
                <g opacity="0.6">
                    <circle cx="-120" cy="200" r="1" fill="#fff">
                        <animate attributeName="cy" values="200; -300" dur="10s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="150" cy="300" r="1" fill="#fff">
                        <animate attributeName="cy" values="300; -400" dur="12s" repeatCount="indefinite" />
                    </circle>

                    {/* Larger foreground bubbles */}
                    <circle cx="-90" cy="400" r="4" fill="none" stroke="#fff" strokeWidth="1" opacity="0.3">
                        <animate attributeName="cy" values="400; -300" dur="5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.3; 0" dur="5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="110" cy="350" r="3" fill="none" stroke="#fff" strokeWidth="1" opacity="0.3">
                        <animate attributeName="cy" values="350; -350" dur="7s" begin="1s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.3; 0" dur="7s" begin="1s" repeatCount="indefinite" />
                    </circle>
                </g>

            </g>
        </svg>
    );
}