export default function SkillGapAnalysis({ missingSkills }) {
  const descriptions = {
    "CI/CD": "Required in most DevOps pipelines.",
    Jenkins: "Popular Continuous Integration tool.",
    Terraform: "Infrastructure as Code automation.",
    Kubernetes: "Container orchestration platform.",
    AWS: "Leading cloud platform.",
    Docker: "Containerization technology."
  };

  return (
    <div
      style={{
        marginTop: "25px",
        background: "#fff7ed",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>🚨 Skill Gap Analysis</h3>

      {missingSkills.map((skill, index) => (
        <div
          key={index}
          style={{
            marginTop: "10px",
            background: "white",
            padding: "12px",
            borderRadius: "8px",
          }}
        >
          <strong>{skill}</strong>

          <p>
            {descriptions[skill] ||
              "Recommended skill for this role."}
          </p>
        </div>
      ))}
    </div>
  );
}