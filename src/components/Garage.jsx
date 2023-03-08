import React from "react";
import { useGLTF } from "@react-three/drei";
import Plane from "./Plane";

export default function Garage(props) {
  const { nodes, materials } = useGLTF("/portfolio2023/assets/garage.gltf");
  return (
    <group {...props} dispose={null}>
      <Lamp />
      <Plane/>
      {/* Сзади справа */}
      <group
        position={[15.27, 0, 0.06]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 6.14, 1]}
      >
        <mesh geometry={nodes.Object_10.geometry} material={materials.Poll_1} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.poll3} />
      </group>
      {/* Сзади слева */}
      <group
        position={[15.27, 0, -19.93]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 6.14, 1]}
      >
        <mesh geometry={nodes.Object_19.geometry} material={materials.Poll_1} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.poll3} />
      </group>
      {/* Земля */}
      <group
        position={[0, 0, -10.19]}
        scale={[45.47, 5.94, 59.74]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh geometry={nodes.Object_28.geometry} material={materials["Material.002"]} />
      </group>
      {/* Стена с дырой */}
      <group position={[15.25, 0.04, -9.93]} scale={[0.96, 5.95, 9.08]}>
        <mesh geometry={nodes.Object_59.geometry} material={materials.Material} />
        <mesh geometry={nodes.Object_60.geometry} material={materials.ground} />
      </group>
      {/* Один шлакоблок */}
      <group
        position={[9.07, -4.8, 0.36]}
        rotation={[Math.PI / 2, 0, -1.59]}
        scale={2.42}
      >
        <mesh geometry={nodes.Object_64.geometry} material={materials.block_low} />
        <mesh geometry={nodes.Object_65.geometry} material={materials.petli_low} />
      </group>
      <group
        position={[0.23, -4.8, 0.26]}
        rotation={[Math.PI / 2, 0, -1.53]}
        scale={2.42}
      >
        <mesh geometry={nodes.Object_67.geometry} material={materials.block_low} />
        <mesh geometry={nodes.Object_68.geometry} material={materials.petli_low} />
      </group>
      <group
        position={[-8.87, -4.8, 0.15]}
        rotation={[Math.PI / 2, 0, -1.54]}
        scale={2.42}
      >
        <mesh geometry={nodes.Object_70.geometry} material={materials.block_low} />
        <mesh geometry={nodes.Object_71.geometry} material={materials.petli_low} />
      </group>
      <group
        position={[-8.79, -4.8, -20.18]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={2.42}
      >
        <mesh geometry={nodes.Object_73.geometry} material={materials.block_low} />
        <mesh geometry={nodes.Object_74.geometry} material={materials.petli_low} />
      </group>
      <group position={[9.9, -4.8, -19.97]} rotation={[Math.PI / 2, 0, 1.5]} scale={2.42}>
        <mesh geometry={nodes.Object_76.geometry} material={materials.block_low} />
        <mesh geometry={nodes.Object_77.geometry} material={materials.petli_low} />
      </group>
      <group position={[0, -4.8, -19.97]} rotation={[Math.PI / 2, 0, 1.61]} scale={2.42}>
        <mesh geometry={nodes.Object_79.geometry} material={materials.block_low} />
        <mesh geometry={nodes.Object_80.geometry} material={materials.petli_low} />
      </group>
      {/* Шлакоблок справа */}
      <mesh
        geometry={nodes.Object_31.geometry}
        material={materials.top_concrete}
        position={[0, 5.06, 0.12]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1, 45.47, 1.1]}
      />
      {/* Шлакоблок слева */}
      <mesh
        geometry={nodes.Object_35.geometry}
        material={materials.top_concrete}
        position={[0, 5.06, -19.97]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1, 45.47, 1.1]}
      />
      {/* Труба справа */}
      <mesh
        geometry={nodes.Object_41.geometry}
        material={materials.pipe}
        position={[0, 5.53, -1.32]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.28, 45.55, 0.28]}
      />
      {/* Труба справа */}
      <mesh
        geometry={nodes.Object_47.geometry}
        material={materials.pipe}
        position={[0, 5.53, 1.58]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.28, 45.55, 0.28]}
      />
      {/* Слева труба */}
      <mesh
        geometry={nodes.Object_49.geometry}
        material={materials.pipe}
        position={[0, 5.53, -18.54]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.28, 45.55, 0.28]}
      />
      {/* Слева труба */}
      <mesh
        geometry={nodes.Object_51.geometry}
        material={materials.pipe}
        position={[0, 5.53, -21.44]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.28, 45.55, 0.28]}
      />
      {/* Арматура в стене */}
      <mesh
        geometry={nodes.Object_62.geometry}
        material={materials.metal_rod}
        position={[15.32, 0, -6.71]}
        scale={[0.04, 5.17, 0.04]}
      />
      {/* Провода */}
      <mesh
        geometry={nodes.Object_82.geometry}
        material={materials["Material.003"]}
        position={[0, 19.56, 0]}
        rotation={[0, Math.PI / 2, 0]}
        scale={3.59}
      />
    </group>
  );
}
function Lamp(props) {
  const { nodes, materials } = useGLTF("/portfolio2023/assets/lamp.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.04} position={[0, 6, -9.39]}>
        <mesh
          geometry={nodes.Lamp_01a001__0.geometry}
          material={materials["Scene_-_Root"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}
useGLTF.preload("/portfolio2023/assets/lamp.glb");
useGLTF.preload("/portfolio2023/assets/garage.gltf");
