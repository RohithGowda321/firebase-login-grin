import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles.scss';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Navbar = () => {
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear authentication data
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div
          className="logo"
          onClick={() => navigate('/')}
        >
          GRIN MOBILITY
        </div>
        <div className="nav-links">
          <div
            className="nav-link"
            onClick={() => navigate('/')}
          >
            Home
          </div>
          <div
            className="nav-link"
            onClick={() => navigate('/drive-with-us')}
          >
            Drive with Us
          </div>
        </div>
    
        <ExitToAppIcon className="logout-button"  onClick={handleLogout}/>
      </div>
    </div>
  );
};

export default Navbar;
