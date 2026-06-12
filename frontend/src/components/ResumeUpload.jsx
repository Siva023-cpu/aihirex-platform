export default function ResumeUpload() {
  return (
    <section
      style={{
        padding: "80px 50px",
        background: "#ffffff",
        textAlign: "center",
      }}
    >
      <h2>Upload Your Resume</h2>

      <p
        style={{
          color: "#666",
          marginTop: "10px",
          marginBottom: "25px",
        }}
      >
        Upload your resume and let AIHireX analyze your skills.
      </p>

      <input
        type="file"
        style={{
          marginBottom: "20px",
        }}
      />

      <br />

      <button
        style={{
          padding: "12px 25px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Upload Resume
      </button>
    </section>
  );
}