import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <style>{`
        .navbar{
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:20px 50px;
          background:#111827;
        }

        .logo{
          font-size:28px;
          color:#38bdf8;
        }

        .nav-links a{
          color:white;
          text-decoration:none;
          margin-left:25px;
          font-size:18px;
        }
      `}</style>

      <nav className="navbar">
        <h2 className="logo">TechShop</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/add-product">Add Product</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;