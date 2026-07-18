import Navbar from "../components/Navbar";
import PageWrapper from "../components/PageWrapper";
export default function RecruiterAnalytics() {
  const stats = [
    {
      title: "Jobs Posted",
      value: 12,
      icon: "💼",
      color: "#2563eb",
    },
    {
      title: "Applicants",
      value: 154,
      icon: "👥",
      color: "#16a34a",
    },
    {
      title: "Shortlisted",
      value: 35,
      icon: "✅",
      color: "#ca8a04",
    },
    {
      title: "Rejected",
      value: 18,
      icon: "❌",
      color: "#dc2626",
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
            "linear-gradient(135deg,#eff6ff,#dbeafe)",
        }}
      >
        {/* Header */}

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
            }}
          >
            📊 Recruiter Analytics
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "18px",
            }}
          >
            Monitor hiring performance and recruitment metrics
          </p>
        </div>

        {/* KPI Cards */}

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
                background: "white",
                padding: "25px",
                borderRadius: "20px",
                boxShadow:
                  "0 10px 25px rgba(0,0,0,0.08)",
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
                  color: item.color,
                  margin: 0,
                }}
              >
                {item.value}
              </h1>
            </div>
          ))}
        </div>

        {/* Hiring Insights */}

        <div
          style={{
            marginTop: "30px",
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
              marginBottom: "20px",
            }}
          >
            📈 Hiring Insights
          </h2>

          <p>
            Average Match Score:
            <strong> 84%</strong>
          </p>

          <p>
            Best Candidate Score:
            <strong> 92%</strong>
          </p>

          <p>
            Interview Conversion Rate:
            <strong> 34%</strong>
          </p>

          <p>
            Shortlist Rate:
            <strong> 22%</strong>
          </p>
        </div>

        {/* AI Recommendations */}

        <div
          style={{
            marginTop: "30px",
            background: "white",
            padding: "30px",
            borderRadius: "20px",
            boxShadow:
              "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              color: "#7c3aed",
            }}
          >
            🤖 AI Recommendations
          </h2>

          <ul
            style={{
              marginTop: "15px",
              lineHeight: "2",
            }}
          >
            <li>
              Increase focus on Kubernetes-skilled candidates.
            </li>

            <li>
              Top performing applicants have AWS +
              Docker + Terraform skills.
            </li>

            <li>
              Candidates scoring above 85% have a
              60% higher interview success rate.
            </li>

            <li>
              Consider creating more DevOps-focused
              job openings.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}