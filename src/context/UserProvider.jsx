import { createContext, useState } from "react";

export const UserContext = createContext();
const UserProvider = ({ children }) => {

  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   const [token, setToken]= useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        email,
        password,
        }),
        });
        const data = await response.json();
        alert(data?.error || "Authentication successful!");
        localStorage.setItem("token", data.token);
      setToken(true)
        };

  const  logout =()=>{
      localStorage.removeItem("token");
      setToken(false)
  }
    
  return (
    <UserContext.Provider value={{ setEmail, email, setPassword, password, logout, handleSubmit, token}}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
