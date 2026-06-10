import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import Testimonials from "../components/Testimonials";

function Home() {
  const products = [
    {
      name: "Gaming Laptop",
      price: "₹89,999",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },
    {
      name: "Gaming Monitor",
      price: "₹24,999",
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf"
    },
    {
      name: "Gaming Mouse",
      price: "₹1,999",
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46"
    },
    {
      name: "Gaming Keyboard",
      price: "₹3,999",
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
    }
  ];

  return (
    <>
      <style>{`
        body{
          margin:0;
          font-family:Arial,sans-serif;
          background:#0f172a;
        }

        .product-section{
          padding:60px;
          color:white;
        }

        .product-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
          gap:20px;
          margin-top:20px;
        }
      `}</style>

      <Hero />

      <Categories />

      <section className="product-section">
        <h2>Featured Products</h2>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </section>

      <Testimonials />
    </>
  );
}

export default Home;