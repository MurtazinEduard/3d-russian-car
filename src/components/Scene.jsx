import React, { useLayoutEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Stage, useScroll, SpotLight } from "@react-three/drei";
import gsap from "gsap";

import Priora from "./Car/Priora";
import Garage from "./Garage";

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
        x: 0.1,
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
        x: -4.5,
        y: 1.2,
        z: -3.6,
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
      //сбоку показать подвеску
    tl.current.to(
      cameraControlsRef.current.position,
      {
        x: -5.5,
        y: 1.25,
        z: 0,
        duration: 1,
      },
      3
    );
      //Близко номер
    tl.current.to(
      cameraControlsRef.current.position,
      {
        x: 0.1,
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
        // Главный вид в конце
    tl.current.to(
      cameraControlsRef.current.position,
      {
        x: 0.1,
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
      <PerspectiveCamera
        makeDefault
        position={[0.1, 1, -16]}
        rotation={[0, -Math.PI / 1, 0]}
        ref={cameraControlsRef}
      />
      <Priora position={[1, 0, 0]} />
      <Garage scale={0.3} position={[-2.8, 1.75, 0]} rotation={[0, -Math.PI / 2, 0]} />
    </>
  );
};

export default Scene;
