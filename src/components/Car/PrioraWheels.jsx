import React from "react";
import PrioraBrakes from "./PrioraBrakes";
import LamboRims from "./Wheels/LamboRims";
import { useGLTF } from "@react-three/drei";
import { useSelector } from "react-redux";

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
  const LamboRimsParams = [
    {
      scale: [0.72, 1, 1],
      position: [0, 0.322, -1.63],
      rotation: [0, 0, 0],
      id: 1,
    },
    {
      scale: [0.72, 1, 1],
      position: [-0.04, 0.322, 1.2],
      rotation: [0, 0, 0],
      id: 1,
    },
    {
      scale: [0.72, 1, 1],
      position: [-1.775, 0.322, 1.195],
      rotation: [-Math.PI / 2, -Math.PI / 1, 0],
      id: 1,
    },
    {
      scale: [0.72, 1, 1],
      position: [-1.815, 0.322, -1.64],
      rotation: [-Math.PI / 2, -Math.PI / 1, 0],
      id: 1,
    },
  ];
  const wheels = useSelector((store => store.control.wheels))
  return (
    <group>
      <PrioraTires />
      <PrioraBrakes params={brakesParams} />
      {wheels === 'classic' ? <BbsWheels /> : <LamboRims/>}
      {/* <LamboRims params={LamboRimsParams} /> */}
      {/* <BbsWheels /> */}
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

function BbsWheels(props) {
  const { nodes, materials } = useGLTF("/portfolio2023/assets/bbsWheel.gltf");
  return (
    <group {...props} dispose={null}>
      <group
        scale={[0.15, 0.125, 0.15]}
        position={[-0.113, 0.313, -1.64]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        <mesh geometry={nodes.Object_4.geometry} material={materials.SeconadryColor} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.MainColor} />
      </group>
      {/* сзади слева */}
      <group
        scale={[0.15, 0.125, 0.15]}
        position={[-0.153, 0.313, 1.2]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        <mesh geometry={nodes.Object_4.geometry} material={materials.SeconadryColor} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.MainColor} />
      </group>
      {/* Сзади справа */}
      <group
        scale={[0.15, 0.125, 0.15]}
        position={[-1.662, 0.313, 1.2]}
        rotation={[0, Math.PI / 1, Math.PI / 2]}
      >
        <mesh geometry={nodes.Object_4.geometry} material={materials.SeconadryColor} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.MainColor} />
      </group>
      <group
        scale={[0.15, 0.125, 0.15]}
        position={[-1.701, 0.313, -1.64]}
        rotation={[0, Math.PI / 1, Math.PI / 2]}
      >
        <mesh geometry={nodes.Object_4.geometry} material={materials.SeconadryColor} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.MainColor} />
      </group>
    </group>
  );
}

useGLTF.preload("/portfolio2023/assets/bbsWheel.gltf");
export default PrioraWheels;
