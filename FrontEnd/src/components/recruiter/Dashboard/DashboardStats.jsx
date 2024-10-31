//EXTERNAL IMPORTS
import React from "react";
import {
  UsersIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

//CONSTANTS FOR STYLES
const stats = [
  {
    name: "Candidatos Totales",
    value: "2,431",
    change: "+15%",
    changeType: "increase",
    icon: UsersIcon,
  },
  {
    name: "Ofertas Activas",
    value: "45",
    change: "+3%",
    changeType: "increase",
    icon: BriefcaseIcon,
  },
  {
    name: "Contrataciones",
    value: "159",
    change: "+18%",
    changeType: "increase",
    icon: CheckCircleIcon,
  },
  {
    name: "Tasa de Conversión",
    value: "24.5%",
    change: "+4.75%",
    changeType: "increase",
    icon: ChartBarIcon,
  },
];

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.name}</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                {stat.value}
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3">
              <stat.icon className="w-6 h-6 text-blue-600" />
            </div>
          </div>

          <div className="mt-4">
            <span
              className={`
                inline-flex items-center text-sm font-medium
                ${
                  stat.changeType === "increase"
                    ? "text-green-600"
                    : "text-red-600"
                }
              `}
            >
              {stat.change}
              {stat.changeType === "increase" ? (
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              )}
            </span>
            <span className="text-sm text-gray-500 ml-2">vs mes anterior</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
