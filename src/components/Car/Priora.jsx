import React from 'react'
import PrioraBodyEdited from './PrioraBodyEdited'
import PrioraWheels from './PrioraWheels'

const Priora = (props) => {
  return (
    <group {...props}>
        <PrioraBodyEdited/>
        <PrioraWheels/>
    </group>
  )
}

export default Priora