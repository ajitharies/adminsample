import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Pages/Admin";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import AddProduct from "./Components/AddProduct/AddProduct";
import ListProduct from "./Components/ListProduct/ListProduct";
import EditProduct from "./Components/EditProduct/EditProduct";
import Orders from "./Components/Orders/Orders";

function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<LoginSignup />} />         
          <Route path="/Admin" element={<Admin />} />
          <Route path="/addproduct" element={<AddProduct />} /> 
          <Route path="/edit/:productid" element={<EditProduct />} /> 
          <Route path="/listproduct" element={<ListProduct />} />
          <Route path="/listorders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;





