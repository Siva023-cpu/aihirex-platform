import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = async () => {
    try {
      const data = new URLSearchParams();

      data.append("username", form.email);
      data.append("password", form.password);

      const res = await api.post("/login", data, {
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
      });

      localStorage.setItem(
        "token",
        res.data.access_token || res.data.token
      );

      navigate("/dashboard");
    } catch (err) {
      console.log(err.response?.data || err);
      alert("Login Failed");
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
          width: "450px",
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(20px)",
          padding: "40px",
          borderRadius: "24px",
          boxShadow:
            "0 20px 50px rgba(0,0,0,0.08)",
          border:
            "1px solid rgba(255,255,255,0.4)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              color: "#2563eb",
              marginBottom: "10px",
            }}
          >
            Welcome Back 👋
          </h1>

          <p
            style={{
              color: "#64748b",
              marginBottom: "25px",
            }}
          >
            Sign in to continue to AIHireX
          </p>
        </div>

        <input
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #cbd5e1",
            marginBottom: "15px",
            fontSize: "15px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #cbd5e1",
            marginBottom: "20px",
            fontSize: "15px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={loginUser}
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "12px",
            background:
              "linear-gradient(135deg,#2563eb,#1d4ed8)",
            color: "white",
            fontWeight: "700",
            fontSize: "16px",
            cursor: "pointer",
            boxShadow:
              "0 10px 25px rgba(37,99,235,0.25)",
          }}
        >
          Login
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#64748b",
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{
              color: "#2563eb",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}