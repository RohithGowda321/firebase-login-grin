import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Screens/Login';
import SignupPage from './Screens/SignUp';
import Home from './Screens/Home';
import './App.css';
import ProtectedRoute from './Components/ProtectedRoute'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/home"
          element={<ProtectedRoute element={Home} />}
        />
        <Route path="/" element={<LoginPage />} /> {/* Default to Login Page */}
      </Routes>
    </Router>
  );
};

export default App;
