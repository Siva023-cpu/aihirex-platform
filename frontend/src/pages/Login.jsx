import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

    // If your backend logs in with email:
    data.append("username", form.email);

    // If it logs in with username instead,
    // change form.email to form.username.
    data.append("password", form.password);

    const res = await api.post("/login", data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    localStorage.setItem(
      "token",
      res.data.access_token || res.data.token
    );

    console.log(res.data);

    navigate("/dashboard");
  } catch (err) {
    console.log(err.response?.data || err);
    alert("Login Failed");
  }
};

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "60px auto",
        padding: "30px",
        boxShadow: "0 5px 15px rgba(0,0,0,.1)",
        borderRadius: "10px",
        background: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#2563eb",
        }}
      >
        Login
      </h2>

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
        onClick={loginUser}
        style={{
          width: "100%",
          padding: "12px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
}