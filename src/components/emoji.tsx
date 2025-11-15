export default function Emoji() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 260 320"
        width="85"
        height="85"
      >
        <style>{`
          .robot, .robot * { transform-box: fill-box; transform-origin: 50% 50%; }
          svg { cursor: pointer; }

          /* --- IDLE FLOAT --- */
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          .robot {
            animation: float 4s ease-in-out infinite;
            transition: transform .25s cubic-bezier(.25, .9, .25, 1);
          }

          /* --- HOVER TILT --- */
          svg:hover .robot {
            transform: rotate(-4deg) scale(1.04);
          }

          /* --- TAP BOUNCE --- */
          svg:active .robot {
            transform: translateY(-18px) scale(1.08);
          }

          /* --- HEAD TILT ON HOVER --- */
          @keyframes headTilt {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(6deg); }
            100% { transform: rotate(0deg); }
          }
          svg:hover .head {
            animation: headTilt 1.2s ease-in-out infinite;
          }

          /* --- EYE BLINK --- */
          @keyframes blink {
            0%, 92% { transform: scaleY(1); }
            94% { transform: scaleY(0.1); }
            96%, 100% { transform: scaleY(1); }
          }
          .eye {
            animation: blink 5s infinite;
          }

          /* --- EYE SPARK WHEN TAPPED --- */
          @keyframes eyeSpark {
            0% { r: 8; }
            50% { r: 11; }
            100% { r: 8; }
          }
          svg:active .eye {
            animation: eyeSpark 0.25s ease-out;
          }

          /* --- ARM ENERGY WAVE --- */
          @keyframes wave {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(-16deg); }
            100% { transform: rotate(0deg); }
          }
          .arm-right {
            transform-origin: top center;
            animation: wave 3s ease-in-out infinite;
          }

          /* --- LEFT ARM MINI WAVE --- */
          @keyframes leftWave {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(10deg); }
            100% { transform: rotate(0deg); }
          }
          .arm-left {
            transform-origin: top center;
            animation: leftWave 4s ease-in-out infinite;
          }

          /* --- BODY BREATHING --- */
          @keyframes breathe {
            0% { transform: scaleY(1); }
            50% { transform: scaleY(1.05); }
            100% { transform: scaleY(1); }
          }
          .body {
            animation: breathe 4.2s ease-in-out infinite;
          }

          /* --- SHADOW --- */
          .shadow {
            opacity: .22;
            filter: blur(4px);
          }

          /* --- ANTENNA BLINK --- */
          @keyframes antennaBlink {
            0%, 80% { opacity: 0; }
            85% { opacity: 1; }
            100% { opacity: 0; }
          }
          .antenna-light {
            animation: antennaBlink 2.4s infinite;
          }
        `}</style>

        {/* SHADOW */}
        <ellipse className="shadow" cx="130" cy="295" rx="60" ry="12" fill="#000" />

        <g className="robot">

          {/* ANTENNA */}
          <circle cx="130" cy="28" r="7" fill="#ff4d4d" className="antenna-light" />
          <rect x="125" y="28" width="10" height="18" rx="4" fill="#303030" />

          {/* BODY */}
          <g className="body">
            <rect
              x="60"
              y="120"
              width="140"
              height="120"
              rx="20"
              fill="#323232"
              stroke="#4b4b4b"
              strokeWidth="4"
            />
          </g>

          {/* HEAD */}
          <g className="head">
            <rect
              x="68"
              y="40"
              width="124"
              height="96"
              rx="18"
              fill="#2b2b2b"
              stroke="#505050"
              strokeWidth="4"
            />

            <rect
              x="84"
              y="60"
              width="92"
              height="56"
              rx="10"
              fill="#0c0c0c"
              opacity="0.55"
            />

            <g fill="white">
              <circle className="eye" cx="112" cy="88" r="8" />
              <circle className="eye" cx="148" cy="88" r="8" />
            </g>

            <path
              d="M112 108 q18 14 36 0"
              stroke="#fff"
              strokeWidth="3"
              fill="none"
              opacity="0.4"
              strokeLinecap="round"
            />
          </g>

          {/* ARMS */}
          <g fill="#3b3b3b">
            <g className="arm-left">
              <rect x="36" y="138" width="32" height="18" rx="8" />
              <rect x="36" y="156" width="18" height="40" rx="8" fill="#2d2d2d" />
            </g>

            <g className="arm-right">
              <rect x="192" y="138" width="32" height="18" rx="8" />
              <rect x="206" y="156" width="18" height="40" rx="8" fill="#2d2d2d" />
            </g>
          </g>

          {/* LEGS */}
          <g fill="#2b2b2b">
            <rect x="92" y="230" width="32" height="52" rx="8" />
            <rect x="136" y="230" width="32" height="52" rx="8" />
          </g>
        </g>
      </svg>
    </div>
  );
}
