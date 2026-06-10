function Contact() {
  return (
    <>
      <style>{`
        .contact{
          background:#0f172a;
          color:white;
          min-height:100vh;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          padding:20px;
        }

        .contact h1{
          margin-bottom:20px;
        }

        .contact-box{
          background:#1e293b;
          padding:30px;
          border-radius:15px;
          width:100%;
          max-width:600px;
          box-shadow:0 4px 15px rgba(0,0,0,0.3);
        }

        .contact-box h3{
          margin-bottom:15px;
        }

        input,
        textarea{
          width:100%;
          padding:12px;
          margin-top:10px;
          border:none;
          border-radius:8px;
          outline:none;
        }

        button{
          margin-top:15px;
          padding:12px 25px;
          border:none;
          border-radius:8px;
          cursor:pointer;
          background:#38bdf8;
          color:white;
          font-weight:bold;
        }

        button:hover{
          background:#0ea5e9;
        }
      `}</style>

      <div className="contact">
        <h1>Contact Us</h1>

        <div className="contact-box">
          <h3>Get In Touch</h3>

          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <textarea
            rows="5"
            placeholder="Your Message"
          ></textarea>

          <button>Send Message</button>

          <p style={{ marginTop: "20px" }}>
            📧 support@techshop.com
          </p>

          <p>📞 +91 98765 43210</p>
        </div>
      </div>
    </>
  );
}

export default Contact;