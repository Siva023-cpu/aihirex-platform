export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Account",
      desc: "Register as a candidate or recruiter."
    },
    {
      number: "02",
      title: "Upload Resume",
      desc: "Upload your latest resume for AI analysis."
    },
    {
      number: "03",
      title: "AI Matching",
      desc: "Our AI compares your skills with job requirements."
    },
    {
      number: "04",
      title: "Get Hired",
      desc: "Apply for matching jobs instantly."
    }
  ];

  return (
    <section
      style={{
        padding: "70px 50px",
        background: "#f8fafc",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "40px" }}>
        How AIHireX Works
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        {steps.map((step) => (
          <div
            key={step.number}
            style={{
              width: "220px",
              background: "#fff",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h1 style={{ color: "#2563eb" }}>{step.number}</h1>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}