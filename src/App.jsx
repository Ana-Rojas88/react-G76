import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import ApiProvider from "./context/ApiProvider";
import CartProvide from "./context/CartProvider";
import Home from "./views/Home";
import Cart from "./views/Cart";
import Register from "./views/Register";
import Login from "./views/Login";

function App() {
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
  <Route path="/register" element={<Register />} />
</Routes>
  </CartProvide>
</ApiProvider>
 </div>
 );
}
export default App;
