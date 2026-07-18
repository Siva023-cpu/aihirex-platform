import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";
import PageWrapper from "../components/PageWrapper";
export default function ApplicantDetails() {
  const { id } = useParams();
  const [applicant, setApplicant] = useState(null);

  useEffect(() => {
    loadApplicant();
  }, []);

  const loadApplicant = async () => {
    try {
      const res = await api.get(
        `http://localhost:8002/applications/${id}`
      );

      setApplicant(res.data);
    } catch (err) {
      console.error("Failed to load applicant", err);
    }
  };

  if (!applicant) {
    return (
      <>
        <Navbar />
        <div style={{ padding: "40px" }}>
          Loading applicant...
        </div>
      </>
    );
  }

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
            maxWidth: "900px",
            margin: "0 auto",
            background: "white",
            padding: "35px",
            borderRadius: "20px",
            boxShadow:
              "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h1
            style={{
              color: "#1e40af",
              marginBottom: "20px",
            }}
          >
            👤 Applicant Profile
          </h1>

          <h2>{applicant.user_email}</h2>

          <p>
            <strong>Job:</strong> {applicant.job_title}
          </p>

          <p>
            <strong>Company:</strong> {applicant.company}
          </p>

          <p>
            <strong>Match Score:</strong>{" "}
            {applicant.match_score}%
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {applicant.status}
          </p>

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              gap: "15px",
            }}
          >
            <button
              style={{
                background: "#16a34a",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
               Shortlist
            </button>

            <button
              style={{
                background: "#dc2626",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
               Reject
            </button>

            <button
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
               Download Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
}