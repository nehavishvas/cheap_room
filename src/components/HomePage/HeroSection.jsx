import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SLIDES = [
  {
    id: 1,
    image: "assets/images/slider-img/slider2.jpg",
    badge: "🌴 Affordable Island Luxury",
    title: "Find Cheap Rooms & Local Island Guesthouses",
    subtitle: "Experience the real Maldives with pristine turquoise lagoons, private sandbanks, and handpicked stays at guaranteed lowest rates."
  },
  {
    id: 2,
    image: "assets/images/slider-img/slider3.jpg",
    badge: "✨ Verified Best Rates",
    title: "Overwater Villas & Beachfront Rooms",
    subtitle: "Book directly with local island hosts with zero hidden fees, instant booking confirmation, and 24/7 dedicated assistance."
  },
  {
    id: 3,
    image: "assets/images/slider-img/slider1.jpg",
    badge: "🏖️ 200+ Paradise Destinations",
    title: "Your Dream Tropical Vacation Starts Here",
    subtitle: "From budget-friendly stays in Maafushi to diving paradises in Ari Atoll, find your perfect island accommodation today."
  }
];

const ATOLL_ISLANDS = {
  HaaAlif: ["Baarah", "Dhiddhoo", "Filladhoo", "Hoarafushi", "Ihavandhoo", "Kelaa", "Utheemu", "Vashafaru"],
  HaaDhaalu: ["Hanimaadhoo", "Finey", "Kulhudhuffushi", "Kumundhoo", "Naivaadhoo", "Nolhivaranfaru"],
  Kaafu: ["Male", "Hulhumale", "Maafushi", "Gulhi", "Guraidhoo", "Dhiffushi", "Thulusdhoo"],
  AlifAlif: ["Rasdhoo", "Ukulhas", "Mathiveri", "Thoddoo", "Feridhoo"],
  AlifDhaal: ["Mahibadhoo", "Maamigili", "Dhigurah", "Dhangethi", "Omadhoo"],
  Baa: ["Dharavandhoo", "Eydhafushi", "Fulhadhoo", "Kamadhoo", "Kihaadhoo"]
};

const GuestCounter = ({ rooms, setRooms, adults, setAdults, children, setChildren }) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const displayValue = `${rooms} Room${rooms > 1 ? "s" : ""}, ${adults} Adult${adults > 1 ? "s" : ""}${children > 0 ? `, ${children} Child${children > 1 ? "ren" : ""}` : ""}`;

  return (
    <div className="hero-guest-counter-wrap" ref={popupRef}>
      <div
        className="hero-input-field clickable-field"
        onClick={() => setShowPopup(!showPopup)}
      >
        <span className="field-icon">
          <i className="fa-solid fa-user-group" />
        </span>
        <div className="field-content">
          <label className="field-label">Guests &amp; Rooms</label>
          <div className="field-value-text">{displayValue}</div>
        </div>
        <span className="field-dropdown-arrow">
          <i className={`fa-solid fa-chevron-down ${showPopup ? "rotate-up" : ""}`} />
        </span>
      </div>

      {showPopup && (
        <div className="hero-guest-popup shadow-lg">
          <div className="guest-popup-header">
            <h6>Select Guests &amp; Rooms</h6>
            <button
              type="button"
              className="guest-popup-close"
              onClick={() => setShowPopup(false)}
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>

          <div className="guest-counter-row">
            <div className="counter-label-wrap">
              <strong>Rooms</strong>
              <small>Minimum 1 room</small>
            </div>
            <div className="counter-btn-group">
              <button
                type="button"
                className="counter-btn"
                disabled={rooms <= 1}
                onClick={() => setRooms((r) => Math.max(1, r - 1))}
              >
                -
              </button>
              <span className="counter-number">{rooms}</span>
              <button
                type="button"
                className="counter-btn"
                onClick={() => setRooms((r) => r + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="guest-counter-row">
            <div className="counter-label-wrap">
              <strong>Adults</strong>
              <small>Ages 18 or above</small>
            </div>
            <div className="counter-btn-group">
              <button
                type="button"
                className="counter-btn"
                disabled={adults <= 1}
                onClick={() => setAdults((a) => Math.max(1, a - 1))}
              >
                -
              </button>
              <span className="counter-number">{adults}</span>
              <button
                type="button"
                className="counter-btn"
                onClick={() => setAdults((a) => a + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="guest-counter-row">
            <div className="counter-label-wrap">
              <strong>Children</strong>
              <small>Ages 0 - 17</small>
            </div>
            <div className="counter-btn-group">
              <button
                type="button"
                className="counter-btn"
                disabled={children <= 0}
                onClick={() => setChildren((c) => Math.max(0, c - 1))}
              >
                -
              </button>
              <span className="counter-number">{children}</span>
              <button
                type="button"
                className="counter-btn"
                onClick={() => setChildren((c) => c + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="guest-popup-footer">
            <button
              type="button"
              className="btn-guest-apply"
              onClick={() => setShowPopup(false)}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const HeroSection = () => {
  const navigate = useNavigate();

  // Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Search Filter State
  const [destination, setDestination] = useState({
    atoll: '',
    island: '',
    roomType: '',
    checkIn: '',
    checkOut: ''
  });

  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  // Auto-play slider with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setDestination((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "atoll" ? { island: "" } : {})
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching with:", { ...destination, rooms, adults, children });
    navigate("/room-list");
  };

  const availableIslands = destination.atoll && ATOLL_ISLANDS[destination.atoll]
    ? ATOLL_ISLANDS[destination.atoll]
    : Object.values(ATOLL_ISLANDS).flat().slice(0, 14);

  // Today's date string for min date in picker
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section className="modern-hero-section">
      {/* Hero Banner Carousel */}
      <div
        className="hero-banner-slider"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`hero-slide-item ${idx === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-slide-overlay" />
            <div className="container hero-slide-content-container">
              <div className="hero-slide-content text-center">
                <span className="hero-slide-badge animate-badge">
                  {slide.badge}
                </span>
                <h1 className="hero-slide-title animate-title">
                  {slide.title}
                </h1>
                <p className="hero-slide-subtitle animate-desc">
                  {slide.subtitle}
                </p>

                {/* Trust Highlights */}
                <div className="hero-trust-row animate-trust">
                  <span className="trust-item">
                    <i className="fa-solid fa-circle-check" /> Best Price Guarantee
                  </span>
                  <span className="trust-dot">•</span>
                  <span className="trust-item">
                    <i className="fa-solid fa-bolt" /> Instant Confirmation
                  </span>
                  <span className="trust-dot">•</span>
                  <span className="trust-item">
                    <i className="fa-solid fa-headset" /> 24/7 Island Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Arrow Controls */}
        <button
          type="button"
          className="hero-slider-nav prev"
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          <i className="fa-solid fa-chevron-left" />
        </button>
        <button
          type="button"
          className="hero-slider-nav next"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          <i className="fa-solid fa-chevron-right" />
        </button>

        {/* Carousel Indicators */}
        <div className="hero-slider-dots">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`slider-dot ${idx === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Centered Modern Search Filter Card */}
      <div className="hero-search-wrapper">
        <div className="container">
          <div className="hero-search-card shadow-lg">
            {/* Filter Form */}
            <form onSubmit={handleSearch} className="hero-search-form">
              <div className="row g-2 align-items-center">
                {/* Field 1: Destination Atoll & Island */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                  <div className="hero-input-field">
                    <span className="field-icon">
                      <i className="fa-solid fa-map-location-dot" />
                    </span>
                    <div className="field-content">
                      <label className="field-label">Destination Atoll</label>
                      <select
                        name="atoll"
                        className="hero-form-select"
                        value={destination.atoll}
                        onChange={handleSelectChange}
                      >
                        <option value="">All Atolls</option>
                        <option value="HaaAlif">Haa Alif Atoll</option>
                        <option value="HaaDhaalu">Haa Dhaalu Atoll</option>
                        <option value="Kaafu">Kaafu Atoll (Malé)</option>
                        <option value="AlifAlif">Alif Alif Atoll</option>
                        <option value="AlifDhaal">Alif Dhaal (Ari)</option>
                        <option value="Baa">Baa Atoll (UNESCO)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="col-xl-2 col-lg-2 col-md-6 col-12">
                  <div className="hero-input-field">
                    <span className="field-icon">
                      <i className="fa-solid fa-umbrella-beach" />
                    </span>
                    <div className="field-content">
                      <label className="field-label">Island</label>
                      <select
                        name="island"
                        className="hero-form-select"
                        value={destination.island}
                        onChange={handleSelectChange}
                      >
                        <option value="">Select Island</option>
                        {availableIslands.map((isl) => (
                          <option key={isl} value={isl}>
                            {isl}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Field 2: Dates (Check In & Check Out) */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                  <div className="hero-input-field date-split-field">
                    <span className="field-icon">
                      <i className="fa-solid fa-calendar-days" />
                    </span>
                    <div className="field-content-split">
                      <div className="date-sub-box">
                        <label className="field-label">Check-in</label>
                        <input
                          type="date"
                          name="checkIn"
                          className="hero-form-date"
                          min={todayStr}
                          value={destination.checkIn}
                          onChange={handleSelectChange}
                        />
                      </div>
                      <span className="date-divider">→</span>
                      <div className="date-sub-box">
                        <label className="field-label">Check-out</label>
                        <input
                          type="date"
                          name="checkOut"
                          className="hero-form-date"
                          min={destination.checkIn || todayStr}
                          value={destination.checkOut}
                          onChange={handleSelectChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Field 3: Room Type */}
                <div className="col-xl-2 col-lg-2 col-md-6 col-12">
                  <div className="hero-input-field">
                    <span className="field-icon">
                      <i className="fa-solid fa-bed" />
                    </span>
                    <div className="field-content">
                      <label className="field-label">Room Type</label>
                      <select
                        name="roomType"
                        className="hero-form-select"
                        value={destination.roomType}
                        onChange={handleSelectChange}
                      >
                        <option value="">All Room Types</option>
                        <option value="Single Room">Single Room</option>
                        <option value="Double Room">Double Room</option>
                        <option value="Deluxe Room">Deluxe Room</option>
                        <option value="Water Villa">Water Villa</option>
                        <option value="Beach Villa">Beach Villa</option>
                        <option value="Family Suite">Family Suite</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Field 4: Guests & Counter */}
                <div className="col-xl-2 col-lg-2 col-md-12 col-12">
                  <GuestCounter
                    rooms={rooms}
                    setRooms={setRooms}
                    adults={adults}
                    setAdults={setAdults}
                    children={children}
                    setChildren={setChildren}
                  />
                </div>
              </div>

              {/* Bottom Row: Search Button */}
              <div className="hero-search-bottom-row justify-content-center text-center">
                <div className="hero-search-btn-wrap mx-auto">
                  <button type="submit" className="btn-hero-search">
                    <i className="fa-solid fa-magnifying-glass" />
                    <span>Search Available Rooms</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
