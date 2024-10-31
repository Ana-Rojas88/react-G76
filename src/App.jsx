import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import ApiProvider from "./context/ApiProvider";
import CartProvide from "./context/CartProvider";
import Home from "./views/Home";
import Cart from "./views/Cart";
import Register from "./views/Register";
import Login from "./views/Login";
import DetailProduct from "./views/DetailProduct";
import { UserContext } from "./context/UserProvider";
import { useContext } from "react";

const App = () =>{
  const { user } = useContext(UserContext);
 
 return (
 <div style={{
  alignContent:'center'
 }}>
<ApiProvider>
  <CartProvide>
<NavBar/>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/carrito" element={<Cart />}/>
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={user ? <Home/> : <Register />} />
  <Route path="/product/:id"  element={user ? <DetailProduct /> : <Navigate to="/login" />}/>
</Routes>
  </CartProvide>
</ApiProvider>
 </div>
 );
}
export default App;
