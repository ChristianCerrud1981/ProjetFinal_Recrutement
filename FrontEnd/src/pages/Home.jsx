import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button/Button";
import Card from "../components/common/Card/Card";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Trouver le talent idéal grâce à l'IA
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Automatisez votre processus de recrutement grâce à une technologie
              de pointe
            </p>
            <div className="flex justify-center gap-4">
              <Button onClick={() => navigate("/register")} variant="primary">
                Commencer maintenant
              </Button>
              <Button onClick={() => navigate("/login")} variant="outline">
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Matching Automático"
            description="Trouver automatiquement les meilleurs candidats"
          >
            Nos algorithmes d'IA analysent les CV et les offres d'emploi pour
            trouver les meilleures correspondances.
          </Card>

          <Card
            title="Lettres de motivation"
            description="Générer instantanément des lettres personnalisées"
          >
            Il utilise l'IA pour créer des lettres de motivation parfaitement
            adaptées à chaque offre.
          </Card>

          <Card
            title="Assistant virtuel"
            description="Obtenir de l'aide en temps réel"
          >
            Chatbot intégré pour guider les candidats et les recruteurs à tout
            moment.
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
