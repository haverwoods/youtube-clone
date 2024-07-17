import React from "react";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./component/sidebar";

function app() {
  return(

 
  <Routes>    
    <Route path="/" element={<Home/>}/> 
    <Route path="/home" element={<Home/>}/>
    <Route path="/sidebar" element={<Sidebar/>}/>
  </Routes>
    
    
  )
}
export default app;