import React, { } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import FooterCopyRight from "../FooterCopyRight";

const Guesthouse = () => {

    return (
        <>
            <Header />
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
            {/*breadcrumbs section end here*/}
            {/*room list filter section sart here*/}
            <section className="room-list-flter-info-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="room-list-search-heading-short-fillter">
                                <div className="room-list-search-heading">
                                    <h2>Haa Alif Atoll</h2>
                                </div>
                                <div className="room-list-search-short-fillter">
                                    <div className="sort-dropdown-container">
                                        <button
                                            id="sortDropdownBtn"
                                            className="sort-button"
                                            aria-expanded="false"
                                            data-selected-sorter="popularity"
                                        >
                                            <span className="sort-icon">
                                                <i className="fas fa-sort-amount-down-alt" />
                                            </span>
                                            <span className="sort-label">Sort by: Our top picks</span>
                                            <span className="sort-caret">
                                                <i className="fas fa-chevron-down" />
                                            </span>
                                        </button>
                                        <ul className="sort-options hidden" id="sortOptionsList">
                                            <li data-sort="popularity">Our top picks</li>
                                            <li data-sort="price_low">Price (low to high)</li>
                                            <li data-sort="price_high">Price (high to low)</li>
                                            <li data-sort="rating">Guest rating</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="room-list-card-main-area">
                                <div className="room-list-card-img">
                                    <img src="assets/images/room-img/room-1.jpg" />
                                </div>
                                <div className="room-list-card-details">
                                    <h2>
                                        Sheraton Maldives Full Moon Resort &amp; Spa - Complimentary
                                        Roundtrip Transfer
                                    </h2>
                                    <span className="star-rating-icon">
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-regular fa-star" />
                                    </span>
                                    <p>
                                        <i className="fa-solid fa-location-dot" />
                                        Haa Alif. Vashafaru, Male, Maldives
                                    </p>
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-users" />3 Person
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-bed" />1 Bed
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-bath" />1 Bath
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-location-dot" />
                                            Feydhoo, Addu Atoll
                                        </li>
                                    </ul>
                                    <p>
                                        Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                        sed diam stet diam Erat ipsum justo amet duo Erat ipsum justo
                                        amet duo et elitr dolor, est duo duo
                                    </p>
                                </div>
                                <div className="room-list-card-btn-info-area">
                                    <span className="rating-type">
                                        Excellent <h6>4.5</h6>
                                    </span>
                                    <span className="rating-type">
                                        Star Rating <h6>4.5</h6>
                                    </span>
                                    <span className="rating-type">
                                        reviews <h6>5143</h6>
                                    </span>
                                    <div className="price-texs-other">
                                        <h5>Per night taxes &amp; fees</h5>
                                        <h6>Rs. 12,143</h6>
                                    </div>
                                    <div className="room-list-card-btn-more">
                                        <Link
                                            to="/guesthouse-details"
                                            className="room-list-card-btn"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="room-list-card-main-area">
                                <div className="room-list-card-img">
                                    <img src="assets/images/room-img/room-2.jpg" />
                                </div>
                                <div className="room-list-card-details">
                                    <h2>
                                        Sheraton Maldives Full Moon Resort &amp; Spa - Complimentary
                                        Roundtrip Transfer
                                    </h2>
                                    <span className="star-rating-icon">
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-regular fa-star" />
                                    </span>
                                    <p>
                                        <i className="fa-solid fa-location-dot" />
                                        Haa Alif. Vashafaru, Male, Maldives
                                    </p>
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-users" />3 Person
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-bed" />1 Bed
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-bath" />1 Bath
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-location-dot" />
                                            Feydhoo, Addu Atoll
                                        </li>
                                    </ul>
                                    <p>
                                        Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                        sed diam stet diam Erat ipsum justo amet duo Erat ipsum justo
                                        amet duo et elitr dolor, est duo duo
                                    </p>
                                </div>
                                <div className="room-list-card-btn-info-area">
                                    <span className="rating-type">
                                        Excellent <h6>4.5</h6>
                                    </span>
                                    <span className="rating-type">
                                        Star Rating <h6>4.5</h6>
                                    </span>
                                    <span className="rating-type">
                                        reviews <h6>5143</h6>
                                    </span>
                                    <div className="price-texs-other">
                                        <h5>Per night taxes &amp; fees</h5>
                                        <h6>Rs. 12,143</h6>
                                    </div>
                                    <div className="room-list-card-btn-more">
                                        <Link
                                            to="/guesthouse-details"
                                            className="room-list-card-btn"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="room-list-card-main-area">
                                <div className="room-list-card-img">
                                    <img src="assets/images/room-img/room-3.jpg" />
                                </div>
                                <div className="room-list-card-details">
                                    <h2>
                                        Sheraton Maldives Full Moon Resort &amp; Spa - Complimentary
                                        Roundtrip Transfer
                                    </h2>
                                    <span className="star-rating-icon">
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-regular fa-star" />
                                    </span>
                                    <p>
                                        <i className="fa-solid fa-location-dot" />
                                        Haa Alif. Vashafaru, Male, Maldives
                                    </p>
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-users" />3 Person
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-bed" />1 Bed
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-bath" />1 Bath
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-location-dot" />
                                            Feydhoo, Addu Atoll
                                        </li>
                                    </ul>
                                    <p>
                                        Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                        sed diam stet diam Erat ipsum justo amet duo Erat ipsum justo
                                        amet duo et elitr dolor, est duo duo
                                    </p>
                                </div>
                                <div className="room-list-card-btn-info-area">
                                    <span className="rating-type">
                                        Excellent <h6>4.5</h6>
                                    </span>
                                    <span className="rating-type">
                                        Star Rating <h6>4.5</h6>
                                    </span>
                                    <span className="rating-type">
                                        reviews <h6>5143</h6>
                                    </span>
                                    <div className="price-texs-other">
                                        <h5>Per night taxes &amp; fees</h5>
                                        <h6>Rs. 12,143</h6>
                                    </div>
                                    <div className="room-list-card-btn-more">
                                        <Link
                                            to="/guesthouse-details"
                                            className="room-list-card-btn"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="room-list-card-main-area">
                                <div className="room-list-card-img">
                                    <img src="assets/images/room-img/room-4.jpg" />
                                </div>
                                <div className="room-list-card-details">
                                    <h2>
                                        Sheraton Maldives Full Moon Resort &amp; Spa - Complimentary
                                        Roundtrip Transfer
                                    </h2>
                                    <span className="star-rating-icon">
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-regular fa-star" />
                                    </span>
                                    <p>
                                        <i className="fa-solid fa-location-dot" />
                                        Haa Alif. Vashafaru, Male, Maldives
                                    </p>
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-users" />3 Person
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-bed" />1 Bed
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-bath" />1 Bath
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-location-dot" />
                                            Feydhoo, Addu Atoll
                                        </li>
                                    </ul>
                                    <p>
                                        Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                        sed diam stet diam Erat ipsum justo amet duo Erat ipsum justo
                                        amet duo et elitr dolor, est duo duo
                                    </p>
                                </div>
                                <div className="room-list-card-btn-info-area">
                                    <span className="rating-type">
                                        Excellent <h6>4.5</h6>
                                    </span>
                                    <span className="rating-type">
                                        Star Rating <h6>4.5</h6>
                                    </span>
                                    <span className="rating-type">
                                        reviews <h6>5143</h6>
                                    </span>
                                    <div className="price-texs-other">
                                        <h5>Per night taxes &amp; fees</h5>
                                        <h6>Rs. 12,143</h6>
                                    </div>
                                    <div className="room-list-card-btn-more">
                                        <Link
                                            to="/guesthouse-details"
                                            className="room-list-card-btn"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="room-list-card-main-area">
                                <div className="room-list-card-img">
                                    <img src="assets/images/room-img/room-5.jpg" />
                                </div>
                                <div className="room-list-card-details">
                                    <h2>
                                        Sheraton Maldives Full Moon Resort &amp; Spa - Complimentary
                                        Roundtrip Transfer
                                    </h2>
                                    <span className="star-rating-icon">
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-regular fa-star" />
                                    </span>
                                    <p>
                                        <i className="fa-solid fa-location-dot" />
                                        Haa Alif. Vashafaru, Male, Maldives
                                    </p>
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-users" />3 Person
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-bed" />1 Bed
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-bath" />1 Bath
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-location-dot" />
                                            Feydhoo, Addu Atoll
                                        </li>
                                    </ul>
                                    <p>
                                        Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                        sed diam stet diam Erat ipsum justo amet duo Erat ipsum justo
                                        amet duo et elitr dolor, est duo duo
                                    </p>
                                </div>
                                <div className="room-list-card-btn-info-area">
                                    <span className="rating-type">
                                        Excellent <h6>4.5</h6>
                                    </span>
                                    <span className="rating-type">
                                        Star Rating <h6>4.5</h6>
                                    </span>
                                    <span className="rating-type">
                                        reviews <h6>5143</h6>
                                    </span>
                                    <div className="price-texs-other">
                                        <h5>Per night taxes &amp; fees</h5>
                                        <h6>Rs. 12,143</h6>
                                    </div>
                                    <div className="room-list-card-btn-more">
                                        <Link
                                            to="/guesthouse-details"
                                            className="room-list-card-btn"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="room-list-card-main-area">
                                <div className="room-list-card-img">
                                    <img src="assets/images/room-img/room-1.jpg" />
                                </div>
                                <div className="room-list-card-details">
                                    <h2>
                                        Sheraton Maldives Full Moon Resort &amp; Spa - Complimentary
                                        Roundtrip Transfer
                                    </h2>
                                    <span className="star-rating-icon">
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-regular fa-star" />
                                    </span>
                                    <p>
                                        <i className="fa-solid fa-location-dot" />
                                        Haa Alif. Vashafaru, Male, Maldives
                                    </p>
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-users" />3 Person
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-bed" />1 Bed
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-bath" />1 Bath
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-location-dot" />
                                            Feydhoo, Addu Atoll
                                        </li>
                                    </ul>
                                    <p>
                                        Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                        sed diam stet diam Erat ipsum justo amet duo Erat ipsum justo
                                        amet duo et elitr dolor, est duo duo
                                    </p>
                                </div>
                                <div className="room-list-card-btn-info-area">
                                    <span className="rating-type">
                                        Excellent <h6>4.5</h6>
                                    </span>
                                    <span className="rating-type">
                                        Star Rating <h6>4.5</h6>
                                    </span>
                                    <span className="rating-type">
                                        reviews <h6>5143</h6>
                                    </span>
                                    <div className="price-texs-other">
                                        <h5>Per night taxes &amp; fees</h5>
                                        <h6>Rs. 12,143</h6>
                                    </div>
                                    <div className="room-list-card-btn-more">
                                        <Link
                                            to="/guesthouse-details"
                                            className="room-list-card-btn"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="room-list-card-main-area">
                                <div className="room-list-card-img">
                                    <img src="assets/images/room-img/room-2.jpg" />
                                </div>
                                <div className="room-list-card-details">
                                    <h2>
                                        Sheraton Maldives Full Moon Resort &amp; Spa - Complimentary
                                        Roundtrip Transfer
                                    </h2>
                                    <span className="star-rating-icon">
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-regular fa-star" />
                                    </span>
                                    <p>
                                        <i className="fa-solid fa-location-dot" />
                                        Haa Alif. Vashafaru, Male, Maldives
                                    </p>
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-users" />3 Person
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-bed" />1 Bed
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-bath" />1 Bath
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-location-dot" />
                                            Feydhoo, Addu Atoll
                                        </li>
                                    </ul>
                                    <p>
                                        Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                        sed diam stet diam Erat ipsum justo amet duo Erat ipsum justo
                                        amet duo et elitr dolor, est duo duo
                                    </p>
                                </div>
                                <div className="room-list-card-btn-info-area">
                                    <span className="rating-type">
                                        Excellent <h6>4.5</h6>
                                    </span>
                                    <span className="rating-type">
                                        Star Rating <h6>4.5</h6>
                                    </span>
                                    <span className="rating-type">
                                        reviews <h6>5143</h6>
                                    </span>
                                    <div className="price-texs-other">
                                        <h5>Per night taxes &amp; fees</h5>
                                        <h6>Rs. 12,143</h6>
                                    </div>
                                    <div className="room-list-card-btn-more">
                                        <Link
                                            to="/guesthouse-details"
                                            className="room-list-card-btn"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*room list filter section end here*/}
            <Footer />
            <FooterCopyRight />        </>

    );
};

export default Guesthouse;
