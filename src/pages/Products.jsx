function Products({ products }) {
  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        padding: "50px",
      }}
    >
      <h1>Our Products</h1>

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
          <div
            key={item.id}
            style={{
              background: "#1e293b",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <h3 style={{ padding: "10px" }}>
              {item.name}
            </h3>

            <p style={{ padding: "10px" }}>
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;