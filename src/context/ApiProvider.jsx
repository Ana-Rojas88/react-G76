import { createContext, useEffect, useState } from "react";

//Paso 1: Creamos el contexto
export const ApiContext = createContext()

//Paso 2: Proveer el contexto
const ApiProvider = ({children})=>{
const [productos, setProductos] = useState([]);

  const url = "https://fakestoreapi.com/products/";

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProductos(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return(
    <ApiContext.Provider value={{productos}}>
        {children}
    </ApiContext.Provider>
  )

}

export default ApiProvider;


