import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px",
        background:
          "linear-gradient(135deg,#dbeafe 0%,#eff6ff 40%,#ffffff 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 18px",
            borderRadius: "30px",
            background: "#dbeafe",
            color: "#1d4ed8",
            fontWeight: "600",
            marginBottom: "20px",
          }}
        >
          🚀 AI-Powered Recruitment Platform
        </div>

        <h1
          style={{
            fontSize: "72px",
            fontWeight: "800",
            lineHeight: "1.1",
            marginBottom: "20px",
            color: "#0f172a",
          }}
        >
          Find Your Dream Job
          <br />
          With AI Precision
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#64748b",
            lineHeight: "1.8",
            maxWidth: "750px",
            margin: "0 auto",
          }}
        >
          Upload your resume, discover opportunities,
          analyze skill gaps, and get AI-powered career
          recommendations instantly.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Link to="/register">
            <button
              style={{
                padding: "16px 32px",
                background:
                  "linear-gradient(135deg,#2563eb,#1d4ed8)",
                color: "white",
                border: "none",
                borderRadius: "14px",
                fontSize: "16px",
                fontWeight: "700",
                cursor: "pointer",
                boxShadow:
                  "0 10px 25px rgba(37,99,235,0.3)",
              }}
            >
              Get Started
            </button>
          </Link>

          <Link to="/jobs">
            <button
              style={{
                padding: "16px 32px",
                background: "white",
                border: "1px solid #cbd5e1",
                borderRadius: "14px",
                fontSize: "16px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Browse Jobs
            </button>
          </Link>
        </div>

        <div
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
            gap: "50px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2 style={{ color: "#2563eb" }}>1000+</h2>
            <p>Resumes Analyzed</p>
          </div>

          <div>
            <h2 style={{ color: "#2563eb" }}>95%</h2>
            <p>Matching Accuracy</p>
          </div>

          <div>
            <h2 style={{ color: "#2563eb" }}>500+</h2>
            <p>Job Opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
}