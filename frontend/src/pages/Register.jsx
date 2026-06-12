import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async () => {
    try {
      console.log(api.defaults.baseURL + "/register");
      await api.post("/register", form);

      alert("Registration Successful!");
      navigate("/login");
    } catch (err) {
      console.log(err.response?.data || err);

      alert(
        err.response?.data?.detail ||
        "Registration Failed"
      );
    }
    
  };

  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "60px auto",
        padding: "30px",
        background: "white",
        borderRadius: "10px",
        boxShadow: "0 5px 15px rgba(0,0,0,.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#2563eb",
          marginBottom: "20px",
        }}
      >
        Create Account
      </h2>

      <input
        name="username"
        placeholder="Username"
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          margin: "10px 0",
        }}
      />

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          margin: "10px 0",
        }}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          margin: "10px 0",
        }}
      />

      <button
        onClick={registerUser}
        style={{
          width: "100%",
          padding: "12px",
          background: "#16a34a",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Register
      </button>
    </div>
  );
}