import React from "react";

import { useGLTF } from "@react-three/drei";
import { useSelector } from "react-redux";
import BbsRims from "./Wheels/BbsRims";
import PrioraBrakes from "./PrioraBrakes";
import LamboRims from "./Wheels/LamboRims";

const PrioraWheels = () => {
  
  const brakesParams = [
    {
      scale: [1, 1, 1],
      position: [-0.02, 0.322, -1.63],
      rotation: [2, 0, 0],
      id: 1,
    },
    {
      scale: [1, 1, 1],
      position: [-0.05, 0.322, 1.2],
      rotation: [-0.3, 0, 0],
      id: 2,
    },
    {
      scale: [1, 1, 1],
      position: [-1.775, 0.322, 1.195],
      rotation: [-1.6, -Math.PI / 1, 0],
      id: 3,
    },
    {
      scale: [1, 1, 1],
      position: [-1.805, 0.322, -1.64],
      rotation: [0.5, -Math.PI / 1, 0],
      id: 4,
    },
  ];
  const wheels = useSelector((store => store.control.wheels))
  return (
    <group>
      <PrioraTires />
      <PrioraBrakes params={brakesParams} />
      {wheels === 'classic' ? <BbsRims /> : <LamboRims/>}
    </group>
  );
};

const PrioraTires = (props) => {
  const { nodes, materials } = useGLTF("/portfolio2023/assets/MainTires.gltf");
  return (
    <group {...props} dispose={null}>
      <group position= {[-0.129, 0.31, -1.305]} scale={[0.00108, 0.001,0.001]}>
        <mesh
          geometry={nodes.g_Tire_0.geometry}
          material={materials["mat_0.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position= {[-0.17, 0.31, 1.53]} scale={[0.00108, 0.001,0.001]}>
        <mesh
          geometry={nodes.g_Tire_0.geometry}
          material={materials["mat_0.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position= {[-1.679, 0.31, 1.53]} scale={[0.00108, 0.001,0.001]}>
        <mesh
          geometry={nodes.g_Tire_0.geometry}
          material={materials["mat_0.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position= {[-1.719, 0.31, -1.3]} scale={[0.00108, 0.001,0.001]}>
        <mesh
          geometry={nodes.g_Tire_0.geometry}
          material={materials["mat_0.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
};


export default PrioraWheels;
