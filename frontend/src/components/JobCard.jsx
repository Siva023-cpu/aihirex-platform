export default function JobCard({ title, company, location }) {
  return (
    <div
      style={{
        width: "300px",
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
      }}
    >
      <h3>{title}</h3>
      <p><b>Company:</b> {company}</p>
      <p><b>Location:</b> {location}</p>

      <button
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Apply
      </button>
    </div>
  );
}