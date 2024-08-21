import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/NavBar';
import { getStartedImage } from '../../Assets/images';
import './Styles.scss';
import { carbonEnergy, coveringGeoLocation, insearchFor } from '../../Assets/Icons';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <Navbar />

      <section className="promo-section">
        <div className="promo-banner">
          <div className="promo-background" />
          <h1 className="promo-title">
            <p>DRIVE YOUR DREAMS</p>
            <p>WITH OUR EXCLUSIVE DEALS</p>
          </h1>
          <h2 className="promo-subtitle">For a sustainable future</h2>
        </div>

        <div className="promo-content">
          <div className="promo-card">
            <div className="card-shadow" />
            <img className="card-image" src={getStartedImage} alt="Get Started" loading="lazy" />
            <button className="get-started-button" onClick={() => navigate('/get-started')}>
              <div className="button-background" />
              <div className="button-text">Get Started</div>
            </button>
          </div>
        </div>
      </section>
      <div className="cards-container">
      <div className="card">
        <div className="content">
          <div className="icon">
            {/* Replace with your actual icon */}
            <img src={insearchFor} alt="icon1" />
          </div>
          <div className="text">
            <h3 >In search for</h3>
            <p>Sustainable commuters</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <div className="icon">
            {/* Replace with your actual icon */}
            <img src={coveringGeoLocation} alt="icon2" />
          </div>
          <div className="text">
            <h3>Covering</h3>
            <p>Geo Locations</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <div className="icon">
            {/* Replace with your actual icon */}
            <img src={carbonEnergy} alt="icon3" />
          </div>
          <div className="text">
            <h3>Sustaining</h3>
            <p>Carbon emission</p>
          </div>
        </div>
      </div>
    </div>
    <div className="electric-rides-container">
      <h1 className="headline">100%</h1>
      <h2 className="subheadline">Electric Rides</h2>
      <p className="tagline">Reliable, Safe & Premium</p>
    </div>
    </div>
  );
};

export default Home;
