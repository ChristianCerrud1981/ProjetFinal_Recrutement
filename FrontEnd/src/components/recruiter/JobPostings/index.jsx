import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  BriefcaseIcon,
  UsersIcon,
  CalendarIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

const mockJobs = [
  {
    id: 1,
    title: "Desarrollador Frontend Senior",
    department: "Tecnología",
    location: "Remoto",
    applicants: 45,
    matchedCandidates: 12,
    daysLeft: 15,
    status: "active",
  },
  {
    id: 2,
    title: "Backend Developer",
    department: "Tecnología",
    location: "Madrid",
    applicants: 32,
    matchedCandidates: 8,
    daysLeft: 10,
    status: "active",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    department: "Diseño",
    location: "Híbrido",
    applicants: 28,
    matchedCandidates: 6,
    daysLeft: 20,
    status: "active",
  },
  // ... más trabajos mock
];

const JobPostings = ({ limit = 5 }) => {
  const [jobs] = useState(mockJobs.slice(0, limit));
  const [selectedJob, setSelectedJob] = useState(null);

  const getStatusBadge = (status) => {
    const statusStyles = {
      active: "bg-green-100 text-green-800",
      paused: "bg-yellow-100 text-yellow-800",
      closed: "bg-gray-100 text-gray-800",
    };

    const statusLabels = {
      active: "Activa",
      paused: "Pausada",
      closed: "Cerrada",
    };

    return (
      <span
        className={`px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status]}`}
      >
        {statusLabels[status]}
      </span>
    );
  };

  const handleJobAction = (jobId, action) => {
    // Aquí irían las acciones reales
    console.log(`Action ${action} for job ${jobId}`);
    setSelectedJob(null);
  };

  return (
    <div className="overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Ofertas de Empleo
        </h2>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          Ver todas
        </button>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg border border-gray-200 hover:border-blue-200 transition-colors duration-200"
          >
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-medium text-gray-900">
                      {job.title}
                    </h3>
                    <div className="relative">
                      <button
                        onClick={() =>
                          setSelectedJob(selectedJob === job.id ? null : job.id)
                        }
                        className="p-2 rounded-full hover:bg-gray-100"
                      >
                        <EllipsisVerticalIcon className="h-5 w-5 text-gray-500" />
                      </button>
                      {selectedJob === job.id && (
                        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div className="py-1">
                            <button
                              onClick={() => handleJobAction(job.id, "edit")}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Editar oferta
                            </button>
                            <button
                              onClick={() => handleJobAction(job.id, "pause")}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Pausar oferta
                            </button>
                            <button
                              onClick={() => handleJobAction(job.id, "close")}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Cerrar oferta
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                    <span>{job.department}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    {getStatusBadge(job.status)}
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <UsersIcon className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {job.applicants}
                    </div>
                    <div className="text-xs text-gray-500">Aplicantes</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <BriefcaseIcon className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {job.matchedCandidates}
                    </div>
                    <div className="text-xs text-gray-500">Matches</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {job.daysLeft} días
                    </div>
                    <div className="text-xs text-gray-500">Restantes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

JobPostings.propTypes = {
  limit: PropTypes.number,
};

export default JobPostings;
