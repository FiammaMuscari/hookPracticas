import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {

    const {user} = useContext(UserContext);

    const navigate = useNavigate()

    const handleOnCLick = () =>{
        navigate('/login');
    }
    
  return (
    <>
        <h3>HomePage</h3>
        <hr />

        <h4>Usuario: {user?.username} </h4>

        <button className='btn btn-warning' onClick={handleOnCLick}> Ir Login </button>
    </>
  )
}
