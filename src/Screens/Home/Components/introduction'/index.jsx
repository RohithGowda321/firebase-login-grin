import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getStartedImage } from '../../../../Assets/images/index';
import './Styles.scss';

const Introduction = () => {
  const navigate = useNavigate();

  return (
    <div className="inroduction">

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
    </div>
  );
};

export default Introduction;
