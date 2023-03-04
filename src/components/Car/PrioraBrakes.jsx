import React from "react";
import Brakes from "./Brakes";

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

export default PrioraBrakes;
