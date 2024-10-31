//EXTERNAL IMPORTS
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  UsersIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CogIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";

//INTERNAL IMPORTS
const menuItems = [
  { name: "Dashboard", icon: HomeIcon, path: "/recruiter/dashboard" },
  { name: "Candidatos", icon: UsersIcon, path: "/recruiter/candidates" },
  { name: "Ofertas", icon: BriefcaseIcon, path: "/recruiter/jobs" },
  { name: "Análisis", icon: ChartBarIcon, path: "/recruiter/analytics" },
  { name: "Chat IA", icon: ChatBubbleLeftIcon, path: "/recruiter/chatbot" },
  { name: "Configuración", icon: CogIcon, path: "/recruiter/settings" },
];

const RecruiterSidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-white shadow-lg h-screen flex-shrink-0">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800">Recruiter Portal</h2>
      </div>

      <nav className="mt-6">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`
                flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700
                ${
                  isActive
                    ? "bg-blue-50 text-blue-700 border-r-4 border-blue-700"
                    : ""
                }
              `}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default RecruiterSidebar;
