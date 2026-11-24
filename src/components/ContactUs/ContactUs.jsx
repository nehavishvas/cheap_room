import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import FooterCopyRight from '../FooterCopyRight';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
    // Reset form after delay
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="contact-us-page-wrapper">
      <Header />

      {/* Compact Image Breadcrumbs Section */}
      <section className="breadcrumbs-main-info-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="breadcrumbs-main-content">
                <h2>Contact Us</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i className="fas fa-angle-right" />
                  </li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-detail-info-area">
        <div className="container">
          {/* Section Heading */}
          <div className="row">
            <div className="col-12">
              <div className="contact-section-heading">
                <span className="contact-badge-pill">
                  <i className="fa-solid fa-headset" /> WE'RE HERE TO HELP
                </span>
                <h2>Get in Touch with Our Island Specialists</h2>
                <p>
                  Have questions about Maldives guesthouses, island speedboats, or planning your
                  stay? Our local team in Malé is available 24/7 to guide you every step of the way.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* Left Column: Contact Information Card */}
            <div className="col-xl-5 col-lg-5 col-md-12">
              <div className="contact-info-card-wrap">
                <div>
                  <div className="contact-info-header">
                    <h3>Contact Information</h3>
                    <p>
                      Reach out through any channel below. Our team in Malé responds promptly to all traveler inquiries.
                    </p>
                  </div>

                  {/* Contact Channels */}
                  <div className="contact-channels-list">
                    {/* WhatsApp & Phone */}
                    <div className="contact-channel-item">
                      <div className="contact-channel-icon">
                        <i className="fa-brands fa-whatsapp" />
                      </div>
                      <div className="contact-channel-text">
                        <span className="channel-label">Phone &amp; WhatsApp Support</span>
                        <a href="tel:+9607791234" className="channel-val">
                          +960 779-1234
                        </a>
                        <span className="channel-meta">
                          <span className="pulse-dot" /> Available 24/7 for travelers
                        </span>
                      </div>
                    </div>

                    {/* Email Support */}
                    <div className="contact-channel-item">
                      <div className="contact-channel-icon">
                        <i className="fa-solid fa-envelope" />
                      </div>
                      <div className="contact-channel-text">
                        <span className="channel-label">Email Inquiries</span>
                        <a href="mailto:support@cheaproommv.com" className="channel-val">
                          support@cheaproommv.com
                        </a>
                        <span className="channel-meta">
                          <i className="fa-regular fa-clock" /> Typical response within 1-2 hours
                        </span>
                      </div>
                    </div>

                    {/* Office Location */}
                    <div className="contact-channel-item">
                      <div className="contact-channel-icon">
                        <i className="fa-solid fa-location-dot" />
                      </div>
                      <div className="contact-channel-text">
                        <span className="channel-label">Malé City Headquarters</span>
                        <span className="channel-val">
                          Boduthakurufaanu Magu, Henveiru, Malé 20057, Maldives
                        </span>
                        <span className="channel-meta">
                          <i className="fa-solid fa-building" /> Open for scheduled visits
                        </span>
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="contact-channel-item">
                      <div className="contact-channel-icon">
                        <i className="fa-solid fa-clock" />
                      </div>
                      <div className="contact-channel-text">
                        <span className="channel-label">Concierge Hours</span>
                        <span className="channel-val">
                          Daily: 8:00 AM – 11:00 PM (MVT)
                        </span>
                        <span className="channel-meta">
                          <i className="fa-solid fa-globe" /> Maldives Local Time (UTC +5)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media Strip */}
                <div className="contact-social-strip">
                  <h5>Connect with us:</h5>
                  <ul className="contact-social-icons">
                    <li>
                      <a href="#" aria-label="Facebook">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="X Twitter">
                        <i className="fa-brands fa-x-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Instagram">
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="LinkedIn">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form Card */}
            <div className="col-xl-7 col-lg-7 col-md-12">
              <div className="contact-form-card-wrap">
                <div className="contact-form-header">
                  <h3>Send Us a Message</h3>
                  <p>
                    Fill in your details and travel preferences. An island travel specialist will get back to you within 2 hours.
                  </p>
                </div>

                {/* Success Message Banner */}
                {isSubmitted && (
                  <div className="contact-success-alert">
                    <i className="fa-solid fa-circle-check" />
                    <div>
                      <h5>Message Sent Successfully!</h5>
                      <p>
                        Thank you for reaching out to CheapRoomMV. We have received your inquiry and will contact you shortly.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    {/* Full Name */}
                    <div className="col-md-6 col-12">
                      <div className="contact-form-group">
                        <label className="contact-form-label">Full Name *</label>
                        <div className="contact-input-wrap">
                          <i className="fa-regular fa-user input-icon" />
                          <input
                            type="text"
                            name="fullName"
                            placeholder="e.g. Eric Nathan"
                            className="contact-form-control"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-md-6 col-12">
                      <div className="contact-form-group">
                        <label className="contact-form-label">Email Address *</label>
                        <div className="contact-input-wrap">
                          <i className="fa-regular fa-envelope input-icon" />
                          <input
                            type="email"
                            name="email"
                            placeholder="name@example.com"
                            className="contact-form-control"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="col-md-6 col-12">
                      <div className="contact-form-group">
                        <label className="contact-form-label">Phone / WhatsApp</label>
                        <div className="contact-input-wrap">
                          <i className="fa-solid fa-phone input-icon" />
                          <input
                            type="tel"
                            name="phone"
                            placeholder="+960 779-1234"
                            className="contact-form-control"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Inquiry Subject */}
                    <div className="col-md-6 col-12">
                      <div className="contact-form-group">
                        <label className="contact-form-label">Inquiry Subject</label>
                        <div className="contact-input-wrap">
                          <i className="fa-solid fa-pen-to-square input-icon" />
                          <input
                            type="text"
                            name="subject"
                            placeholder="e.g. Booking inquiry, Speedboat transfer"
                            className="contact-form-control"
                            value={formData.subject}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <div className="contact-form-group">
                        <label className="contact-form-label">Your Message *</label>
                        <textarea
                          name="message"
                          className="contact-textarea"
                          placeholder="Tell us about your travel dates, preferred islands, group size, or any specific questions..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12">
                      <button type="submit" className="contact-submit-btn">
                        <i className="fa-solid fa-paper-plane" /> Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Assistance Strip */}
      <section className="contact-quick-help-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="quick-help-card">
                <div className="quick-help-icon">
                  <i className="fa-brands fa-whatsapp" />
                </div>
                <h4>Instant WhatsApp Concierge</h4>
                <p>
                  Need quick answers while traveling? Message our on-island concierge team on WhatsApp for real-time speedboat updates and bookings.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="quick-help-card">
                <div className="quick-help-icon">
                  <i className="fa-solid fa-calendar-check" />
                </div>
                <h4>Flexible Bookings</h4>
                <p>
                  Plans change? We offer transparent cancellation policies and seamless date modifications on verified Maldivian guesthouses.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="col-12">
                <div className="quick-help-card">
                  <div className="quick-help-icon">
                    <i className="fa-solid fa-shield-halved" />
                  </div>
                  <h4>Verified Local Hosts</h4>
                  <p>
                    Every guesthouse on CheapRoomMV is vetted in person by our team to guarantee comfort, island safety, and authentic hospitality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Location Section */}
      <section className="our-map-location-info-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-section-heading" style={{ marginBottom: '20px' }}>
                <span className="contact-badge-pill">
                  <i className="fa-solid fa-map-location-dot" /> OFFICE LOCATION
                </span>
                <h2>Visit Us in Malé, Maldives</h2>
                <p>
                  Conveniently located along Boduthakurufaanu Magu in Henveiru, Malé — just minutes from the Velana Airport ferry terminal.
                </p>
              </div>

              <div className="locaion-map-box-area">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.2127438238895!2d73.50922228885496!3d4.178539000000019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b3f7feb3d8bf279%3A0x231418191a28096c!2sNeoscapes%20Maldives!5e0!3m2!1sen!2sin!4v1763448894419!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: '0', display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating Office Card */}
                <div className="map-floating-card">
                  <div className="map-floating-icon">
                    <i className="fa-solid fa-location-dot" />
                  </div>
                  <div className="map-floating-content">
                    <h5>CheapRoomMV Headquarters</h5>
                    <p>Boduthakurufaanu Magu, Henveiru, Malé 20057, Maldives</p>
                    <a
                      href="https://maps.google.com/?q=Male,Maldives"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Open in Google Maps</span>
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                    </a>
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

export default ContactUs;
