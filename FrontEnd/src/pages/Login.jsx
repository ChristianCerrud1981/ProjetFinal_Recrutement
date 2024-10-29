import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../components/common/Button/Button";
import Input from "../components/common/Input/Input";
import Card from "../components/common/Card/Card";
import Alert from "../components/common/Alert/Alert";
import Loading from "../components/common/Loading/Loading";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Aquí iría la lógica de autenticación
      console.log("Login attempt with:", formData);
      navigate("/dashboard");
    } catch (err) {
      setError(
        "Erreur de connexion. Veuillez vérifier vos informations d'identification."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card
        title="Connexion"
        description="Entrez vos informations d'identification pour accéder à"
        className="w-full max-w-md"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <Alert type="error">{error}</Alert>}

          <Input
            label="Email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
          />

          <Input
            label="Password"
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />

          <Button
            type="submit"
            variant="primary"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? <Loading size="small" /> : "Iniciar Sesión"}
          </Button>
        </form>

        <div className="mt-4 text-center">
          <Link
            to="/register"
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            Vous n'avez pas de compte ? S'inscrire
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
