import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import FooterCopyRight from '../FooterCopyRight';

const PrivacyPolicy = () => {
  return (
    <div className="cms-page-wrapper">
      <Header />

      {/* Compact Image Breadcrumbs Section */}
      <section className="breadcrumbs-main-info-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="breadcrumbs-main-content">
                <h2>Privacy Policy</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i className="fas fa-angle-right" />
                  </li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Main Section */}
      <section className="cms-section-area">
        <div className="container">
          {/* Section Heading */}
          <div className="cms-heading-block">
            <span className="cms-badge-pill">
              <i className="fa-solid fa-shield-halved" /> PRIVACY &amp; SECURITY
            </span>
            <h2>CheapRoomMV Privacy Policy</h2>
            <p>
              Your privacy is paramount to us. Learn how we collect, protect, and handle your
              personal information when booking guesthouses and island experiences in the Maldives.
            </p>
          </div>

          <div className="cms-legal-layout-container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-11 col-12">
                <div className="cms-content-card">
                  {/* Document Header Banner */}
                  <div className="cms-content-header-banner">
                    <div className="cms-banner-info">
                      <h3>CheapRoomMV Official Privacy Statement</h3>
                      <p>Effective Date: January 1, 2026 | Governing Law: Republic of Maldives</p>
                    </div>
                    <span className="cms-version-badge">v2.4 Active</span>
                  </div>

                  {/* Section 1 */}
                  <div className="cms-doc-section" id="overview">
                    <h3 className="cms-doc-title">
                      <span className="section-num">1.</span> Overview &amp; Scope
                    </h3>
                    <p>
                      CheapRoomMV ("we," "our," or "us") operates the premier online booking platform connecting international travelers with verified guesthouses, island speedboats, and excursions across the Republic of Maldives. This Privacy Policy details our obligations and commitments regarding the personal information you entrust to us when visiting our website, creating an account, or completing a reservation.
                    </p>
                    <div className="cms-notice-box">
                      <i className="fa-solid fa-circle-info" />
                      <div>
                        <strong>Key Commitment:</strong> We never sell, rent, or monetize your personal information to third-party advertisers or data brokers under any circumstances.
                      </div>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div className="cms-doc-section" id="collection">
                    <h3 className="cms-doc-title">
                      <span className="section-num">2.</span> Information We Collect
                    </h3>
                    <p>
                      To facilitate legitimate guesthouse reservations and meet statutory requirements set by the Maldives Ministry of Tourism and Maldives Immigration, we collect:
                    </p>
                    <ul className="cms-doc-list">
                      <li>
                        <strong>Personal Identification Details:</strong> Full name, nationality, email address, phone/WhatsApp number, and passport details required for island registration.
                      </li>
                      <li>
                        <strong>Reservation &amp; Travel Preferences:</strong> Check-in and check-out dates, selected atolls, room occupancy, dietary requirements, and flight arrival times for speedboat coordination.
                      </li>
                      <li>
                        <strong>Billing &amp; Payment Data:</strong> Credit/debit card numbers processed securely via PCI-DSS certified payment processors (we do not store raw card numbers on our servers).
                      </li>
                      <li>
                        <strong>Technical &amp; Log Data:</strong> IP addresses, browser types, and interaction telemetry to maintain site security and prevent fraudulent transactions.
                      </li>
                    </ul>
                  </div>

                  {/* Section 3 */}
                  <div className="cms-doc-section" id="usage">
                    <h3 className="cms-doc-title">
                      <span className="section-num">3.</span> How We Use Your Data
                    </h3>
                    <p>We process your personal information strictly for legitimate business and travel purposes:</p>
                    <ul className="cms-doc-list">
                      <li>Confirming and managing your guesthouse reservations across Maldivian atolls.</li>
                      <li>Arranging scheduled speedboats, seaplanes, and airport transfers tailored to your flight times.</li>
                      <li>Sending automated booking confirmations, invoice receipts, and pre-arrival island travel tips.</li>
                      <li>Providing customer support and real-time emergency assistance during your stay.</li>
                      <li>Complying with Maldivian Green Tax and Tourism Goods and Service Tax (TGST) documentation.</li>
                    </ul>
                  </div>

                  {/* Section 4 */}
                  <div className="cms-doc-section" id="security">
                    <h3 className="cms-doc-title">
                      <span className="section-num">4.</span> Payment &amp; Booking Security
                    </h3>
                    <p>
                      All network communications with CheapRoomMV are encrypted using industry-standard Transport Layer Security (TLS 1.3 / SSL 256-bit encryption). Payment transactions are handled exclusively through PCI-DSS Level 1 compliant financial gateways, ensuring that sensitive financial details remain strictly isolated and shielded from unauthorized interception.
                    </p>
                  </div>

                  {/* Section 5 */}
                  <div className="cms-doc-section" id="sharing">
                    <h3 className="cms-doc-title">
                      <span className="section-num">5.</span> Sharing Information with Island Hosts
                    </h3>
                    <p>
                      When you book a room, we share essential reservation details (your name, contact number, arrival date, flight details, and room specifications) directly with your selected guesthouse host and licensed speedboat operator. This ensures your room is prepared and staff are positioned at the airport/island harbor for your arrival. We require all partner hosts to maintain strict confidentiality regarding guest data.
                    </p>
                  </div>

                  {/* Section 6 */}
                  <div className="cms-doc-section" id="cookies">
                    <h3 className="cms-doc-title">
                      <span className="section-num">6.</span> Cookies &amp; Tracking Technologies
                    </h3>
                    <p>
                      We utilize essential cookies to keep you signed in, preserve your search filter preferences (dates, atolls, budget limits), and maintain items in your wishlist. We do not deploy invasive third-party cross-site tracking cookies. You may manage or disable cookies at any time via your browser settings.
                    </p>
                  </div>

                  {/* Section 7 */}
                  <div className="cms-doc-section" id="rights">
                    <h3 className="cms-doc-title">
                      <span className="section-num">7.</span> Your Privacy Rights &amp; Choices
                    </h3>
                    <p>Regardless of your geographic location, CheapRoomMV affords you full control over your data:</p>
                    <ul className="cms-doc-list">
                      <li>
                        <strong>Right of Access:</strong> You may request a copy of the personal data we hold about your profile and bookings.
                      </li>
                      <li>
                        <strong>Right to Rectification:</strong> You may update or correct inaccurate profile details at any time from your account settings.
                      </li>
                      <li>
                        <strong>Right to Erasure:</strong> You may request the deletion of your account and personal data, subject to tax and legal retention requirements mandated by Maldivian law.
                      </li>
                    </ul>
                  </div>

                  {/* Section 8 */}
                  <div className="cms-doc-section" id="contact-dpo">
                    <h3 className="cms-doc-title">
                      <span className="section-num">8.</span> Contact Our Privacy Team
                    </h3>
                    <p>
                      If you have questions, feedback, or data requests regarding this Privacy Policy, please contact our Data Protection Officer at{' '}
                      <a href="mailto:privacy@cheaproommv.com" style={{ color: '#10312F', fontWeight: 600 }}>
                        privacy@cheaproommv.com
                      </a>{' '}
                      or write to:
                    </p>
                    <p style={{ fontStyle: 'italic', color: '#64748b' }}>
                      CheapRoomsMV Data Privacy Office<br />
                      Boduthakurufaanu Magu, Henveiru, Malé 20057, Republic of Maldives
                    </p>
                  </div>

                  {/* Footer Box */}
                  <div className="cms-footer-contact-box">
                    <p>Need general assistance with your Maldives vacation?</p>
                    <Link to="/contact-us">
                      Visit Our Support Center <i className="fa-solid fa-arrow-right ms-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FooterCopyRight />
    </div>
  );
};

export default PrivacyPolicy;
