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
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        background: "#111827",
        color: "white",
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        <h2 style={{ margin: 0 }}>AIHireX</h2>
      </Link>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{ color: "white", textDecoration: "none" }}
        >
          Home
        </Link>

        <Link
          to="/jobs"
          style={{ color: "white", textDecoration: "none" }}
        >
          Jobs
        </Link>

        <Link
          to="/upload"
          style={{ color: "white", textDecoration: "none" }}
        >
          Resume
        </Link>

        <Link
          to="/match-results"
          style={{ color: "white", textDecoration: "none" }}
        >
          AI Match
        </Link>

        {token ? (
          <>
            <Link
              to="/dashboard"
              style={{ color: "white", textDecoration: "none" }}
            >
              Dashboard
            </Link>

            <button
              onClick={logout}
              style={{
                background: "#dc2626",
                color: "white",
                border: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/register"
              style={{ color: "white", textDecoration: "none" }}
            >
              Register
            </Link>

            <Link
              to="/login"
              style={{ color: "white", textDecoration: "none" }}
            >
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}