function About() {
  return (
    <>
      <style>{`
        .about{
          background:#0f172a;
          color:white;
          min-height:100vh;
          padding:60px 10%;
        }

        .about h1{
          text-align:center;
          font-size:42px;
          margin-bottom:20px;
        }

        .about-box{
          background:#1e293b;
          padding:40px;
          border-radius:15px;
          margin-top:25px;
          line-height:1.8;
          font-size:18px;
          box-shadow:0 4px 15px rgba(0,0,0,0.3);
        }

        .about-box p{
          color:#cbd5e1;
        }

        .highlight{
          color:#38bdf8;
          font-weight:bold;
        }

        @media(max-width:768px){
          .about{
            padding:40px 20px;
          }

          .about h1{
            font-size:32px;
          }

          .about-box{
            padding:25px;
            font-size:16px;
          }
        }
      `}</style>

      <div className="about">
        <h1>About TechShop</h1>

        <div className="about-box">
          <p>
            <span className="highlight">TechShop</span> started in 2022
            with a simple goal — to make the latest technology and
            gaming products accessible to everyone. What began as a
            small online store for gaming accessories has grown into a
            trusted destination for tech enthusiasts, gamers, students,
            and professionals.
          </p>

          <br />

          <p>
            At TechShop, we carefully select high-quality products,
            including gaming laptops, smartphones, monitors,
            headphones, and accessories from leading brands. We
            believe technology should enhance everyday life, whether
            you're gaming, learning, creating, or working.
          </p>

          <br />

          <p>
            Our team is passionate about innovation and customer
            satisfaction. That's why we focus on providing reliable
            products, competitive prices, secure shopping, and fast
            delivery.
          </p>

          <br />

          <p>
            Today, TechShop continues to serve thousands of customers
            and remains committed to helping people discover the best
            technology for their needs.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;