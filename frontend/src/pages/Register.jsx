import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async () => {
    try {
      setLoading(true);

      await api.post("/register", form);

      alert("Registration Successful!");
      navigate("/login");
    } catch (err) {
      console.log(err.response?.data || err);

      alert(
        err.response?.data?.detail ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#dbeafe,#eff6ff,#ffffff)",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          background: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.4)",
          borderRadius: "24px",
          padding: "40px",
          boxShadow:
            "0 20px 40px rgba(37,99,235,0.15)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              color: "#2563eb",
              marginBottom: "10px",
              fontSize: "34px",
            }}
          >
            🚀 AIHireX
          </h1>

          <h2
            style={{
              margin: 0,
              color: "#1e293b",
            }}
          >
            Create Account
          </h2>

          <p
            style={{
              color: "#64748b",
              marginTop: "10px",
            }}
          >
            Join AI-powered recruitment platform
          </p>
        </div>

        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          style={inputStyle}
        />

        <button
          onClick={registerUser}
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            background:
              "linear-gradient(135deg,#2563eb,#1d4ed8)",
            color: "white",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "16px",
            marginTop: "10px",
          }}
        >
          {loading
            ? "Creating Account..."
            : "Create Account"}
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#64748b",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: "#2563eb",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
  outline: "none",
  fontSize: "15px",
  boxSizing: "border-box",
};