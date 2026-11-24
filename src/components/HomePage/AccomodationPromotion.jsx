import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";

const PROMOTIONS = [
  {
    id: 1,
    img: 'assets/images/promotion-img/accommodation-promotions1.jpg',
    badge: 'SAVE 30%',
    badgeClass: 'badge-discount',
    title: 'Early Bird Island Escape',
    desc: 'Book 30+ days in advance & save 30% on deluxe beachfront rooms + free welcome drinks.',
    code: 'EARLY30',
    validity: 'Valid until 31 Dec 2026'
  },
  {
    id: 2,
    img: 'assets/images/promotion-img/accommodation-promotions2.jpg',
    badge: 'HONEYMOON DEAL',
    badgeClass: 'badge-romance',
    title: 'Overwater Sunset Special',
    desc: 'Complimentary sunset dolphin cruise, romantic beach dinner & floral room decoration included.',
    code: 'ROMANCE',
    validity: 'For 3+ night bookings'
  },
  {
    id: 3,
    img: 'assets/images/promotion-img/accommodation-promotions3.jpg',
    badge: 'FREE TRANSFERS',
    badgeClass: 'badge-special',
    title: 'Extended Island Stay (5+ Nights)',
    desc: 'Enjoy complimentary return airport speedboat transfers and daily guided reef snorkeling.',
    code: 'LONGSTAY',
    validity: 'Valid across all atolls'
  },
  {
    id: 4,
    img: 'assets/images/promotion-img/accommodation-promotions4.jpg',
    badge: 'WEEKEND 20% OFF',
    badgeClass: 'badge-discount',
    title: 'Maafushi Island Getaway',
    desc: 'Special weekend rates on beachfront rooms with free buffet breakfast and kayak rentals.',
    code: 'WEEKEND20',
    validity: 'Friday to Sunday stays'
  },
  {
    id: 5,
    img: 'assets/images/promotion-img/accommodation-promotions5.jpg',
    badge: 'FAMILY SPECIAL',
    badgeClass: 'badge-special',
    title: 'Family Suite & Kids Stay Free',
    desc: 'Spacious interconnected suites with children under 12 staying and dining completely free.',
    code: 'FAMILYMV',
    validity: 'Family suites only'
  }
];

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className="promo-slick-nav prev"
    aria-label="Previous Offer"
    type="button"
  >
    <i className="fa-solid fa-chevron-left" />
  </button>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className="promo-slick-nav next"
    aria-label="Next Offer"
    type="button"
  >
    <i className="fa-solid fa-chevron-right" />
  </button>
);

const AccommodationPromotions = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    arrows: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  };

  return (
    <section className="home-promotions-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-center-header text-center">
          <div className="section-badge-pill">
            <i className="fa-solid fa-tag" /> Exclusive Deals &amp; Discounts
          </div>
          <h2 className="section-main-heading">
            Offers for Your Next Stay
          </h2>
          <p className="section-subtitle">
            Take advantage of limited-time seasonal discounts, early bird rates, and special island packages designed for unforgettable stays.
          </p>
        </div>

        {/* Offers Slider */}
        <div className="promo-slider-container">
          <Slider {...settings}>
            {PROMOTIONS.map((offer) => (
              <div key={offer.id} className="promo-slide-item">
                <div className="promo-offer-card shadow-sm">
                  {/* Banner Image */}
                  <div className="promo-thumb-wrap">
                    <img src={offer.img} alt={offer.title} className="promo-thumb-img" />
                    <span className={`promo-badge ${offer.badgeClass}`}>
                      {offer.badge}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="promo-card-body">
                    <h4 className="promo-card-title">{offer.title}</h4>
                    <p className="promo-card-desc">{offer.desc}</p>

                    <div className="promo-code-row">
                      <div className="promo-coupon-box">
                        <small>PROMO CODE</small>
                        <strong>{offer.code}</strong>
                      </div>
                      <span className="promo-validity-text">{offer.validity}</span>
                    </div>

                    <div className="promo-card-footer">
                      <Link to="/room-list" className="btn-claim-offer">
                        <span>Claim Offer</span>
                        <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AccommodationPromotions;
