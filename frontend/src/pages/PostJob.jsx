import { useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import PageWrapper from "../components/PageWrapper";
export default function PostJob() {
  const [loading, setLoading] = useState(false);

  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    skills: "",
    description: "",
  });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const postJob = async () => {
    if (
      !job.title ||
      !job.company ||
      !job.location ||
      !job.skills
    ) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      await api.post(
        "http://localhost:8002/jobs",
        job
      );

      alert("✅ Job Posted Successfully");

      setJob({
        title: "",
        company: "",
        location: "",
        salary: "",
        skills: "",
        description: "",
      });
    } catch (err) {
      console.error(err);
      alert("❌ Failed to post job");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg,#eff6ff,#dbeafe)",
          padding: "40px",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "auto",
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
              marginBottom: "25px",
              textAlign: "center",
            }}
          >
            💼 Post New Job
          </h1>

          <input
            name="title"
            placeholder="Job Title *"
            value={job.title}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            name="company"
            placeholder="Company *"
            value={job.company}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            name="location"
            placeholder="Location *"
            value={job.location}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            name="salary"
            placeholder="Salary"
            value={job.salary}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            name="skills"
            placeholder="Skills (comma separated) *"
            value={job.skills}
            onChange={handleChange}
            style={inputStyle}
          />

          <p
            style={{
              color: "#64748b",
              fontSize: "13px",
              marginTop: "-10px",
              marginBottom: "15px",
            }}
          >
            Example: AWS, Docker, Kubernetes,
            Terraform, Python
          </p>

          <textarea
            name="description"
            placeholder="Job Description"
            value={job.description}
            onChange={handleChange}
            rows="6"
            style={{
              ...inputStyle,
              resize: "none",
            }}
          />

          <button
            onClick={postJob}
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              background:
                "linear-gradient(135deg,#2563eb,#1d4ed8)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              cursor: loading
                ? "not-allowed"
                : "pointer",
              fontWeight: "600",
              fontSize: "16px",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading
              ? "Posting Job..."
              : "  Post Job"}
          </button>
        </div>
      </div>
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
  fontSize: "15px",
  boxSizing: "border-box",
};