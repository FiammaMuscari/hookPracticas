import React, { memo } from 'react'

export const Button = memo(({numero, incrementar}) => {

    console.log('Me volvi a renderizar :(');

  return (
    <button
        className='btn btn-primary m-1'
        onClick={()=> incrementar(numero)}
    >
        {numero}
    </button>
  )
})
