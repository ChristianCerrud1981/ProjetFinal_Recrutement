import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Page non trouvée
      </h2>
      <p className="text-gray-600 mb-8">
        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <div className="space-x-4">
        <Button onClick={() => navigate("/")} variant="primary">
          Haut de page
        </Button>
        <Button onClick={() => navigate(-1)} variant="outline">
          Retour
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
