export default function DogScratch() {
  return (
    <svg
      width="28"
      height="33"
      viewBox="0 0 62 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      {/* Wagging tail */}
      <g className="dog-tail">
        <path
          d="M 49 55 Q 58 46 54 37 Q 51 30 55 24"
          stroke="#c8a45c"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 49 55 Q 58 46 54 37 Q 51 30 55 24"
          stroke="#dbb975"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
      </g>

      {/* Left ear */}
      <ellipse cx="13" cy="19" rx="10" ry="14" fill="#c8a45c" transform="rotate(-20 13 19)" />
      <ellipse cx="13" cy="21" rx="6"  ry="9"  fill="#e8a090" transform="rotate(-20 13 19)" />

      {/* Right ear — wiggles during scratch */}
      <g className="dog-ear-right">
        <ellipse cx="49" cy="19" rx="10" ry="14" fill="#c8a45c" transform="rotate(20 49 19)" />
        <ellipse cx="49" cy="21" rx="6"  ry="9"  fill="#e8a090" transform="rotate(20 49 19)" />
      </g>

      {/* Head */}
      <circle cx="31" cy="26" r="19" fill="#dbb975" />

      {/* Muzzle */}
      <ellipse cx="31" cy="32" rx="10" ry="8" fill="#e8c882" />

      {/* Cheek blushes */}
      <ellipse cx="17" cy="30" rx="5" ry="3" fill="#f0a0a0" opacity="0.45" />
      <ellipse cx="45" cy="30" rx="5" ry="3" fill="#f0a0a0" opacity="0.45" />

      {/* Eyebrows */}
      <path d="M 20 18 Q 24 15.5 27 18" stroke="#9a7a3a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 35 18 Q 38 15.5 42 18" stroke="#9a7a3a" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Left eye — blinks */}
      <g className="dog-blink-left">
        <circle cx="24" cy="23" r="3.5" fill="#1a1a1a" />
        <circle cx="25" cy="21.5" r="1.2" fill="white" />
      </g>

      {/* Right eye — blinks */}
      <g className="dog-blink-right">
        <circle cx="38" cy="23" r="3.5" fill="#1a1a1a" />
        <circle cx="39" cy="21.5" r="1.2" fill="white" />
      </g>

      {/* Nose */}
      <ellipse cx="31" cy="29" rx="5" ry="3.5" fill="#2a1a1a" />
      <ellipse cx="29.5" cy="27.8" rx="1.5" ry="1" fill="#554" opacity="0.55" />

      {/* Mouth */}
      <line x1="31" y1="29" x2="31" y2="33" stroke="#9a6a4a" strokeWidth="1" strokeLinecap="round" />
      <path d="M 27 33 Q 31 37 35 33" stroke="#9a6a4a" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Tongue — appears during scratch */}
      <g className="dog-tongue">
        <ellipse cx="31" cy="37" rx="3.5" ry="4" fill="#e87090" />
        <path d="M 27.5 37 Q 31 41.5 34.5 37" stroke="#d06080" strokeWidth="1" fill="none" />
      </g>

      {/* Body */}
      <ellipse cx="31" cy="59" rx="19" ry="14" fill="#dbb975" />

      {/* Belly highlight */}
      <ellipse cx="31" cy="60" rx="11" ry="9" fill="#e8ca90" opacity="0.55" />

      {/* Left paw (static) */}
      <ellipse cx="18" cy="69" rx="7" ry="4.5" fill="#c8a45c" />
      <circle cx="15" cy="67.5" r="1.5" fill="#b09040" />
      <circle cx="18" cy="66.5" r="1.5" fill="#b09040" />
      <circle cx="21" cy="67.5" r="1.5" fill="#b09040" />

      {/* Right paw — scratching */}
      <g className="dog-scratch-paw">
        <ellipse cx="44" cy="69" rx="7" ry="4.5" fill="#c8a45c" />
        <circle cx="41" cy="67.5" r="1.5" fill="#b09040" />
        <circle cx="44" cy="66.5" r="1.5" fill="#b09040" />
        <circle cx="47" cy="67.5" r="1.5" fill="#b09040" />
      </g>
    </svg>
  );
}
