function Products() {
  const products = [
    {
      name: "ASUS Gaming Laptop",
      price: "₹89,999",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },
    {
      name: "4K Gaming Monitor",
      price: "₹24,999",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf"
    },
    {
      name: "RGB Keyboard",
      price: "₹3,999",
      image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
    },
    {
      name: "Gaming Mouse",
      price: "₹1,999",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46"
    },
    {
      name: "Gaming Headphones",
      price: "₹4,999",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    }
  ];

  return (
    <>
      <style>{`
        .products-page{
          background:#0f172a;
          color:white;
          padding:50px;
          min-height:100vh;
        }

        .products-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
          gap:20px;
          margin-top:30px;
        }

        .card{
          background:#1e293b;
          border-radius:12px;
          overflow:hidden;
        }

        .card img{
          width:100%;
          height:220px;
          object-fit:cover;
        }

        .card h3,
        .card p{
          padding:10px;
        }

        .card button{
          margin:10px;
          padding:10px 20px;
          border:none;
          border-radius:8px;
        }
      `}</style>

      <div className="products-page">
        <h1>Our Products</h1>

        <div className="products-grid">
          {products.map((item) => (
            <div className="card" key={item.name}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button>Add To Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;