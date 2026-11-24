import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import FooterCopyRight from '../FooterCopyRight';

const TermAndConditions = () => {
  return (
    <div className="cms-page-wrapper">
      <Header />

      {/* Compact Image Breadcrumbs Section */}
      <section className="breadcrumbs-main-info-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="breadcrumbs-main-content">
                <h2>Terms &amp; Conditions</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i className="fas fa-angle-right" />
                  </li>
                  <li>Terms &amp; Conditions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Terms & Conditions Main Section */}
      <section className="cms-section-area">
        <div className="container">
          {/* Section Heading */}
          <div className="cms-heading-block">
            <span className="cms-badge-pill">
              <i className="fa-solid fa-file-contract" /> LEGAL TERMS
            </span>
            <h2>CheapRoomMV Terms &amp; Conditions</h2>
            <p>
              Clear, transparent, and fair booking conditions designed to protect both travelers
              and local Maldivian island hosts.
            </p>
          </div>

          <div className="cms-legal-layout-container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-11 col-12">
                <div className="cms-content-card">
                  {/* Document Header Banner */}
                  <div className="cms-content-header-banner">
                    <div className="cms-banner-info">
                      <h3>CheapRoomMV Guest &amp; Booking Agreement</h3>
                      <p>Last Updated: January 1, 2026 | Governing Jurisdiction: Republic of Maldives</p>
                    </div>
                    <span className="cms-version-badge">v2.4 Active</span>
                  </div>

                  {/* Section 1 */}
                  <div className="cms-doc-section" id="introduction">
                    <h3 className="cms-doc-title">
                      <span className="section-num">1.</span> Introduction &amp; Acceptance of Terms
                    </h3>
                    <p>
                      Welcome to CheapRoomMV ("CheapRoom," "Platform," "we," "us," or "our"). These Terms and Conditions govern your access to and use of our web portal, mobile applications, and booking services connecting global travelers with licensed local guesthouses, boutique island hotels, and sea excursion providers in the Maldives.
                    </p>
                    <p>
                      By creating an account, browsing our listings, or completing any reservation through CheapRoomMV, you acknowledge that you have read, understood, and agree to be bound by these Terms, along with our <Link to="/privacy-policy" style={{ color: '#10312F', fontWeight: 600 }}>Privacy Policy</Link>. If you do not accept these terms, you must refrain from using the platform.
                    </p>
                    <div className="cms-notice-box">
                      <i className="fa-solid fa-circle-info" />
                      <div>
                        <strong>Platform Role:</strong> CheapRoomMV acts as an authorized digital intermediary facilitating reservations between guests and independent, licensed local Maldivian island guesthouses. The actual accommodation contract is between the guest and the individual host.
                      </div>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div className="cms-doc-section" id="bookings">
                    <h3 className="cms-doc-title">
                      <span className="section-num">2.</span> Guesthouse Bookings &amp; Confirmations
                    </h3>
                    <p>
                      To ensure seamless entry into the Maldives and hassle-free registration at your destination island, please review the booking conditions below:
                    </p>
                    <ul className="cms-doc-list">
                      <li>
                        <strong>Age Requirement:</strong> The primary guest making the booking must be at least 18 years of age and possess legal capacity to enter into binding agreements.
                      </li>
                      <li>
                        <strong>Accurate Guest Information:</strong> You agree to provide full names and passport details exactly matching government travel documents, required for Maldives Immigration IMUGA registration and local island council logs.
                      </li>
                      <li>
                        <strong>Instant Confirmation Voucher:</strong> Upon successful payment or card pre-authorization, an official CheapRoomMV Booking Voucher is generated and dispatched to your registered email. This voucher serves as official proof of confirmed accommodation for Maldives Immigration upon airport arrival.
                      </li>
                      <li>
                        <strong>Check-in &amp; Check-out Times:</strong> Standard island check-in is 2:00 PM (14:00) and standard check-out is 12:00 PM (12:00). Requests for early check-in or late check-out depend on room availability and must be communicated in advance.
                      </li>
                    </ul>
                  </div>

                  {/* Section 3 */}
                  <div className="cms-doc-section" id="pricing-taxes">
                    <h3 className="cms-doc-title">
                      <span className="section-num">3.</span> Pricing, Maldives Green Tax &amp; Tourism Levies
                    </h3>
                    <p>
                      CheapRoomMV is dedicated to 100% transparent pricing with zero surprise surcharges at checkout. All quoted prices adhere strictly to the regulations of the Maldives Inland Revenue Authority (MIRA):
                    </p>
                    <ul className="cms-doc-list">
                      <li>
                        <strong>Tourism Goods &amp; Services Tax (TGST):</strong> All room bookings and meal plans are subject to statutory Maldivian TGST (currently 16%), clearly itemized on your booking breakdown.
                      </li>
                      <li>
                        <strong>Maldives Green Tax:</strong> Under Maldivian environmental law, a mandatory Green Tax of US$3.00 (or US$6.00 depending on establishment classification) per person per night applies to all non-Maldivian visitors staying in local guesthouses.
                      </li>
                      <li>
                        <strong>Currency of Transaction:</strong> Rates are displayed in United States Dollars (USD) and Maldivian Rufiyaa (MVR). Credit card transactions are processed in USD, and your issuing bank may apply standard foreign currency conversion rates.
                      </li>
                    </ul>
                  </div>

                  {/* Section 4 */}
                  <div className="cms-doc-section" id="transfers">
                    <h3 className="cms-doc-title">
                      <span className="section-num">4.</span> Speedboat Transfers &amp; Island Logistics
                    </h3>
                    <p>
                      Reaching local Maldivian islands involves maritime speedboats or domestic flights departing from Velana International Airport (Malé):
                    </p>
                    <ul className="cms-doc-list">
                      <li>
                        <strong>Flight Coordination:</strong> To ensure transfer readiness, guests must provide international arrival and departure flight details to CheapRoomMV or the guesthouse host at least 72 hours prior to arrival.
                      </li>
                      <li>
                        <strong>Weather &amp; Sea Conditions:</strong> Speedboat transfers are operated by independent, licensed maritime transport providers. In the event of adverse weather, high swells, or Coast Guard safety advisories, speedboat schedules may be delayed or rescheduled to guarantee passenger safety. CheapRoomMV is not liable for flight connections missed due to maritime weather delays.
                      </li>
                      <li>
                        <strong>Luggage Allowance:</strong> Standard speedboat transfers accommodate 1 piece of checked luggage (up to 25kg) and 1 carry-on piece per passenger. Oversized items (surfboards, dive bags) must be notified in advance.
                      </li>
                    </ul>
                  </div>

                  {/* Section 5 */}
                  <div className="cms-doc-section" id="cancellation">
                    <h3 className="cms-doc-title">
                      <span className="section-num">5.</span> Cancellation, Amendments &amp; Refund Policy
                    </h3>
                    <p>
                      Each guesthouse listing clearly displays its cancellation tier prior to checkout:
                    </p>
                    <ul className="cms-doc-list">
                      <li>
                        <strong>Free Cancellation Tiers:</strong> Bookings designated as "Free Cancellation" allow full refunds if cancelled before the stated deadline (typically 48 to 72 hours prior to 2:00 PM on the check-in date).
                      </li>
                      <li>
                        <strong>Non-Refundable Tiers:</strong> Promotional or discounted rates flagged as "Non-Refundable" cannot be refunded once confirmed, except in cases of verifiable force majeure.
                      </li>
                      <li>
                        <strong>Refund Processing:</strong> Approved refunds are credited directly back to the original payment method within 5 to 10 business days, depending on your card issuer's clearing cycles.
                      </li>
                      <li>
                        <strong>Force Majeure:</strong> In the event of documented medical emergencies, canceled international flights, or official border closures, CheapRoomMV works closely with the island host to reschedule dates or issue credit vouchers whenever possible.
                      </li>
                    </ul>
                  </div>

                  {/* Section 6 */}
                  <div className="cms-doc-section" id="local-regulations">
                    <h3 className="cms-doc-title">
                      <span className="section-num">6.</span> Local Island Regulations &amp; Cultural Etiquette
                    </h3>
                    <p>
                      Staying on inhabited local islands offers an authentic experience alongside friendly Maldivian communities. To ensure mutual respect, guests agree to uphold local guidelines:
                    </p>
                    <div className="cms-notice-box">
                      <i className="fa-solid fa-umbrella-beach" />
                      <div>
                        <strong>Bikini Beach Etiquette:</strong> Every local tourist island features designated "Bikini Beaches" where bikinis and swimsuits are encouraged. When walking through residential villages, shops, and harbors, guests must dress modestly (covering shoulders and knees).
                      </div>
                    </div>
                    <ul className="cms-doc-list mt-3">
                      <li>
                        <strong>Alcohol &amp; Prohibited Items:</strong> In accordance with Maldivian national law, the import, sale, and consumption of alcohol and pork products is strictly forbidden on inhabited local islands. (Floating safari bars and day trips to resort islands are available for those desiring alcoholic beverages).
                      </li>
                      <li>
                        <strong>Marine Life &amp; Coral Conservation:</strong> The Maldivian marine ecosystem is precious. Guests must refrain from standing on or collecting live corals, shells, or harassing sea turtles, manta rays, and whale sharks. Heavy fines apply under environmental protection statutes.
                      </li>
                      <li>
                        <strong>Quiet Hours:</strong> Respectful quiet hours in residential island areas are observed between 11:00 PM and 7:00 AM.
                      </li>
                    </ul>
                  </div>

                  {/* Section 7 */}
                  <div className="cms-doc-section" id="intellectual-property">
                    <h3 className="cms-doc-title">
                      <span className="section-num">7.</span> Platform Usage, Content &amp; Verified Reviews
                    </h3>
                    <p>
                      All content published on CheapRoomMV—including photography, curated island guides, user interface designs, and code—is protected under intellectual property laws.
                    </p>
                    <ul className="cms-doc-list">
                      <li>
                        <strong>Genuine Guest Reviews:</strong> Only guests who have completed a stay via CheapRoomMV may submit reviews and ratings. Defamatory, fraudulent, or extortive reviews are strictly removed.
                      </li>
                      <li>
                        <strong>Prohibited Actions:</strong> Users may not deploy automated scrapers, reverse-engineer website code, or bypass security features to access restricted inventory or user data.
                      </li>
                    </ul>
                  </div>

                  {/* Section 8 */}
                  <div className="cms-doc-section" id="liability-contact">
                    <h3 className="cms-doc-title">
                      <span className="section-num">8.</span> Limitation of Liability, Governing Law &amp; Support
                    </h3>
                    <p>
                      CheapRoomMV is not liable for personal injury, lost property, baggage damage during sea transit, or third-party excursion activities booked through external island guides. We strongly advise all travelers to obtain comprehensive international travel insurance covering maritime transit, trip interruption, and medical evacuation prior to visiting the Maldives.
                    </p>
                    <p>
                      These Terms and Conditions are governed exclusively by the laws of the <strong>Republic of Maldives</strong>. Any disputes arising from or in connection with these terms shall be submitted to the competent courts of Malé, Republic of Maldives.
                    </p>
                    <p>
                      For legal notices or questions regarding these Terms, contact our legal team at{' '}
                      <a href="mailto:legal@cheaproommv.com" style={{ color: '#10312F', fontWeight: 600 }}>
                        legal@cheaproommv.com
                      </a>{' '}
                      or contact:
                    </p>
                    <p style={{ fontStyle: 'italic', color: '#64748b' }}>
                      CheapRoomsMV Legal &amp; Compliance Department<br />
                      Boduthakurufaanu Magu, Henveiru, Malé 20057, Republic of Maldives
                    </p>
                  </div>

                  {/* Footer Box */}
                  <div className="cms-footer-contact-box">
                    <p>Need help clarifying terms before completing your reservation?</p>
                    <Link to="/contact-us">
                      Chat with Our 24/7 Team <i className="fa-solid fa-arrow-right ms-1" />
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

export default TermAndConditions;
