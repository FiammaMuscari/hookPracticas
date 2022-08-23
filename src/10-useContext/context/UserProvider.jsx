
import React, { useState } from 'react'
import { UserContext } from './UserContext'

const user1 = {
    id: 1,
    username: 'Pepe',
    email: 'pepe@gmail.com'
}

export const UserProvider = ({children}) => {

    const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}
