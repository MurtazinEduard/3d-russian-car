import React from 'react'
import { useGLTF } from '@react-three/drei'

function MainTires(props) {
  const { nodes, materials } = useGLTF('/MainTires.gltf')
  return (
    <group {...props} dispose={null}>
      <group >
        <group position={[0, 5, 0]} scale={0.01}>
          <mesh geometry={nodes.g_Tire_0.geometry} material={materials['mat_0.002']} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/MainTires.gltf')

export default MainTires