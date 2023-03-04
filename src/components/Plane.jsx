import { MeshReflectorMaterial, MeshWobbleMaterial } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'

const Plane = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow castShadow>
        <planeGeometry args={[10, 10]} />
        {/* <MeshReflectorMaterial
          blur={[10, 10]}
          resolution={1024}
          mixBlur={20}
          mixStrength={20}
          depthScale={1.2}
          minDepthThreshold={0.6}
          maxDepthThreshold={1.4}
          color="#404040"
          metalness={0.01}
          roughness={0.1}
          
        /> */}
        {/* <MeshWobbleMaterial factor={0.1} speed={1} /> */}
        <meshStandardMaterial color="black" metalness={0.01} roughness={0.9}/>
        {/* <shadowMaterial transparent opacity={0.4}/> */}
      </mesh>
  )
}

export default Plane