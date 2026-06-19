export default function Features() {
  const cards = [
    {
      icon: "📄",
      title: "AI Resume Analysis",
      desc: "Automatically extract skills, technologies, and experience from resumes using AI.",
    },
    {
      icon: "🎯",
      title: "Smart Job Matching",
      desc: "Match resumes with jobs using AI-powered scoring and skill analysis.",
    },
    {
      icon: "📊",
      title: "Career Insights",
      desc: "Identify skill gaps, learning paths, and job readiness instantly.",
    },
  ];

  return (
    <section
      style={{
        padding: "100px 40px",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            color: "#0f172a",
            marginBottom: "15px",
          }}
        >
          Why Choose AIHireX?
        </h1>

        <p
          style={{
            color: "#64748b",
            fontSize: "18px",
          }}
        >
          Everything you need to analyze resumes and discover opportunities.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {cards.map((item, index) => (
          <div
            key={index}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(37,99,235,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0px)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(0,0,0,0.08)";
            }}
            style={{
              background:
                "rgba(255,255,255,0.75)",
              backdropFilter: "blur(15px)",
              border:
                "1px solid rgba(255,255,255,0.4)",
              padding: "35px",
              borderRadius: "24px",
              boxShadow:
                "0 8px 20px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                fontSize: "50px",
                marginBottom: "20px",
              }}
            >
              {item.icon}
            </div>

            <h2
              style={{
                color: "#1e3a8a",
                marginBottom: "15px",
              }}
            >
              {item.title}
            </h2>

            <p
              style={{
                color: "#64748b",
                lineHeight: "1.8",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}