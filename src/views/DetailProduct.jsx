import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartProvider'
import { ApiContext } from '../context/ApiProvider'

const DetailProduct = () => {
    const { agregarAlCarrito} = useContext(CartContext)
    const {getDataDetails, detailP} = useContext(ApiContext)
    const { id } = useParams()

    useEffect(() => {
     getDataDetails(id)
    }, [])
    
getDataDetails(id)
    // const url = `https://fakestoreapi.com/products/${id}`;

    // const getData = async () => {
    //   const response = await fetch(url);
    //   const data = await response.json();
    //   setDetailP(data);
    //   console.log(detailP)
    // };
  
    // useEffect(() => {
    //   getData();
    // }, []);


  return (
    <div style={{
         padding:'1rem'
      }}>
      <img src={detailP.image} alt={detailP.nombre} width='200px' height='200px' />
      <h6>{detailP.title}</h6>
      <p>{detailP.description}</p>
      <p>${detailP.price}</p>
     {/* <button onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</button> */}
     
    </div>
  )
}

export default DetailProduct