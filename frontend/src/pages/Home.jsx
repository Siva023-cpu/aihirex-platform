import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import JobsPreview from "../components/JobsPreview";
import ResumeUpload from "../components/ResumeUpload";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <JobsPreview />
      <ResumeUpload />
      <Footer />
    </>
  );
}