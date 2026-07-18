import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
export default function RecruiterDashboard() {
  const stats = [
    {
      title: "Jobs Posted",
      value: "12",
      icon: "💼",
    },
    {
      title: "Applicants",
      value: "154",
      icon: "👥",
    },
    {
      title: "Shortlisted",
      value: "35",
      icon: "✅",
    },
    {
      title: "Interviews",
      value: "12",
      icon: "🎯",
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
        {/* Hero Section */}

        <div
          style={{
            background:
              "rgba(255,255,255,0.75)",
            backdropFilter: "blur(15px)",
            borderRadius: "24px",
            padding: "35px",
            marginBottom: "30px",
            boxShadow:
              "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h1
            style={{
              margin: 0,
              color: "#1e40af",
              fontSize: "38px",
            }}
          >
            🚀 Recruiter Dashboard
          </h1>

          <p
            style={{
              color: "#64748b",
              marginTop: "10px",
              fontSize: "16px",
            }}
          >
            Manage jobs, applicants, and AI-powered
            candidate rankings.
          </p>

          <Link to="/post-job">
            <button
              style={{
                marginTop: "20px",
                padding: "12px 22px",
                background:
                  "linear-gradient(135deg,#2563eb,#1d4ed8)",
                color: "white",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
               Post New Job
            </button>
          </Link>
          <Link to="/applicants">
  <button
    style={{
      marginLeft: "10px",
      padding: "12px 22px",
      background:
        "linear-gradient(135deg,#16a34a,#15803d)",
      color: "white",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
      fontWeight: "600",
    }}
  >
    View Applicants
  </button>
</Link>
<Link to="/manage-jobs">
  <button
    style={{
      marginLeft: "10px",
      padding: "12px 22px",
      background:
        "linear-gradient(135deg,#2563eb,#1d4ed8)",
      color: "white",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
    }}
  >
    Manage Jobs
  </button>
</Link>

<Link to="/recruiter-analytics">
  <button
    style={{
      marginLeft: "10px",
      padding: "12px 22px",
      background:
        "linear-gradient(135deg,#7c3aed,#6d28d9)",
      color: "white",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
      fontWeight: "600",
    }}
  >
    Analytics
  </button>
</Link>  
<Link to="/notifications">
  <button
    style={{
      marginLeft: "10px",
      padding: "12px 22px",
      background:
        "linear-gradient(135deg,#f59e0b,#d97706)",
      color: "white",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
      fontWeight: "600",
    }}
  >
     Notifications
  </button>
</Link>
      </div>

        {/* Stats */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          {stats.map((item, index) => (
            <div
              key={index}
              style={{
                background:
                  "rgba(255,255,255,0.85)",
                backdropFilter: "blur(10px)",
                padding: "25px",
                borderRadius: "20px",
                boxShadow:
                  "0 10px 25px rgba(0,0,0,0.08)",
                transition: "0.3s",
              }}
            >
              <h2>{item.icon}</h2>

              <h3
                style={{
                  color: "#475569",
                }}
              >
                {item.title}
              </h3>

              <h1
                style={{
                  color: "#2563eb",
                  margin: 0,
                }}
              >
                {item.value}
              </h1>
            </div>
          ))}
        </div>

        {/* Recent Activity */}

        <div
          style={{
            marginTop: "35px",
            background: "white",
            padding: "30px",
            borderRadius: "20px",
            boxShadow:
              "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              color: "#1e40af",
            }}
          >
            📈 Recent Activity
          </h2>

          <div
            style={{
              marginTop: "20px",
            }}
          >
            <p>
              ✅ 12 new applications received today
            </p>

            <p>
              🎯 4 candidates shortlisted
            </p>

            <p>
              💼 2 new jobs posted this week
            </p>

            <p>
              📅 3 interviews scheduled
            </p>
          </div>
        </div>
      </div>
    </>
  );
}