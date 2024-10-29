import React from "react";
import {
  UserPlusIcon,
  DocumentCheckIcon,
  ChatBubbleLeftIcon,
  DocumentTextIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

const activities = [
  {
    id: 1,
    type: "new_candidate",
    content: 'Nuevo candidato aplicó para "Desarrollador Frontend Senior"',
    timestamp: "2 minutos atrás",
    icon: UserPlusIcon,
    iconBackground: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    type: "interview_scheduled",
    content: 'Entrevista programada con María García para "UX Designer"',
    timestamp: "1 hora atrás",
    icon: DocumentCheckIcon,
    iconBackground: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: 3,
    type: "message",
    content:
      'Nuevo mensaje de Carlos Rodríguez sobre la oferta de "Backend Developer"',
    timestamp: "3 horas atrás",
    icon: ChatBubbleLeftIcon,
    iconBackground: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    id: 4,
    type: "job_posted",
    content: 'Nueva oferta publicada: "DevOps Engineer"',
    timestamp: "5 horas atrás",
    icon: BriefcaseIcon,
    iconBackground: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: 5,
    type: "cv_updated",
    content: "Ana Martínez actualizó su CV",
    timestamp: "1 día atrás",
    icon: DocumentTextIcon,
    iconBackground: "bg-pink-100",
    iconColor: "text-pink-600",
  },
];

const RecentActivities = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Actividad Reciente
        </h2>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          Ver todo
        </button>
      </div>

      <div className="flow-root">
        <ul className="-mb-8">
          {activities.map((activity, activityIdx) => (
            <li key={activity.id}>
              <div className="relative pb-8">
                {activityIdx !== activities.length - 1 ? (
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span
                      className={`
                        h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white
                        ${activity.iconBackground}
                      `}
                    >
                      <activity.icon
                        className={`h-5 w-5 ${activity.iconColor}`}
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-800">
                        {activity.content}
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime={activity.timestamp}>
                        {activity.timestamp}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentActivities;
