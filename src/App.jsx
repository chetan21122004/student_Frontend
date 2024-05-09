import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './Layout';
import ScanQr from './components/ScanQr';
import Login from './components/login/Login';
import CreateStudentForm from './components/CreateStudentForm';

const App = () => {
  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Function to handle login
  const handleLogin = () => {
    // Perform login logic here, set isLoggedIn to true upon successful login
    setIsLoggedIn(true);
  };

  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      // If user is logged in, set isLoggedIn state to true
      setIsLoggedIn(true);
    }
  }, []);

  return (

  <Router>

      <Routes>
        {/* Route for login page */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              
                <Navigate to="/dashboard" />

            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        {/* Route for scan page, accessible only if logged in */}
        <Route
          path="/scan"
          element={
            isLoggedIn ? (
              <ScanQr />
            ) : (
              <Navigate to="/" state={{ message: 'You need to login' }} />
            )
          }
        />
        {/* Route for dashboard, accessible only if logged in */}
        <Route
          path="/dashboard/*"
          element={
            isLoggedIn ? (
              <Layout />
            ) : (
              <Navigate to="/" state={{ message: 'You need to login' }} />
            )
          }
        />
      </Routes>
  </Router>

  );
};

export default App;





