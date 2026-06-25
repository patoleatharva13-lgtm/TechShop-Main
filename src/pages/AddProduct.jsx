import { useState } from "react";
import { supabase } from "../supabase";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const { error } = await supabase
      .from("product")
      .insert([
        {
          name,
          price,
          image,
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Product Added Successfully");

    setName("");
    setPrice("");
    setImage("");
  }

  return (
    <>
      <style>{`
        .add-page{
          min-height:100vh;
          background:#0f172a;
          display:flex;
          justify-content:center;
          align-items:center;
          padding:40px 20px;
        }

        .form-container{
          width:100%;
          max-width:500px;
          background:#1e293b;
          padding:35px;
          border-radius:15px;
          box-shadow:0 4px 20px rgba(0,0,0,0.3);
        }

        .form-container h1{
          color:white;
          text-align:center;
          margin-bottom:25px;
        }

        .form-group{
          margin-bottom:20px;
        }

        .form-group input{
          width:100%;
          padding:14px;
          border:none;
          border-radius:8px;
          outline:none;
          font-size:16px;
          background:#334155;
          color:white;
          box-sizing:border-box;
        }

        .form-group input::placeholder{
          color:#cbd5e1;
        }

        .submit-btn{
          width:100%;
          padding:14px;
          border:none;
          border-radius:8px;
          background:#38bdf8;
          color:white;
          font-size:16px;
          font-weight:bold;
          cursor:pointer;
          transition:0.3s;
        }

        .submit-btn:hover{
          background:#0ea5e9;
          transform:translateY(-2px);
        }
      `}</style>

      <div className="add-page">
        <div className="form-container">
          <h1>Add Product</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />
            </div>

            <button className="submit-btn" type="submit">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddProduct;