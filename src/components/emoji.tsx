export default function Emoji() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 260 320"
        width="75"
        height="75"
      >
        <style>{`
          .robot, .robot * { transform-box: fill-box; transform-origin: 50% 50%; }

          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
            100% { transform: translateY(0); }
          }
          .robot {
            animation: float 3.8s ease-in-out infinite;
            cursor: pointer;
            transition: transform .15s ease;
          }
          .robot:active {
            transform: translateY(-16px) scale(1.03);
          }

          @keyframes blink {
            0%, 92% { transform: scaleY(1); }
            94% { transform: scaleY(0.1); }
            96%, 100% { transform: scaleY(1); }
          }
          .eye {
            animation: blink 5s infinite;
          }

          @keyframes wave {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(-18deg); }
            100% { transform: rotate(0deg); }
          }
          .arm-right {
            transform-origin: top center;
            animation: wave 3.2s ease-in-out infinite;
          }

          @keyframes tilt {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(4deg); }
            100% { transform: rotate(0deg); }
          }
          .head {
            transform-origin: center bottom;
            animation: tilt 4.2s ease-in-out infinite;
          }

          @keyframes breathe {
            0% { transform: scaleY(1); }
            50% { transform: scaleY(1.04); }
            100% { transform: scaleY(1); }
          }
          .body {
            animation: breathe 4.5s ease-in-out infinite;
          }

          .shadow {
            opacity: .22;
            filter: blur(3px);
          }
        `}</style>

        <ellipse className="shadow" cx="130" cy="295" rx="60" ry="12" fill="#000" />

        <g className="robot">
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

          <g fill="#3b3b3b">
            <rect className="arm-left" x="36" y="138" width="32" height="18" rx="8" />
            <rect x="36" y="156" width="18" height="40" rx="8" fill="#2d2d2d" />

            <g className="arm-right">
              <rect x="192" y="138" width="32" height="18" rx="8" />
              <rect x="206" y="156" width="18" height="40" rx="8" fill="#2d2d2d" />
            </g>
          </g>

          <g fill="#2b2b2b">
            <rect x="92" y="230" width="32" height="52" rx="8" />
            <rect x="136" y="230" width="32" height="52" rx="8" />
          </g>
        </g>
      </svg>
    </div>
  );
}
