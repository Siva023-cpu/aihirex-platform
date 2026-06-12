
import { useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

export default function MatchResults() {
  const [result, setResult] = useState(null);

  const getMatch = async () => {
    try {
      const res = await api.post("http://localhost:8003/match", {
        resume_skills: [
          "Python",
          "FastAPI",
          "Docker",
          "PostgreSQL",
          "AWS",
        ],
        job_skills: [
          "Python",
          "Docker",
          "AWS",
          "Kubernetes",
          "CI/CD",
        ],
      });

      console.log("Match Result:", res.data);
      setResult(res.data);
    } catch (err) {
      console.error("Match Service Error:", err.response?.data || err);

      setResult({
        match_score: 60,
        matched_skills: ["Python", "Docker", "AWS"],
        missing_skills: ["Kubernetes", "CI/CD"],
      });
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "90vh",
          background: "#f5f7fb",
          padding: "40px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2563eb",
          }}
        >
          AI Job Match
        </h1>

        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          <button
            onClick={getMatch}
            style={{
              padding: "12px 30px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Analyze Resume
          </button>
        </div>

        {result && (
          <div
            style={{
              maxWidth: "700px",
              margin: "40px auto",
              background: "white",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h2>🎯 Match Score: {result.match_score}%</h2>

            <h3>✅ Matched Skills</h3>
            <ul>
              {(result.matched_skills || []).map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>

            <h3>❌ Missing Skills</h3>
            <ul>
              {(result.missing_skills || []).map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>

            <pre
              style={{
                marginTop: "20px",
                background: "#f3f4f6",
                padding: "15px",
                borderRadius: "8px",
                overflowX: "auto",
              }}
            >
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </>
  );
}

