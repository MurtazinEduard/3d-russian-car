import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Lamp(props) {
  const { nodes, materials } = useGLTF('/portfolio2023/assets/lamp.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.Lamp_01a001__0.geometry} material={materials['Scene_-_Root']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/portfolio2023/assets/lamp.glb')
export default Lamp