import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Screens/Login';
import SignupPage from './Screens/SignUp';
import './App.css'
import Home from './Screens/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<LoginPage />} /> {/* Default to Login Page */}
      </Routes>
    </Router>
  );
};

export default App;
