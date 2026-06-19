import { useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

export default function UploadResume() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadResume = async () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await api.post(
        "http://localhost:8001/upload",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      console.log(res.data);

      localStorage.setItem(
        "resume_skills",
        JSON.stringify(res.data.skills)
      );

      const resumeSkills = res.data.skills;

      const jobSkills = JSON.parse(
        localStorage.getItem("job_skills")
      );

      const matchRes = await api.post(
        "http://localhost:8003/match",
        {
          resume_skills: resumeSkills,
          job_skills: jobSkills,
        }
      );

      localStorage.setItem(
        "match_result",
        JSON.stringify(matchRes.data)
      );

      setLoading(false);

      window.location.href = "/match";
    } catch (err) {
      console.log(err);

      setLoading(false);

      alert("Upload failed!");
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
          background:
            "linear-gradient(135deg,#eff6ff,#dbeafe,#f8fafc)",
        }}
      >
        <div
          style={{
            width: "600px",
            background:
              "rgba(255,255,255,0.75)",
            backdropFilter: "blur(15px)",
            border:
              "1px solid rgba(255,255,255,0.4)",
            padding: "40px",
            borderRadius: "24px",
            boxShadow:
              "0 15px 40px rgba(0,0,0,0.08)",
          }}
        >
          {/* Header */}

          <div
            style={{
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            <h1
              style={{
                color: "#1e40af",
                fontSize: "38px",
                fontWeight: "800",
                marginBottom: "10px",
              }}
            >
              📄 Upload Your Resume
            </h1>

            <p
              style={{
                color: "#64748b",
                fontSize: "16px",
              }}
            >
              Let AI analyze your skills and
              compare them with job
              requirements.
            </p>
          </div>

          {/* Upload Area */}

          <div
            style={{
              border:
                "2px dashed #93c5fd",
              borderRadius: "16px",
              padding: "40px",
              textAlign: "center",
              background: "#f8fafc",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                fontSize: "50px",
                marginBottom: "10px",
              }}
            >
              ☁️
            </div>

            <h3
              style={{
                color: "#1e3a8a",
              }}
            >
              Select Resume
            </h3>

            <p
              style={{
                color: "#64748b",
                marginBottom: "15px",
              }}
            >
              Upload PDF or DOCX file
            </p>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) =>
                setFile(
                  e.target.files[0]
                )
              }
            />

            {file && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "12px",
                  background:
                    "#dcfce7",
                  color: "#166534",
                  borderRadius:
                    "10px",
                  fontWeight: "600",
                }}
              >
                ✅ {file.name}
              </div>
            )}
          </div>

          {/* Upload Button */}

          <button
            onClick={uploadResume}
            disabled={loading}
            style={{
              width: "100%",
              padding: "15px",
              background:
                "linear-gradient(135deg,#2563eb,#1d4ed8)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              cursor: loading
                ? "not-allowed"
                : "pointer",
              fontSize: "16px",
              fontWeight: "700",
              opacity:
                loading ? 0.8 : 1,
            }}
          >
            {loading
              ? "⏳ Analyzing Resume..."
              : "🚀 Analyze Resume"}
          </button>
        </div>
      </div>
    </>
  );
}