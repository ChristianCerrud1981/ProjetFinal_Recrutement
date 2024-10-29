//EXTERNAL IMPORTS
import React, { useState } from "react";
import PropTypes from "prop-types";

//BDD TEMPORAL
const mockCandidates = [
  {
    id: 1,
    name: "Christian Oriel Cerrud",
    role: "Desarrollador Frontend",
    matchPercentage: 90,
    experience: "4 años",
    status: "pending",
    avatar: "/api/placeholder/40/40",
  },
  {
    id: 2,
    name: "Alyssia Ait Kheddache",
    role: "Desarrollador Backend",
    matchPercentage: 95,
    experience: "5 años",
    status: "reviewed",
    avatar: "/api/placeholder/40/40",
  },
  {
    id: 3,
    name: "Larry Jack Gomez Casalins",
    role: "IA Specialist",
    matchPercentage: 88,
    experience: "3 años",
    status: "reviewed",
    avatar: "/api/placeholder/40/40",
  },
];

const CandidateList = ({ limit = 5 }) => {
  const [candidates] = useState(mockCandidates.slice(0, limit));

  const getStatusBadge = (status) => {
    const statusStyles = {
      pending: "bg-yellow-100 text-yellow-800",
      reviewed: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
    };

    const statusLabels = {
      pending: "Pendiente",
      reviewed: "Revisado",
      rejected: "Rechazado",
    };

    return (
      <span
        className={`px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status]}`}
      >
        {statusLabels[status]}
      </span>
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Candidatos Recientes
        </h2>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          Ver todos
        </button>
      </div>

      <div className="space-y-4">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="flex items-center space-x-4">
              <img
                src={candidate.avatar}
                alt={candidate.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  {candidate.name}
                </h3>
                <p className="text-sm text-gray-500">{candidate.role}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">
                  {candidate.matchPercentage}% Match
                </div>
                <div className="text-sm text-gray-500">
                  {candidate.experience}
                </div>
              </div>
              {getStatusBadge(candidate.status)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

CandidateList.propTypes = {
  limit: PropTypes.number,
};

export default CandidateList;
