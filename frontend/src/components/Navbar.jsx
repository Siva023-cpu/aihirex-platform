import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 60px",
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontWeight: "800",
            fontSize: "28px",
            background:
              "linear-gradient(135deg,#2563eb,#7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          🚀 AIHireX
        </h2>
      </Link>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "25px",
        }}
      >
        <NavItem to="/" label="Home" />

        {token ? (
          <>
            <NavItem to="/dashboard" label="Dashboard" />
            <NavItem to="/jobs" label="Jobs" />
            <NavItem to="/upload" label="Resume" />
            <NavItem to="/match" label="AI Match" />
            <NavItem to="/recruiter" label="Recruiter" />

            <button
              onClick={logout}
              style={{
                background:
                  "linear-gradient(135deg,#ef4444,#dc2626)",
                color: "white",
                border: "none",
                padding: "10px 18px",
                borderRadius: "12px",
                cursor: "pointer",
                fontWeight: "600",
                boxShadow:
                  "0 8px 20px rgba(239,68,68,0.25)",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavItem to="/register" label="Register" />

            <Link
              to="/login"
              style={{
                textDecoration: "none",
              }}
            >
              <button
                style={{
                  background:
                    "linear-gradient(135deg,#2563eb,#1d4ed8)",
                  color: "white",
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontWeight: "600",
                  boxShadow:
                    "0 8px 20px rgba(37,99,235,0.25)",
                }}
              >
                Login
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

function NavItem({ to, label }) {
  return (
    <Link
      to={to}
      style={{
        color: "#334155",
        textDecoration: "none",
        fontWeight: "600",
        transition: "0.3s",
      }}
      onMouseEnter={(e) => {
        e.target.style.color = "#2563eb";
      }}
      onMouseLeave={(e) => {
        e.target.style.color = "#334155";
      }}
    >
      {label}
    </Link>
  );
}