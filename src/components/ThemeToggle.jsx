import React from "react";
import { useTheme } from "../context/ThemeProvider";

const ThemeToggle = () => {

 const { toggleTheme } = useTheme();
 
 return <button onClick={toggleTheme}>Cambiar Tema</button>;
};

export default ThemeToggle;