import React from 'react'
import PrioraBody from './PrioraBody'
import PrioraBodyEdited from './PrioraBodyEdited'
import PrioraWheels from './PrioraWheels'

const Priora = (props) => {
  return (
    <group {...props}>
        {/* <PrioraBody/> */}
        <PrioraBodyEdited/>
        <PrioraWheels/>
    </group>
  )
}

export default Priora