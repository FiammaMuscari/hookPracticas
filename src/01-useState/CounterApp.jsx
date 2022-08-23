import React, { useState } from 'react'

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 0,
        counter2: 10,
        counter3: 20,
    });
    
    const { counter1, counter2, counter3 } = counter;

    const handleCount = () => {

        if( counter3 >= 30) return;//termina ahi

        let counterName = 'counter1';

        if( counter1 >= 10 ) counterName = 'counter2';
        if( counter2 >= 20 ) counterName = 'counter3';

        setCounter({
            ...counter,
            [counterName]: counter[counterName] + 1
        })
    }

  return (
    <>
    <h2> CounterApp </h2> 

    <h3>Counter: { counter1 } </h3> 
    <h3>Counter: { counter2 } </h3>
    <h3>Counter: { counter3 } </h3>  

    <button 
        className='btn btn-primary'
        onClick={handleCount}    
    >       
    +1
    </button>
    
    </>
  )
}
