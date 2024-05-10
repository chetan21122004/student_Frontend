import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Layout from './components/Layout';
import ScanQr from './components/ScanQr';
import Login from './components/login/Login';
import CreateStudentForm from './components/CreateStudentForm';
import { ListStudents } from './components/ListStudents';

const App = () => {
  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    // Perform login logic here, set isLoggedIn to true upon successful login
    setIsLoggedIn(true);
  };

  // Function to handle sign out
  const handleSignOut = () => {
    // Perform sign out logic here
    localStorage.removeItem('isLoggedIn'); // Remove the isLoggedIn key from localStorage
    setIsLoggedIn(false); // Update isLoggedIn state to false
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
    {/* <Routes>
      <Route path='/' element={<CreateStudentForm/>} />
    </Routes> */}
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
        <>
          <Layout logout={handleSignOut} />
        </>
      ) : (
        <Navigate to="/" state={{ message: 'You need to login' }} />
      )
    }
  />
</Routes>
  </Router>
  );
};
    // <Router>
    //   <Routes>
    //     <Route path='/' element={<div className=' h-screen w-screen flex items-center justify-evenly'>
    //       {/* <CreateStudentForm/>
    //       <ListStudents/> */}
    //       <Layout/>
    //     </div> } />
    //   </Routes>
    // </Router>


export default App;
