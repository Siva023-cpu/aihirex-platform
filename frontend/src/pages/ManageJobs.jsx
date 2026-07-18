import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";
import PageWrapper from "../components/PageWrapper";
export default function ManageJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await api.get(
        "http://localhost:8002/jobs"
      );

      setJobs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteJob = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this job?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(
        `http://localhost:8002/jobs/${id}`
      );

      fetchJobs();

      alert("Job Deleted Successfully");
    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          padding: "40px",
          background:
            "linear-gradient(135deg,#eff6ff,#dbeafe)",
        }}
      >
        <h1
          style={{
            color: "#1e40af",
            marginBottom: "30px",
          }}
        >
          📋 Manage Jobs
        </h1>

        {jobs.length === 0 ? (
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "18px",
              textAlign: "center",
            }}
          >
            No jobs found.
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gap: "20px",
            }}
          >
            {jobs.map((job) => (
              <div
                key={job.id}
                style={{
                  background: "white",
                  padding: "25px",
                  borderRadius: "18px",
                  boxShadow:
                    "0 8px 20px rgba(0,0,0,0.08)",
                }}
              >
                <h2>{job.title}</h2>

                <p>
                  <strong>Company:</strong>{" "}
                  {job.company}
                </p>

                <p>
                  <strong>Location:</strong>{" "}
                  {job.location}
                </p>

                <p>
                  <strong>Salary:</strong>{" "}
                  {job.salary}
                </p>

                <p>
                  <strong>Skills:</strong>{" "}
                  {job.skills}
                </p>

                <div
                  style={{
                    marginTop: "15px",
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  <Link
                    to={`/edit-job/${job.id}`}
                  >
                    <button
                      style={{
                        padding: "10px 18px",
                        background: "#2563eb",
                        color: "white",
                        border: "none",
                        borderRadius: "10px",
                        cursor: "pointer",
                      }}
                    >
                       Edit
                    </button>
                  </Link>

                  <button
                    onClick={() =>
                      deleteJob(job.id)
                    }
                    style={{
                      padding: "10px 18px",
                      background: "#dc2626",
                      color: "white",
                      border: "none",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                  >
                     Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}