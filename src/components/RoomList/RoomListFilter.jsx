import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import FooterCopyRight from "../FooterCopyRight";

// --- Static Data for Room Listings ---
const INITIAL_ROOMS = [
    {
        id: 1,
        title: "Sheraton Maldives Full Moon Resort & Spa - Complimentary Roundtrip Transfer",
        image: "assets/images/room-img/room-1.jpg",
        stars: 4,
        category: "Beachfront Resort",
        tag: "Best Seller",
        location: "Haa Alif. Vashafaru, Male, Maldives",
        capacity: "3 Guests",
        bed: "1 King Bed",
        bath: "1 Private Bath",
        island: "Vashafaru, Haa Alif Atoll",
        description:
            "Experience serene ocean views, world-class overwater dining, and complimentary speed boat transfers in our lavishly appointed island resort.",
        ratingLabel: "Excellent",
        ratingScore: 4.5,
        starScore: 4.5,
        reviewsCount: 5143,
        price: 12143,
        taxesText: "Includes taxes & resort fees",
        perks: ["Free Breakfast", "Free Cancellation", "Speedboat Transfer Included"]
    },
    {
        id: 2,
        title: "Sun Siyam Olhuveli Maldives - Deluxe Water Villa with Private Sun Deck",
        image: "assets/images/room-img/room-2.jpg",
        stars: 5,
        category: "Luxury Water Villa",
        tag: "Top Rated",
        location: "South Male Atoll, Olhuveli, Maldives",
        capacity: "2 Guests",
        bed: "1 King Bed",
        bath: "1 Private Bath",
        island: "Olhuveli, South Male Atoll",
        description:
            "Experience luxury living over the crystal clear turquoise lagoon with modern amenities, direct reef staircase, and sunset sundeck.",
        ratingLabel: "Exceptional",
        ratingScore: 4.8,
        starScore: 5.0,
        reviewsCount: 6820,
        price: 18450,
        taxesText: "Includes taxes & resort fees",
        perks: ["Free Breakfast", "Private Sundeck", "Reef Access Stairs"]
    },
    {
        id: 3,
        title: "Bandos Maldives Resort - Superior Beachfront Villa",
        image: "assets/images/room-img/room-3.jpg",
        stars: 4,
        category: "Superior Island Villa",
        tag: "Family Choice",
        location: "North Male Atoll, Bandos, Maldives",
        capacity: "4 Guests",
        bed: "2 Queen Beds",
        bath: "2 Baths",
        island: "Bandos, North Male Atoll",
        description:
            "Surrounded by lush green tropical vegetation and powdery white beaches, perfect for family getaways with renowned house reef diving.",
        ratingLabel: "Very Good",
        ratingScore: 4.3,
        starScore: 4.0,
        reviewsCount: 3412,
        price: 9990,
        taxesText: "Includes taxes & resort fees",
        perks: ["Free Cancellation", "Kids Club Access", "House Reef Diving"]
    },
    {
        id: 4,
        title: "Kurumba Maldives - Deluxe Oceanfront Bungalow",
        image: "assets/images/room-img/room-4.jpg",
        stars: 5,
        category: "Oceanfront Bungalow",
        tag: "Maldives Classic",
        location: "North Male Atoll, Vihamanaafushi, Maldives",
        capacity: "2 Guests",
        bed: "1 King Bed",
        bath: "1 Luxury Bath",
        island: "Vihamanaafushi Island",
        description:
            "Just 10 minutes by speedboat from Velana Airport. Featuring vibrant coral gardens, coconut groves, infinity pool, and 8 fine restaurants.",
        ratingLabel: "Excellent",
        ratingScore: 4.6,
        starScore: 4.5,
        reviewsCount: 4890,
        price: 14750,
        taxesText: "Includes taxes & resort fees",
        perks: ["Free Breakfast", "10-Min Speedboat", "Infinity Pool"]
    },
    {
        id: 5,
        title: "Paradise Island Resort & Spa - Sunset Beach Villa",
        image: "assets/images/room-img/room-5.jpg",
        stars: 4,
        category: "Sunset Beach Villa",
        tag: "Romantic Pick",
        location: "Lankanfinolhu, North Male Atoll, Maldives",
        capacity: "3 Guests",
        bed: "1 Queen Bed",
        bath: "1 Bath",
        island: "Lankanfinolhu, Male",
        description:
            "Enjoy stunning sunset panoramas right from your private terrace. Includes infinity pool access, watersports, and Araamu spa treatments.",
        ratingLabel: "Very Good",
        ratingScore: 4.4,
        starScore: 4.0,
        reviewsCount: 4120,
        price: 11800,
        taxesText: "Includes taxes & resort fees",
        perks: ["Free Cancellation", "Sunset Terrace", "Spa Discounts"]
    },
    {
        id: 6,
        title: "Meeru Maldives Resort Island - Jacuzzi Water Villa",
        image: "assets/images/room-img/room-6webp.webp",
        stars: 5,
        category: "Jacuzzi Water Villa",
        tag: "Superhost Choice",
        location: "Meerufenfushi, North Male Atoll, Maldives",
        capacity: "2 Guests",
        bed: "1 King Bed",
        bath: "1 Bath & Jacuzzi",
        island: "Meerufenfushi Island",
        description:
            "Traditional wooden villa on stilts over turquoise waters with private outdoor whirlpool jacuzzi for two and sundeck stairs into the ocean.",
        ratingLabel: "Exceptional",
        ratingScore: 4.9,
        starScore: 5.0,
        reviewsCount: 7530,
        price: 22300,
        taxesText: "Includes taxes & resort fees",
        perks: ["Private Outdoor Jacuzzi", "All-Inclusive Options", "Reef Snorkeling"]
    },
    {
        id: 7,
        title: "Cinnamon Dhonveli Maldives - Over Water Suite",
        image: "assets/images/room-img/room-1.jpg",
        stars: 4,
        category: "Overwater Suite",
        tag: "Surfer Paradise",
        location: "Kaafu Atoll, Dhonveli, Maldives",
        capacity: "3 Guests",
        bed: "1 King Bed",
        bath: "1 Bath",
        island: "Pasta Point, Kaafu Atoll",
        description:
            "World-renowned for the exclusive Pasta Point surf break, tranquil lagoons, and rejuvenating spa therapies with panoramic ocean vistas.",
        ratingLabel: "Excellent",
        ratingScore: 4.5,
        starScore: 4.5,
        reviewsCount: 3980,
        price: 15200,
        taxesText: "Includes taxes & resort fees",
        perks: ["Free Breakfast", "Surf Break Access", "Lagoon Views"]
    }
];

// --- Filter Options Data ---
const HAA_ALIF_MAIN = ["Baarah", "Dhiddhoo", "Filladhoo", "Hoarafushi", "Ihavandhoo"];
const HAA_ALIF_MORE = ["Kelaa", "Maarandhoo", "Mulhadhoo", "Muraidhoo", "Thakandhoo", "Uligamu", "Utheemu", "Vashafaru"];

const HAA_DHAALU_MAIN = ["Hanimaadhoo", "Finey", "Hirimaradhoo", "Kulhudhuffushi", "Kumundhoo"];
const HAA_DHAALU_MORE = ["Kurinbi", "Makunudhoo", "Naivaadhoo", "Nellaidhoo", "Neykurendhoo", "Nolhivaram", "Nolhivaranfaru", "Vaikaradhoo"];

const BED_TYPES = [
    { id: "bed_double", label: "Double" },
    { id: "bed_single", label: "Single / Twin" },
    { id: "bed_queen", label: "Queen" },
    { id: "bed_king", label: "King" },
    { id: "bed_bunk", label: "Bunk Bed" }
];

const ROOM_AMENITIES_MAIN = [
    { id: "amenity_ac", label: "Air conditioning" },
    { id: "amenity_tv", label: "TV" },
    { id: "amenity_wifi", label: "Internet access" },
    { id: "amenity_coffee", label: "Coffee/ Tea Maker" },
    { id: "amenity_fridge", label: "Refrigerator" }
];
const ROOM_AMENITIES_MORE = [
    { id: "amenity_iron", label: "Ironing facilities" },
    { id: "amenity_bath", label: "Bathtub" },
    { id: "amenity_balcony", label: "Balcony / Terrace" },
    { id: "amenity_heating", label: "Heating" },
    { id: "amenity_washing", label: "Washing machine" },
    { id: "amenity_kitchen", label: "Kitchen" },
    { id: "amenity_pets", label: "Pets allowed in room" },
    { id: "amenity_pool", label: "Private pool" }
];

const PROPERTY_FACILITIES_MAIN = [
    { id: "facility_pool", label: "Swimming pool" },
    { id: "facility_internet", label: "Internet" },
    { id: "facility_car_park", label: "Car park" },
    { id: "facility_airport", label: "Airport transfer" },
    { id: "facility_gym", label: "Gym / Fitness" }
];
const PROPERTY_FACILITIES_MORE = [
    { id: "facility_desk24", label: "Front desk [24-hour]" },
    { id: "facility_non_smoking", label: "Non-smoking" },
    { id: "facility_spa", label: "Spa / Sauna" },
    { id: "facility_restaurant", label: "Restaurants" },
    { id: "facility_smoking_area", label: "Smoking Area" },
    { id: "facility_pets", label: "Pets Allowed" },
    { id: "facility_night_club", label: "Night club" },
    { id: "facility_disabled", label: "Facilities for disabled guests" },
    { id: "facility_business", label: "Business facilities" }
];

const ROOM_OFFERS_MAIN = [
    { id: "offer_breakfast", label: "Breakfast included" },
    { id: "offer_dinner", label: "Dinner included" },
    { id: "offer_lunch", label: "Lunch included" },
    { id: "offer_early_checkin", label: "Early check-in" },
    { id: "offer_late_checkout", label: "Late check-out" }
];
const ROOM_OFFERS_MORE = [
    { id: "offer_food_delivery", label: "Outside food delivery allowed" },
    { id: "offer_tea", label: "Afternoon tea" },
    { id: "offer_family_delivery", label: "Delivery from family and relatives allowed" },
    { id: "offer_veg", label: "Vegetarian" },
    { id: "offer_car_rental", label: "Car rental" },
    { id: "offer_halal", label: "Halal" },
    { id: "offer_vegan", label: "Vegan" },
    { id: "offer_transfer", label: "Airport transfer" },
    { id: "offer_shuttle", label: "Free shuttle service" },
    { id: "offer_kids_menu", label: "Kids' menu" }
];

const GUEST_RATINGS = [
    { id: "gr_9", label: "9+ Exceptional", count: 155, min: 4.8 },
    { id: "gr_8", label: "8+ Excellent", count: 438, min: 4.5 },
    { id: "gr_7", label: "7+ Very Good", count: 780, min: 4.0 },
    { id: "gr_6", label: "6+ Good", count: 1147, min: 3.5 }
];

const STAR_RATINGS = [
    { count: 5, totalCount: 150 },
    { count: 4, totalCount: 320 },
    { count: 3, totalCount: 410 },
    { count: 2, totalCount: 180 },
    { count: 1, totalCount: 65 }
];

const RoomList = () => {
    // --- State: Price Range ---
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(119970);
    const MAX_PRICE_LIMIT = 119970;

    // --- State: Collapsible Sections inside filters ---
    const [collapsed, setCollapsed] = useState({
        atoll1: true,
        atoll2: true,
        amenities: true,
        facilities: true,
        offers: true
    });

    const toggleCollapse = (key) => {
        setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    // Accordion expand/collapse for filter groups
    const [sectionOpen, setSectionOpen] = useState({
        price: true,
        atoll1: true,
        atoll2: true,
        bed: true,
        amenities: true,
        facilities: true,
        offers: true,
        guestRating: true,
        starRating: true
    });

    const toggleSection = (key) => {
        setSectionOpen((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    // --- State: Selected Checkbox Filters ---
    const [selectedFilters, setSelectedFilters] = useState({
        atolls: [],
        bedTypes: [],
        amenities: [],
        facilities: [],
        offers: [],
        guestRatings: [],
        starRatings: []
    });

    const handleCheckboxChange = (category, value) => {
        setCurrentPage(1);
        setSelectedFilters((prev) => {
            const list = prev[category] || [];
            const nextList = list.includes(value)
                ? list.filter((item) => item !== value)
                : [...list, value];
            return { ...prev, [category]: nextList };
        });
    };

    const removeFilter = (category, value) => {
        setCurrentPage(1);
        setSelectedFilters((prev) => ({
            ...prev,
            [category]: (prev[category] || []).filter((item) => item !== value)
        }));
    };

    // --- State: Search Inputs ---
    const [sideSearchQuery, setSideSearchQuery] = useState("");
    const [topSearchQuery, setTopSearchQuery] = useState("");
    const [dateRange, setDateRange] = useState("");

    // --- State: Guests Popup ---
    const [isGuestOpen, setIsGuestOpen] = useState(false);
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const guestPopupRef = useRef(null);

    // --- State: Sort Dropdown ---
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState("Our top picks");
    const sortDropdownRef = useRef(null);

    // --- State: View Mode (list vs grid) ---
    const [viewMode, setViewMode] = useState("list");

    // --- State: Wishlist ---
    const [wishlist, setWishlist] = useState({ 2: true });
    const toggleWishlist = (id) => {
        setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    // --- State: Pagination ---
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Close popups when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (guestPopupRef.current && !guestPopupRef.current.contains(e.target)) {
                setIsGuestOpen(false);
            }
            if (sortDropdownRef.current && !sortDropdownRef.current.contains(e.target)) {
                setIsSortOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Check if any filter is active
    const hasActiveFilters =
        minPrice > 0 ||
        maxPrice < MAX_PRICE_LIMIT ||
        sideSearchQuery.trim() !== "" ||
        topSearchQuery.trim() !== "" ||
        selectedFilters.atolls.length > 0 ||
        selectedFilters.bedTypes.length > 0 ||
        selectedFilters.amenities.length > 0 ||
        selectedFilters.facilities.length > 0 ||
        selectedFilters.offers.length > 0 ||
        selectedFilters.guestRatings.length > 0 ||
        selectedFilters.starRatings.length > 0;

    // Reset all filters
    const handleResetAll = () => {
        setMinPrice(0);
        setMaxPrice(MAX_PRICE_LIMIT);
        setSideSearchQuery("");
        setTopSearchQuery("");
        setDateRange("");
        setSelectedFilters({
            atolls: [],
            bedTypes: [],
            amenities: [],
            facilities: [],
            offers: [],
            guestRatings: [],
            starRatings: []
        });
        setSelectedSort("Our top picks");
        setCurrentPage(1);
    };

    // Helper: Star rendering
    const renderStars = (count) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <i
                    key={i}
                    className={`fa-${i <= count ? "solid" : "regular"} fa-star`}
                />
            );
        }
        return stars;
    };

    // --- Filtering and Sorting logic ---
    const filteredRooms = INITIAL_ROOMS.filter((room) => {
        // Price filter
        if (room.price < minPrice || room.price > maxPrice) return false;

        // Search text filters (side search or top search)
        const q = (sideSearchQuery || topSearchQuery).toLowerCase().trim();
        if (q) {
            const matchTitle = room.title.toLowerCase().includes(q);
            const matchLoc = room.location.toLowerCase().includes(q);
            const matchIsland = room.island.toLowerCase().includes(q);
            const matchCategory = (room.category || "").toLowerCase().includes(q);
            if (!matchTitle && !matchLoc && !matchIsland && !matchCategory) return false;
        }

        // Star rating filter
        if (
            selectedFilters.starRatings.length > 0 &&
            !selectedFilters.starRatings.includes(room.stars)
        ) {
            return false;
        }

        // Guest rating filter
        if (
            selectedFilters.guestRatings.length > 0 &&
            !selectedFilters.guestRatings.some((min) => room.ratingScore >= min)
        ) {
            return false;
        }

        // Atolls filter
        if (selectedFilters.atolls.length > 0) {
            const matchesAtoll = selectedFilters.atolls.some(
                (a) =>
                    room.location.toLowerCase().includes(a.toLowerCase()) ||
                    room.island.toLowerCase().includes(a.toLowerCase())
            );
            if (!matchesAtoll) return false;
        }

        // Bed types filter
        if (selectedFilters.bedTypes.length > 0) {
            const matchesBed = selectedFilters.bedTypes.some((b) =>
                room.bed.toLowerCase().includes(b.toLowerCase())
            );
            if (!matchesBed) return false;
        }

        return true;
    }).sort((a, b) => {
        if (selectedSort === "Price (low to high)") return a.price - b.price;
        if (selectedSort === "Price (high to low)") return b.price - a.price;
        if (selectedSort === "Guest rating") return b.ratingScore - a.ratingScore;
        return a.id - b.id; // "Our top picks"
    });

    // Pagination calculations
    const totalPages = Math.ceil(filteredRooms.length / itemsPerPage) || 1;
    const paginatedRooms = filteredRooms.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <>
            <Header />

            {/* Compact Image Breadcrumbs Section */}
            <section className="breadcrumbs-main-info-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="breadcrumbs-main-content">
                                <h2>Guesthouse List</h2>
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <i className="fas fa-angle-right" />
                                    </li>
                                    <li>Guesthouse List</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="room-list-flter-info-area mt-5">
                <div className="container">
                    {/* Top Search & Filter Strip */}
                    <div className="room-top-filter-bar">
                        <div className="row g-3 align-items-center">
                            {/* Destination / Keyword */}
                            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                                <div className="room-top-field">
                                    <label className="room-top-label" htmlFor="topRoomSearch">
                                        Island, Atoll, or Room
                                    </label>
                                    <div className="room-top-input-wrap">
                                        <i className="fa-solid fa-location-dot field-icon" />
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="topRoomSearch"
                                            placeholder="Where in the Maldives?"
                                            value={topSearchQuery}
                                            onChange={(e) => {
                                                setTopSearchQuery(e.target.value);
                                                setCurrentPage(1);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Check-in & Check-out */}
                            <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                                <div className="room-top-field">
                                    <label className="room-top-label" htmlFor="topDateRange">
                                        Stay Dates
                                    </label>
                                    <div className="room-top-input-wrap">
                                        <i className="fa-regular fa-calendar-days field-icon" />
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="topDateRange"
                                            placeholder="Select Dates"
                                            value={dateRange}
                                            onChange={(e) => setDateRange(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Guests & Rooms */}
                            <div className="col-xl-3 col-lg-3 col-md-6 col-12" ref={guestPopupRef}>
                                <div className="room-top-field position-relative">
                                    <label className="room-top-label">Guests &amp; Rooms</label>
                                    <div className="room-top-input-wrap">
                                        <i className="fa-solid fa-user-group field-icon" />
                                        <button
                                            type="button"
                                            className="room-guest-btn"
                                            onClick={() => setIsGuestOpen(!isGuestOpen)}
                                        >
                                            {rooms} Room{rooms > 1 ? "s" : ""}, {adults + children} Guest{adults + children > 1 ? "s" : ""}
                                        </button>
                                    </div>

                                    {/* Guests Popup */}
                                    {isGuestOpen && (
                                        <div className="room-guest-popup">
                                            <div className="room-guest-row">
                                                <div>
                                                    <label>Rooms</label>
                                                    <small>Number of rooms</small>
                                                </div>
                                                <div className="room-counter-controls">
                                                    <button
                                                        type="button"
                                                        disabled={rooms <= 1}
                                                        onClick={() => setRooms(Math.max(1, rooms - 1))}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="counter-value">{rooms}</span>
                                                    <button
                                                        type="button"
                                                        onClick={() => setRooms(rooms + 1)}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="room-guest-row">
                                                <div>
                                                    <label>Adults</label>
                                                    <small>Ages 18 or above</small>
                                                </div>
                                                <div className="room-counter-controls">
                                                    <button
                                                        type="button"
                                                        disabled={adults <= 1}
                                                        onClick={() => setAdults(Math.max(1, adults - 1))}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="counter-value">{adults}</span>
                                                    <button
                                                        type="button"
                                                        onClick={() => setAdults(adults + 1)}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="room-guest-row">
                                                <div>
                                                    <label>Children</label>
                                                    <small>Ages 0 to 17</small>
                                                </div>
                                                <div className="room-counter-controls">
                                                    <button
                                                        type="button"
                                                        disabled={children <= 0}
                                                        onClick={() => setChildren(Math.max(0, children - 1))}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="counter-value">{children}</span>
                                                    <button
                                                        type="button"
                                                        onClick={() => setChildren(children + 1)}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Search Button */}
                            <div className="col-xl-2 col-lg-2 col-md-6 col-12">
                                <button
                                    type="button"
                                    className="room-top-search-btn"
                                    onClick={() => setCurrentPage(1)}
                                >
                                    <i className="fa-solid fa-magnifying-glass" /> Search
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Layout: Left Sidebar + Right Results */}
                    <div className="row">
                        {/* Left Column: Filter Sidebar */}
                        <div className="col-xl-3 col-lg-4 col-md-12 mb-4">
                            <div className="room-filter-sidebar">
                                {/* Header */}
                                <div className="filter-sidebar-header">
                                    <h3>
                                        <i className="fa-solid fa-sliders" /> Filter Results
                                    </h3>
                                    {hasActiveFilters && (
                                        <button
                                            type="button"
                                            className="filter-reset-link"
                                            onClick={handleResetAll}
                                        >
                                            Reset All
                                        </button>
                                    )}
                                </div>

                                {/* Map Preview Box */}
                                <div className="filter-map-card">
                                    <img src="assets/images/room-img/entry-map.jpg" alt="Maldives Map" />
                                    <div className="map-overlay">
                                        <div className="map-badge">
                                            <i className="fa-solid fa-location-dot" />
                                            <span>Explore on Map</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Search within sidebar */}
                                <div className="filter-quick-search">
                                    <i className="fa-solid fa-magnifying-glass search-icon" />
                                    <input
                                        type="text"
                                        placeholder="Quick filter rooms..."
                                        value={sideSearchQuery}
                                        onChange={(e) => {
                                            setSideSearchQuery(e.target.value);
                                            setCurrentPage(1);
                                        }}
                                    />
                                </div>

                                <div className="filter-divider" />

                                {/* Price Budget Range Slider */}
                                <div className="filter-budget-group">
                                    <div
                                        className={`filter-group-header ${sectionOpen.price ? "open" : ""}`}
                                        onClick={() => toggleSection("price")}
                                    >
                                        <h4>Your Budget (Per Night)</h4>
                                        <i className="fa-solid fa-chevron-down toggle-icon" />
                                    </div>

                                    {sectionOpen.price && (
                                        <>
                                            <div className="range-slider-wrapper">
                                                <div className="slider-track" />
                                                <div
                                                    className="slider-range"
                                                    style={{
                                                        left: `${(minPrice / MAX_PRICE_LIMIT) * 100}%`,
                                                        width: `${((maxPrice - minPrice) / MAX_PRICE_LIMIT) * 100}%`
                                                    }}
                                                />
                                                <input
                                                    type="range"
                                                    min={0}
                                                    max={MAX_PRICE_LIMIT}
                                                    value={minPrice}
                                                    step={100}
                                                    onChange={(e) => {
                                                        const val = Math.min(Number(e.target.value), maxPrice - 1000);
                                                        setMinPrice(val);
                                                        setCurrentPage(1);
                                                    }}
                                                />
                                                <input
                                                    type="range"
                                                    min={0}
                                                    max={MAX_PRICE_LIMIT}
                                                    value={maxPrice}
                                                    step={100}
                                                    onChange={(e) => {
                                                        const val = Math.max(Number(e.target.value), minPrice + 1000);
                                                        setMaxPrice(val);
                                                        setCurrentPage(1);
                                                    }}
                                                />
                                            </div>

                                            <div className="budget-inputs-row">
                                                <div className="budget-input-box">
                                                    <label>Min</label>
                                                    <div className="budget-prefix-val">
                                                        <span>Rs.</span>
                                                        <input
                                                            type="text"
                                                            value={minPrice.toLocaleString("en-IN")}
                                                            onChange={(e) => {
                                                                const num = Number(e.target.value.replace(/,/g, "")) || 0;
                                                                if (num <= maxPrice - 1000) {
                                                                    setMinPrice(num);
                                                                    setCurrentPage(1);
                                                                }
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <span className="budget-separator">-</span>
                                                <div className="budget-input-box">
                                                    <label>Max</label>
                                                    <div className="budget-prefix-val">
                                                        <span>Rs.</span>
                                                        <input
                                                            type="text"
                                                            value={maxPrice.toLocaleString("en-IN")}
                                                            onChange={(e) => {
                                                                const num = Number(e.target.value.replace(/,/g, "")) || 0;
                                                                if (num >= minPrice + 1000 && num <= MAX_PRICE_LIMIT) {
                                                                    setMaxPrice(num);
                                                                    setCurrentPage(1);
                                                                }
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>

                                <div className="filter-divider" />

                                {/* Haa Alif Atoll */}
                                <div className="filter-group-section">
                                    <div
                                        className={`filter-group-header ${sectionOpen.atoll1 ? "open" : ""}`}
                                        onClick={() => toggleSection("atoll1")}
                                    >
                                        <h4>Haa Alif Atoll</h4>
                                        <i className="fa-solid fa-chevron-down toggle-icon" />
                                    </div>
                                    {sectionOpen.atoll1 && (
                                        <div>
                                            <ul className="filter-options-list">
                                                {HAA_ALIF_MAIN.map((name) => (
                                                    <li key={name} className="filter-option-item">
                                                        <label className="filter-custom-checkbox">
                                                            <input
                                                                type="checkbox"
                                                                checked={selectedFilters.atolls.includes(name)}
                                                                onChange={() => handleCheckboxChange("atolls", name)}
                                                            />
                                                            <span className="filter-option-label">{name}</span>
                                                        </label>
                                                    </li>
                                                ))}
                                                {!collapsed.atoll1 &&
                                                    HAA_ALIF_MORE.map((name) => (
                                                        <li key={name} className="filter-option-item">
                                                            <label className="filter-custom-checkbox">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={selectedFilters.atolls.includes(name)}
                                                                    onChange={() => handleCheckboxChange("atolls", name)}
                                                                />
                                                                <span className="filter-option-label">{name}</span>
                                                            </label>
                                                        </li>
                                                    ))}
                                            </ul>
                                            <button
                                                type="button"
                                                className="filter-show-toggle-btn"
                                                onClick={() => toggleCollapse("atoll1")}
                                            >
                                                {collapsed.atoll1 ? (
                                                    <>
                                                        Show More ({HAA_ALIF_MORE.length}) <i className="fa-solid fa-chevron-down" />
                                                    </>
                                                ) : (
                                                    <>
                                                        Show Less <i className="fa-solid fa-chevron-up" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <div className="filter-divider" />

                                {/* Haa Dhaalu Atoll */}
                                <div className="filter-group-section">
                                    <div
                                        className={`filter-group-header ${sectionOpen.atoll2 ? "open" : ""}`}
                                        onClick={() => toggleSection("atoll2")}
                                    >
                                        <h4>Haa Dhaalu Atoll</h4>
                                        <i className="fa-solid fa-chevron-down toggle-icon" />
                                    </div>
                                    {sectionOpen.atoll2 && (
                                        <div>
                                            <ul className="filter-options-list">
                                                {HAA_DHAALU_MAIN.map((name) => (
                                                    <li key={name} className="filter-option-item">
                                                        <label className="filter-custom-checkbox">
                                                            <input
                                                                type="checkbox"
                                                                checked={selectedFilters.atolls.includes(name)}
                                                                onChange={() => handleCheckboxChange("atolls", name)}
                                                            />
                                                            <span className="filter-option-label">{name}</span>
                                                        </label>
                                                    </li>
                                                ))}
                                                {!collapsed.atoll2 &&
                                                    HAA_DHAALU_MORE.map((name) => (
                                                        <li key={name} className="filter-option-item">
                                                            <label className="filter-custom-checkbox">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={selectedFilters.atolls.includes(name)}
                                                                    onChange={() => handleCheckboxChange("atolls", name)}
                                                                />
                                                                <span className="filter-option-label">{name}</span>
                                                            </label>
                                                        </li>
                                                    ))}
                                            </ul>
                                            <button
                                                type="button"
                                                className="filter-show-toggle-btn"
                                                onClick={() => toggleCollapse("atoll2")}
                                            >
                                                {collapsed.atoll2 ? (
                                                    <>
                                                        Show More ({HAA_DHAALU_MORE.length}) <i className="fa-solid fa-chevron-down" />
                                                    </>
                                                ) : (
                                                    <>
                                                        Show Less <i className="fa-solid fa-chevron-up" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <div className="filter-divider" />

                                {/* Bed Type */}
                                <div className="filter-group-section">
                                    <div
                                        className={`filter-group-header ${sectionOpen.bed ? "open" : ""}`}
                                        onClick={() => toggleSection("bed")}
                                    >
                                        <h4>Bed Type</h4>
                                        <i className="fa-solid fa-chevron-down toggle-icon" />
                                    </div>
                                    {sectionOpen.bed && (
                                        <ul className="filter-options-list">
                                            {BED_TYPES.map((b) => (
                                                <li key={b.id} className="filter-option-item">
                                                    <label className="filter-custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedFilters.bedTypes.includes(b.label)}
                                                            onChange={() => handleCheckboxChange("bedTypes", b.label)}
                                                        />
                                                        <span className="filter-option-label">{b.label}</span>
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                <div className="filter-divider" />

                                {/* Room Amenities */}
                                <div className="filter-group-section">
                                    <div
                                        className={`filter-group-header ${sectionOpen.amenities ? "open" : ""}`}
                                        onClick={() => toggleSection("amenities")}
                                    >
                                        <h4>Room Amenities</h4>
                                        <i className="fa-solid fa-chevron-down toggle-icon" />
                                    </div>
                                    {sectionOpen.amenities && (
                                        <div>
                                            <ul className="filter-options-list">
                                                {ROOM_AMENITIES_MAIN.map((a) => (
                                                    <li key={a.id} className="filter-option-item">
                                                        <label className="filter-custom-checkbox">
                                                            <input
                                                                type="checkbox"
                                                                checked={selectedFilters.amenities.includes(a.label)}
                                                                onChange={() => handleCheckboxChange("amenities", a.label)}
                                                            />
                                                            <span className="filter-option-label">{a.label}</span>
                                                        </label>
                                                    </li>
                                                ))}
                                                {!collapsed.amenities &&
                                                    ROOM_AMENITIES_MORE.map((a) => (
                                                        <li key={a.id} className="filter-option-item">
                                                            <label className="filter-custom-checkbox">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={selectedFilters.amenities.includes(a.label)}
                                                                    onChange={() => handleCheckboxChange("amenities", a.label)}
                                                                />
                                                                <span className="filter-option-label">{a.label}</span>
                                                            </label>
                                                        </li>
                                                    ))}
                                            </ul>
                                            <button
                                                type="button"
                                                className="filter-show-toggle-btn"
                                                onClick={() => toggleCollapse("amenities")}
                                            >
                                                {collapsed.amenities ? (
                                                    <>
                                                        Show More ({ROOM_AMENITIES_MORE.length}) <i className="fa-solid fa-chevron-down" />
                                                    </>
                                                ) : (
                                                    <>
                                                        Show Less <i className="fa-solid fa-chevron-up" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <div className="filter-divider" />

                                {/* Property Facilities */}
                                <div className="filter-group-section">
                                    <div
                                        className={`filter-group-header ${sectionOpen.facilities ? "open" : ""}`}
                                        onClick={() => toggleSection("facilities")}
                                    >
                                        <h4>Property Facilities</h4>
                                        <i className="fa-solid fa-chevron-down toggle-icon" />
                                    </div>
                                    {sectionOpen.facilities && (
                                        <div>
                                            <ul className="filter-options-list">
                                                {PROPERTY_FACILITIES_MAIN.map((f) => (
                                                    <li key={f.id} className="filter-option-item">
                                                        <label className="filter-custom-checkbox">
                                                            <input
                                                                type="checkbox"
                                                                checked={selectedFilters.facilities.includes(f.label)}
                                                                onChange={() => handleCheckboxChange("facilities", f.label)}
                                                            />
                                                            <span className="filter-option-label">{f.label}</span>
                                                        </label>
                                                    </li>
                                                ))}
                                                {!collapsed.facilities &&
                                                    PROPERTY_FACILITIES_MORE.map((f) => (
                                                        <li key={f.id} className="filter-option-item">
                                                            <label className="filter-custom-checkbox">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={selectedFilters.facilities.includes(f.label)}
                                                                    onChange={() => handleCheckboxChange("facilities", f.label)}
                                                                />
                                                                <span className="filter-option-label">{f.label}</span>
                                                            </label>
                                                        </li>
                                                    ))}
                                            </ul>
                                            <button
                                                type="button"
                                                className="filter-show-toggle-btn"
                                                onClick={() => toggleCollapse("facilities")}
                                            >
                                                {collapsed.facilities ? (
                                                    <>
                                                        Show More ({PROPERTY_FACILITIES_MORE.length}) <i className="fa-solid fa-chevron-down" />
                                                    </>
                                                ) : (
                                                    <>
                                                        Show Less <i className="fa-solid fa-chevron-up" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <div className="filter-divider" />

                                {/* Room Offers */}
                                <div className="filter-group-section">
                                    <div
                                        className={`filter-group-header ${sectionOpen.offers ? "open" : ""}`}
                                        onClick={() => toggleSection("offers")}
                                    >
                                        <h4>Special Offers</h4>
                                        <i className="fa-solid fa-chevron-down toggle-icon" />
                                    </div>
                                    {sectionOpen.offers && (
                                        <div>
                                            <ul className="filter-options-list">
                                                {ROOM_OFFERS_MAIN.map((o) => (
                                                    <li key={o.id} className="filter-option-item">
                                                        <label className="filter-custom-checkbox">
                                                            <input
                                                                type="checkbox"
                                                                checked={selectedFilters.offers.includes(o.label)}
                                                                onChange={() => handleCheckboxChange("offers", o.label)}
                                                            />
                                                            <span className="filter-option-label">{o.label}</span>
                                                        </label>
                                                    </li>
                                                ))}
                                                {!collapsed.offers &&
                                                    ROOM_OFFERS_MORE.map((o) => (
                                                        <li key={o.id} className="filter-option-item">
                                                            <label className="filter-custom-checkbox">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={selectedFilters.offers.includes(o.label)}
                                                                    onChange={() => handleCheckboxChange("offers", o.label)}
                                                                />
                                                                <span className="filter-option-label">{o.label}</span>
                                                            </label>
                                                        </li>
                                                    ))}
                                            </ul>
                                            <button
                                                type="button"
                                                className="filter-show-toggle-btn"
                                                onClick={() => toggleCollapse("offers")}
                                            >
                                                {collapsed.offers ? (
                                                    <>
                                                        Show More ({ROOM_OFFERS_MORE.length}) <i className="fa-solid fa-chevron-down" />
                                                    </>
                                                ) : (
                                                    <>
                                                        Show Less <i className="fa-solid fa-chevron-up" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <div className="filter-divider" />

                                {/* Guest Rating */}
                                <div className="filter-group-section">
                                    <div
                                        className={`filter-group-header ${sectionOpen.guestRating ? "open" : ""}`}
                                        onClick={() => toggleSection("guestRating")}
                                    >
                                        <h4>Guest Rating</h4>
                                        <i className="fa-solid fa-chevron-down toggle-icon" />
                                    </div>
                                    {sectionOpen.guestRating && (
                                        <ul className="filter-options-list">
                                            {GUEST_RATINGS.map((gr) => (
                                                <li key={gr.id} className="filter-option-item">
                                                    <label className="filter-custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedFilters.guestRatings.includes(gr.min)}
                                                            onChange={() => handleCheckboxChange("guestRatings", gr.min)}
                                                        />
                                                        <span className="filter-option-label">{gr.label}</span>
                                                        <span className="filter-item-count">({gr.count})</span>
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                <div className="filter-divider" />

                                {/* Star Rating */}
                                <div className="filter-group-section">
                                    <div
                                        className={`filter-group-header ${sectionOpen.starRating ? "open" : ""}`}
                                        onClick={() => toggleSection("starRating")}
                                    >
                                        <h4>Star Rating</h4>
                                        <i className="fa-solid fa-chevron-down toggle-icon" />
                                    </div>
                                    {sectionOpen.starRating && (
                                        <ul className="filter-options-list">
                                            {STAR_RATINGS.map((sr) => (
                                                <li key={sr.count} className="filter-option-item">
                                                    <label className="filter-custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedFilters.starRatings.includes(sr.count)}
                                                            onChange={() => handleCheckboxChange("starRatings", sr.count)}
                                                        />
                                                        <span className="filter-option-label">
                                                            <span className="filter-rating-stars">
                                                                {renderStars(sr.count)}
                                                            </span>
                                                        </span>
                                                        <span className="filter-item-count">({sr.totalCount})</span>
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Results & Room Cards */}
                        <div className="col-xl-9 col-lg-8 col-md-12">
                            {/* Control Bar: Title, Count, View Mode, Sort Dropdown */}
                            <div className="room-results-control-bar">
                                <div className="results-heading-area">
                                    <h2>Available Guesthouses &amp; Rooms</h2>
                                    <span className="results-count-badge">
                                        {filteredRooms.length} {filteredRooms.length === 1 ? "Property" : "Properties"} Found
                                    </span>
                                </div>

                                <div className="results-actions-area">
                                    {/* View Mode Toggle */}
                                    <div className="view-mode-toggle">
                                        <button
                                            type="button"
                                            className={`view-mode-btn ${viewMode === "list" ? "active" : ""}`}
                                            title="List View"
                                            onClick={() => setViewMode("list")}
                                        >
                                            <i className="fa-solid fa-list" />
                                        </button>
                                        <button
                                            type="button"
                                            className={`view-mode-btn ${viewMode === "grid" ? "active" : ""}`}
                                            title="Grid View"
                                            onClick={() => setViewMode("grid")}
                                        >
                                            <i className="fa-solid fa-border-all" />
                                        </button>
                                    </div>

                                    {/* Sort Dropdown */}
                                    <div className="sort-dropdown-wrap" ref={sortDropdownRef}>
                                        <button
                                            type="button"
                                            className="sort-select-btn"
                                            onClick={() => setIsSortOpen(!isSortOpen)}
                                        >
                                            <i className="fa-solid fa-arrow-down-wide-short sort-main-icon" />
                                            <span>Sort: {selectedSort}</span>
                                            <i className="fa-solid fa-chevron-down sort-caret" />
                                        </button>

                                        {isSortOpen && (
                                            <ul className="sort-menu">
                                                {[
                                                    "Our top picks",
                                                    "Price (low to high)",
                                                    "Price (high to low)",
                                                    "Guest rating"
                                                ].map((opt) => (
                                                    <li
                                                        key={opt}
                                                        className={selectedSort === opt ? "selected" : ""}
                                                        onClick={() => {
                                                            setSelectedSort(opt);
                                                            setIsSortOpen(false);
                                                        }}
                                                    >
                                                        {opt}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Active Filter Chips Bar */}
                            {hasActiveFilters && (
                                <div className="active-filters-chips-bar">
                                    <span className="chips-label">Filters Applied:</span>

                                    {/* Search Query Chip */}
                                    {(sideSearchQuery || topSearchQuery) && (
                                        <span className="active-filter-chip">
                                            <span>Keyword: "{sideSearchQuery || topSearchQuery}"</span>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setSideSearchQuery("");
                                                    setTopSearchQuery("");
                                                }}
                                            >
                                                &times;
                                            </button>
                                        </span>
                                    )}

                                    {/* Price Chip */}
                                    {(minPrice > 0 || maxPrice < MAX_PRICE_LIMIT) && (
                                        <span className="active-filter-chip">
                                            <span>
                                                Rs. {minPrice.toLocaleString("en-IN")} - Rs. {maxPrice.toLocaleString("en-IN")}
                                            </span>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setMinPrice(0);
                                                    setMaxPrice(MAX_PRICE_LIMIT);
                                                }}
                                            >
                                                &times;
                                            </button>
                                        </span>
                                    )}

                                    {/* Atolls */}
                                    {selectedFilters.atolls.map((item) => (
                                        <span key={item} className="active-filter-chip">
                                            <span>Atoll: {item}</span>
                                            <button
                                                type="button"
                                                onClick={() => removeFilter("atolls", item)}
                                            >
                                                &times;
                                            </button>
                                        </span>
                                    ))}

                                    {/* Bed types */}
                                    {selectedFilters.bedTypes.map((item) => (
                                        <span key={item} className="active-filter-chip">
                                            <span>Bed: {item}</span>
                                            <button
                                                type="button"
                                                onClick={() => removeFilter("bedTypes", item)}
                                            >
                                                &times;
                                            </button>
                                        </span>
                                    ))}

                                    {/* Stars */}
                                    {selectedFilters.starRatings.map((item) => (
                                        <span key={item} className="active-filter-chip">
                                            <span>{item} Stars</span>
                                            <button
                                                type="button"
                                                onClick={() => removeFilter("starRatings", item)}
                                            >
                                                &times;
                                            </button>
                                        </span>
                                    ))}

                                    {/* Clear All */}
                                    <button
                                        type="button"
                                        className="clear-all-chips-btn"
                                        onClick={handleResetAll}
                                    >
                                        Clear all
                                    </button>
                                </div>
                            )}

                            {/* Room Cards / Empty State */}
                            {filteredRooms.length === 0 ? (
                                <div className="room-empty-state">
                                    <div className="empty-state-icon-circle">
                                        <i className="fa-solid fa-magnifying-glass-location" />
                                    </div>
                                    <h3>No Rooms Match Your Search</h3>
                                    <p>
                                        We couldn't find any guesthouses matching your current filter criteria.
                                        Try widening your price range, searching for another atoll, or resetting filters.
                                    </p>
                                    <button
                                        type="button"
                                        className="btn-reset"
                                        onClick={handleResetAll}
                                    >
                                        <i className="fa-solid fa-rotate-left me-1" /> Reset All Filters
                                    </button>
                                </div>
                            ) : (
                                <div className={viewMode === "grid" ? "room-grid-layout" : "room-list-layout"}>
                                    {paginatedRooms.map((room) => (
                                        <div className="room-card-modern" key={room.id}>
                                            {/* Column 1: Image & Floating Badges */}
                                            <div className="room-card-img-col">
                                                <img src={room.image} alt={room.title} />

                                                {/* Top Tag */}
                                                <div className="card-top-tag">
                                                    <i className="fa-solid fa-circle-check" />
                                                    <span>{room.tag || "Maldives Verified"}</span>
                                                </div>

                                                {/* Wishlist Button */}
                                                <button
                                                    type="button"
                                                    className={`card-wishlist-btn ${wishlist[room.id] ? "active" : ""}`}
                                                    onClick={() => toggleWishlist(room.id)}
                                                    title={wishlist[room.id] ? "Remove from wishlist" : "Add to wishlist"}
                                                >
                                                    <i className={`fa-${wishlist[room.id] ? "solid" : "regular"} fa-heart`} />
                                                </button>

                                                {/* Island Tag */}
                                                <div className="card-island-badge">
                                                    <i className="fa-solid fa-umbrella-beach" />
                                                    <span>{room.island}</span>
                                                </div>
                                            </div>

                                            {/* Column 2: Information & Specs */}
                                            <div className="room-card-info-col">
                                                <div>
                                                    <div className="card-meta-line">
                                                        <span className="card-star-rating">
                                                            {renderStars(room.stars)}
                                                        </span>
                                                        <span className="card-category-pill">
                                                            {room.category || "Guesthouse"}
                                                        </span>
                                                    </div>

                                                    <h3 className="room-card-title">
                                                        <Link to="/guesthouse-details">{room.title}</Link>
                                                    </h3>

                                                    <div className="card-location-line">
                                                        <i className="fa-solid fa-location-dot" />
                                                        <span>{room.location}</span>
                                                    </div>

                                                    {/* Key Specs */}
                                                    <div className="card-specs-row">
                                                        <span className="card-spec-item">
                                                            <i className="fa-solid fa-users" /> {room.capacity}
                                                        </span>
                                                        <span className="card-spec-item">
                                                            <i className="fa-solid fa-bed" /> {room.bed}
                                                        </span>
                                                        <span className="card-spec-item">
                                                            <i className="fa-solid fa-bath" /> {room.bath}
                                                        </span>
                                                    </div>

                                                    {/* Free Perks Badges */}
                                                    {room.perks && (
                                                        <div className="card-perks-row">
                                                            {room.perks.map((perk, idx) => (
                                                                <span key={idx} className="card-perk-badge">
                                                                    <i className="fa-solid fa-check" /> {perk}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>

                                                <p className="room-card-desc">{room.description}</p>
                                            </div>

                                            {/* Column 3: Rating, Price & CTA */}
                                            <div className="room-card-action-col">
                                                {/* Guest Rating Score */}
                                                <div className="card-guest-rating-box">
                                                    <div className="guest-rating-text">
                                                        <span className="rating-label">{room.ratingLabel}</span>
                                                        <span className="reviews-count">
                                                            {room.reviewsCount.toLocaleString("en-IN")} reviews
                                                        </span>
                                                    </div>
                                                    <span className="guest-score-badge">
                                                        {room.ratingScore.toFixed(1)}
                                                    </span>
                                                </div>

                                                {/* Price Block */}
                                                <div className="card-price-block">
                                                    <div className="price-sub-label">Starting from / night</div>
                                                    <div className="price-amount">
                                                        Rs. {room.price.toLocaleString("en-IN")}
                                                    </div>
                                                    <div className="price-taxes-note">{room.taxesText}</div>
                                                </div>

                                                {/* Actions */}
                                                <div className="card-action-btn-wrap">
                                                    <Link to="/guesthouse-details" className="room-view-btn">
                                                        <span>View Details</span>
                                                        <i className="fa-solid fa-arrow-right" />
                                                    </Link>
                                                    <span className="card-instant-tag">
                                                        <i className="fa-solid fa-bolt" /> Instant Confirmation
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Pagination */}
                            {filteredRooms.length > itemsPerPage && (
                                <div className="room-list-pagination">
                                    <span className="pagination-info-text">
                                        Showing {(currentPage - 1) * itemsPerPage + 1}–
                                        {Math.min(currentPage * itemsPerPage, filteredRooms.length)} of{" "}
                                        {filteredRooms.length} properties
                                    </span>

                                    <div className="pagination-buttons">
                                        <button
                                            type="button"
                                            className="pagination-btn"
                                            disabled={currentPage <= 1}
                                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                        >
                                            <i className="fa-solid fa-chevron-left" />
                                        </button>

                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                            <button
                                                key={page}
                                                type="button"
                                                className={`pagination-btn ${currentPage === page ? "active" : ""}`}
                                                onClick={() => setCurrentPage(page)}
                                            >
                                                {page}
                                            </button>
                                        ))}

                                        <button
                                            type="button"
                                            className="pagination-btn"
                                            disabled={currentPage >= totalPages}
                                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                        >
                                            <i className="fa-solid fa-chevron-right" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <FooterCopyRight />
        </>
    );
};

export default RoomList;
