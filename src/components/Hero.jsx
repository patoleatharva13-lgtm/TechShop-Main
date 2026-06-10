function Hero() {
  const scrollToProducts = () => {
    document
      .getElementById("products")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .hero{
          text-align:center;
          padding:120px 20px;
          background:linear-gradient(135deg,#2563eb,#7c3aed);
          color:white;
        }

        .hero h1{
          font-size:60px;
        }

        .hero p{
          margin-top:20px;
          font-size:20px;
          max-width:800px;
          margin-left:auto;
          margin-right:auto;
          line-height:1.6;
        }

        .hero button{
          margin-top:30px;
          padding:15px 30px;
          border:none;
          border-radius:10px;
          font-size:18px;
          cursor:pointer;
          transition:0.3s;
        }

        .hero button:hover{
          transform:translateY(-3px);
        }
      `}</style>

      <section className="hero">
        <h1>Tech That Powers Your Future</h1>

        <p>
          Discover the latest gaming laptops, high-performance monitors,
          premium accessories, and cutting-edge gadgets designed for gamers,
          creators, students, and professionals.
        </p>

        <button onClick={scrollToProducts}>
          Shop Now
        </button>
      </section>
    </>
  );
}

export default Hero;