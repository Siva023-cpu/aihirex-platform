export default function AIInsights({ score }) {
  let insight = "";
  let recommendation = "";
  let nextStep = "";
  let color = "";
  let icon = "🤖";

  if (score >= 90) {
    icon = "🚀";

    insight =
      "Outstanding match. Your profile aligns extremely well with this role.";

    recommendation =
      "Apply immediately and focus on interview preparation.";

    nextStep =
      "Practice system design, DevOps scenarios, and behavioral questions.";

    color = "#dcfce7";
  } else if (score >= 70) {
    icon = "💡";

    insight =
      "Strong match. You meet most of the job requirements.";

    recommendation =
      "Strengthen a few missing skills to become a top candidate.";

    nextStep =
      "Complete one project using the missing technologies.";

    color = "#fef9c3";
  } else {
    icon = "📚";

    insight =
      "Your profile has noticeable skill gaps for this position.";

    recommendation =
      "Learn the missing skills before applying.";

    nextStep =
      "Follow the roadmap below and build hands-on projects.";

    color = "#fee2e2";
  }

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        borderRadius: "10px",
        background: color,
      }}
    >
      <h3>{icon} AI Career Insight</h3>

      <p>
        <strong>Assessment:</strong> {insight}
      </p>

      <p>
        <strong>Recommendation:</strong> {recommendation}
      </p>

      <p>
        <strong>Next Step:</strong> {nextStep}
      </p>
    </div>
  );
}