import React, { useState } from 'react'
import LoginStartPage from './startPage'
import FormUser from './formUser'

const LoginUser = () => {
    const [choice, setChoice] = useState() 

    if (!choice) return (<LoginStartPage setChoice={setChoice}/>)
    else if (choice=="email") return (<FormUser/>)

  
}

export default LoginUser
