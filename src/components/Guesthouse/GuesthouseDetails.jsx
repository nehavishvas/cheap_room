import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import FooterCopyRight from '../FooterCopyRight';

const GUESTHOUSE_DATA = {
  id: 1,
  title: 'Sheraton Maldives Full Moon Resort & Spa',
  badge: 'Premium Island Guesthouse',
  island: 'Furanafushi Island, North Malé Atoll',
  country: 'Republic of Maldives',
  rating: 4.8,
  reviewsCount: 1420,
  speedBoatTime: '15 mins by speedboat from Velana Airport',
  startingPrice: 149,
  originalPrice: 189,
  images: [
    { src: 'assets/images/room-img/room-1.jpg', title: 'Overwater Bungalow View' },
    { src: 'assets/images/room-img/room-2.jpg', title: 'Beachfront Sunrise Villa' },
    { src: 'assets/images/room-img/room-3.jpg', title: 'Deluxe Ocean Suite' },
    { src: 'assets/images/room-img/room-4.jpg', title: 'Tropical Garden Pool' },
    { src: 'assets/images/room-img/room-5.jpg', title: 'Sunset Dining Pavilion' },
    { src: 'assets/images/top-destination-img/destination1.jpg', title: 'Turquoise Island Lagoon' },
  ],
  rooms: [
    {
      id: 1,
      title: 'Deluxe Ocean View Villa',
      badge: 'Most Popular',
      image: 'assets/images/room-img/room-1.jpg',
      size: '45 m²',
      bed: '1 King Bed',
      view: 'Ocean & Lagoon View',
      capacity: '2 Adults & 1 Child',
      price: 149,
      originalPrice: 189,
      perks: [
        'Free Tropical Breakfast',
        'Complimentary Speedboat Transfer',
        'Free Cancellation up to 48h',
        'Private Balcony & Sunbed',
        'High-Speed Wi-Fi',
      ],
    },
    {
      id: 2,
      title: 'Beachfront Sunrise Cottage',
      badge: 'Best Beach Access',
      image: 'assets/images/room-img/room-2.jpg',
      size: '58 m²',
      bed: '1 King Bed + 1 Daybed',
      view: 'Direct Beachfront View',
      capacity: '3 Guests',
      price: 189,
      originalPrice: 229,
      perks: [
        'Free Tropical Breakfast',
        'Direct Access to Powder White Beach',
        'Open-Air Rain Shower',
        'Complimentary Snorkeling Gear',
        'Early Check-In Priority',
      ],
    },
    {
      id: 3,
      title: 'Overwater Bungalow with Sundeck',
      badge: 'Luxury Pick',
      image: 'assets/images/room-img/room-3.jpg',
      size: '72 m²',
      bed: '1 King Bed',
      view: 'Panoramic Lagoon & House Reef',
      capacity: '2 Adults',
      price: 249,
      originalPrice: 299,
      perks: [
        'Free Gourmet Breakfast',
        'Private Sundeck & Lagoon Ladder',
        'Glass Floor Lagoon Viewing Panel',
        'Complimentary Sunset Dolphin Cruise',
        'Nespresso Coffee Machine',
      ],
    },
    {
      id: 4,
      title: 'Two-Bedroom Island Family Suite',
      badge: 'Family Choice',
      image: 'assets/images/room-img/room-4.jpg',
      size: '95 m²',
      bed: '2 King Beds',
      view: 'Tropical Garden & Beach Path',
      capacity: '5 Guests',
      price: 320,
      originalPrice: 380,
      perks: [
        'Free Breakfast for All Guests',
        'Spacious Living Area & Kitchenette',
        'Private Tropical Courtyard',
        'Kids Beach Play Kits Provided',
        'Airport Roundtrip Transfers Included',
      ],
    },
  ],
  facilities: [
    {
      category: 'Beach & Marine Activities',
      icon: 'fa-umbrella-beach',
      items: [
        'Private Bikini Beach with sun loungers',
        'Complimentary mask & snorkel gear',
        'Guided house reef snorkeling tours',
        'Kayaks and Stand-Up Paddleboards',
        'PADI certified dive center & excursions',
        'Sunset dolphin spotting cruises',
      ],
    },
    {
      category: 'Culinary & Dining',
      icon: 'fa-utensils',
      items: [
        'Beachfront restaurant serving fresh local seafood',
        'Daily complimentary Maldivian & continental breakfast',
        'Sunset beach BBQ and candlelight dinners',
        'Halal-certified kitchen with vegetarian options',
        'Tropical juice bar and specialty coffee lounge',
        'In-room breakfast dining service available',
      ],
    },
    {
      category: 'Room Comforts & Media',
      icon: 'fa-bed',
      items: [
        'Individual climate-controlled air conditioning',
        'Ultra high-speed Starlink Wi-Fi throughout',
        '50-inch 4K Smart TV with international channels',
        'Premium orthopaedic mattresses & crisp cotton linens',
        'Electronic laptop-sized digital safe',
        'Complimentary bottled drinking water replenished daily',
      ],
    },
    {
      category: 'Island Services & Logistics',
      icon: 'fa-bell-concierge',
      items: [
        '24/7 Velana Airport speedboat reception & meet-and-greet',
        'Concierge for inter-island speedboat bookings',
        'Complimentary luggage storage & harbor cart pickup',
        'Currency exchange (USD & MVR supported)',
        'Laundry & dry-cleaning service',
        'Multilingual host team (English, Dhivehi, Hindi, Italian)',
      ],
    },
    {
      category: 'Wellness & Relaxation',
      icon: 'fa-spa',
      items: [
        'Outdoor tropical beachfront massage cabana',
        'Morning sunrise yoga on the wooden jetty',
        'Fresh ocean breeze relaxation hammocks',
        'Natural herbal footbaths upon return from excursions',
        'Post-swim freshwater rinse showers',
      ],
    },
  ],
  rules: [
    {
      title: 'Check-in & Check-out',
      icon: 'fa-clock',
      desc: 'Check-in from 2:00 PM (14:00). Check-out until 12:00 PM (12:00). Early check-in or late checkout arranged subject to room availability.',
    },
    {
      title: 'Local Island Etiquette',
      icon: 'fa-person-dress',
      desc: 'Bikinis and swimwear are permitted on dedicated Bikini Beaches. When walking through local village streets, modest attire covering shoulders and knees is required.',
    },
    {
      title: 'Alcohol & Substance Policy',
      icon: 'fa-ban',
      desc: 'Under Maldivian national law, alcohol, pork, and recreational drugs are prohibited on inhabited local islands. Floating safari bar yachts are accessible nearby.',
    },
    {
      title: 'Marine Life Conservation',
      icon: 'fa-water',
      desc: 'Please protect the coral reef. Never step on corals, collect sea shells, or touch marine turtles and manta rays. Eco-friendly sunscreen is strongly advised.',
    },
  ],
  initialReviews: [
    {
      id: 1,
      name: 'Elena Rostova',
      country: 'Germany',
      flag: '🇩🇪',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
      rating: 5,
      date: 'Stayed January 2026',
      title: 'Unbelievable paradise, authentic island warmth!',
      comment:
        'The location is breathtaking. The house reef is only 20 meters from the beach and we saw sea turtles and baby reef sharks every single morning! Ahmed and his team coordinated our speedboat seamlessly from Male airport. The Maldivian Mas Huni breakfast was delicious.',
    },
    {
      id: 2,
      name: 'Marcus Chen',
      country: 'Singapore',
      flag: '🇸🇬',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
      rating: 5,
      date: 'Stayed December 2025',
      title: 'Best value in the Maldives by far!',
      comment:
        'Why pay $1,500/night at a resort when this guesthouse offers the same crystal clear water, spotless modern rooms, and even better food at a fraction of the cost? Highly recommend the sandbank excursion!',
    },
    {
      id: 3,
      name: 'Sophie Laurent',
      country: 'France',
      flag: '🇫🇷',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
      rating: 4,
      date: 'Stayed November 2025',
      title: 'Wonderful hosts and immaculate rooms',
      comment:
        'Very comfortable bed, great AC, and lightning fast Wi-Fi (great for remote work). The bikini beach is just a 2-minute stroll under palm trees. Would love to come back again next season.',
    },
  ],
};

const GuesthouseDetails = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [galleryMode, setGalleryMode] = useState('mosaic');
  const [sliderIndex, setSliderIndex] = useState(0);
  const [isWishlist, setIsWishlist] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Booking Widget State
  const [selectedRoomId, setSelectedRoomId] = useState(1);
  const [checkIn, setCheckIn] = useState('2026-11-25');
  const [checkOut, setCheckOut] = useState('2026-11-28');
  const [roomsCount, setRoomsCount] = useState(1);
  const [adultsCount, setAdultsCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);

  // Reviews State
  const [reviewsList, setReviewsList] = useState(GUESTHOUSE_DATA.initialReviews);
  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewText, setNewReviewText] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const selectedRoom =
    GUESTHOUSE_DATA.rooms.find((r) => r.id === selectedRoomId) || GUESTHOUSE_DATA.rooms[0];

  // Price calculations
  const nights = 3;
  const roomBaseTotal = selectedRoom.price * nights * roomsCount;
  const tgstAmount = roomBaseTotal * 0.16;
  const greenTaxAmount = 6 * (adultsCount + childrenCount) * nights;
  const grandTotal = roomBaseTotal + tgstAmount + greenTaxAmount;

  const handleShareClick = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewText.trim()) return;

    const newRev = {
      id: Date.now(),
      name: newReviewName,
      country: 'Guest',
      flag: '🇲🇻',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80',
      rating: Number(newReviewRating),
      date: 'Just now',
      title: 'Verified Traveler Review',
      comment: newReviewText,
    };

    setReviewsList([newRev, ...reviewsList]);
    setNewReviewName('');
    setNewReviewText('');
    setReviewSubmitted(true);
    setTimeout(() => setReviewSubmitted(false), 4000);
  };

  const nextSlide = () => {
    setSliderIndex((prev) => (prev + 1) % GUESTHOUSE_DATA.images.length);
  };

  const prevSlide = () => {
    setSliderIndex((prev) => (prev - 1 + GUESTHOUSE_DATA.images.length) % GUESTHOUSE_DATA.images.length);
  };

  return (
    <>
      <Header />
      <div className="guesthouse-details-page-wrapper">

      {/* Compact Image Breadcrumbs Section */}
      <section className="breadcrumbs-main-info-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="breadcrumbs-main-content">
                <h2>Guesthouse Details</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i className="fas fa-angle-right" />
                  </li>
                  <li>
                    <Link to="/room-list-filter">Guesthouses</Link>
                  </li>
                  <li>
                    <i className="fas fa-angle-right" />
                  </li>
                  <li>{GUESTHOUSE_DATA.title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="room-details-info-area">
        <div className="container">
          {/* Top Property Header Card */}
          <div className="guesthouse-header-card">
            <div className="guesthouse-badge-row">
              <div className="guesthouse-badge-pills">
                <span className="guesthouse-badge-pill primary">
                  <i className="fa-solid fa-umbrella-beach" /> {GUESTHOUSE_DATA.badge}
                </span>
                <span className="guesthouse-badge-pill verified">
                  <i className="fa-solid fa-circle-check" /> Verified by CheapRoomMV
                </span>
              </div>
              <div className="guesthouse-header-actions">
                <button
                  type="button"
                  className={`guesthouse-action-btn ${isWishlist ? 'active' : ''}`}
                  onClick={() => setIsWishlist(!isWishlist)}
                  title={isWishlist ? 'Saved in Wishlist' : 'Add to Wishlist'}
                >
                  <i className={isWishlist ? 'fa-solid fa-heart' : 'fa-regular fa-heart'} />
                  {isWishlist ? 'Saved' : 'Save'}
                </button>
                <button
                  type="button"
                  className="guesthouse-action-btn"
                  onClick={handleShareClick}
                  title="Share this property"
                >
                  <i className="fa-solid fa-share-nodes" />
                  {copiedLink ? 'Link Copied!' : 'Share'}
                </button>
              </div>
            </div>

            <h1 className="guesthouse-title-heading">{GUESTHOUSE_DATA.title}</h1>

            <div className="guesthouse-meta-info">
              <span className="guesthouse-meta-location">
                <i className="fa-solid fa-location-dot" />
                {GUESTHOUSE_DATA.island}, {GUESTHOUSE_DATA.country}
              </span>
              <span>•</span>
              <span className="text-muted">
                <i className="fa-solid fa-ship me-1 text-teal" /> {GUESTHOUSE_DATA.speedBoatTime}
              </span>
              <span>•</span>
              <span className="guesthouse-rating-pill">
                <i className="fa-solid fa-star" /> {GUESTHOUSE_DATA.rating} ({GUESTHOUSE_DATA.reviewsCount} reviews)
              </span>
            </div>
          </div>

          {/* Interactive Photo Gallery Section */}
          <div className="guesthouse-gallery-card">
            <div className="guesthouse-gallery-tabs-bar">
              <div className="d-flex align-items-center gap-2">
                <span className="fw-bold text-dark fs-6">
                  <i className="fa-solid fa-images text-teal me-2" /> Property Photos ({GUESTHOUSE_DATA.images.length})
                </span>
              </div>
              <div className="gallery-view-toggle">
                <button
                  type="button"
                  className={`gallery-view-btn ${galleryMode === 'mosaic' ? 'active' : ''}`}
                  onClick={() => setGalleryMode('mosaic')}
                >
                  <i className="fa-solid fa-grip" /> Grid View
                </button>
                <button
                  type="button"
                  className={`gallery-view-btn ${galleryMode === 'slider' ? 'active' : ''}`}
                  onClick={() => setGalleryMode('slider')}
                >
                  <i className="fa-solid fa-film" /> Slideshow
                </button>
              </div>
            </div>

            {galleryMode === 'mosaic' ? (
              <div className="guesthouse-mosaic-grid">
                <div
                  className="mosaic-main-col"
                  onClick={() => {
                    setSliderIndex(0);
                    setGalleryMode('slider');
                  }}
                >
                  <img src={GUESTHOUSE_DATA.images[0].src} alt={GUESTHOUSE_DATA.images[0].title} />
                  <span className="mosaic-main-badge">
                    <i className="fa-solid fa-star text-warning" /> Featured Island View
                  </span>
                </div>
                <div className="mosaic-sub-grid">
                  {GUESTHOUSE_DATA.images.slice(1, 4).map((img, idx) => (
                    <div
                      key={idx}
                      className="mosaic-item"
                      onClick={() => {
                        setSliderIndex(idx + 1);
                        setGalleryMode('slider');
                      }}
                    >
                      <img src={img.src} alt={img.title} />
                    </div>
                  ))}
                  <div
                    className="mosaic-item position-relative"
                    onClick={() => {
                      setSliderIndex(4);
                      setGalleryMode('slider');
                    }}
                  >
                    <img src={GUESTHOUSE_DATA.images[4].src} alt={GUESTHOUSE_DATA.images[4].title} />
                    <div className="mosaic-more-overlay">
                      <i className="fa-solid fa-camera fs-4" />
                      <span>+{GUESTHOUSE_DATA.images.length - 4} More</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="guesthouse-slider-wrapper">
                <div className="slider-main-display">
                  <img
                    src={GUESTHOUSE_DATA.images[sliderIndex].src}
                    alt={GUESTHOUSE_DATA.images[sliderIndex].title}
                  />
                  <button type="button" className="slider-control-arrow prev" onClick={prevSlide}>
                    <i className="fa-solid fa-chevron-left" />
                  </button>
                  <button type="button" className="slider-control-arrow next" onClick={nextSlide}>
                    <i className="fa-solid fa-chevron-right" />
                  </button>
                  <span className="slider-counter-badge">
                    {sliderIndex + 1} / {GUESTHOUSE_DATA.images.length} · {GUESTHOUSE_DATA.images[sliderIndex].title}
                  </span>
                </div>
                <div className="slider-thumbnails-strip">
                  {GUESTHOUSE_DATA.images.map((img, idx) => (
                    <div
                      key={idx}
                      className={`slider-thumb-item ${sliderIndex === idx ? 'active' : ''}`}
                      onClick={() => setSliderIndex(idx)}
                    >
                      <img src={img.src} alt={img.title} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Key Selling Highlights Strip */}
          <div className="guesthouse-highlights-bar">
            <div className="highlights-grid">
              <div className="highlight-item">
                <div className="highlight-icon-box">
                  <i className="fa-solid fa-ship" />
                </div>
                <div className="highlight-info">
                  <span className="highlight-label">Speedboat Included</span>
                  <span className="highlight-sub">15 min from Airport</span>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon-box">
                  <i className="fa-solid fa-umbrella-beach" />
                </div>
                <div className="highlight-info">
                  <span className="highlight-label">Private Bikini Beach</span>
                  <span className="highlight-sub">2 min walking distance</span>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon-box">
                  <i className="fa-solid fa-mug-saucer" />
                </div>
                <div className="highlight-info">
                  <span className="highlight-label">Free Daily Breakfast</span>
                  <span className="highlight-sub">Continental &amp; Maldivian</span>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon-box">
                  <i className="fa-solid fa-water" />
                </div>
                <div className="highlight-info">
                  <span className="highlight-label">House Reef Snorkeling</span>
                  <span className="highlight-sub">Free gear &amp; life vests</span>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon-box">
                  <i className="fa-solid fa-wifi" />
                </div>
                <div className="highlight-info">
                  <span className="highlight-label">Starlink Fast Wi-Fi</span>
                  <span className="highlight-sub">Free across property</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Two-Column Layout */}
          <div className="row g-4 align-items-start">
            {/* Left Column: Property Details & Tabs */}
            <div className="col-lg-8 col-md-12">
              {/* Tab Navigation Pills */}
              <div className="guesthouse-tabs-nav">
                {['Overview', 'Rooms', 'Facilities', 'Location', 'Rules', 'Reviews'].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    className={`guesthouse-tab-link ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab === 'Overview' && <i className="fa-solid fa-circle-info" />}
                    {tab === 'Rooms' && <i className="fa-solid fa-bed" />}
                    {tab === 'Facilities' && <i className="fa-solid fa-concierge-bell" />}
                    {tab === 'Location' && <i className="fa-solid fa-map-location-dot" />}
                    {tab === 'Rules' && <i className="fa-solid fa-shield-halved" />}
                    {tab === 'Reviews' && <i className="fa-solid fa-star" />}
                    {tab === 'Rules' ? 'Property Rules' : tab === 'Reviews' ? `Guest Reviews (${reviewsList.length})` : tab}
                  </button>
                ))}
              </div>

              {/* 1. Overview Tab */}
              {activeTab === 'Overview' && (
                <div className="guesthouse-tab-card">
                  <div className="tab-section-header">
                    <h3>
                      <i className="fa-solid fa-umbrella-beach" /> About {GUESTHOUSE_DATA.title}
                    </h3>
                  </div>

                  <p className="overview-text-block">
                    Escape to the pristine shores of <strong>North Malé Atoll</strong> at {GUESTHOUSE_DATA.title}. Nestled on the turquoise perimeter of Furanafushi Island, this certified island retreat offers direct access to powdery white beaches, crystalline waters, and thriving coral reefs teeming with sea turtles and tropical marine life.
                  </p>
                  <p className="overview-text-block">
                    Blending authentic Maldivian island hospitality with contemporary resort conveniences, every room features air-conditioning, plush king-size bedding, private en-suite tropical bathrooms, and complimentary high-speed Starlink Wi-Fi. Located just 15 minutes by speed boat from Velana International Airport, you will arrive at your oceanfront haven shortly after landing.
                  </p>

                  <div className="overview-features-grid">
                    <div className="overview-feature-box">
                      <i className="fa-solid fa-water" />
                      <div>
                        <h5>Private Lagoon &amp; Reef</h5>
                        <p>Direct shoreline access to protected turquoise lagoons perfect for swimming and coral snorkeling.</p>
                      </div>
                    </div>
                    <div className="overview-feature-box">
                      <i className="fa-solid fa-fish-fins" />
                      <div>
                        <h5>Marine Safari Center</h5>
                        <p>Complimentary snorkeling equipment and daily excursions to dolphin habitats and sandbanks.</p>
                      </div>
                    </div>
                    <div className="overview-feature-box">
                      <i className="fa-solid fa-utensils" />
                      <div>
                        <h5>Island Seafood Grill</h5>
                        <p>Enjoy fresh catch of the day, authentic Maldivian Mas Huni breakfasts, and international specialties.</p>
                      </div>
                    </div>
                    <div className="overview-feature-box">
                      <i className="fa-solid fa-sailboat" />
                      <div>
                        <h5>Roundtrip Sea Transit</h5>
                        <p>Scheduled maritime speedboats meet you directly at Velana Airport arrival gates for effortless transfers.</p>
                      </div>
                    </div>
                  </div>

                  <div className="host-note-box">
                    <i className="fa-solid fa-quote-left" />
                    <div>
                      <h5>A Personal Welcome from Your Island Host</h5>
                      <p>
                        "Welcome to our island home! Our family and team have lived on North Malé Atoll for generations. We take pride in sharing our culture, the secret snorkeling spots, and fresh coconut hospitality with every traveler."
                        <br />
                        <strong className="text-dark">— Ahmed &amp; Furanafushi Island Team</strong>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. Rooms & Rates Tab */}
              {activeTab === 'Rooms' && (
                <div className="guesthouse-tab-card">
                  <div className="tab-section-header">
                    <h3>
                      <i className="fa-solid fa-bed" /> Available Rooms &amp; Suites ({GUESTHOUSE_DATA.rooms.length})
                    </h3>
                  </div>

                  <div className="rooms-list-container">
                    {GUESTHOUSE_DATA.rooms.map((room) => {
                      const isSelected = selectedRoomId === room.id;
                      return (
                        <div
                          key={room.id}
                          className="guesthouse-room-card"
                          style={{ borderColor: isSelected ? '#F29E4C' : '#e2e8f0' }}
                        >
                          <div className="room-card-photo-wrap">
                            <img src={room.image} alt={room.title} />
                            <span className="room-badge-tag">{room.badge}</span>
                          </div>
                          <div className="room-card-body">
                            <div>
                              <div className="room-card-title-row">
                                <h4>{room.title}</h4>
                              </div>
                              <div className="room-card-specs-bar">
                                <span className="room-spec-item">
                                  <i className="fa-solid fa-maximize" /> {room.size}
                                </span>
                                <span className="room-spec-item">
                                  <i className="fa-solid fa-bed" /> {room.bed}
                                </span>
                                <span className="room-spec-item">
                                  <i className="fa-solid fa-eye" /> {room.view}
                                </span>
                                <span className="room-spec-item">
                                  <i className="fa-solid fa-user-group" /> {room.capacity}
                                </span>
                              </div>
                              <ul className="room-perks-list">
                                {room.perks.map((perk, i) => (
                                  <li key={i}>
                                    <i className="fa-solid fa-check" /> {perk}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="room-card-footer">
                              <div className="room-pricing-box">
                                <h5>${room.price} <span>/ night</span></h5>
                                <span>Includes TGST &amp; Maldives Green Tax</span>
                              </div>
                              <div className="room-card-actions">
                                <button
                                  type="button"
                                  className={`room-select-btn ${isSelected ? 'selected' : ''}`}
                                  onClick={() => setSelectedRoomId(room.id)}
                                >
                                  {isSelected ? (
                                    <>
                                      <i className="fa-solid fa-check me-1" /> Selected Room
                                    </>
                                  ) : (
                                    'Select This Room'
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 3. Facilities Tab */}
              {activeTab === 'Facilities' && (
                <div className="guesthouse-tab-card">
                  <div className="tab-section-header">
                    <h3>
                      <i className="fa-solid fa-concierge-bell" /> Property Facilities &amp; Amenities
                    </h3>
                  </div>

                  <div className="facilities-category-grid">
                    {GUESTHOUSE_DATA.facilities.map((group, index) => (
                      <div key={index} className="facilities-group-card">
                        <div className="facilities-group-header">
                          <i className={`fa-solid ${group.icon}`} />
                          <h5>{group.category}</h5>
                        </div>
                        <ul className="facilities-items-list">
                          {group.items.map((item, i) => (
                            <li key={i}>
                              <i className="fa-solid fa-circle-check" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. Location & Island Transfers Tab */}
              {activeTab === 'Location' && (
                <div className="guesthouse-tab-card">
                  <div className="tab-section-header">
                    <h3>
                      <i className="fa-solid fa-map-location-dot" /> Island Location &amp; Speedboat Transfer
                    </h3>
                  </div>

                  <div className="location-overview-card">
                    <div className="location-meta-grid">
                      <div className="location-meta-box">
                        <i className="fa-solid fa-plane-arrival" />
                        <div>
                          <h6>Airport Pickup</h6>
                          <p>Velana Int'l Airport (Malé) Counter #18</p>
                        </div>
                      </div>
                      <div className="location-meta-box">
                        <i className="fa-solid fa-stopwatch" />
                        <div>
                          <h6>Transfer Duration</h6>
                          <p>15-20 mins by speed boat</p>
                        </div>
                      </div>
                      <div className="location-meta-box">
                        <i className="fa-solid fa-umbrella-beach" />
                        <div>
                          <h6>Bikini Beach Access</h6>
                          <p>80 meters (1 min walk)</p>
                        </div>
                      </div>
                      <div className="location-meta-box">
                        <i className="fa-solid fa-shop" />
                        <div>
                          <h6>Local Island Village</h6>
                          <p>Cafes, shops &amp; harbor (300m)</p>
                        </div>
                      </div>
                    </div>

                    <div className="map-embed-container">
                      <iframe
                        src="https://maps.google.com/maps?q=Male,+Maldives&t=&z=12&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="380"
                        style={{ border: 0, display: 'block' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Island Location Map"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 5. Property Rules Tab */}
              {activeTab === 'Rules' && (
                <div className="guesthouse-tab-card">
                  <div className="tab-section-header">
                    <h3>
                      <i className="fa-solid fa-shield-halved" /> Property Rules &amp; Island Guidelines
                    </h3>
                  </div>

                  <div className="property-rules-grid">
                    {GUESTHOUSE_DATA.rules.map((rule, idx) => (
                      <div key={idx} className="rule-info-card">
                        <i className={`fa-solid ${rule.icon}`} />
                        <div>
                          <h5>{rule.title}</h5>
                          <p>{rule.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 6. Reviews Tab */}
              {activeTab === 'Reviews' && (
                <div className="guesthouse-tab-card">
                  <div className="tab-section-header">
                    <h3>
                      <i className="fa-solid fa-star" /> Guest Ratings &amp; Experiences ({reviewsList.length})
                    </h3>
                  </div>

                  <div className="reviews-summary-banner">
                    <div className="score-badge-box">
                      <div className="big-rating-number">4.8</div>
                      <div className="rating-stars-row">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                      </div>
                      <span className="rating-total-label">Based on 1,420 Verified Stays</span>
                    </div>

                    <div className="rating-breakdown-bars">
                      <div className="breakdown-row">
                        <span>Cleanliness &amp; Comfort</span>
                        <div className="breakdown-bar-wrap">
                          <div className="breakdown-bar-fill" style={{ width: '98%' }} />
                        </div>
                        <span>4.9</span>
                      </div>
                      <div className="breakdown-row">
                        <span>Island Location &amp; Reef</span>
                        <div className="breakdown-bar-wrap">
                          <div className="breakdown-bar-fill" style={{ width: '98%' }} />
                        </div>
                        <span>4.9</span>
                      </div>
                      <div className="breakdown-row">
                        <span>Host &amp; Staff Service</span>
                        <div className="breakdown-bar-wrap">
                          <div className="breakdown-bar-fill" style={{ width: '96%' }} />
                        </div>
                        <span>4.8</span>
                      </div>
                      <div className="breakdown-row">
                        <span>Speedboat Transfer</span>
                        <div className="breakdown-bar-wrap">
                          <div className="breakdown-bar-fill" style={{ width: '94%' }} />
                        </div>
                        <span>4.7</span>
                      </div>
                    </div>
                  </div>

                  <div className="user-reviews-list">
                    {reviewsList.map((rev) => (
                      <div key={rev.id} className="modern-review-card">
                        <div className="review-card-top">
                          <div className="reviewer-meta">
                            <img src={rev.avatar} alt={rev.name} className="reviewer-avatar" />
                            <div className="reviewer-details">
                              <h5>
                                {rev.name} <span className="ms-1">{rev.flag}</span>
                              </h5>
                              <span>
                                {rev.country} • {rev.date}
                              </span>
                            </div>
                          </div>
                          <div className="review-rating-stars">
                            {[...Array(5)].map((_, starI) => (
                              <i
                                key={starI}
                                className={starI < rev.rating ? 'fa-solid fa-star text-warning' : 'fa-regular fa-star text-muted'}
                              />
                            ))}
                          </div>
                        </div>
                        <h6 className="fw-bold text-dark mb-1">{rev.title}</h6>
                        <p className="review-text-content">{rev.comment}</p>
                      </div>
                    ))}
                  </div>

                  {/* Add Review Form */}
                  <div className="mt-4 pt-3 border-top">
                    <h5 className="fw-bold text-dark mb-3">
                      <i className="fa-solid fa-pen-to-square text-teal me-2" /> Share Your Stay Experience
                    </h5>
                    {reviewSubmitted && (
                      <div className="alert alert-success d-flex align-items-center gap-2">
                        <i className="fa-solid fa-circle-check fs-5" />
                        <span>Thank you! Your verified review has been submitted successfully.</span>
                      </div>
                    )}
                    <form onSubmit={handleAddReview}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label fs-7 fw-bold text-dark">Your Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="e.g. Sarah Jenkins"
                            value={newReviewName}
                            onChange={(e) => setNewReviewName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label fs-7 fw-bold text-dark">Rating</label>
                          <select
                            className="form-select"
                            value={newReviewRating}
                            onChange={(e) => setNewReviewRating(e.target.value)}
                          >
                            <option value="5">5 ★★★★★ (Exceptional)</option>
                            <option value="4">4 ★★★★☆ (Very Good)</option>
                            <option value="3">3 ★★★☆☆ (Average)</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <label className="form-label fs-7 fw-bold text-dark">Your Review</label>
                          <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Tell other travelers about the island, room cleanliness, beach, and host hospitality..."
                            value={newReviewText}
                            onChange={(e) => setNewReviewText(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn-guesthouse-reserve" style={{ maxWidth: '220px' }}>
                            Submit Review
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sticky Booking Widget & Host Card */}
            <div className="col-lg-4 col-md-12">
              <div className="guesthouse-sidebar-area">
                <div className="guesthouse-booking-card">
                  <div className="booking-card-price-header">
                    <div className="price-main-display">
                      <div className="price-discount-row">
                        <span className="price-original">${selectedRoom.originalPrice}</span>
                        <span className="price-discount-pill">
                          Save ${selectedRoom.originalPrice - selectedRoom.price}/night
                        </span>
                      </div>
                      <div className="price-active-rate">
                        ${selectedRoom.price} <span>/ night</span>
                      </div>
                    </div>
                    <span className="guesthouse-rating-pill">
                      <i className="fa-solid fa-star" /> {GUESTHOUSE_DATA.rating}
                    </span>
                  </div>

                  <form onSubmit={(e) => e.preventDefault()}>
                    {/* Selected Room Type */}
                    <div className="booking-form-group">
                      <label className="booking-form-label">Selected Room Tier</label>
                      <div className="booking-input-wrap">
                        <i className="fa-solid fa-bed" />
                        <select
                          value={selectedRoomId}
                          onChange={(e) => setSelectedRoomId(Number(e.target.value))}
                        >
                          {GUESTHOUSE_DATA.rooms.map((rm) => (
                            <option key={rm.id} value={rm.id}>
                              {rm.title} (${rm.price}/night)
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Dates */}
                    <div className="booking-form-group">
                      <label className="booking-form-label">Stay Dates (3 Nights)</label>
                      <div className="booking-date-inputs">
                        <div className="booking-input-wrap">
                          <i className="fa-solid fa-calendar-days" />
                          <input
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                          />
                        </div>
                        <div className="booking-input-wrap">
                          <i className="fa-solid fa-calendar-check" />
                          <input
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Guests & Rooms */}
                    <div className="booking-form-group">
                      <div className="row g-2">
                        <div className="col-6">
                          <label className="booking-form-label">Rooms</label>
                          <div className="booking-input-wrap">
                            <i className="fa-solid fa-door-open" />
                            <select
                              value={roomsCount}
                              onChange={(e) => setRoomsCount(Number(e.target.value))}
                            >
                              <option value="1">1 Room</option>
                              <option value="2">2 Rooms</option>
                              <option value="3">3 Rooms</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6">
                          <label className="booking-form-label">Guests</label>
                          <div className="booking-input-wrap">
                            <i className="fa-solid fa-user-group" />
                            <select
                              value={adultsCount}
                              onChange={(e) => setAdultsCount(Number(e.target.value))}
                            >
                              <option value="1">1 Adult</option>
                              <option value="2">2 Adults</option>
                              <option value="3">3 Adults</option>
                              <option value="4">4 Adults</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Price Breakdown */}
                    <div className="booking-price-breakdown">
                      <div className="breakdown-line">
                        <span>
                          ${selectedRoom.price} × {nights} nights ({roomsCount} room{roomsCount > 1 ? 's' : ''})
                        </span>
                        <span>${roomBaseTotal.toFixed(2)}</span>
                      </div>
                      <div className="breakdown-line">
                        <span>Maldives TGST (16%)</span>
                        <span>${tgstAmount.toFixed(2)}</span>
                      </div>
                      <div className="breakdown-line">
                        <span>Maldives Green Tax ($6/person/night)</span>
                        <span>${greenTaxAmount.toFixed(2)}</span>
                      </div>
                      <div className="breakdown-line total">
                        <span>Estimated Total</span>
                        <span>${grandTotal.toFixed(2)}</span>
                      </div>
                    </div>

                    <button type="button" className="btn-guesthouse-reserve">
                      <i className="fa-solid fa-bolt" /> Reserve Guesthouse
                    </button>
                  </form>

                  <div className="booking-trust-points">
                    <div className="trust-point-item">
                      <i className="fa-solid fa-circle-check" /> Instant Confirmation Voucher issued to email
                    </div>
                    <div className="trust-point-item">
                      <i className="fa-solid fa-circle-check" /> Free Cancellation up to 48h prior to arrival
                    </div>
                    <div className="trust-point-item">
                      <i className="fa-solid fa-circle-check" /> Direct Airport Speedboat Transfer Included
                    </div>
                  </div>
                </div>

                {/* Host Contact Box */}
                <div className="guesthouse-host-card">
                  <div className="host-card-top">
                    <div className="host-avatar-wrap">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                        alt="Ahmed"
                      />
                      <span className="host-verified-check">
                        <i className="fa-solid fa-check" />
                      </span>
                    </div>
                    <div className="host-card-details">
                      <h5>Ahmed &amp; Island Concierge</h5>
                      <p>Certified Island Host • 6 Years Hosting</p>
                    </div>
                  </div>
                  <div className="host-badge-row">
                    <span className="host-mini-badge">
                      <i className="fa-solid fa-reply text-teal me-1" /> Response: 100%
                    </span>
                    <span className="host-mini-badge">
                      <i className="fa-solid fa-clock text-teal me-1" /> Within 15 mins
                    </span>
                  </div>
                  <a
                    href="https://wa.me/9607000000?text=Hello%20Ahmed,%20I%20am%20inquiring%20about%20booking%20Sheraton%20Maldives%20Full%20Moon%20Resort"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp-host"
                  >
                    <i className="fa-brands fa-whatsapp fs-5" /> Chat with Host on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      <Footer />
      <FooterCopyRight />
    </>
  );
};

export default GuesthouseDetails;
