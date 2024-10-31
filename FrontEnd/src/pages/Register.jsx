import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../components/common/Button/Button";
import Input from "../components/common/Input/Input";
import Card from "../components/common/Card/Card";
import Alert from "../components/common/Alert/Alert";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "candidate",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      // Aquí iría la lógica de registro
      console.log("Register attempt with:", formData);
      navigate("/dashboard");
    } catch (err) {
      setError(
        "Erreur lors de l'enregistrement de l'utilisateur. Veuillez réessayer."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card
        className="w-full max-w-md"
        title="Créer un compte"
        description="Saisissez vos coordonnées pour vous inscrire"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <Alert type="error">{error}</Alert>}

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Type d'utilisateur
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="userType"
                  value="candidate"
                  checked={formData.userType === "candidate"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Candidat
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="userType"
                  value="recruiter"
                  checked={formData.userType === "recruiter"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Recruteur
              </label>
            </div>
          </div>

          <Input
            label="Nom complet"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />

          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </form>
      </Card>
    </div>
  );
};

export default Register;
