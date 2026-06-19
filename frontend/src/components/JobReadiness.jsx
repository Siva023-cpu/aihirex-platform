export default function JobReadiness({ score }) {
  let status = "";
  let color = "";

  if (score >= 80) {
    status = "Ready to Apply";
    color = "#16a34a";
  } else if (score >= 60) {
    status = "Almost Ready";
    color = "#ca8a04";
  } else {
    status = "Needs Improvement";
    color = "#dc2626";
  }

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        borderRadius: "10px",
        border: `2px solid ${color}`,
      }}
    >
      <h3>🚀 Job Readiness</h3>

      <h1 style={{ color }}>
        {status}
      </h1>
    </div>
  );
}