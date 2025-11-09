"use client";

type BobHelloProps = {
  className?: string;          // optional wrapper class
  bubble?: boolean;            // show speech bubble
};

export default function BobHello({ className = "", bubble = true }: BobHelloProps) {
  return (
    <div className={`relative inline-block select-none ${className}`} aria-label="Bob the dog waving hello">
      {/* Bob (inline SVG so it's crisp + easy to animate) */}
      <svg
        width="70"
        height="70"
        viewBox="0 0 220 280"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="bobTitle bobDesc"
      >
        <title id="bobTitle">Bob the dog</title>
        <desc id="bobDesc">Cute upright dog with brown ears waving its right paw.</desc>

        <ellipse cx="110" cy="262" rx="58" ry="12" fill="rgba(0,0,0,.18)"/>

        <g id="bob-body" stroke="#151515" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
          <path d="M165 210 q35 15 0 40 q10-18 0-40" fill="#9b6a3b"/>
        
          <path d="M70 125 q-18 22 -18 65 q0 68 58 68 q58 0 58-68 q0-43 -18-65 z" fill="#FFF7EA"/>
          
          <path d="M60 86 q0-40 50-40 q50 0 50 40 q0 40-50 40 q-50 0-50-40z" fill="#FFF7EA"/>
          
          <path d="M76 75 q-28 16 -22 44 q24 10 36-6 q3-22 -14-38z" fill="#9b6a3b"/>
          
          <path d="M144 75 q28 16 22 44 q-24 10 -36-6 q-3-22 14-38z" fill="#9b6a3b"/>

        
          <circle cx="96" cy="92" r="5" fill="#151515"/>
          <circle cx="124" cy="92" r="5" fill="#151515"/>
          <path d="M101 111 q9 9 18 0" fill="none"/>
          <path d="M102 106 q10 10 26 0 q-5 16 -13 16 q-8 0 -13-16z" fill="#ff7f66"/>

    
          <path d="M70 150 q-28 18 -28 40 q14 10 30-4 q2-20 -2-36z" fill="#FFF7EA"/>
        
          <path d="M92 256 v-44" />
          <path d="M128 256 v-44" />
          <path d="M78 262 q26 10 28 0" />
          <path d="M114 262 q26 10 28 0" />
        </g>


        <g id="bob-arm" transform-origin="148px 140px" stroke="#151515" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">

          <path d="M142 146 q24 -16 34 0" fill="#FFF7EA"/>

          <path d="M173 146 q22 10 20 30 q-18 14 -30 -2 q0 -16 10 -28z" fill="#FFF7EA"/>
    
          <path d="M190 173 q10 4 9 12"/>
          <path d="M184 176 q8 6 6 14"/>
          <path d="M178 176 q6 8 3 14"/>
        </g>

        {bubble ? (
          <g id="bubble" transform="translate(8,6)">
            <path d="M10 18 q0-14 14-14 h96 q14 0 14 14 v36 q0 14-14 14 h-62 l-18 12 4-12 h-20 q-14 0-14-14z"
                  fill="#fff" stroke="#151515" stroke-width="6" />
            <text x="22" y="42" fontFamily="Inter, ui-sans-serif, system-ui" fontSize="20" fontWeight="700" fill="#151515">
              Hi! I&apos;m Bob
            </text>
          </g>
        ) : null}
      </svg>
    </div>
  );
}
