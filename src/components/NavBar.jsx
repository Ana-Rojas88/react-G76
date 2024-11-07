import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartProvider';
import { UserContext } from '../context/UserProvider';


const NavBar = () => {
  //Paso 3: Consumir un contexto
  const { total } = useContext(CartContext);
  const { logout} = useContext(UserContext)
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "noActive");
  
  return (

<nav className="navbar navbar-expand-md p-3 mb-3 " style={{
  background:'#dbd7e3'
}}>
  <div className="container-fluid">
    <a className="navbar-brand bg" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item m-2">
        <NavLink to='/' className= {setActiveClass}>Home</NavLink>
        </li>
        <li className="nav-item m-2">
        <NavLink to='/carrito' className={setActiveClass}>Carrito  ${total.toFixed(2)}</NavLink>
        </li>
        <li className="nav-item m-2">
        <NavLink to='/register' className={setActiveClass} >Register</NavLink>
        </li>
        <li className="nav-item m-2">
        <NavLink to='/login' className={setActiveClass}>Login</NavLink> 
        </li>
        <li className="nav-item m-2">
        <NavLink to='/perfil' className={setActiveClass}>Perfil</NavLink> 
        </li>
      </ul>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  </div>
</nav>
  )
}

export default NavBar