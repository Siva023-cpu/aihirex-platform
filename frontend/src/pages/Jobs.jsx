import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await api.get("http://localhost:8002/jobs");
      setJobs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "40px",
          background: "#f5f7fb",
          minHeight: "90vh",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2563eb",
            marginBottom: "30px",
          }}
        >
          Available Jobs
        </h1>

        {jobs.length === 0 ? (
          <p style={{ textAlign: "center" }}>No jobs found.</p>
        ) : (
          jobs.map((job) => (
            <div
              key={job.id}
              style={{
                background: "white",
                padding: "20px",
                marginBottom: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              }}
            >
              <h2>{job.title}</h2>
              <h4>{job.company}</h4>
              <p>{job.description}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}