import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin() {
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      return;
    }

    navigate("/home");
  }

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg,#0f172a,#1e3a8a)",
      fontFamily: "Arial, sans-serif",
    },

    card: {
      width: "380px",
      background: "#fff",
      padding: "35px",
      borderRadius: "15px",
      boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
      textAlign: "center",
    },

    title: {
      color: "#2563eb",
      fontSize: "34px",
      marginBottom: "8px",
    },

    subtitle: {
      color: "#555",
      marginBottom: "25px",
    },

    input: {
      width: "100%",
      padding: "13px",
      marginBottom: "18px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "15px",
      outline: "none",
    },

    button: {
      width: "100%",
      padding: "13px",
      background: "#2563eb",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "17px",
      fontWeight: "bold",
    },

    error: {
      color: "red",
      marginBottom: "15px",
    },

    link: {
      color: "#2563eb",
      textDecoration: "none",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>TechShop</h1>
        <h3 style={styles.subtitle}>Login</h3>

        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p style={styles.error}>{error}</p>}

        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>

        <p style={{ marginTop: "20px" }}>
          Don't have an account?{" "}
          <Link style={styles.link} to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;