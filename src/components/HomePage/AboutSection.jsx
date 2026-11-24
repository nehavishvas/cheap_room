import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="home-about-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left: Image with Floating Stat Cards */}
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="about-image-wrapper">
              <div className="about-main-image-card">
                <img
                  src="assets/images/homeImg/homeAboutImg.png"
                  alt="Maldives Island Experience"
                  className="about-main-img"
                />
              </div>

              {/* Floating Stat Badge 1 (Top Left) */}
              <div className="about-stat-badge stat-badge-top shadow-sm">
                <div className="stat-icon-wrap">
                  <i className="fa-solid fa-star" />
                </div>
                <div className="stat-text-wrap">
                  <strong>4.9 / 5.0</strong>
                  <small>Over 1,500+ Guest Reviews</small>
                </div>
              </div>

              {/* Floating Stat Badge 2 (Bottom Right) */}
              <div className="about-stat-badge stat-badge-bottom shadow">
                <div className="stat-icon-wrap teal">
                  <i className="fa-solid fa-hotel" />
                </div>
                <div className="stat-text-wrap">
                  <strong>250+ Guesthouses</strong>
                  <small>Across 20+ Maldives Atolls</small>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content & Highlights */}
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="about-content-wrapper">
              <div className="section-badge-pill">
                <i className="fa-solid fa-compass" /> Handpicked Island Experiences
              </div>

              <h2 className="section-main-heading">
                Enjoy unforgettable experiences in our homes recommended for you
              </h2>

              <p className="about-lead-text">
                Discover the authentic charm of the Maldives without the luxury resort price tag. From cozy boutique guesthouses on local islands to beachfront bungalows overlooking turquoise lagoons, CheapRoomMV connects you directly with verified island hosts.
              </p>

              {/* 4 Feature Highlights Grid */}
              <div className="about-features-grid">
                <div className="about-feature-item">
                  <div className="feature-icon">
                    <i className="fa-solid fa-shield-halved" />
                  </div>
                  <div className="feature-info">
                    <h6>Verified Island Stays</h6>
                    <p>Every guesthouse is hand-vetted for safety, comfort, and cleanliness.</p>
                  </div>
                </div>

                <div className="about-feature-item">
                  <div className="feature-icon">
                    <i className="fa-solid fa-tag" />
                  </div>
                  <div className="feature-info">
                    <h6>Best Price Guarantee</h6>
                    <p>Direct island rates with zero hidden charges or booking fees.</p>
                  </div>
                </div>

                <div className="about-feature-item">
                  <div className="feature-icon">
                    <i className="fa-solid fa-ship" />
                  </div>
                  <div className="feature-info">
                    <h6>Airport Transfers</h6>
                    <p>Coordinated speedboat and seaplane transfers directly to your stay.</p>
                  </div>
                </div>

                <div className="about-feature-item">
                  <div className="feature-icon">
                    <i className="fa-solid fa-water" />
                  </div>
                  <div className="feature-info">
                    <h6>Curated Excursions</h6>
                    <p>Snorkel with manta rays, visit sandbanks, and explore vibrant reefs.</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="about-actions-row">
                <Link to="/about-us" className="btn-about-primary">
                  <span>Learn More About Us</span>
                  <i className="fa-solid fa-arrow-right" />
                </Link>
                <Link to="/room-list" className="btn-about-outline">
                  <span>Explore Rooms</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
