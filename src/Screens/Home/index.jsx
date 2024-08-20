import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/NavBar';

const Home = () => {
  const navigate = useNavigate();


  return (
    <div>
      <Navbar/>
      {/* <h1>Welcome to Home Page</h1>
      <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default Home;
