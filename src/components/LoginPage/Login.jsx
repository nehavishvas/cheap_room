import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "../Header";
import Footer from "../Footer";
import FooterCopyRight from "../FooterCopyRight";
import { API_ENDPOINTS } from "../../utils/apiConfig";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const passwordInputRef = useRef(null);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  // Backend login API from centralized config
  const URL = API_ENDPOINTS.LOGIN;

  const inputType = isPasswordVisible ? "text" : "password";
  const iconClass = isPasswordVisible ? "fa-eye-slash" : "fa-eye";
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState(""); // can be email or phone
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!identifier || !password) {
      return Swal.fire("Required Fields", "Please enter your email or phone and password.", "error");
    }

    try {
      setLoading(true);

      // Detect if it's email or phone
      const isEmail = identifier.includes("@");
      const loginData = isEmail
        ? { email: identifier, password }
        : { phone: identifier, password };

      const { data } = await axios.post(URL, loginData);

      if (!data?.success || !data?.user) {
        throw new Error(data?.message || "Login failed");
      }

      const { token, user } = data;

      // Save user details
      localStorage.setItem("id", user.id);
      localStorage.setItem("token", token);
      localStorage.setItem("name", user.name);
      localStorage.setItem("email", user.email);
      window.dispatchEvent(new Event("authChange"));

      Swal.fire("Success", "Logged in successfully!", "success");
      navigate("/");
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.message ||
        "Something went wrong during login.";
      Swal.fire("Login Failed", msg, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      {/* Compact Image Breadcrumbs Section */}
      <section className="breadcrumbs-main-info-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="breadcrumbs-main-content">
                <h2>Sign In</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i className="fas fa-angle-right" />
                  </li>
                  <li>Sign In</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slim Trust Highlights Bar */}
      {/* <div className="about-stats-compact-bar">
        <div className="container">
          <div className="row g-2 text-center align-items-center">
            <div className="col-lg-3 col-md-6 col-6">
              <div className="compact-stat-item">
                <span className="compact-stat-num">250+</span>
                <span className="compact-stat-label">Verified Guesthouses</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="compact-stat-item">
                <span className="compact-stat-num">Instant</span>
                <span className="compact-stat-label">Booking Confirmation</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="compact-stat-item">
                <span className="compact-stat-num">Best Rate</span>
                <span className="compact-stat-label">Direct Host Guarantee</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="compact-stat-item">
                <span className="compact-stat-num">4.9 ★</span>
                <span className="compact-stat-label">Member Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Login Form Section */}
      <section className="login-form-info-main-area">
        <div className="container">
          <div className="auth-split-card-container">
            <div className="row g-0 align-items-stretch">
              {/* Left Column: Hero Branding Pane */}
              <div className="col-lg-6 col-md-12">
                <div className="auth-hero-pane">
                  <div className="auth-hero-overlay" />
                  <div className="auth-hero-content">
                    <div>
                      <div className="auth-logo-badge">
                        <Link to="/">
                          <img src="assets/images/logo/newlogo.png" alt="CheapRoomMV Logo" />
                        </Link>
                      </div>

                      <span className="auth-hero-pill">
                        <i className="fa-solid fa-umbrella-beach me-1" /> MALDIVES MEMBER ACCESS
                      </span>

                      <h1 className="auth-hero-title">Welcome Back to Maldives Paradise</h1>
                      <p className="auth-hero-desc">
                        Sign in to access your bookings, saved island wishlists, and unlock exclusive member discounts for your next tropical stay.
                      </p>

                      <ul className="auth-hero-perks">
                        <li className="auth-hero-perk-item">
                          <i className="fa-solid fa-circle-check" />
                          <span>Direct local island guesthouse rates guaranteed</span>
                        </li>
                        <li className="auth-hero-perk-item">
                          <i className="fa-solid fa-circle-check" />
                          <span>Speedboat transfers &amp; island coordination</span>
                        </li>
                        <li className="auth-hero-perk-item">
                          <i className="fa-solid fa-circle-check" />
                          <span>24/7 dedicated on-island concierge assistance</span>
                        </li>
                      </ul>
                    </div>

                    <div className="auth-hero-switch-box">
                      <p className="auth-hero-switch-text">New to CheapRoomMV?</p>
                      <Link to="/signup" className="auth-hero-switch-btn">
                        <span>Create Account</span>
                        <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Sign In Form Pane */}
              <div className="col-lg-6 col-md-12">
                <div className="auth-form-pane">
                  <div className="auth-form-header">
                    <span className="auth-form-badge">SIGN IN</span>
                    <h2 className="auth-form-title">Access Your Account</h2>
                    <p className="auth-form-subtitle">
                      Enter your registered email address or phone number to continue.
                    </p>
                  </div>

                  <form onSubmit={handleLogin}>
                    {/* Identifier Input */}
                    <div className="auth-field-group">
                      <label className="auth-field-label" htmlFor="identifier">
                        Email Address or Phone Number
                      </label>
                      <div className="auth-input-wrapper">
                        <i className="fa-regular fa-envelope input-leading-icon" />
                        <input
                          type="text"
                          id="identifier"
                          value={identifier}
                          onChange={(e) => setIdentifier(e.target.value)}
                          className="auth-input-control"
                          placeholder="name@example.com or +960 779-1234"
                          required
                        />
                      </div>
                    </div>

                    {/* Password Input */}
                    <div className="auth-field-group">
                      <label className="auth-field-label" htmlFor="password">
                        Password
                      </label>
                      <div className="auth-input-wrapper">
                        <i className="fa-solid fa-lock input-leading-icon" />
                        <input
                          type={inputType}
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="auth-input-control"
                          placeholder="Enter your password"
                          ref={passwordInputRef}
                          required
                        />
                        <button
                          type="button"
                          className="auth-password-toggle-btn"
                          onClick={togglePasswordVisibility}
                          aria-label="Toggle password visibility"
                        >
                          <i className={`fa-solid ${iconClass}`} />
                        </button>
                      </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="auth-options-row">
                      <label className="auth-checkbox-label">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <span>Remember Me</span>
                      </label>
                      <Link to="/forgot-password" className="auth-forgot-link">
                        <i className="fa-solid fa-key" /> Forgot Password?
                      </Link>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="auth-submit-btn" disabled={loading}>
                      {loading ? (
                        <>
                          <i className="fa-solid fa-spinner fa-spin" /> Signing In...
                        </>
                      ) : (
                        <>
                          <i className="fa-solid fa-right-to-bracket" /> Sign In
                        </>
                      )}
                    </button>

                    {/* Social Divider */}
                    <div className="auth-social-divider">
                      <span>or continue with</span>
                    </div>

                    {/* Social Buttons */}
                    <div className="auth-social-grid">
                      <a
                        href="https://accounts.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="auth-social-btn"
                      >
                        <img
                          src="assets/images/login-registration-img/Google-icon.png"
                          alt="Google"
                        />
                        <span>Google</span>
                      </a>

                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="auth-social-btn"
                      >
                        <img
                          src="assets/images/login-registration-img/facebook-icon.png"
                          alt="Facebook"
                        />
                        <span>Facebook</span>
                      </a>
                    </div>

                    {/* Bottom Prompt */}
                    <p className="auth-bottom-prompt">
                      Don't have an account yet?
                      <Link to="/signup">
                        Sign Up Free <i className="fa-solid fa-arrow-right ms-1" />
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FooterCopyRight />
    </>
  );
};

export default Login;
