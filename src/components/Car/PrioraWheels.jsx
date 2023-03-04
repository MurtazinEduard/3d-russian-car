import React from "react";
import PrioraBrakes from "./PrioraBrakes";
import MainTires from "./MainTires";
import LamboRims from "./Wheels/LamboRims";

const PrioraWheels = () => {
  const tiresParams = [
    {
      scale: [0.11, 0.1, 0.1],
      position: [-0.13, -0.18, -1.3],
      id: 1,
    },
    {
      scale: [0.11, 0.1, 0.1],
      position: [-0.17, -0.18, 1.53],
      id: 2,
    },
    { scale: [0.11, 0.1, 0.1], position: [-1.68, -0.18, 1.53], id: 3 },
    {
      scale: [0.11, 0.1, 0.1],
      position: [-1.72, -0.18, -1.3],
      id: 4,
    },
  ];
  const brakesParams = [
    {
      scale: [1, 1, 1],
      position: [-0.02, 0.322, -1.63],
      rotation: [2, 0, 0],
      id: 1,
    },
    {
      scale: [1, 1, 1],
      position: [-0.02, 0.322, 1.2],
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
  return (
    <group>
      <PrioraTires params={tiresParams} />
      <PrioraBrakes params={brakesParams} />
      <LamboRims params={LamboRimsParams} />
    </group>
  );
};

const PrioraTires = ({ params }) => {
  return (
    <>
      {params.map((wheel) => (
        <MainTires key={wheel.id} scale={wheel.scale} position={wheel.position} />
      ))}
    </>
  );
};

export default PrioraWheels;
