import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Dash() {
  const [userEmail, setUserEmail] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSessionData = async () => {
      // Retrieve the JWT token from localStorage
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("http://localhost:8000/api/session_status/", {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
        console.log("Session response:", response.data);

        if (response.data.authenticated) {
          setUserEmail(response.data.email);
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching session data:", error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchSessionData();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {userEmail ? (
        <p>Welcome, {userEmail}!</p>
      ) : (
        <p>Redirecting to login...</p>
      )}
    </div>
  );
}
