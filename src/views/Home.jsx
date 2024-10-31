import React, { useContext, useState } from 'react'
import Card from '../components/Card'
import { ApiContext } from '../context/ApiProvider'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  //Paso 3: Consumir un contexto
  const { productos } = useContext(ApiContext)


 console.log(productos)
  return (
    <>
      <div className="products" style={{display:'flex', gap:'1rem', flexWrap:'wrap',justifyContent:'center'}}>
         {productos.map((producto) => (
          <Card key={producto.id} producto={producto} />
        ))}
      </div>
    </>

  )
}

export default Home