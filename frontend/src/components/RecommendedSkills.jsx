const skillRecommendations = {
  "ci/cd": [
    "CI/CD Fundamentals",
    "Jenkins",
    "GitHub Actions",
    "Azure DevOps",
  ],

  kubernetes: [
    "Kubernetes Basics",
    "Helm",
    "Ingress",
    "EKS",
  ],

  aws: [
    "EC2",
    "S3",
    "IAM",
    "CloudFormation",
  ],

  docker: [
    "Docker Compose",
    "Docker Networking",
    "Container Security",
  ],
};

export default function RecommendedSkills({ missingSkills = [] }) {
  const recommendations = [];

  missingSkills.forEach((skill) => {
    const key = skill.toLowerCase();

    if (skillRecommendations[key]) {
      recommendations.push(...skillRecommendations[key]);
    }
  });

  const uniqueRecommendations = [...new Set(recommendations)];

  if (uniqueRecommendations.length === 0) {
    return null;
  }

  return (
    <div
      style={{
        marginTop: "25px",
        padding: "20px",
        background: "#eff6ff",
        borderRadius: "10px",
      }}
    >
      <h3>🚀 Recommended Learning</h3>

      <ul>
        {uniqueRecommendations.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}