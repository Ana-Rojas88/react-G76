import React, { useState } from 'react'

//Recibimos la props 
const Login = ({user}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //Función que valida si los datos son correctos o incorrectos
    const handleSesion = (e) =>{
        e.preventDefault()
        if(email === user.email && password === user.password){
            alert('Bienvenido')
        }else{
            alert('Datos incorrectos')
        }
       
    }

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
        <form onSubmit={handleSesion} style={{
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