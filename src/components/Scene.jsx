import React, { useEffect, useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import {
  Lightformer,
  OrbitControls,
  PerspectiveCamera,
  Stage,
  useScroll,
  SpotLight,
  Stars,
  Sparkles,
} from "@react-three/drei";

import gsap from "gsap";
import Plane from "./Plane";
import Priora from "./Car/Priora";
import GarageOld from "./GarageOld";
import Text from "./Text";
import { Bloom, EffectComposer, GodRays, Noise, Vignette } from "@react-three/postprocessing";

const Scene = () => {
  const scroll = useScroll();
  const tl = useRef();
  const cameraControlsRef = useRef();

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });
  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    //  Приближение к тачке спереди
    tl.current.to(
      cameraControlsRef.current.position,
      {
        x: 0,
        y: 1,
        z: -5,
        duration: 1,
      },
      0
    );
    // Общий ракурс для выбора цвета тачки
    tl.current.to(
      cameraControlsRef.current.position,
      {
        x: -4,
        y: 1.2,
        z: -3.1,
        duration: 1,
      },
      1
    );
    tl.current.to(
      cameraControlsRef.current.rotation,
      {
        x: 0,
        y: -2.1,
        z: 0,
        duration: 1,
      },
      1
    );
    //Близко переднее левое колесо
    tl.current.to(
      cameraControlsRef.current.position,
      {
        x: -1.8,
        y: 0.35,
        z: -1.63,
        duration: 1,
      },
      2
    );
    tl.current.to(
      cameraControlsRef.current.rotation,
      {
        x: 0,
        y: -Math.PI / 2,
        z: 0,
        duration: 1,
      },
      2
    );

    tl.current.to(
      cameraControlsRef.current.position,
      {
        x: -4.5,
        y: 1.15,
        z: 0,
        duration: 1,
      },
      3
    );

    tl.current.to(
      cameraControlsRef.current.position,
      {
        x: 0,
        y: 0.35,
        z: -3.5,
        duration: 1,
      },
      4
    );
    tl.current.to(
      cameraControlsRef.current.rotation,
      {
        x: 0,
        y: -Math.PI / 1,
        z: 0,
        duration: 1,
      },
      4
    );

    tl.current.to(
      cameraControlsRef.current.position,
      {
        x: 0,
        y: 1.35,
        z: -5.5,
        duration: 1,
      },
      5
    );
    tl.current.to(
      cameraControlsRef.current.rotation,
      {
        x: 0.2,
        y: -Math.PI / 1,
        z: 0,
        duration: 1,
      },
      5
    );
  }, []);
  return (
    <>
      <color attach={"background"} args={["#101010"]} />
      <fog attach="fog" args={["#040404", 10, 20]} />
      <ambientLight intensity={0.21} />
      {/* <pointLight position={[0, 3, -9]} intensity={0.05} /> */}
      {/* <pointLight position={[0, 3, -1]} intensity={0.25} /> */}
      <SpotLight
        position={[0, 2.6, 0]}
        castShadow
        penumbra={1}
        distance={9}
        angle={1.6}
        attenuation={5}
        anglePower={2.91}
        intensity={20}
        color={"#a58ba6"}
      />
      {/* <pointLight position={[-5, 5, -5]} intensity={0.65} /> */}
      {/* <Stage environment={"dawn"} intensity={0.01} contactShasow={false} adjustCamera={false} /> */}
      <PerspectiveCamera
        makeDefault
        position={[-0, 1, -16]}
        rotation={[0, -Math.PI / 1, 0]}
        ref={cameraControlsRef}
      />

      <Priora position={[1, 0, 0]} />
      
      <GarageOld scale={0.3} position={[-2.8, 1.75, 0]} rotation={[0, -Math.PI / 2, 0]} />
      {/* <Plane /> */}
      {/* <OrbitControls scale={false} enableZoom={true} /> */}
      {/* <Stage environment={"warehouse"} intensity={0.11} contactShasow={false}/> */}
      {/* <Lightformer
        intensity={1}
        rotation-x={Math.PI / 2}
        position={[0, 3, -1]}
        scale={[5, 1, 1]}
      /> */}
      {/* <Lightformer
        intensity={3}
        rotation-x={Math.PI / 2}
        position={[0, 3, 2]}
        scale={[5, 1, 1]}
      /> */}
      {/* <SpotLight
        position={[1, 3, -4]}
        castShadow
        penumbra={1}
        distance={9}
        angle={0.65}
        attenuation={5}
        anglePower={6}
        intensity={4}
        color={"white"}
      /> */}
      {/* <Text/> */}
      {/* <mesh receiveShadow castShadow position={[2, 1,-1]}>
        <boxGeometry  args={[4, 2, 1]} />
        <meshLambertMaterial />
      </mesh> */}
      {/* <Effects/> */}
    </>
  );
};

export default Scene;
