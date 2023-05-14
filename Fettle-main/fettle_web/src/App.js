import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigationbar } from "./components/Navigationbar";
import { Login } from "./components/Login";

import { Product, Products } from "./components/Product";

import { Homepage } from "./components/Homepage";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";
import { Footer } from "./components/Footer";
import { Register } from "./components/Register";
import { Cart } from "./components/Cart";
import { ContactUs } from "./components/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigationbar></Navigationbar>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>

          <Route path="/products" element={<Product></Product>}></Route>
          <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
