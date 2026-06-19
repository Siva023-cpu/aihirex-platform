export default function LearningRoadmap({ missingSkills }) {
  if (!missingSkills || missingSkills.length === 0) {
    return (
      <div
        style={{
          marginTop: "20px",
          background: "#dcfce7",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h3>🚀 Excellent Match</h3>
        <p>
          Your profile already matches this job very well.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        marginTop: "25px",
        background: "#eff6ff",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>📚 Learning Roadmap</h3>

      {missingSkills.map((skill, index) => (
        <div
          key={index}
          style={{
            marginTop: "15px",
            padding: "10px",
            background: "white",
            borderRadius: "8px",
          }}
        >
          <strong>Week {index + 1}</strong>

          <p>
            Learn <b>{skill}</b>
          </p>

          <p>
            Build a mini project using {skill}
          </p>
        </div>
      ))}
    </div>
  );
}