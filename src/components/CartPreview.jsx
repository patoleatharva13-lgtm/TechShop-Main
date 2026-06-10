function CartPreview() {
  return (
    <>
      <style>{`
        .cart{
          padding:60px;
          background:#111827;
          color:white;
        }

        .cart-items{
          display:flex;
          gap:20px;
          flex-wrap:wrap;
          margin-top:20px;
        }

        .cart-card{
          background:#1e293b;
          padding:20px;
          border-radius:10px;
          width:250px;
        }

        .checkout{
          margin-top:20px;
          padding:12px 25px;
          border:none;
          border-radius:8px;
          cursor:pointer;
        }
      `}</style>

      <section className="cart">
        <h2>Your Cart</h2>

        <div className="cart-items">
          <div className="cart-card">
            <h3>Gaming Laptop</h3>
            <p>₹89,999</p>
          </div>

          <div className="cart-card">
            <h3>Gaming Mouse</h3>
            <p>₹1,999</p>
          </div>
        </div>

        <h3 style={{marginTop:"20px"}}>
          Total: ₹91,998
        </h3>

        <button className="checkout">
          Proceed To Checkout
        </button>
      </section>
    </>
  );
}

export default CartPreview;