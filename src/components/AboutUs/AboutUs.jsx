import React from 'react';
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import FooterCopyRight from "../FooterCopyRight";

const AboutUs = () => {
  return (
    <div className="about-us-page-wrapper">
      <Header />

      {/* Compact Image Breadcrumbs Section */}
      <section className="breadcrumbs-main-info-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="breadcrumbs-main-content">
                <h2>About Us</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i className="fas fa-angle-right" />
                  </li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Welcome to CheapRoomMV */}
      <section className="about-welcome-section">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left: Image with floating stat cards */}
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="about-welcome-image-wrap">
                <div className="welcome-main-img-card">
                  <img
                    src="assets/images/aboutsImg/welcomeImgWeb.png"
                    alt="Welcome to Cheap RoomsMV"
                    className="welcome-main-img"
                  />
                </div>

                {/* Floating Rating Badge */}
                <div className="floating-stat-pill top-pill shadow-sm">
                  <div className="pill-icon star">
                    <i className="fa-solid fa-star" />
                  </div>
                  <div className="pill-text">
                    <strong>4.9 / 5.0 Rating</strong>
                    <small>1,500+ Verified Reviews</small>
                  </div>
                </div>

                {/* Floating Verified Badge */}
                <div className="floating-stat-pill bottom-pill shadow">
                  <div className="pill-icon check">
                    <i className="fa-solid fa-shield-halved" />
                  </div>
                  <div className="pill-text">
                    <strong>100% Verified Hosts</strong>
                    <small>Direct Island Partnerships</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Narrative & Key Checkpoints */}
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="about-welcome-content">
                <div className="section-pill-tag">
                  <i className="fa-solid fa-palm-tree" /> Welcome to Cheap RoomsMV
                </div>
                <h2 className="about-heading-title">
                  Discover Affordable Comfort in the Heart of the Maldives
                </h2>
                <p className="about-lead-desc">
                  At <strong>Cheap RoomsMV</strong>, we believe that experiencing the world’s most breathtaking tropical paradise shouldn’t come with an exorbitant price tag. Founded by passionate local island travel specialists, we connect global travelers directly with hand-picked, budget-friendly guesthouses and beachfront villas.
                </p>
                <p className="about-secondary-desc">
                  Whether you're a couple planning a romantic holiday, a family seeking safe tropical adventures, or a backpacker eager to dive with whale sharks and manta rays, we make your dream trip a reality at direct, honest prices.
                </p>

                {/* Checklist with Teal Icons */}
                <ul className="about-check-list">
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    <span>Direct partnerships with verified local island guesthouses</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    <span>Transparent pricing with zero hidden booking surcharges</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    <span>Seamless speedboat &amp; seaplane transfer coordination</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    <span>Warm Maldivian hospitality &amp; authentic cultural dining</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    <span>Dedicated 24/7 Island Concierge support on WhatsApp &amp; phone</span>
                  </li>
                </ul>

                {/* Action Buttons */}
                <div className="about-btn-row">
                  <Link to="/room-list" className="btn-about-teal">
                    <span>Explore Island Rooms</span>
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                  <Link to="/contact-us" className="btn-about-secondary">
                    <span>Contact Our Team</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Who We Are / Mission & Vision */}
      <section className="about-mission-section">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left: Mission & Vision Cards */}
            <div className="col-xl-6 col-lg-6 col-md-12 order-lg-1 order-2">
              <div className="about-mission-content">
                <div className="section-pill-tag">
                  <i className="fa-solid fa-users" /> Who We Are
                </div>
                <h2 className="about-heading-title">
                  Empowering Local Island Tourism Across 20+ Atolls
                </h2>
                <p className="about-mission-lead">
                  CheapRoomMV is dedicated to community-driven, sustainable tourism. By booking through our platform, over 90% of your travel spend directly benefits local island families, schools, and small businesses.
                </p>

                {/* Mission Card */}
                <div className="mission-vision-card shadow-sm">
                  <div className="mv-icon-box mission">
                    <img src="assets/images/flatIcon/mission.png" alt="Our Mission" />
                  </div>
                  <div className="mv-text-box">
                    <h4>Our Mission</h4>
                    <p>
                      To make authentic Maldivian travel accessible and affordable for travelers worldwide while uplifting local island economies through seamless, transparent booking technology.
                    </p>
                  </div>
                </div>

                {/* Vision Card */}
                <div className="mission-vision-card shadow-sm">
                  <div className="mv-icon-box vision">
                    <img src="assets/images/flatIcon/vission.png" alt="Our Vision" />
                  </div>
                  <div className="mv-text-box">
                    <h4>Our Vision</h4>
                    <p>
                      To be the Indian Ocean’s most trusted and celebrated local travel platform, renowned for authentic hospitality, eco-conscious island exploration, and uncompromised quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Who We Are Image */}
            <div className="col-xl-6 col-lg-6 col-md-12 order-lg-2 order-1">
              <div className="about-mission-image-wrap">
                <div className="mission-main-img-card shadow">
                  <img
                    src="assets/images/aboutsImg/whoWeAreImg.png"
                    alt="Who We Are - Cheap RoomsMV"
                    className="mission-main-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Us (What Makes Us Different) */}
      <section className="about-why-choose-section">
        <div className="container">
          <div className="section-center-header text-center">
            <div className="section-pill-tag">
              <i className="fa-solid fa-award" /> Why Choose Us
            </div>
            <h2 className="about-heading-title text-center">
              What Makes Cheap RoomsMV Different
            </h2>
            <p className="about-center-subtitle">
              Designed specifically for travelers who seek authentic island adventures with peace of mind.
            </p>
          </div>

          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="why-card-box shadow-sm">
                <div className="why-icon-circle">
                  <i className="fa-solid fa-house-chimney-user" />
                </div>
                <h5>Curated Island Selection</h5>
                <p>
                  Personally vetted guesthouses, beachfront rooms, and overwater suites across 20+ Maldives atolls.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="why-card-box shadow-sm">
                <div className="why-icon-circle">
                  <i className="fa-solid fa-hand-holding-dollar" />
                </div>
                <h5>Best Price Guarantee</h5>
                <p>
                  Direct host rates with zero middleman commissions or hidden booking surcharges.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="why-card-box shadow-sm">
                <div className="why-icon-circle">
                  <i className="fa-solid fa-shield-halved" />
                </div>
                <h5>100% Verified Stays</h5>
                <p>
                  Strict quality, cleanliness, air-conditioning, and hygiene standards ensure complete comfort.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="why-card-box shadow-sm">
                <div className="why-icon-circle">
                  <i className="fa-solid fa-ship" />
                </div>
                <h5>Island Transfer Assistance</h5>
                <p>
                  Coordinated speedboat, domestic flight, and ferry schedules right from Malé Airport.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="why-card-box shadow-sm">
                <div className="why-icon-circle">
                  <i className="fa-solid fa-water" />
                </div>
                <h5>Curated Island Excursions</h5>
                <p>
                  Snorkel with whale sharks in Dhigurah, manta rays in Baa Atoll, and visit secluded sandbanks.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="why-card-box shadow-sm">
                <div className="why-icon-circle">
                  <i className="fa-solid fa-headset" />
                </div>
                <h5>24/7 Island Concierge</h5>
                <p>
                  Dedicated support on WhatsApp, phone, and email before, during, and after your Maldives journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: What We Offer (Our Commitments) */}
      <section className="about-commitments-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="commitments-image-card shadow">
                <img
                  src="assets/images/aboutsImg/milaidhoo-maldives.jpg"
                  alt="Maldives Quality Hospitality"
                  className="commitments-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "assets/images/aboutsImg/welcomeImgWeb.png";
                  }}
                />
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="commitments-content-wrap">
                <div className="section-pill-tag">
                  <i className="fa-solid fa-star" /> What We Offer
                </div>
                <h2 className="about-heading-title">
                  Delivering Excellence in Every Island Stay
                </h2>
                <p className="commitments-lead">
                  Service quality in the hospitality industry is our highest priority. We work hand-in-hand with island guesthouse owners to deliver an exceptional guest experience.
                </p>

                {/* Commitment 1 */}
                <div className="commitment-item-card shadow-sm">
                  <div className="commitment-icon-wrap">
                    <img src="assets/images/flatIcon/quality.png" alt="Service Quality" />
                  </div>
                  <div className="commitment-text">
                    <h4>Uncompromising Service Quality</h4>
                    <p>
                      Continuous quality audits and guest feedback ensure every room meets high standards of comfort, cleanliness, and amenities.
                    </p>
                  </div>
                </div>

                {/* Commitment 2 */}
                <div className="commitment-item-card shadow-sm">
                  <div className="commitment-icon-wrap">
                    <img src="assets/images/flatIcon/staff.png" alt="Friendly Staff" />
                  </div>
                  <div className="commitment-text">
                    <h4>Friendly &amp; Caring Hosts</h4>
                    <p>
                      Experience heartfelt Maldivian hospitality. Your local hosts are ready to welcome you with personalized island itineraries and care.
                    </p>
                  </div>
                </div>

                {/* Commitment 3 */}
                <div className="commitment-item-card shadow-sm">
                  <div className="commitment-icon-wrap">
                    <img src="assets/images/flatIcon/customer.png" alt="Customer Satisfaction" />
                  </div>
                  <div className="commitment-text">
                    <h4>100% Customer Satisfaction</h4>
                    <p>
                      Flexible cancellation policies, secure payment options, and transparent communication ensure complete peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Mobile App Banner */}
      <section className="about-app-download-section">
        <div className="container">
          <div className="app-download-banner-card shadow-lg">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-7 col-md-12">
                <div className="app-content-box">
                  <span className="app-pill-badge">
                    <i className="fa-solid fa-mobile-screen-button" /> Mobile App Experience
                  </span>
                  <h2 className="app-banner-title">
                    Book Your Island Paradise On The Go
                  </h2>
                  <p className="app-banner-desc">
                    Plan your Maldives vacation anywhere, anytime. Download the official CheapRoomMV app to explore 250+ rooms, receive real-time speedboat transfer updates, and chat directly with your host.
                  </p>

                  <div className="app-feature-pills">
                    <span className="app-feature-pill">
                      <i className="fa-solid fa-bolt text-teal" /> Instant Offline Access
                    </span>
                    <span className="app-feature-pill">
                      <i className="fa-solid fa-comment-dots text-teal" /> Direct Host Chat
                    </span>
                    <span className="app-feature-pill">
                      <i className="fa-solid fa-percent text-teal" /> App-Exclusive Discounts
                    </span>
                  </div>

                  <div className="app-store-badges-row">
                    <a
                      href="https://play.google.com/store/games?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="store-btn-link"
                    >
                      <img src="assets/images/appImg/google-play-new.png" alt="Get it on Google Play" />
                    </a>
                    <a
                      href="https://www.apple.com/app-store/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="store-btn-link"
                    >
                      <img src="assets/images/appImg/app-store-new.png" alt="Download on App Store" />
                    </a>
                  </div>

                  <small className="app-disclaimer-text">
                    * Available on iPhone, iPad, and all Android smartphones &amp; tablets.
                  </small>
                </div>
              </div>

              <div className="col-xl-5 col-lg-5 col-md-12 text-center">
                <div className="app-mockup-wrapper">
                  <img
                    src="assets/images/appImg/welcome-mockup.png"
                    alt="Cheap RoomsMV App Preview"
                    className="app-phone-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="about-bottom-cta-section">
        <div className="container">
          <div className="bottom-cta-card text-center">
            <h2>Ready to Experience the Magic of the Maldives?</h2>
            <p>
              Discover handpicked island rooms and beachfront guesthouses starting from just $45 / night.
            </p>
            <div className="cta-actions">
              <Link to="/room-list" className="btn-cta-primary">
                <span>Search Available Rooms</span>
                <i className="fa-solid fa-arrow-right" />
              </Link>
              <Link to="/contact-us" className="btn-cta-secondary">
                <span>Talk to an Island Specialist</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FooterCopyRight />
    </div>
  );
};

export default AboutUs;
