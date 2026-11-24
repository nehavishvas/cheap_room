// import { useState , useRef } from "react";
import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import FooterCopyRight from "../FooterCopyRight";
import Header from "../Header";
const ForgotPassword = () => {

    


    return (
        <>
            <Header />
            <section className="breadcrumbs-main-info-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="breadcrumbs-main-content">
                                <h2>Forgot Password</h2>
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <i className="fas fa-angle-right" />
                                    </li>
                                    <li>Forgot Password</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="login-form-info-main-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 p-0">
                            <div className="login-form-content-info forgot-password-img">
                                <div className="login-form-content-detail">
                                    <a href="index.html">
                                        <img src="assets/images/logo/newlogo.png" />
                                    </a>
                                    <h1>Welcome to Cheap RoomMV</h1>
                                    <p>It Happens! Reset Your Password Here</p>
                                    <div className="login-registration-button">
                                        <Link
                                            to="/signup"
                                            className="login-registration-comm-button"
                                        >
                                            Sign Up
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 p-0">
                            <div className="login-registration-form-info">
                                <form className="login-registration-form-area">
                                    <h6>Forgot Password</h6>
                                    <h4>Reset Your Password Securely</h4>
                                    <div className="form-group">
                                        <label>Email Address / Phone Number</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control"
                                            placeholder="Email Address / Phone Number"
                                        />
                                    </div>
                                    <div className="login-btn-info">
                                        <a href="#" className="login-btn">
                                            Send
                                        </a>
                                    </div>
                                    <div className="login-with-social-icon">
                                        <h5>Or Sign In With</h5>
                                        <div className="login-login-icon-info">
                                            <div className="login-social-icon">
                                                <a href="https://accounts.google.com/" target="_blank">
                                                    <img src="assets/images/login-registration-img/Google-icon.png" />
                                                    <span>Google</span>
                                                </a>
                                            </div>
                                            <div className="login-social-icon facebook-icon">
                                                <a href="https://www.facebook.com/" target="_blank">
                                                    <img src="assets/images/login-registration-img/facebook-icon.png" />
                                                    <span>Facebook</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <FooterCopyRight />
        </>

    )
}

export default ForgotPassword;