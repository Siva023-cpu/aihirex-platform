import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await api.get("http://localhost:8002/jobs");
      setJobs(res.data);
    } catch (err) {
      console.error("Failed to load jobs", err);
    }
  };

  const selectJob = (job) => {
    localStorage.setItem("job_id", job.id);

    localStorage.setItem(
      "job_skills",
      JSON.stringify(
        job.skills.split(",").map((s) => s.trim())
      )
    );

    localStorage.setItem("job_title", job.title);

    window.location.href = "/upload";
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          padding: "40px",
          background:
            "linear-gradient(135deg,#eff6ff,#dbeafe,#f8fafc)",
        }}
      >
        {/* Hero Section */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <h1
            style={{
              fontSize: "46px",
              fontWeight: "800",
              color: "#1e40af",
              marginBottom: "10px",
            }}
          >
            🚀 Discover Your Next Opportunity
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "18px",
            }}
          >
            Browse AI-powered job opportunities
            matched to your skills
          </p>

          <div
            style={{
              marginTop: "20px",
              display: "inline-block",
              background: "white",
              padding: "10px 20px",
              borderRadius: "999px",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.08)",
              fontWeight: "600",
              color: "#2563eb",
            }}
          >
            {jobs.length} Opportunities Available
          </div>
        </div>

        {/* Jobs Grid */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(350px,1fr))",
            gap: "25px",
          }}
        >
          {jobs.map((job) => (
            <div
              key={job.id}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(37,99,235,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0,0,0,0.08)";
              }}
              style={{
                background:
                  "rgba(255,255,255,0.75)",
                backdropFilter: "blur(15px)",
                border:
                  "1px solid rgba(255,255,255,0.4)",
                padding: "24px",
                borderRadius: "20px",
                boxShadow:
                  "0 8px 20px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
              }}
            >
              <h2
                style={{
                  color: "#1e3a8a",
                  marginBottom: "15px",
                }}
              >
                {job.title}
              </h2>

              <p>
                <strong>🏢 Company:</strong>{" "}
                {job.company}
              </p>

              <p>
                <strong>📍 Location:</strong>{" "}
                {job.location}
              </p>

              <p>
                <strong>💰 Salary:</strong>{" "}
                {job.salary}
              </p>

              <h4
                style={{
                  marginTop: "20px",
                  color: "#334155",
                }}
              >
                Description
              </h4>

              <p
                style={{
                  color: "#64748b",
                  lineHeight: "1.6",
                }}
              >
                {job.description}
              </p>

              <h4
                style={{
                  marginTop: "20px",
                  color: "#334155",
                }}
              >
                Required Skills
              </h4>

              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap",
                  marginTop: "10px",
                }}
              >
                {job.skills
                  ?.split(",")
                  .map((skill, index) => (
                    <span
                      key={index}
                      style={{
                        background: "#dbeafe",
                        color: "#1d4ed8",
                        padding: "8px 12px",
                        borderRadius: "20px",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      {skill.trim()}
                    </span>
                  ))}
              </div>

              <button
                onClick={() => selectJob(job)}
                style={{
                  marginTop: "25px",
                  width: "100%",
                  padding: "14px",
                  background:
                    "linear-gradient(135deg,#2563eb,#1d4ed8)",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                Apply & Analyze Match →
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}