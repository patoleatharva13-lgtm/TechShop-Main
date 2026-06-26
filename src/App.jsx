import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Import Login & Signup
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [products, setProducts] = useState([]);

  const location = useLocation();

  // Hide Navbar & Footer on Login and Signup pages
  const hideLayout =
    location.pathname === "/" ||
    location.pathname === "/signup";

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const { data, error } = await supabase
      .from("product")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setProducts(data);
    }
  }

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        {/* Authentication */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Website */}
        <Route
          path="/home"
          element={<Home products={products} />}
        />

        <Route
          path="/products"
          element={<Products products={products} />}
        />

        <Route
          path="/add-product"
          element={<AddProduct />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;