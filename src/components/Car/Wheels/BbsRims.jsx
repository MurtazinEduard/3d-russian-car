import { useEnvironment, useGLTF } from '@react-three/drei';
import React from 'react'

function BbsRims(props) {
    const { nodes, materials } = useGLTF("/portfolio2023/assets/bbsWheel.gltf");
    const envMap = useEnvironment({ files: "/portfolio2023/assets/envMap/belfast.hdr" });
    materials.MainColor.envMap = envMap;
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

export default BbsRims