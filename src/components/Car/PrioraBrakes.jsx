import React from "react";
import { useGLTF } from '@react-three/drei'
const PrioraBrakes = ({ params }) => {
  return (
    <>
      {params.map((brake) => (
        <Brakes
          key={brake.id}
          scale={brake.scale}
          position={brake.position}
          rotation={brake.rotation}
        />
      ))}
    </>
  );
};

function Brakes(props) {
  const { nodes, materials } = useGLTF('/3d-russian-car/assets/Brakes.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_10.geometry} material={materials['visse.002']} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.Chrome_Text_Logo} />
        <mesh geometry={nodes.Object_13.geometry} material={materials['Material.027']} />
        <mesh geometry={nodes.Object_15.geometry} material={materials['Material.012']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['plaquette_de_frein.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('/3d-russian-car/assets/Brakes.gltf')


export default PrioraBrakes;
