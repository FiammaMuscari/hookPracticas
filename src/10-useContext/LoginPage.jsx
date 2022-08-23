import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

const user2 = {
    id: 2,
    username: 'Juan',
    email: 'juan@gmail.com'
}

export const LoginPage = () => {

    const {user, setUser} = useContext(UserContext)

  return (
    <>
        <h3>LoginPage</h3>
        <hr />

        <button className='btn btn-success' onClick={()=> setUser(user2)}>Set User</button>
        <code>{JSON.stringify(user)}</code>
    </>
  )
}
