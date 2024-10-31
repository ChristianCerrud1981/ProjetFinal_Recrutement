// External Imports
import React, { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

// Component Imports
// import JobList from "../components/JobList";  todo: component to joblist
// import CoverLetterModal from "../components/CoverLetterModal";   todo: component to Cover Letter

const CandidateDashboard = () => {
  const { user } = useAuth();
  const [recommendedJobs, setRecommendedJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coverLetter, setCoverLetter] = useState("");

  useEffect(() => {
    // Fetch recommended jobs for the candidate when component mounts
    const fetchJobs = async () => {
      try {
        const jobs = await getRecommendedJobs(user.id);
        setRecommendedJobs(jobs);
      } catch (error) {
        console.error("Error fetching recommended jobs:", error);
      }
    };
    fetchJobs();
  }, [user.id]);

  const handleGenerateCoverLetter = async (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
    try {
      const letter = await generateCoverLetter(user.id, job.id);
      setCoverLetter(letter);
    } catch (error) {
      console.error("Error generating cover letter:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCoverLetter("");
  };

  return (
    <div className="candidate-dashboard container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">
        Tableau de bord du candidat
      </h1>
      <p className="text-gray-600 mb-8">
        Bienvenue, {user.name}. Voici les offres d'emploi recommandées pour
        vous.
      </p>

      <JobList
        jobs={recommendedJobs}
        onGenerateCoverLetter={handleGenerateCoverLetter}
      />

      {/* Modale pour l'affichage de la lettre de motivation */}
      {isModalOpen && (
        <CoverLetterModal
          job={selectedJob}
          coverLetter={coverLetter}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default CandidateDashboard;
