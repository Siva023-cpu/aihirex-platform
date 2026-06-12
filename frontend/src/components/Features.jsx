export default function Features() {
  const cards = [
    {
      title: "AI Resume Analysis",
      desc: "Automatically extract skills and candidate information."
    },
    {
      title: "Smart Job Matching",
      desc: "Match resumes with jobs using AI scoring."
    },
    {
      title: "Recruiter Dashboard",
      desc: "Manage applicants and hiring workflows."
    }
  ];

  return (
    <div
      style={{
        padding: "70px 60px",
        background: "#ffffff",
        textAlign: "center"
      }}
    >
      <h2 style={{ marginBottom: "50px" }}>
        Why Choose AIHireX?
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap"
        }}
      >
        {cards.map((item, index) => (
          <div
            key={index}
            style={{
              width: "300px",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              background: "#fff"
            }}
          >
            <h3>{item.title}</h3>
            <p style={{ color: "#666" }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}