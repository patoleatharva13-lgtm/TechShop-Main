function Testimonials() {
  return (
    <>
      <style>{`
        .testimonials{
          padding:60px;
          background:#0f172a;
          color:white;
        }

        .review{
          background:#1e293b;
          padding:20px;
          margin-top:20px;
          border-radius:10px;
        }
      `}</style>

      <section className="testimonials">
        <h2>Customer Reviews</h2>

        <div className="review">
          ⭐⭐⭐⭐⭐ Amazing Gaming Products
        </div>

        <div className="review">
          ⭐⭐⭐⭐⭐ Great Quality and Fast Delivery
        </div>
      </section>
    </>
  );
}

export default Testimonials;