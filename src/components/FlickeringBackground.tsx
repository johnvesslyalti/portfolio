"use client";

import { useEffect, useState } from "react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export default function FlickeringBackground() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const update = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!size.width || !size.height) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none">
      <FlickeringGrid
        width={size.width}
        height={size.height}
        className="w-full h-full"
        squareSize={24}
        gridGap={2}
        flickerChance={0.035}
        color="#c084fc"
        maxOpacity={0.12}
      />
    </div>
  );
}