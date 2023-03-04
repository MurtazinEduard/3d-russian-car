import React from "react";
import MainTires from "/MainTires";

const PrioraTires = ({ params }) => {
  return (
    <>
      {params.map((wheel) => (
        <MainTires
          key={wheel.id}
          scale={wheel.scale}
          position={wheel.position}
        />
      ))}
    </>
  );
};

export default PrioraTires;
