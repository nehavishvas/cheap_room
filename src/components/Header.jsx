import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "../utils/cookieUtils";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // User state - checks cookies and localStorage for authentication
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return Boolean(
      getCookie("token") || getCookie("name") || getCookie("id") ||
      localStorage.getItem("token") || localStorage.getItem("name") || localStorage.getItem("id")
    );
  });
  const [userName, setUserName] = useState(() => {
    return getCookie("name") || localStorage.getItem("name") || "Eric Nathan Smith";
  });
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const profileRef = useRef(null);

  // Sync auth state on mount and when storage / authChange fires
  useEffect(() => {
    const updateAuth = () => {
      const storedToken = getCookie("token") || localStorage.getItem("token");
      const storedName = getCookie("name") || localStorage.getItem("name");
      const storedId = getCookie("id") || localStorage.getItem("id");
      const logged = Boolean(storedToken || storedName || storedId);
      setIsLoggedIn(logged);
      if (storedName) {
        setUserName(storedName);
      }
    };

    updateAuth();
    window.addEventListener("storage", updateAuth);
    window.addEventListener("authChange", updateAuth);
    return () => {
      window.removeEventListener("storage", updateAuth);
      window.removeEventListener("authChange", updateAuth);
    };
  }, [location.pathname]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleSignOut = () => {
    removeCookie("token");
    removeCookie("name");
    removeCookie("id");
    removeCookie("email");
    removeCookie("role");
    removeCookie("user");
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    setIsProfileOpen(false);
    window.dispatchEvent(new Event("authChange"));
    navigate("/login");
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About Us" },
    { path: "/room-list", label: "Guesthouse" },
    { path: "/contact-us", label: "Contact Us" },
  ];

  return (
    <header className="menu-detail-main-info">
      <nav className="navbar navbar-expand-lg modern-header stkey-menu">
        <div className="container header-container">
          {/* Brand Logo */}
          <Link to="/" className="navbar-brand header-logo-wrap">
            <img src="assets/images/logo/newlogo.png" alt="CheapRoom Logo" className="header-logo" />
          </Link>

          {/* Mobile Toggler */}
          <button
            className="navbar-toggler modern-toggler"
            type="button"
            onClick={() => setIsNavCollapsed(!isNavCollapsed)}
            aria-controls="modernNavbarNav"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Navigation Links */}
          <div className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`} id="modernNavbarNav">
            <ul className="navbar-nav mx-auto modern-nav">
              {navLinks.map((link) => {
                const isActive =
                  location.pathname === link.path ||
                  (link.path === "/room-list" && location.pathname === "/room-list-filter");
                return (
                  <li className="nav-item" key={link.path}>
                    <Link
                      to={link.path}
                      className={`nav-link modern-nav-link ${isActive ? "active" : ""}`}
                      onClick={() => setIsNavCollapsed(true)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Right Action: Auth Buttons (when logged out) OR User Profile Menu (when logged in) */}
            <div className="header-action-area">
              {!isLoggedIn ? (
                <div className="header-auth-buttons">
                  <Link to="/login" className="btn-header-signin">
                    Sign In
                  </Link>
                  <Link to="/signup" className="btn-header-signup">
                    Sign Up
                  </Link>
                </div>
              ) : (
                <div className="header-user-profile-wrap" ref={profileRef}>
                  <button
                    type="button"
                    className={`header-user-trigger ${isProfileOpen ? "active" : ""}`}
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    aria-expanded={isProfileOpen}
                  >
                    <div className="user-avatar-wrap">
                      <img
                        src="assets/images/user-img/UserIMG.jpg"
                        alt={userName}
                        className="user-avatar"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://ui-avatars.com/api/?name=Eric+Nathan+Smith&background=20b2aa&color=fff";
                        }}
                      />
                    </div>
                    <span className="user-display-name">{userName}</span>
                    <i className={`fa-solid fa-chevron-down user-chevron ${isProfileOpen ? "rotate" : ""}`} />
                  </button>

                  {/* Profile Dropdown Menu Card */}
                  {isProfileOpen && (
                    <div className="header-profile-dropdown shadow-lg animate-dropdown">
                      <div className="dropdown-user-greeting">
                        <small>Signed in as</small>
                        <h6>{userName}</h6>
                      </div>
                      <div className="dropdown-menu-list">
                        <Link
                          to="/my-account"
                          className="header-dropdown-item"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <span className="dropdown-item-icon">
                            <i className="fa-solid fa-user" />
                          </span>
                          <span className="dropdown-item-title">My Account</span>
                        </Link>

                        <Link
                          to="/wallet"
                          className="header-dropdown-item"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <span className="dropdown-item-icon">
                            <i className="fa-solid fa-wallet" />
                          </span>
                          <span className="dropdown-item-title">Wallet</span>
                        </Link>

                        <Link
                          to="/booking-history"
                          className="header-dropdown-item"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <span className="dropdown-item-icon">
                            <i className="fa-solid fa-briefcase" />
                          </span>
                          <span className="dropdown-item-title">Booking History</span>
                        </Link>

                        <Link
                          to="/reviews"
                          className="header-dropdown-item"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <span className="dropdown-item-icon">
                            <i className="fa-solid fa-comments" />
                          </span>
                          <span className="dropdown-item-title">Reviews</span>
                        </Link>

                        <Link
                          to="/notifications"
                          className="header-dropdown-item"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <span className="dropdown-item-icon">
                            <i className="fa-solid fa-bell" />
                          </span>
                          <span className="dropdown-item-title">Notification</span>
                        </Link>

                        <button
                          type="button"
                          className="header-dropdown-item signout-btn"
                          onClick={handleSignOut}
                        >
                          <span className="dropdown-item-icon">
                            <i className="fa-solid fa-power-off" />
                          </span>
                          <span className="dropdown-item-title">Sign Out</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
