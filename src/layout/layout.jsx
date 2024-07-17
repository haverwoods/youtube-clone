import React from "react";
import Navigation from "../component/navigation";
import Sidebar from "../component/sidebar";


export default function Layout({ children }) {
  return (
    <div>
  
      <Navigation />
      <Sidebar />
      {children}
    
    </div>
  );
}