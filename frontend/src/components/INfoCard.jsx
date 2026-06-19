export default function InfoCard({
  title,
  children,
}) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "15px",
        boxShadow:
          "0 4px 15px rgba(0,0,0,0.08)",
        marginBottom: "20px",
      }}
    >
      <h3
        style={{
          marginBottom: "15px",
          color: "#2563eb",
        }}
      >
        {title}
      </h3>

      {children}
    </div>
  );
}