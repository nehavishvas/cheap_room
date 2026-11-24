import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "./HomePage/HeroSection";
import Footer from "./Footer";
import FooterCopyRight from "./FooterCopyRight";
import AboutSection from "./HomePage/AboutSection";
import RoomRecommendation from "./HomePage/TopRecommend";
import AccommodationPromotions from "./HomePage/AccomodationPromotion";
import TopDestinations from "./HomePage/TopDestination";


const LoginHeader = () => {
    return (
        <>
            <header className="menu-detail-main-info">
                <nav className="navbar navbar-expand-lg stkey-menu">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">
                            <img src="assets/images/logo/newlogo.png" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse me-auto" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        aria-current="page"
                                        href="index.html"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        About Us
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/room-list">
                                        Rooms
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Blogs
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* <div class="contact-btn-info">
            <a href="login.html" class="navbar-contact-btn">Sign in</a> 
            <a href="sing-up.html" class="navbar-contact-btn">Create account</a> 
         </div> */}
                        <div className="user-dropdown-menu-info dropdown">
                            <div id="userMenuButton" data-bs-toggle="dropdown">
                                <div className="user-img-name-area">
                                    <div className="user-img-name">
                                        <img src="assets/images/user-img/UserIMG.jpg" />
                                    </div>
                                    <div className="user-name-info">
                                        <h4>Eric Nathan Smith</h4>
                                    </div>
                                </div>
                            </div>
                            <ul className="dropdown-menu" aria-labelledby="userMenuButton">
                                <li>
                                    <a className="dropdown-item" href="user-profile-form.html">
                                        <i className="fa-solid fa-user" />
                                        My Account
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i className="fa-solid fa-wallet" /> Wallet
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i className="fa-solid fa-briefcase" /> Booking History
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="user-profile-reviews.html">
                                        <i className="fa-solid fa-comments" />
                                        Reviews
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="save-rooms.html">
                                        <i className="fa-solid fa-bookmark" /> Save Room
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i className="fa-solid fa-bell" /> Notification
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="sing-up.html">
                                        <i className="fa-solid fa-power-off" />
                                        Sign out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <HeroSection />
            <AboutSection />
            <RoomRecommendation />
            <AccommodationPromotions />
            <TopDestinations />
            <Footer />
            <FooterCopyRight />


        </>
    )
}

export default LoginHeader;