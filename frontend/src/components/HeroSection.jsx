import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "120px 20px",
        background: "#f3f4f6",
        minHeight: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          color: "#2563eb",
        }}
      >
        AIHireX
      </h1>

      <h2>AI Powered Recruitment Platform</h2>

      <p style={{ marginTop: "20px", color: "#666" }}>
        Upload resumes, analyze candidates, and match jobs using AI.
      </p>

      <div style={{ marginTop: "35px" }}>
        <Link to="/register">
          <button
            style={{
              padding: "12px 25px",
              marginRight: "10px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
            }}
          >
            Get Started
          </button>
        </Link>

        <Link to="/jobs">
          <button
            style={{
              padding: "12px 25px",
              borderRadius: "8px",
            }}
          >
            Browse Jobs
          </button>
        </Link>
      </div>
    </div>
  );
}