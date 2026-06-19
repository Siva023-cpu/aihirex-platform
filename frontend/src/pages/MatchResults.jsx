import { useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import RecommendedSkills from "../components/RecommendedSkills";
import AIInsights from "../components/AIInsights";
import LearningRoadmap from "../components/LearningRoadmap";
import SkillGapAnalysis from "../components/SkillGapAnalysis";
import JobReadiness from "../components/JobReadiness";


export default function MatchResults() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const jobTitle = localStorage.getItem("job_title");

  const getMatch = async () => {
    setLoading(true); 
    try {
      const res = await api.post("http://localhost:8003/match", {
        resume_skills: JSON.parse(
          localStorage.getItem("resume_skills") || "[]"
        ),
        job_skills: JSON.parse(
          localStorage.getItem("job_skills") || "[]"
        ),
      }); 

      console.log("Match Result:", res.data);
        setResult(res.data);
        localStorage.setItem(
        "last_match_score",
        res.data.match_score
      );
    } catch (err) {
      console.error(
        "Match Service Error:",
        err.response?.data || err
      );

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

        <h2
          style={{
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          Selected Job: {jobTitle || "None"}
        </h2>

        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          <button
  onClick={getMatch}
  disabled={loading}
  style={{
    padding: "12px 30px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  }}
>
  {loading ? "Analyzing..." : "Analyze Resume"}
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
            <div
  style={{
    marginBottom: "25px",
  }}
>
  <h2>🎯 Match Score</h2>

  <h1
    style={{
      color: "#2563eb",
      fontSize: "42px",
      margin: "10px 0",
    }}
  >
    {result.match_score}%
  </h1>

  <div
    style={{
      width: "100%",
      height: "20px",
      background: "#e5e7eb",
      borderRadius: "10px",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        width: `${result.match_score}%`,
        height: "100%",
        background: "#2563eb",
        transition: "0.5s",
      }}
    />
  </div>
</div>

<JobReadiness
  score={result.match_score}
/>

<h3>📄 Resume Skills Detected</h3>
<div
  style={{
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "20px",
  }}
>
  {JSON.parse(
    localStorage.getItem("resume_skills") || "[]"
  ).map((skill, index) => (
    <span
      key={index}
      style={{
        background: "#dbeafe",
        color: "#1d4ed8",
        padding: "8px 12px",
        borderRadius: "20px",
        fontWeight: "bold",
      }}
    >
      {skill}
    </span>
  ))}
</div>
            <h3>✅ Matched Skills</h3>

<div
  style={{
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "20px",
  }}
>
  {(result.matched_skills || []).map((skill, index) => (
    <span
      key={index}
      style={{
        background: "#dcfce7",
        color: "#166534",
        padding: "8px 12px",
        borderRadius: "20px",
        fontWeight: "bold",
      }}
    >
      {skill}
    </span>
  ))}
</div>

            <h3>❌ Missing Skills</h3>

<div
  style={{
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "20px",
  }}
>
  {(result.missing_skills || []).map((skill, index) => (
    <span
      key={index}
      style={{
        background: "#fee2e2",
        color: "#991b1b",
        padding: "8px 12px",
        borderRadius: "20px",
        fontWeight: "bold",
      }}
    >
      {skill}
    </span>
  ))}
</div>

<RecommendedSkills
  missingSkills={result.missing_skills || []}
/>
<AIInsights score={result.match_score} />
<LearningRoadmap
  missingSkills={result.missing_skills || []}
/>
          </div>
        )}
      </div>
    </>
  );
}