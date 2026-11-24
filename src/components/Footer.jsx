import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <footer className="footer-detail-info-area simple-teal-footer">
        <div className="container">
          <div className="row gy-4">
            {/* Column 1: Brand Info */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="footer-brand-info">
                <Link to="/" className="footer-logo-wrap">
                  <img
                    src="assets/images/logo/newlogo.png"
                    alt="CheapRoom Logo"
                    className="footer-logo-img"
                  />
                </Link>
                <p className="footer-desc">
                  Your trusted platform for affordable luxury, authentic island guesthouses, and unforgettable stays across the Maldives.
                </p>
                <div className="footer-support-pill">
                  <i className="fa-solid fa-headset" />
                  <span>24/7 Island Concierge Support</span>
                </div>
              </div>
            </div>

            {/* Column 2: Useful Links */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="footer-links-box">
                <h4 className="footer-heading">Useful Links</h4>
                <ul className="footer-links-list">
                  <li>
                    <Link to="/">
                      <i className="fa-solid fa-angle-right" /> Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about-us">
                      <i className="fa-solid fa-angle-right" /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/room-list">
                      <i className="fa-solid fa-angle-right" /> Guesthouse
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/room-list">
                      <i className="fa-solid fa-angle-right" /> Rooms
                    </Link>
                  </li> */}
                  <li>
                    <Link to="/contact-us">
                      <i className="fa-solid fa-angle-right" /> Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup">
                      <i className="fa-solid fa-angle-right" /> Registration
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3: Popular Places */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="footer-links-box">
                <h4 className="footer-heading">Popular Places</h4>
                <ul className="footer-links-list">
                  <li>
                    <Link to="/room-list">
                      <i className="fa-solid fa-angle-right" /> Meemu Atoll
                    </Link>
                  </li>
                  <li>
                    <Link to="/room-list">
                      <i className="fa-solid fa-angle-right" /> Faafu Atoll
                    </Link>
                  </li>
                  <li>
                    <Link to="/room-list">
                      <i className="fa-solid fa-angle-right" /> Alif Alif Atoll
                    </Link>
                  </li>
                  <li>
                    <Link to="/room-list">
                      <i className="fa-solid fa-angle-right" /> Lhaviyani Atoll
                    </Link>
                  </li>
                  <li>
                    <Link to="/room-list">
                      <i className="fa-solid fa-angle-right" /> Alif Dhaal Atoll
                    </Link>
                  </li>
                  <li>
                    <Link to="/room-list">
                      <i className="fa-solid fa-angle-right" /> Maafushi Island
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 4: Contact & Social */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="footer-contact-box">
                <h4 className="footer-heading">Contact Us</h4>
                <ul className="footer-contact-items">
                  <li>
                    <a href="tel:+9607123456" className="contact-link">
                      <i className="fa-solid fa-phone" />
                      <span>+960 7123456</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@companyname.com" className="contact-link">
                      <i className="fa-solid fa-envelope" />
                      <span>info@companyname.com</span>
                    </a>
                  </li>
                  <li>
                    <div className="contact-link contact-address">
                      <i className="fa-solid fa-location-dot" />
                      <span>885 Bunn School Rd, Henry, Tennessee(TN), 38236</span>
                    </div>
                  </li>
                </ul>

                {/* Follow Us Social Icons */}
                <div className="footer-social-box">
                  <h5>Follow Us</h5>
                  <div className="footer-social-icons">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-btn"
                      aria-label="Facebook"
                    >
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-btn"
                      aria-label="Twitter"
                    >
                      <i className="fa-brands fa-x-twitter" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-btn"
                      aria-label="Instagram"
                    >
                      <i className="fa-brands fa-instagram" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-btn"
                      aria-label="LinkedIn"
                    >
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll To Top Button */}
        <button
          type="button"
          className="footer-scroll-top-btn"
          onClick={scrollToTop}
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <i className="fa-solid fa-arrow-up" />
        </button>
      </footer>
    </>
  );
};

export default Footer;
