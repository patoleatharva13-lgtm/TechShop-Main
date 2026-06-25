import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import Testimonials from "../components/Testimonials";

function Home({ products }) {
  return (
    <>
      <Hero />
      <Categories />

      <section
        style={{
          padding: "60px",
          background: "#0f172a",
          color: "white",
        }}
      >
        <h2>Featured Products</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {products.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </section>

      <Testimonials />
    </>
  );
}

export default Home;