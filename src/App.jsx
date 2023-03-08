import "./App.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls, Sparkles, Stats } from "@react-three/drei";

import Scene from "./components/Scene";
import Loader from "./components/Loader/Loader";
import Overlay from "./components/Overlay/Overlay";

function App() {
  return (
    <div className="App">
      <Canvas>
        <ScrollControls pages={7} damping={0.2}>
          <Scene />
          <Overlay />
        </ScrollControls>
        {/* <OrbitControls scale={false} enableZoom={true} /> */}
        <Sparkles
          count={200}
          scale={[10, 3, 10]}
          size={1}
          speed={0.4}
          position={[0, 1, 0]}
        />
      </Canvas>
      <Loader />
    </div>
  );
}

export default App;
