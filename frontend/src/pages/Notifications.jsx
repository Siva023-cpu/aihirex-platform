import Navbar from "../components/Navbar";
import PageWrapper from "../components/PageWrapper";
export default function Notifications() {
  const notifications = [
    {
      type: "success",
      icon: "✅",
      message: "Siva Kumar has been shortlisted.",
      time: "5 mins ago",
      color: "#16a34a",
    },
    {
      type: "info",
      icon: "📅",
      message: "Interview scheduled for Rahul.",
      time: "20 mins ago",
      color: "#2563eb",
    },
    {
      type: "job",
      icon: "💼",
      message:
        "New application received for DevOps Engineer.",
      time: "1 hour ago",
      color: "#7c3aed",
    },
    {
      type: "score",
      icon: "🎯",
      message:
        "Candidate scored 92% AI Match Score.",
      time: "2 hours ago",
      color: "#f59e0b",
    },
  ];

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          padding: "40px",
          background:
            "linear-gradient(135deg,#eff6ff,#dbeafe,#ffffff)",
        }}
      >
        <div
          style={{
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              color: "#1e40af",
              marginBottom: "10px",
            }}
          >
            🔔 Notifications Center
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "18px",
            }}
          >
            Stay updated with recruiter activities and
            candidate events.
          </p>

          <div
            style={{
              marginTop: "15px",
              display: "inline-block",
              background: "#dbeafe",
              color: "#1d4ed8",
              padding: "8px 16px",
              borderRadius: "20px",
              fontWeight: "600",
            }}
          >
            {notifications.length} Notifications
          </div>
        </div>

        {notifications.map((item, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "22px",
              marginBottom: "18px",
              borderRadius: "18px",
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.08)",
              borderLeft: `5px solid ${item.color}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3
                style={{
                  margin: 0,
                  color: "#1e293b",
                }}
              >
                {item.icon} {item.message}
              </h3>
            </div>

            <span
              style={{
                color: "#64748b",
                fontSize: "14px",
              }}
            >
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}