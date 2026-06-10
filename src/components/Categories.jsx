function Categories() {
  const categories = [
    {
      name: "Gaming Laptops",
      image:
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
    },
    {
      name: "Monitors",
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
    },
    {
      name: "Smartphones",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
    },
    {
      name: "Tablets",
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
    },
    {
      name: "Gaming Headphones",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    }
  ];

  return (
    <>
      <style>{`
        .categories{
          padding:60px;
          background:#0f172a;
          color:white;
        }

        .cat-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:20px;
          margin-top:30px;
        }

        .cat-card{
          background:#1e293b;
          border-radius:10px;
          overflow:hidden;
          transition:0.3s;
          cursor:pointer;
        }

        .cat-card:hover{
          transform:translateY(-5px);
        }

        .cat-card img{
          width:100%;
          height:180px;
          object-fit:cover;
        }

        .cat-card h3{
          padding:15px;
          text-align:center;
        }
      `}</style>

      <section className="categories">
        <h2>Categories</h2>

        <div className="cat-grid">
          {categories.map((item) => (
            <div className="cat-card" key={item.name}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Categories;