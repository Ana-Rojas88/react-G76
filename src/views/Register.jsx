import { useState } from "react";
import useInput from "../hooks/UseInput";

//Recibimos la props 
const Register = ({user}) =>{
    const email = useInput("");
    const password = useInput("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email.value, password.value);
        };

    // const [nombre, setNombre] = useState ('');
    // const [usuario, setUsuario] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
     const [mensaje, setMensaje] = useState('')

    //Hacemos las validaciones correspondientes de los input
    // const handleChange= (e) =>{
    //  e.preventDefault()
    //  if(!nombre || !usuario || !email || !password){
    //     setMensaje("Debe llenar todos los campos")
    //  }else if(password.length < 6){
    //     console.log("La contraseña debe contener mas de 6 caracteres")
    //  }
    //  else{
    //     alert("Registro exitoso")
    //     //Creamos un objeto para guardar la información del usuario
    //     const infoUsuario = {
    //         "nombre": nombre,
    //         "usuario": usuario,
    //         "email": email,
    //         "password": password
    //     }
    //     //Enviamos el objeto a la props user que estamos recibiendo
    //     user(infoUsuario)
    //  }
    // }

return(
    <div style={{
        width:'50%',
        display: 'flex',
        flexDirection:'column',
        gap:'1rem',
        backgroundColor:'#009efa',
        padding:'3rem',
        marginInline:'auto',
        marginTop:'5rem'
    }}>
        <h2>Formulario de registro</h2>
        <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection:'column',
            gap:'1.5rem'
        }}>
            <p style={{color:'red'}}>{mensaje}</p>
            {/* <input type="text"  placeholder="Ingrese su nombre"
            onChange={(e) => setNombre(e.target.value)}/>
            <input type="text" placeholder="Ingrese su usuario"
             onChange={(e) => setUsuario(e.target.value)} /> */}
            <input type="email" placeholder="Ingrese su correo"
             {...email}/>
            <input type="password" placeholder="Ingrese su contraseña"
             {...password}/>
             <button className="btn btn-primary" type="submit">Enviar</button>
        </form>
    </div>
)
}

export default Register

