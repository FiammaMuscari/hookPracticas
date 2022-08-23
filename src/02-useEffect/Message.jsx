import React, { useEffect } from 'react'

export const Message = () => {

  useEffect(() => {
    console.log('Message Mounted');

    const onMouseMove = ({x, y}) => {
      const coords = {x, y};
      console.log(coords);
    }

    window.addEventListener('mousemove', onMouseMove);
    return () => {
      console.log('Message UnMounted');
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])  

  return (
    <h3>Usuario ya existe</h3>
  )
}
