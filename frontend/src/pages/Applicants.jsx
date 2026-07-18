import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";
import PageWrapper from "../components/PageWrapper";
export default function Applicants() {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    loadApplicants();
  }, []);

  const loadApplicants = async () => {
    try {
      const res = await api.get(
        "http://localhost:8002/applications/"
      );

      setApplicants(res.data);
    } catch (err) {
      console.error("Failed to load applicants", err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await api.put(
        `http://localhost:8002/applications/${id}`,
        { status }
      );

      loadApplicants();
    } catch (err) {
      console.error("Status update failed", err);
    }
  };

  const sortedApplicants = [...applicants].sort(
    (a, b) => b.match_score - a.match_score
  );

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          padding: "40px",
          background:
            "linear-gradient(135deg,#eff6ff,#dbeafe)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              color: "#1e40af",
              marginBottom: "10px",
            }}
          >
            👥 Applicants Ranking
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "18px",
            }}
          >
            Review and manage candidates based on AI Match Score
          </p>
        </div>

        {sortedApplicants.map((candidate, index) => (
          <div
            key={candidate.id}
            style={{
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(15px)",
              padding: "25px",
              marginBottom: "20px",
              borderRadius: "20px",
              boxShadow:
                "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h2
              style={{
                color: "#1e3a8a",
              }}
            >
              {index === 0 ? "🏆 " : ""}
              #{index + 1} Applicant
            </h2>

            <p>
              <strong>Email:</strong>{" "}
              {candidate.user_email}
            </p>

            <p>
              <strong>Job:</strong>{" "}
              {candidate.job_title}
            </p>

            <p>
              <strong>Company:</strong>{" "}
              {candidate.company}
            </p>

            <span
              style={{
                background:
                  candidate.status === "Shortlisted"
                    ? "#dcfce7"
                    : candidate.status === "Rejected"
                    ? "#fee2e2"
                    : "#dbeafe",

                color:
                  candidate.status === "Shortlisted"
                    ? "#166534"
                    : candidate.status === "Rejected"
                    ? "#991b1b"
                    : "#1d4ed8",

                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              {candidate.status}
            </span>

            <h3
              style={{
                marginTop: "15px",
                color: "#2563eb",
              }}
            >
              🎯 Match Score: {candidate.match_score}%
            </h3>

            <div
              style={{
                width: "100%",
                height: "12px",
                background: "#e5e7eb",
                borderRadius: "20px",
                overflow: "hidden",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  width: `${candidate.match_score}%`,
                  height: "100%",
                  background:
                    "linear-gradient(90deg,#2563eb,#60a5fa)",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "20px",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() =>
                  updateStatus(
                    candidate.id,
                    "Shortlisted"
                  )
                }
                style={{
                  padding: "10px 18px",
                  background: "#16a34a",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                 Shortlist
              </button>

              <button
                onClick={() =>
                  updateStatus(
                    candidate.id,
                    "Rejected"
                  )
                }
                style={{
                  padding: "10px 18px",
                  background: "#dc2626",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                 Reject
              </button>

              <Link to={`/applicant/${candidate.id}`}>
                <button
                  style={{
                    padding: "10px 18px",
                    background:
                      "linear-gradient(135deg,#2563eb,#1d4ed8)",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  View Details
                </button>
              </Link>

              <Link to="/schedule-interview">
                <button
                  style={{
                    padding: "10px 18px",
                    background: "#7c3aed",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  Schedule Interview
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}