import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";
import PageWrapper from "../components/PageWrapper";

export default function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    skills: "",
    description: "",
  });

  useEffect(() => {
    loadJob();
  }, []);

  const loadJob = async () => {
    try {
      const res = await api.get(
        `http://localhost:8002/jobs/${id}`
      );

      setJob(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const updateJob = async () => {
    try {
      await api.put(
        `http://localhost:8002/jobs/${id}`,
        job
      );

      alert("Job Updated Successfully");
      navigate("/manage-jobs");
    } catch (err) {
      console.log(err);
      alert("Update Failed");
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
        <div
          style={{
            maxWidth: "700px",
            margin: "auto",
            background: "white",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          <h1>Edit Job</h1>

          <input
            name="title"
            value={job.title}
            onChange={handleChange}
            placeholder="Title"
            style={inputStyle}
          />

          <input
            name="company"
            value={job.company}
            onChange={handleChange}
            placeholder="Company"
            style={inputStyle}
          />

          <input
            name="location"
            value={job.location}
            onChange={handleChange}
            placeholder="Location"
            style={inputStyle}
          />

          <input
            name="salary"
            value={job.salary}
            onChange={handleChange}
            placeholder="Salary"
            style={inputStyle}
          />

          <input
            name="skills"
            value={job.skills}
            onChange={handleChange}
            placeholder="Skills"
            style={inputStyle}
          />

          <textarea
            name="description"
            value={job.description}
            onChange={handleChange}
            rows="5"
            style={inputStyle}
          />

          <button
            onClick={updateJob}
            style={{
              width: "100%",
              padding: "14px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "10px",
            }}
          >
            Update Job
          </button>
        </div>
      </div>
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
};