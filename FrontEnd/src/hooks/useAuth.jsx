import { useState, useContext, createContext, useEffect } from "react";

const AuthContext = createContext({
  user: null,
  loading: true,
  login: async () => {},
  logout: async () => {},
  register: async () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Aquí verificarías el token almacenado y cargarías los datos del usuario
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      // Verificar si hay un token en localStorage
      const token = localStorage.getItem("token");
      if (token) {
        // Ici, vous ferez un appel à votre API pour valider le jeton.
        // et obtenir les données de l'utilisateur
        // Pour l'instant, je vais créer une simulation
        setUser({
          id: "1",
          name: "Usuario de Prueba",
          email: "usuario@ejemplo.com",
          role: "recruiter", // o 'candidate'
        });
      }
    } catch (error) {
      console.error("Error al verificar autenticación:", error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      //  Voici l'appel API de connexion
      // simulation de connexion réussie
      const userData = {
        id: "1",
        name: "Usuario de Prueba",
        email: credentials.email,
        role: "recruiter",
      };

      // Guardar el token en localStorage
      localStorage.setItem("token", "fake-token");
      setUser(userData);
      return { success: true };
    } catch (error) {
      console.error("Error en login:", error);
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    try {
      // Aquí irían las llamadas necesarias a tu API para logout
      localStorage.removeItem("token");
      setUser(null);
      return { success: true };
    } catch (error) {
      console.error("Error en logout:", error);
      return { success: false, error: error.message };
    }
  };

  const register = async (userData) => {
    try {
      // Aquí irían las llamadas necesarias a tu API para registro
      return { success: true };
    } catch (error) {
      console.error("Error en registro:", error);
      return { success: false, error: error.message };
    }
  };

  const value = {
    user,
    loading,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};
