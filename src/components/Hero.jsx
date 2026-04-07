import React from 'react';
import './Hero.css';
import { Briefcase, Mail } from 'lucide-react';
import profileImg from '../assets/img/rarapro.png';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Floating Animated Coins */}
      <div className="coin-animation coin-1">🪙</div>
      <div className="coin-animation coin-2">🪙</div>
      <div className="coin-animation coin-3">🪙</div>
      <div className="coin-animation coin-4">🪙</div>
      <div className="coin-animation coin-5">🪙</div>
      <div className="coin-animation coin-6">🪙</div>

      <div className="container hero-container">
        <div className="hero-content">
          <h2 className="hero-greeting">Portofolio Profesional</h2>
          <h1 className="hero-name">Faradina Aulia</h1>
          <h3 className="hero-title">Junior Tax Consultant & Digital Content Creator</h3>
          <p className="hero-tagline glass-card" style={{ padding: '20px', display: 'inline-block' }}>
            Membangun kepatuhan perpajakan yang strategis dengan komunikasi yang efektif. 
            Berpengalaman dalam mengelola regulasi, pelaporan, dan riset pajak untuk memastikan efisiensi dan tata kelola yang optimal.
          </p>
          <div className="hero-actions">
            <a href="#experience" className="btn btn-primary">
              <Briefcase size={20} />
              View Experience
            </a>
            <a href="#contact" className="btn btn-secondary">
              <Mail size={20} />
              Contact
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-placeholder glass-card">
            <img src={profileImg} alt="img-profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
            <div className="hero-blob"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
