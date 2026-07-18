import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import RecruiterDashboard from "./pages/RecruiterDashboard";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UploadResume from "./pages/UploadResume";
import Jobs from "./pages/Jobs";
import MatchResults from "./pages/MatchResults";
import PostJob from "./pages/PostJob";
import Applicants from "./pages/Applicants";
import ManageJobs from "./pages/ManageJobs";
import ApplicantDetails from "./pages/ApplicantDetails";
import RecruiterAnalytics from "./pages/RecruiterAnalytics";
import InterviewScheduler from "./pages/InterviewScheduler";
import Notifications from "./pages/Notifications";
import EditJob from "./pages/EditJob";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<UploadResume />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/match" element={<MatchResults />} />
        <Route path="/recruiter" element={<RecruiterDashboard />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/applicants" element={<Applicants />} />
        <Route path="/manage-jobs" element={<ManageJobs />} />
        <Route path="/applicant/:id" element={<ApplicantDetails />} />
        <Route
          path="/recruiter-analytics"
          element={<RecruiterAnalytics />}
        />
        <Route
          path="/schedule-interview"
          element={<InterviewScheduler />}
        />
        <Route
          path="/notifications"
          element={<Notifications />}
        />
        <Route path="/edit-job/:id" element={<EditJob />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;