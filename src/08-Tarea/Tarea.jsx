import React, { useCallback, useState } from "react";
import { Button } from "./Button";

export const Tarea = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  const incrementar = useCallback(
    (num) => {
        setValor((valor)=> valor + num);
      },
    [],
  )  

  return (
    <>
      <h2>Tarea</h2>
      <h3>Total: {valor}</h3>
      <hr />

      {numeros.map((numero) => (
        <Button key={numero} incrementar={incrementar} numero={numero} />
      ))}
    </>
  );
};
