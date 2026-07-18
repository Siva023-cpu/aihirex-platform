import { useState } from "react";
import Navbar from "../components/Navbar";
import PageWrapper from "../components/PageWrapper";
export default function InterviewScheduler() {
  const [form, setForm] = useState({
    candidate: "",
    date: "",
    time: "",
    mode: "Online",
    interviewer: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const scheduleInterview = () => {
    if (
      !form.candidate ||
      !form.date ||
      !form.time ||
      !form.interviewer
    ) {
      alert("Please fill all fields");
      return;
    }

    alert(
      `✅ Interview Scheduled

Candidate: ${form.candidate}
Date: ${form.date}
Time: ${form.time}
Mode: ${form.mode}
Interviewer: ${form.interviewer}`
    );

    setForm({
      candidate: "",
      date: "",
      time: "",
      mode: "Online",
      interviewer: "",
    });
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg,#eff6ff,#dbeafe,#ffffff)",
          padding: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "600px",
            background: "white",
            padding: "35px",
            borderRadius: "20px",
            boxShadow:
              "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <h1
            style={{
              color: "#1e40af",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            📅 Schedule Interview
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "#64748b",
              marginBottom: "25px",
            }}
          >
            Plan and manage candidate interviews.
          </p>

          <input
            type="text"
            name="candidate"
            placeholder="Candidate Name"
            value={form.candidate}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            style={inputStyle}
          />

          <select
            name="mode"
            value={form.mode}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>

          <input
            type="text"
            name="interviewer"
            placeholder="Interviewer Name"
            value={form.interviewer}
            onChange={handleChange}
            style={inputStyle}
          />

          <button
            onClick={scheduleInterview}
            style={{
              width: "100%",
              padding: "14px",
              background:
                "linear-gradient(135deg,#7c3aed,#6d28d9)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            📅 Schedule Interview
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
  fontSize: "15px",
  boxSizing: "border-box",
};