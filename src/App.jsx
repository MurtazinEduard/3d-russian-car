import "./App.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls, } from "@react-three/drei";

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
      </Canvas>
      <Loader />
    </div>
  );
}

export default App;
