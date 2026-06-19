import Navbar from "../components/Navbar";

export default function Dashboard() {
  const username =
    localStorage.getItem("username") || "Siva";

  const matchScore =
    Number(
      localStorage.getItem("last_match_score")
    ) || 100;

  const skills =
    JSON.parse(
      localStorage.getItem("resume_skills") || "[]"
    ).length;

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          padding: "40px",
          background:
            "linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb)",
        }}
      >
        {/* HERO */}

        <div
          style={{
            background:
              "rgba(255,255,255,0.12)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.2)",
            padding: "35px",
            borderRadius: "24px",
            marginBottom: "30px",
            color: "white",
            boxShadow:
              "0 10px 40px rgba(0,0,0,0.25)",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              marginBottom: "10px",
            }}
          >
            👋 Welcome Back, {username}
          </h1>

          <p
            style={{
              opacity: 0.9,
              fontSize: "18px",
            }}
          >
            AI-powered Resume Intelligence &
            Career Readiness Dashboard
          </p>
        </div>

        {/* STATS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          <div style={cardStyle}>
            <div style={iconStyle}>📄</div>
            <h3>Resumes Uploaded</h3>
            <h1>1</h1>
          </div>

          <div style={cardStyle}>
            <div style={iconStyle}>🎯</div>
            <h3>Match Score</h3>
            <h1>{matchScore}%</h1>
          </div>

          <div style={cardStyle}>
            <div style={iconStyle}>🛠</div>
            <h3>Skills Detected</h3>
            <h1>{skills}</h1>
          </div>

          <div style={cardStyle}>
            <div style={iconStyle}>🚀</div>
            <h3>Readiness</h3>
            <h1>
              {matchScore >= 80
                ? "Ready"
                : "Learning"}
            </h1>
          </div>
        </div>

        {/* PROGRESS */}

        <div
          style={{
            marginTop: "30px",
            background: "white",
            padding: "30px",
            borderRadius: "20px",
            boxShadow:
              "0 8px 25px rgba(0,0,0,0.15)",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
              color: "#2563eb",
            }}
          >
            Career Progress
          </h2>

          <div
            style={{
              width: "100%",
              height: "22px",
              background: "#e5e7eb",
              borderRadius: "30px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${matchScore}%`,
                height: "100%",
                background:
                  "linear-gradient(90deg,#2563eb,#60a5fa)",
                transition: "1s",
              }}
            />
          </div>

          <p
            style={{
              marginTop: "15px",
              fontWeight: "bold",
            }}
          >
            Overall Readiness:
            {" "}
            {matchScore}%
          </p>
        </div>

        {/* QUICK INSIGHTS */}

        <div
          style={{
            marginTop: "30px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: "20px",
          }}
        >
          <div style={insightCard}>
            <h3>🤖 AI Recommendation</h3>

            <p>
              {matchScore >= 80
                ? "Apply confidently. Your profile is highly competitive."
                : "Focus on improving missing skills and building projects."}
            </p>
          </div>

          <div style={insightCard}>
            <h3>📈 Career Growth</h3>

            <p>
              Continue strengthening DevOps,
              Cloud, Kubernetes and CI/CD
              expertise to increase opportunities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

const cardStyle = {
  background: "white",
  padding: "25px",
  borderRadius: "20px",
  textAlign: "center",
  boxShadow:
    "0 8px 25px rgba(0,0,0,0.15)",
  transition: "0.3s",
};

const iconStyle = {
  fontSize: "40px",
  marginBottom: "10px",
};

const insightCard = {
  background: "white",
  padding: "25px",
  borderRadius: "20px",
  boxShadow:
    "0 8px 25px rgba(0,0,0,0.15)",
};