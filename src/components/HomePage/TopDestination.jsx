import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

import "slick-carousel/slick/slick.css";

const DESTINATIONS = [
  {
    id: 1,
    name: 'Kaafu Atoll (Malé & Maafushi)',
    count: '125+ Accommodations',
    startingPrice: '$45',
    tag: 'Most Popular',
    highlights: ['Bikini Beach', 'Water Sports', 'Sandbanks'],
    img: 'assets/images/top-destination-img/destination1.jpg'
  },
  {
    id: 2,
    name: 'Alif Alif Atoll (Thoddoo & Ukulhas)',
    count: '85+ Accommodations',
    startingPrice: '$60',
    tag: 'Beach & Farms',
    highlights: ['Fruit Island', 'Manta Snorkeling', 'Coral Reefs'],
    img: 'assets/images/top-destination-img/destination2.jpg'
  },
  {
    id: 3,
    name: 'Alif Dhaal Atoll (South Ari)',
    count: '95+ Accommodations',
    startingPrice: '$75',
    tag: 'Whale Shark Spot',
    highlights: ['Dhigurah Sandspit', 'Scuba Diving', 'Turtle Reefs'],
    img: 'assets/images/top-destination-img/destination3.jpg'
  },
  {
    id: 4,
    name: 'Baa Atoll (UNESCO Biosphere)',
    count: '60+ Accommodations',
    startingPrice: '$85',
    tag: 'UNESCO Reserve',
    highlights: ['Hanifaru Bay', 'Manta Rays', 'Luxury Stays'],
    img: 'assets/images/top-destination-img/destination4.jpg'
  },
  {
    id: 5,
    name: 'Addu Atoll (Southern Maldives)',
    count: '50+ Accommodations',
    startingPrice: '$50',
    tag: 'Nature & Heritage',
    highlights: ['Linked Islands', 'Nature Park', 'Historic Sites'],
    img: 'assets/images/top-destination-img/destination5.jpg'
  }
];

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className="dest-slick-nav prev"
    aria-label="Previous Destination"
    type="button"
  >
    <i className="fa-solid fa-chevron-left" />
  </button>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className="dest-slick-nav next"
    aria-label="Next Destination"
    type="button"
  >
    <i className="fa-solid fa-chevron-right" />
  </button>
);

const DestinationCard = ({ destination }) => (
  <div className="dest-slide-item">
    <div className="modern-dest-card shadow-sm">
      <div className="dest-img-wrap">
        <img src={destination.img} alt={destination.name} className="dest-img" />
        <div className="dest-img-overlay" />

        {/* Floating Tag */}
        <span className="dest-badge">{destination.tag}</span>

        {/* Starting Price */}
        <div className="dest-price-chip">
          <small>From</small>
          <strong>{destination.startingPrice}</strong>
          <small>/night</small>
        </div>
      </div>

      <div className="dest-card-body">
        <div className="dest-meta-count">
          <i className="fa-solid fa-hotel" /> {destination.count}
        </div>

        <h4 className="dest-name">{destination.name}</h4>

        <div className="dest-highlights-row">
          {destination.highlights.map((h, i) => (
            <span key={i} className="highlight-tag">
              • {h}
            </span>
          ))}
        </div>

        <div className="dest-card-footer">
          <Link to="/room-list" className="btn-dest-explore">
            <span>Explore Rooms</span>
            <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const TopDestinations = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 991,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1, arrows: false }
      }
    ]
  };

  return (
    <section className="home-destinations-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-center-header text-center">
          <div className="section-badge-pill">
            <i className="fa-solid fa-map-location-dot" /> Explore Maldives Atolls
          </div>
          <h2 className="section-main-heading">
            Top Rooms Destinations to Explore
          </h2>
          <p className="section-subtitle">
            Find the perfect island paradise or secluded atoll tailored to your budget, water sports interests, and travel dream.
          </p>
        </div>

        {/* Destinations Carousel */}
        <div className="dest-slider-container">
          <Slider {...settings}>
            {DESTINATIONS.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </Slider>
        </div>

        {/* Bottom Destination CTA */}
        <div className="text-center mt-5">
          <Link to="/room-list" className="btn-view-all-dest">
            <span>View All Maldives Destinations</span>
            <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
