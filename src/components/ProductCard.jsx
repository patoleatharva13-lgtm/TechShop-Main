function ProductCard({ name, image, price }) {
  return (
    <>
      <style>{`
        .product{
          background:#1e293b;
          border-radius:10px;
          overflow:hidden;
          color:white;
        }

        .product img{
          width:100%;
          height:220px;
          object-fit:cover;
        }

        .product h3,
        .product p{
          padding:10px;
        }

        .product button{
          margin:10px;
          padding:10px 20px;
          border:none;
          border-radius:8px;
        }
      `}</style>

      <div className="product">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{price}</p>
        <button>Add To Cart</button>
      </div>
    </>
  );
}

export default ProductCard;