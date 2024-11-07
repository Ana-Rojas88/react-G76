import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserProvider'

//Recibimos la props 
const Login = () => {

    const {setEmail, setPassword, handleSubmit} = useContext(UserContext)

  return (
    <div style={{
        width:'50%',
        display: 'flex',
        flexDirection:'column',
        backgroundColor:'#009efa',
        padding:'3rem',
        marginInline:'auto',
        marginTop:'5rem'
    }}>
        <h2>Inicio de sesión</h2>
        <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection:'column',
            gap:'1rem'
        }} >
            <input type="email"
              onChange={(e) => setEmail(e.target.value)} required />
               <input type="password"
              onChange={(e) => setPassword(e.target.value)} required />
            <button className="btn btn-primary" type='submit'> 
                Iniciar sesión
            </button>
        </form>
    </div>
  )
}

export default Login