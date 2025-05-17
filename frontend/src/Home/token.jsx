import { useState, useEffect, useRef } from "react";

const useTokenVerify = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const hasVerified = useRef(false); // 🛡️ Guards from repeat calls

  useEffect(() => {
    if (hasVerified.current) return; // ✅ Only run once
    hasVerified.current = true;

    const verifyToken = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("http://localhost:3000/auth/homepage", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok && data.username) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (err) {
        console.error("Token verification error:", err);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, []);

  return { isAuthenticated, loading };
};

export default useTokenVerify;
