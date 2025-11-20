import React from 'react';

export default function CyberNinjaScene() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 320 320"
            role="img"
            aria-labelledby="sceneTitle sceneDesc"
            style={{ maxWidth: "320px", margin: "0 auto", display: "block" }}
        >
            <title id="sceneTitle">Cyber Human Ninja Scene</title>
            <desc id="sceneDesc">
                A futuristic, human-like ninja standing in front of a transparent cybernetic building.
            </desc>

            <defs>
                {/* --- SHARED FILTERS --- */}
                <filter id="sceneGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* --- NINJA GRADIENTS --- */}
                <linearGradient id="visorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#00e5ff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.2" />
                </linearGradient>

                <linearGradient id="suitGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1a202c" /> {/* Darker for flexible suit */}
                    <stop offset="50%" stopColor="#2d3748" />
                    <stop offset="100%" stopColor="#1a202c" />
                </linearGradient>

                <linearGradient id="accentGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4a5568" />
                    <stop offset="100%" stopColor="#2d3748" />
                </linearGradient>

                <linearGradient id="katanaGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#00e5ff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.2" />
                </linearGradient>

                {/* --- BUILDING GRADIENTS --- */}
                <linearGradient id="transparentPanel" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#00e5ff" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.1" />
                </linearGradient>

                <linearGradient id="neonLineGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.0" />
                    <stop offset="50%" stopColor="#00e5ff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.0" />
                </linearGradient>

                <linearGradient id="darkTransparent" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#101827" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#101827" stopOpacity="0.3" />
                </linearGradient>

                {/* --- BACKGROUND GRADIENT --- */}
                <linearGradient id="bgCyberGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.0" />
                    <stop offset="50%" stopColor="#00e5ff" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.0" />
                </linearGradient>
            </defs>

            {/* ========================================== */}
            {/* LAYER 1: BACKGROUND ENVIRONMENT */}
            {/* ========================================== */}
            <g opacity="0.4" filter="url(#sceneGlow)">
                {/* Holographic Grid */}
                <line x1="0" y1="200" x2="320" y2="200" stroke="#00e5ff" strokeWidth="0.5" opacity="0.1">
                    <animate attributeName="opacity" values="0.1;0.2;0.1" dur="4s" repeatCount="indefinite" />
                </line>
                <line x1="0" y1="250" x2="320" y2="250" stroke="#00e5ff" strokeWidth="0.5" opacity="0.1" begin="1s">
                    <animate attributeName="opacity" values="0.1;0.2;0.1" dur="4s" repeatCount="indefinite" />
                </line>
                <line x1="160" y1="0" x2="160" y2="320" stroke="#00e5ff" strokeWidth="0.5" opacity="0.1">
                    <animate attributeName="opacity" values="0.1;0.2;0.1" dur="4s" repeatCount="indefinite" />
                </line>

                {/* Floating Data Streams */}
                <path d="M10 30 C50 10, 100 50, 150 30" fill="none" stroke="url(#bgCyberGlow)" strokeWidth="1.5" strokeLinecap="round">
                    <animate attributeName="stroke-dasharray" from="0 100" to="100 0" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
                </path>
                <path d="M310 290 C270 310, 220 270, 170 290" fill="none" stroke="url(#bgCyberGlow)" strokeWidth="1.5" strokeLinecap="round" begin="1s">
                    <animate attributeName="stroke-dasharray" from="0 100" to="100 0" dur="3.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3.5s" repeatCount="indefinite" />
                </path>

                {/* Glitch Particles */}
                <rect x="50" y="80" width="8" height="4" fill="#00e5ff" opacity="0.1">
                    <animateTransform attributeName="transform" type="translate" values="0 0; 10 5; 0 0" dur="2s" repeatCount="indefinite" additive="sum" />
                    <animate attributeName="opacity" values="0.1;0.5;0.1" dur="1s" repeatCount="indefinite" />
                </rect>
            </g>

            {/* ========================================== */}
            {/* LAYER 2: CYBER NINJA BUILDING (BACK) */}
            <g filter="url(#sceneGlow)" transform="translate(-10, -20) scale(1.1)">

                {/* Foundation */}
                <rect x="50" y="220" width="220" height="50" fill="url(#darkTransparent)" />

                {/* Main Body */}
                <path d="M70 220 L70 100 L160 50 L250 100 L250 220 Z" fill="url(#transparentPanel)" stroke="#00e5ff" strokeWidth="1" opacity="0.8" />
                <path d="M80 210 L80 110 L160 65 L240 110 L240 210 Z" fill="url(#transparentPanel)" stroke="#00e5ff" strokeWidth="0.5" opacity="0.6" />
                <path d="M90 200 L90 120 L160 80 L230 120 L230 200 Z" fill="url(#transparentPanel)" stroke="#00e5ff" strokeWidth="0.3" opacity="0.4" />

                {/* Roofline */}
                <path d="M160 50 L140 30 L160 10 L180 30 Z" fill="#00e5ff" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;0.9;0.7" dur="3s" repeatCount="indefinite" />
                </path>

                {/* Glowing Accents */}
                <rect x="158" y="60" width="4" height="150" fill="url(#neonLineGlow)" opacity="0.8">
                    <animate attributeName="y" values="60; 100; 60" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="height" values="150; 110; 150" dur="4s" repeatCount="indefinite" />
                </rect>
                <line x1="100" y1="130" x2="100" y2="200" stroke="#00e5ff" strokeWidth="1.5" opacity="0.5">
                    <animate attributeName="stroke-dasharray" from="0 50" to="50 0" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="220" y1="130" x2="220" y2="200" stroke="#00e5ff" strokeWidth="1.5" opacity="0.5" begin="1s">
                    <animate attributeName="stroke-dasharray" from="0 50" to="50 0" dur="2s" repeatCount="indefinite" />
                </line>

                {/* Building Grid Overlay */}
                <rect x="70" y="100" width="180" height="120" fill="none" stroke="#00e5ff" strokeWidth="0.2" opacity="0.05">
                    <animateTransform attributeName="transform" type="translate" values="0 0; 2 1; 0 0" dur="10s" repeatCount="indefinite" additive="sum" />
                </rect>
            </g>

            {/* ========================================== */}
            {/* LAYER 3: CYBER HUMAN NINJA (FRONT) */}
            {/* ========================================== */}
            <g transform="translate(40, 40) scale(0.9)">
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="40,40; 40,38; 40,40"
                    dur="5s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                    additive="sum"
                />

                {/* Head - more rounded, human-like */}
                <circle cx="120" cy="95" r="30" fill="url(#suitGradient)" stroke="#222d3a" strokeWidth="2" />

                {/* Body - more defined torso and waist */}
                <path d="M100 125 A20 20 0 0 1 140 125 L140 180 A30 20 0 0 1 100 180 Z" fill="url(#suitGradient)" stroke="#222d3a" strokeWidth="2" /> {/* Torso */}
                <rect x="90" y="170" width="60" height="20" rx="10" fill="url(#accentGradient)" stroke="#222d3a" strokeWidth="1" /> {/* Waist/Belt */}

                {/* Legs - more cylindrical */}
                <rect x="100" y="190" width="20" height="50" rx="8" fill="url(#suitGradient)" stroke="#222d3a" strokeWidth="1" /> {/* Left Leg */}
                <rect x="120" y="190" width="20" height="50" rx="8" fill="url(#suitGradient)" stroke="#222d3a" strokeWidth="1" /> {/* Right Leg */}
                <rect x="100" y="235" width="40" height="15" rx="7" fill="url(#accentGradient)" stroke="#222d3a" strokeWidth="1" /> {/* Feet */}

                {/* Arms - more defined */}
                <rect x="70" y="130" width="20" height="40" rx="8" fill="url(#suitGradient)" stroke="#222d3a" strokeWidth="1" /> {/* Left Arm */}
                <rect x="150" y="130" width="20" height="40" rx="8" fill="url(#suitGradient)" stroke="#222d3a" strokeWidth="1" /> {/* Right Arm */}
                <circle cx="80" cy="175" r="8" fill="url(#accentGradient)" stroke="#222d3a" strokeWidth="1" /> {/* Left Hand/Glove */}
                <circle cx="160" cy="175" r="8" fill="url(#accentGradient)" stroke="#222d3a" strokeWidth="1" /> {/* Right Hand/Glove */}


                {/* Chest Plate - Glowing lines */}
                <g filter="url(#sceneGlow)">
                    <line x1="105" y1="140" x2="135" y2="140" stroke="#00e5ff" strokeWidth="2" opacity="0.6">
                        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                    </line>
                    <circle cx="120" cy="160" r="8" fill="#00e5ff" opacity="0.7">
                        <animate attributeName="r" values="8;10;8" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                </g>

                {/* Mask/Helmet - adjusted for human head shape */}
                <path d="M90 80 C90 60, 150 60, 150 80 L150 110 C150 120, 90 120, 90 110 Z" fill="url(#suitGradient)" stroke="#222d3a" strokeWidth="2" />

                {/* Visor - Scanning Effect */}
                <g filter="url(#sceneGlow)">
                    <rect x="95" y="90" width="50" height="12" rx="6" fill="#00aaff" />
                    <rect x="95" y="90" width="8" height="12" rx="4" fill="url(#visorGradient)">
                        <animate attributeName="x" values="95; 137; 95" dur="2s" repeatCount="indefinite" />
                    </rect>
                </g>

                {/* Dynamic Scarf */}
                <g filter="url(#sceneGlow)">
                    <path d="M150 120 q32 8 14 34 q-32 8 -44 6" fill="#EF476F" opacity="0.8">
                        <animateTransform attributeName="transform" type="translate" values="0,0; 5,-2; 0,0" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1; 0.45 0 0.55 1" />
                    </path>
                    <path d="M145 130 q28 6 12 30 q-28 6 -38 4" fill="#ff7f99" opacity="0.6" begin="0.5s">
                        <animateTransform attributeName="transform" type="translate" values="0,0; 4,-1; 0,0" dur="3.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1; 0.45 0 0.55 1" />
                    </path>
                </g>

                {/* Energy Katana */}
                <g transform="rotate(-18 70 170) translate(-30, 20)" filter="url(#sceneGlow)"> {/* Adjusted position and rotation origin */}
                    <rect x="12" y="140" width="8" height="92" rx="4" fill="url(#katanaGlow)" opacity="0.9">
                        <animate attributeName="opacity" values="0.9;1;0.9" dur="1.5s" repeatCount="indefinite" />
                    </rect>
                    <rect x="4" y="138" width="24" height="10" rx="5" fill="#111827" />
                </g>
            </g>
        </svg>
    );
}