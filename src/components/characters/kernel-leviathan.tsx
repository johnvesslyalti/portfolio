import React from "react";

export default function KernelLeviathan() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="100 50 600 800"
            width="150"
            height="150"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            style={{
                background: 'transparent',
                display: 'block',
                margin: '0 auto',
                overflow: 'visible'
            }}
        >
            <title>Kernel Leviathan</title>

            <defs>
                {/* --- BLUR FOR NEON GLOWS --- */}
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

            <g transform="translate(400, 350)">
                {/* --- CHARACTER GROUP --- */}
                <g>
                    {/* Subtle Floating Animation */}
                    <animateTransform attributeName="transform" type="translate" values="0,0; 0,-10; 0,0" dur="6s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1; 0.45 0 0.55 1" />

                    {/* THRUSTER PLUMES */}
                    <g>
                        <path d="M-130 -100 L -150 -200 L -110 -200 Z" fill="url(#bubbleTrail)">
                            <animate attributeName="d" values="M-130 -100 L -150 -200 L -110 -200 Z; M-130 -100 L -160 -190 L -120 -210 Z; M-130 -100 L -150 -200 L -110 -200 Z" dur="0.2s" repeatCount="indefinite" />
                        </path>
                        <path d="M130 -100 L 110 -200 L 150 -200 Z" fill="url(#bubbleTrail)">
                            <animate attributeName="d" values="M130 -100 L 110 -200 L 150 -200 Z; M130 -100 L 100 -210 L 140 -190 Z; M130 -100 L 110 -200 L 150 -200 Z" dur="0.2s" begin="0.1s" repeatCount="indefinite" />
                        </path>
                    </g>

                    {/* MAIN CHARACTER BODY */}
                    <g>
                        <path d="M-90 -60 C -120 -40, -140 20, -110 100 L -80 140 L 80 140 L 110 100 C 140 20, 120 -40, 90 -60 L 50 -80 L -50 -80 Z" fill="url(#abyssMetal)" stroke="#1e293b" strokeWidth="2" />
                        <path d="M-60 -80 L 60 -80 L 70 0 L 40 80 L -40 80 L -70 0 Z" fill="url(#abyssMetal)" stroke="#334155" strokeWidth="1" />
                        <path d="M-70 0 L 70 0 M -40 80 L -40 0 M 40 80 L 40 0" fill="none" stroke="#0f172a" strokeWidth="1.5" />
                        <circle cx="0" cy="0" r="22" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                        <circle cx="0" cy="0" r="14" fill="#0ea5e9" filter="url(#waterBlur)">
                            <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
                        </circle>
                    </g>

                    {/* HELMET */}
                    <g transform="translate(0, -80)">
                        <path d="M-50 0 C -50 -60, 50 -60, 50 0 L 55 40 L -55 40 Z" fill="url(#abyssMetal)" stroke="#334155" strokeWidth="2" />
                        <path d="M-42 -2 L 42 -2 L 37 32 L -37 32 Z" fill="#1e293b" stroke="#334155" />
                        <path d="M-38 2 L 38 2 L 33 28 L -33 28 Z" fill="url(#sharpVisor)" />
                    </g>

                    {/* THRUSTER PACK */}
                    <g>
                        <path d="M-110 0 L -140 -50 L -120 -100 L -80 -30 Z" fill="url(#abyssMetal)" stroke="#334155" />
                        <path d="M110 0 L 140 -50 L 120 -100 L 80 -30 Z" fill="url(#abyssMetal)" stroke="#334155" />
                    </g>

                    {/* ARMS & TRIDENT */}
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

                    {/* LEGS & FINS */}
                    <g transform="translate(0, 140)">
                        <path d="M-60 0 L 60 0 L 40 40 L -40 40 Z" fill="url(#abyssMetal)" stroke="#334155" />
                        
                        {/* Left Leg */}
                        <g transform="translate(-50, 30) rotate(10)">
                            <path d="M-30 0 L 30 0 L 20 80 L -20 80 Z" fill="url(#abyssMetal)" stroke="#334155" />
                            <circle cx="0" cy="80" r="15" fill="#1e293b" stroke="#334155" />
                            <path d="M-25 90 L 25 90 L 15 180 L -15 180 Z" fill="url(#abyssMetal)" stroke="#334155" />
                            <path d="M-30 180 L 30 180 L 40 220 L -40 220 Z" fill="url(#abyssMetal)" stroke="#334155" />
                            <path d="M-40 220 L -80 280 L 0 260 Z" fill="url(#abyssMetal)" stroke="#334155" />
                        </g>

                        {/* Right Leg */}
                        <g transform="translate(50, 30) rotate(-5)">
                            <path d="M-30 0 L 30 0 L 20 80 L -20 80 Z" fill="url(#abyssMetal)" stroke="#334155" />
                            <circle cx="0" cy="80" r="15" fill="#1e293b" stroke="#334155" />
                            <path d="M-25 90 L 25 90 L 15 180 L -15 180 Z" fill="url(#abyssMetal)" stroke="#334155" />
                            <path d="M-30 180 L 30 180 L 40 220 L -40 220 Z" fill="url(#abyssMetal)" stroke="#334155" />
                            <path d="M40 220 L 80 280 L 0 260 Z" fill="url(#abyssMetal)" stroke="#334155" />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}