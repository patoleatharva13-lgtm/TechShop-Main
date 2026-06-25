import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [products, setProducts] = useState([]);

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
      <Navbar />

      <Routes>
        <Route
          path="/"
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

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;