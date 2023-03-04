import React from "react";
import { MeshTransmissionMaterial, Text3D } from "@react-three/drei";

import Inter from "../assets/Inter.json";
const Text = ({ children }) => {
  return (
    <mesh scale={0.1} position={[1, 0, -4]} rotation={[0,-Math.PI / 1,0]}>
      <Text3D
        curveSegments={32}
        bevelEnabled
        bevelSize={0.04}
        bevelThickness={0.1}
        height={0.5}
        lineHeight={0.5}
        letterSpacing={-0.06}
        size={1.5}
        font={Inter}
      >
        {`EDWARD MURTAZIN`}
        {children ? children : <MeshTransmissionMaterial
          resolution={1024}
          distortion={0.55}
          color="red"
          thickness={1}
          anisotropy={1}
          
        />}
      </Text3D>
    </mesh>
  );
};

export default Text;