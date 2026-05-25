import DogScratch from "./dog-scratch";

const NODE_COUNT = 8;
const RADIUS = 42;
const CENTER = 52;

const nodes = Array.from({ length: NODE_COUNT }, (_, i) => {
  const angle = (i * 2 * Math.PI) / NODE_COUNT - Math.PI / 2;
  return {
    x: CENTER + RADIUS * Math.cos(angle),
    y: CENTER + RADIUS * Math.sin(angle),
    delay: i * 0.38,
  };
});

// sparse connections between non-adjacent nodes for a neural-net look
const connections = [
  [0, 3], [1, 5], [2, 6], [3, 7], [4, 1], [5, 0], [6, 2],
];

export default function DogAIWidget() {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 104, height: 104 }}>

      {/* Pulsing rings */}
      <span
        className="absolute inset-0 rounded-full"
        style={{
          border: "1px solid rgba(0,212,255,0.3)",
          animation: "ai-ring 2.6s ease-out infinite",
        }}
      />
      <span
        className="absolute inset-0 rounded-full"
        style={{
          border: "1px solid rgba(0,212,255,0.18)",
          animation: "ai-ring 2.6s ease-out 0.9s infinite",
        }}
      />

      {/* Neural network SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${CENTER * 2} ${CENTER * 2}`}
        fill="none"
      >
        {/* Outer orbit ring */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          stroke="rgba(0,212,255,0.08)"
          strokeWidth="0.5"
        />

        {/* Cross connections */}
        {connections.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x} y1={nodes[a].y}
            x2={nodes[b].x} y2={nodes[b].y}
            stroke="rgba(0,212,255,0.13)"
            strokeWidth="0.5"
          />
        ))}

        {/* Spoke lines to center */}
        {nodes.map((n, i) => (
          <line
            key={i}
            x1={n.x} y1={n.y}
            x2={CENTER} y2={CENTER}
            stroke="rgba(0,212,255,0.09)"
            strokeWidth="0.4"
          />
        ))}

        {/* Orbit nodes */}
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r="2"
            fill="rgba(0,212,255,0.75)"
            style={{
              animation: `ai-node-pulse 3s ease-in-out ${n.delay}s infinite`,
            }}
          />
        ))}

        {/* Center hub */}
        <circle cx={CENTER} cy={CENTER} r="3.5" fill="rgba(0,212,255,0.18)" />
        <circle cx={CENTER} cy={CENTER} r="1.5" fill="rgba(0,212,255,0.5)" />
      </svg>

      {/* Rotating scanner arc (outer) */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${CENTER * 2} ${CENTER * 2}`}
        fill="none"
        style={{
          animation: "ai-rotate 5s linear infinite",
          transformOrigin: "50% 50%",
        }}
      >
        <path
          d={`M ${CENTER} ${CENTER - RADIUS} A ${RADIUS} ${RADIUS} 0 0 1 ${
            CENTER + RADIUS * Math.cos(Math.PI / 3 - Math.PI / 2)
          } ${CENTER + RADIUS * Math.sin(Math.PI / 3 - Math.PI / 2)}`}
          stroke="rgba(0,212,255,0.55)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>

      {/* Rotating inner dashed ring */}
      <svg
        className="absolute"
        style={{
          inset: 16,
          width: "calc(100% - 32px)",
          height: "calc(100% - 32px)",
          animation: "ai-rotate-reverse 8s linear infinite",
          transformOrigin: "50% 50%",
        }}
        viewBox="0 0 72 72"
        fill="none"
      >
        <circle
          cx="36" cy="36" r="34"
          stroke="rgba(0,212,255,0.18)"
          strokeWidth="0.6"
          strokeDasharray="4 6"
        />
      </svg>

      {/* Dog glass circle */}
      <div
        className="relative z-10 flex items-center justify-center rounded-full ai-glow"
        style={{
          width: 60,
          height: 60,
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(14px)",
          border: "1.5px solid rgba(0,212,255,0.45)",
        }}
      >
        <DogScratch />
      </div>

    </div>
  );
}
