import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
