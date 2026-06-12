import JobCard from "./JobCard";

export default function JobsPreview() {
  const jobs = [
    {
      title: "Python Backend Developer",
      company: "TechNova",
      location: "Remote",
    },
    {
      title: "AI/ML Engineer",
      company: "AI Labs",
      location: "Hyderabad",
    },
    {
      title: "Full Stack Developer",
      company: "CloudX",
      location: "Bangalore",
    },
  ];

  return (
    <section
      style={{
        padding: "80px 50px",
        background: "#ffffff",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "40px" }}>
        Latest Job Opportunities
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        {jobs.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            company={job.company}
            location={job.location}
          />
        ))}
      </div>
    </section>
  );
}