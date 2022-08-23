import React, { memo } from 'react'

export const Small = memo(({value}) => {


    console.log('<Small />');

  return (
    <small> {value} </small>
  )
})
