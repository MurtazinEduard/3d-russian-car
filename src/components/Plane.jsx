import { useTexture } from "@react-three/drei";
import React from "react";
import * as THREE from "three";
import dispMap from "../assets/planeTextures/disp.jpg";
import diffMap from "../assets/planeTextures/diff.jpg";
const Plane = () => {
  const textures = useTexture(
    {
      map: diffMap,
      displacementMap: dispMap,
    },
    ([map]) => {
      map.wrapS = map.wrapT = THREE.RepeatWrapping;
      map.repeat.set(9.7, 10);
    }
  );
  return (
    <mesh rotation={[-Math.PI / 2, 0, -Math.PI / 2]} position={[0, -6.4, 0]}>
      <planeGeometry args={[111, 119]} />
      <meshStandardMaterial {...textures} />
    </mesh>
  );
};

export default Plane;
