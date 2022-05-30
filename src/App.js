import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import About from "./components/About";
import Home from "./components/Home";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/cybershop" element={<Home />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
