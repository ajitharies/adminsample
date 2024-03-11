import React from "react";
import "./CSS/Admin.css";
import Sidebar from "../Components/Sidebar/Sidebar";
import AddProduct from "../Components/AddProduct/AddProduct";
import { Route, Routes } from "react-router-dom";
import ListProduct from "../Components/ListProduct/ListProduct";
import Unauthorized from "../Components/Unauthorized";

const Admin = () => {
const loggedin = localStorage.getItem('auth-token');
if(!loggedin)
{
  return <Unauthorized/>
}
  return (
    <div className="backg">
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
        
      </Routes>
    </div>
    </div>
  );
};

export default Admin;








