import { useState } from "react";
import Home from "./home/Home";

export default function App() {
  const [pointerShadowPosition, setPointerShadowPosition] = useState({ left: 0, top: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const shadow = document.getElementById("pointer-shadow") as HTMLDivElement;
    const { height, width } = shadow.getBoundingClientRect();

    setPointerShadowPosition({ left: clientX - width / 2, top: clientY - height / 2 });
  };

  return (
    <main style={{ cursor: "none" }} onMouseMove={handleMouseMove}>
      <Home />
      <div id="pointer-shadow" style={{ ...pointerShadowPosition }}></div>
    </main>
  );
}
