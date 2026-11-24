import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ALL_ROOMS = [
  {
    id: 1,
    name: "Overwater Sunrise Villa with Lagoon Access",
    atoll: "Kaafu Atoll",
    location: "Maafushi Island, Kaafu Atoll",
    price: "$135",
    originalPrice: "$175",
    rating: 4.9,
    reviews: 64,
    badge: "Top Rated",
    guests: "2-3 Guests",
    beds: "1 King Bed",
    baths: "1 Ensuite Bath",
    img: "assets/images/room-img/room-1.jpg"
  },
  {
    id: 2,
    name: "Deluxe Beachfront Guesthouse & Coral Garden",
    atoll: "Alif Alif Atoll",
    location: "Thoddoo Island, Alif Alif Atoll",
    price: "$95",
    originalPrice: "$125",
    rating: 4.8,
    reviews: 52,
    badge: "Popular",
    guests: "2 Guests",
    beds: "1 Queen Bed",
    baths: "1 Bath",
    img: "assets/images/room-img/room-2.jpg"
  },
  {
    id: 3,
    name: "Serene Ocean Breeze Palm Suite",
    atoll: "Alif Dhaal Atoll",
    location: "Dhigurah Island, Alif Dhaal Atoll",
    price: "$110",
    originalPrice: "$145",
    rating: 4.9,
    reviews: 47,
    badge: "Whale Shark Spot",
    guests: "3 Guests",
    beds: "2 Beds",
    baths: "1 Bath",
    img: "assets/images/room-img/room-3.jpg"
  },
  {
    id: 4,
    name: "Baa Biosphere Luxury Beach Cottage",
    atoll: "Baa Atoll",
    location: "Dharavandhoo, Baa Atoll",
    price: "$150",
    originalPrice: "$190",
    rating: 5.0,
    reviews: 38,
    badge: "UNESCO Reserve",
    guests: "4 Guests",
    beds: "2 Queen Beds",
    baths: "2 Baths",
    img: "assets/images/room-img/room-1.jpg"
  },
  {
    id: 5,
    name: "Ukulhas Island Turquoise Guesthouse",
    atoll: "Alif Alif Atoll",
    location: "Ukulhas Island, Alif Alif Atoll",
    price: "$85",
    originalPrice: "$110",
    rating: 4.8,
    reviews: 41,
    badge: "Eco Friendly",
    guests: "2 Guests",
    beds: "1 King Bed",
    baths: "1 Bath",
    img: "assets/images/room-img/room-2.jpg"
  },
  {
    id: 6,
    name: "Sunset Palm Beach House at Addu",
    atoll: "Addu Atoll",
    location: "Hithadhoo, Addu Atoll",
    price: "$80",
    originalPrice: "$105",
    rating: 4.7,
    reviews: 29,
    badge: "Best Value",
    guests: "2-4 Guests",
    beds: "2 Beds",
    baths: "1 Bath",
    img: "assets/images/room-img/room-3.jpg"
  }
];

const ATOLL_TABS = [
  "All Recommended",
  "Kaafu Atoll",
  "Alif Alif Atoll",
  "Alif Dhaal Atoll",
  "Baa Atoll",
  "Addu Atoll"
];

const RoomCard = ({ room }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
      <div className="modern-room-card shadow-sm">
        {/* Card Thumbnail */}
        <div className="room-card-thumb-wrap">
          <img src={room.img} alt={room.name} className="room-card-img" />

          {/* Floating Badge */}
          {room.badge && (
            <span className="room-card-badge">{room.badge}</span>
          )}

          {/* Wishlist Button */}
          <button
            type="button"
            className={`room-wishlist-btn ${isLiked ? "liked" : ""}`}
            onClick={() => setIsLiked(!isLiked)}
            aria-label="Save to Wishlist"
          >
            <i className={`fa-${isLiked ? "solid" : "regular"} fa-heart`} />
          </button>

          {/* Price Tag */}
          <div className="room-card-price-tag">
            <span className="price-amount">{room.price}</span>
            <small className="price-unit">/ night</small>
            {room.originalPrice && (
              <span className="price-original">{room.originalPrice}</span>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="room-card-body">
          {/* Rating & Location */}
          <div className="room-card-top-meta">
            <div className="room-rating-wrap">
              <i className="fa-solid fa-star" />
              <strong>{room.rating}</strong>
              <small>({room.reviews} reviews)</small>
            </div>
            <span className="room-location-text">
              <i className="fa-solid fa-location-dot" /> {room.location.split(',')[0]}
            </span>
          </div>

          {/* Title */}
          <h4 className="room-card-title">
            <Link to="/room-list">{room.name}</Link>
          </h4>

          {/* Amenities Pills */}
          <div className="room-amenities-row">
            <span className="amenity-pill">
              <i className="fa-solid fa-users" /> {room.guests}
            </span>
            <span className="amenity-pill">
              <i className="fa-solid fa-bed" /> {room.beds}
            </span>
            <span className="amenity-pill">
              <i className="fa-solid fa-bath" /> {room.baths}
            </span>
            <span className="amenity-pill">
              <i className="fa-solid fa-wifi" /> Free WiFi
            </span>
          </div>

          {/* Action Buttons */}
          <div className="room-card-actions">
            <Link to="/room-list" className="btn-room-action outline">
              View Details
            </Link>
            <Link to="/room-list" className="btn-room-action primary">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const RoomRecommendation = () => {
  const [activeTab, setActiveTab] = useState("All Recommended");

  const filteredRooms = activeTab === "All Recommended"
    ? ALL_ROOMS
    : ALL_ROOMS.filter((room) => room.atoll === activeTab);

  return (
    <section className="home-rooms-recommend-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-center-header text-center">
          <div className="section-badge-pill">
            <i className="fa-solid fa-award" /> Handpicked Island Stays
          </div>
          <h2 className="section-main-heading">
            Rooms Recommended For You
          </h2>
          <p className="section-subtitle">
            Explore top-rated rooms, beachfront cottages, and overwater villas rated highest for comfort, cleanliness, and value.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="rooms-tab-filter-wrap">
          <div className="rooms-tab-pill-list">
            {ATOLL_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`rooms-tab-pill ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="row g-4">
          {filteredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center mt-5">
          <Link to="/room-list" className="btn-view-all-rooms">
            <span>Explore All 250+ Island Rooms</span>
            <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RoomRecommendation;
