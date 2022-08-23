import React from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {

  const { counter, increment, decrement, reset } =  useCounter(0)
 
  return (
    <>
      <h2>CounterWithCustomHook: {counter}</h2>
      <hr />

      <button className="btn btn-primary m-1" onClick={()=>decrement(2)}> -1 </button>
      <button className="btn btn-primary m-1" onClick={reset}> Reset </button>
      <button className="btn btn-primary m-1" onClick={()=>increment(2)}> +1 </button>
    </>
  );
};
