import { useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

export default function UploadResume() {
  const [file, setFile] = useState(null);

  const uploadResume = async () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await api.post(
        "http://localhost:8001/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res.data);
      alert("Resume uploaded successfully!");
    } catch (err) {
      console.log(err);
      alert("Upload failed!");
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "85vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f5f7fb",
        }}
      >
        <div
          style={{
            width: "500px",
            background: "white",
            padding: "40px",
            borderRadius: "15px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#2563eb",
              marginBottom: "25px",
            }}
          >
            Upload Resume
          </h1>

          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            style={{
              width: "100%",
              marginBottom: "20px",
            }}
          />

          <button
            onClick={uploadResume}
            style={{
              width: "100%",
              padding: "12px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Upload Resume
          </button>
        </div>
      </div>
    </>
  );
}