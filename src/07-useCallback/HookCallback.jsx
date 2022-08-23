import React, { useCallback, useState } from 'react'
import { IncrementButton } from './IncrementButton'

export const HookCallback = () => {

    const [counter, setCounter] = useState(0)     

    const increment = useCallback(
        (value) => {
            
            setCounter( (counter)=> counter + value )
        },
      [],
    )    

  return (
    <>
        <h2>HookCallback</h2>
        <hr />

        <h3>Counter: {counter} </h3>
        <IncrementButton  increment={increment}/>

    </>
  )
}
