//EXTERNAL IMPORTS
import React from "react";
import { Outlet } from "react-router-dom";

//INTERNAL IMPORTS
import RecruiterSidebar from "../components/layout/Sidebar/RecruiterSidebar";
import DashboardStats from "../components/recruiter/Dashboard/DashboardStats";
import CandidateList from "../components/recruiter/CandidateList";
import JobPostings from "../components/recruiter/JobPostings/index";
import RecentActivities from "../components/recruiter/Dashboard/RecentActivities";
const RecruiterDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <RecruiterSidebar />
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">
            Tableau de bord du recruteur
          </h1>

          {/* Statistiques générales */}
          <DashboardStats />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Liste des candidats récents */}
            <div className="bg-white rounded-lg shadow p-6">
              <CandidateList limit={5} />
            </div>

            {/* Offres d'emploi actives */}
            <div className="bg-white rounded-lg shadow p-6">
              <JobPostings limit={5} />
            </div>
          </div>

          {/* Activités récentes */}
          <div className="mt-8 bg-white rounded-lg shadow p-6">
            <RecentActivities />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
