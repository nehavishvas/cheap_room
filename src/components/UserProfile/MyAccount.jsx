import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import FooterCopyRight from "../FooterCopyRight";
import Swal from "sweetalert2";

const MyAccount = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fileInputRef = useRef(null);

  // Active tab in the sidebar
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    if (location.pathname === "/wallet") {
      setActiveTab("wallet");
    } else if (location.pathname === "/booking-history") {
      setActiveTab("history");
    } else if (location.pathname === "/reviews") {
      setActiveTab("reviews");
    } else if (location.pathname === "/notifications") {
      setActiveTab("notifications");
    } else {
      setActiveTab("profile");
    }
  }, [location.pathname]);

  // Profile photo state
  const [avatar, setAvatar] = useState("assets/images/user-img/UserIMG.jpg");

  // Personal Details Form state
  const [formData, setFormData] = useState({
    firstName: "Eric",
    lastName: "Nathan Smith",
    email: "ericnathansmith@gmail.com",
    phone: "9874563214",
    address: "",
    city: "",
    country: "",
    dob: "",
    gender: "",
    about: ""
  });

  // Password state for "Change Password" tab
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatar(url);
      Swal.fire({
        icon: "success",
        title: "Photo Updated",
        text: "Your profile picture has been updated!",
        timer: 2000,
        showConfirmButton: false
      });
    }
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    // Update name in localStorage so header reflects changes
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    if (fullName) {
      localStorage.setItem("name", fullName);
    }
    Swal.fire({
      icon: "success",
      title: "Saved Successfully",
      text: "Your personal details have been updated!",
      confirmButtonColor: "#F29E4C"
    });
  };

  const handleSavePassword = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Password Mismatch",
        text: "New Password and Confirm Password do not match.",
        confirmButtonColor: "#F29E4C"
      });
      return;
    }
    Swal.fire({
      icon: "success",
      title: "Password Changed",
      text: "Your password has been successfully updated!",
      confirmButtonColor: "#F29E4C"
    });
    setPasswords({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  const handleSignOut = () => {
    Swal.fire({
      title: "Sign Out",
      text: "Are you sure you want to sign out?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#F29E4C",
      cancelButtonColor: "#94a3b8",
      confirmButtonText: "Yes, Sign Out"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        localStorage.removeItem("id");
        localStorage.removeItem("email");
        navigate("/login");
      }
    });
  };

  return (
    <>
      <Header />

      {/* Breadcrumbs Section */}
      <section className="breadcrumbs-main-info-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="breadcrumbs-main-content">
                <h2>My Account</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i className="fas fa-angle-right" />
                  </li>
                  <li>My Account</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Account Page Content */}
      <section className="my-account-section">
        <div className="container">
          <div className="row">
            {/* Left Column: Profile Summary & Sidebar Navigation */}
            <div className="col-xl-3 col-lg-4 col-md-12 mb-4">
              <div className="profile-sidebar-card">
                {/* Profile Overview */}
                <div className="profile-user-header">
                  <div className="profile-avatar-container">
                    <img
                      src={avatar}
                      alt={formData.firstName}
                      className="profile-avatar-img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://ui-avatars.com/api/?name=Eric+Nathan+Smith&background=20b2aa&color=fff";
                      }}
                    />
                    <label
                      htmlFor="profile-photo-input"
                      className="profile-avatar-add-btn"
                      title="Upload new photo"
                    >
                      <i className="fa-solid fa-camera" /> Add
                    </label>
                    <input
                      type="file"
                      id="profile-photo-input"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                  <h4 className="profile-user-name">
                    {formData.firstName} {formData.lastName}
                  </h4>
                  <p className="profile-user-email">{formData.email}</p>
                  <p className="profile-user-phone">{formData.phone}</p>
                </div>

                {/* Sidebar Navigation */}
                <ul className="profile-nav-menu">
                  <li className="profile-nav-item">
                    <button
                      type="button"
                      className={`profile-nav-btn ${activeTab === "profile" ? "active" : ""}`}
                      onClick={() => setActiveTab("profile")}
                    >
                      <span className="profile-nav-icon">
                        <i className="fa-solid fa-user" />
                      </span>
                      My Profile
                    </button>
                  </li>

                  <li className="profile-nav-item">
                    <button
                      type="button"
                      className={`profile-nav-btn ${activeTab === "wallet" ? "active" : ""}`}
                      onClick={() => setActiveTab("wallet")}
                    >
                      <span className="profile-nav-icon">
                        <i className="fa-solid fa-wallet" />
                      </span>
                      Wallet
                    </button>
                  </li>

                  <li className="profile-nav-item">
                    <button
                      type="button"
                      className={`profile-nav-btn ${activeTab === "reviews" ? "active" : ""}`}
                      onClick={() => setActiveTab("reviews")}
                    >
                      <span className="profile-nav-icon">
                        <i className="fa-solid fa-comments" />
                      </span>
                      Reviews
                    </button>
                  </li>

                  <li className="profile-nav-item">
                    <button
                      type="button"
                      className={`profile-nav-btn ${activeTab === "notifications" ? "active" : ""}`}
                      onClick={() => setActiveTab("notifications")}
                    >
                      <span className="profile-nav-icon">
                        <i className="fa-solid fa-bell" />
                      </span>
                      Notification
                    </button>
                  </li>

                  <li className="profile-nav-item">
                    <button
                      type="button"
                      className={`profile-nav-btn ${activeTab === "history" ? "active" : ""}`}
                      onClick={() => setActiveTab("history")}
                    >
                      <span className="profile-nav-icon">
                        <i className="fa-solid fa-briefcase" />
                      </span>
                      Booking History
                    </button>
                  </li>

                  <li className="profile-nav-item">
                    <button
                      type="button"
                      className={`profile-nav-btn ${activeTab === "password" ? "active" : ""}`}
                      onClick={() => setActiveTab("password")}
                    >
                      <span className="profile-nav-icon">
                        <i className="fa-solid fa-lock" />
                      </span>
                      Change Password
                    </button>
                  </li>

                  <li className="profile-nav-item">
                    <button
                      type="button"
                      className={`profile-nav-btn ${activeTab === "report" ? "active" : ""}`}
                      onClick={() => setActiveTab("report")}
                    >
                      <span className="profile-nav-icon">
                        <i className="fa-solid fa-shield-halved" />
                      </span>
                      Report A Problem
                    </button>
                  </li>

                  <li className="profile-nav-item">
                    <button
                      type="button"
                      className="profile-nav-btn signout-nav-btn"
                      onClick={handleSignOut}
                    >
                      <span className="profile-nav-icon">
                        <i className="fa-solid fa-power-off" />
                      </span>
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Dynamic Tab Content */}
            <div className="col-xl-9 col-lg-8 col-md-12">
              <div className="profile-content-card">
                {/* TAB 1: Personal Details (Default / Matching Screenshot) */}
                {activeTab === "profile" && (
                  <>
                    <h3 className="profile-card-title">Personal Details</h3>
                    <form onSubmit={handleSaveProfile}>
                      <div className="row">
                        <div className="col-md-6 profile-form-group">
                          <label className="profile-form-label">First Name</label>
                          <input
                            type="text"
                            name="firstName"
                            className="profile-form-control"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="col-md-6 profile-form-group">
                          <label className="profile-form-label">Last Name</label>
                          <input
                            type="text"
                            name="lastName"
                            className="profile-form-control"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 profile-form-group">
                          <label className="profile-form-label">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            className="profile-form-control"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="col-md-6 profile-form-group">
                          <label className="profile-form-label">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            className="profile-form-control"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="profile-form-group">
                        <label className="profile-form-label">Address</label>
                        <input
                          type="text"
                          name="address"
                          className="profile-form-control"
                          placeholder="Add your address"
                          value={formData.address}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="row">
                        <div className="col-md-6 profile-form-group">
                          <label className="profile-form-label">City</label>
                          <select
                            name="city"
                            className="profile-form-control form-select"
                            value={formData.city}
                            onChange={handleChange}
                          >
                            <option value="">Select Your City</option>
                            <option value="Male">Male</option>
                            <option value="Hulhumale">Hulhumale</option>
                            <option value="Maafushi">Maafushi</option>
                            <option value="Addu City">Addu City</option>
                            <option value="Fuvahmulah">Fuvahmulah</option>
                            <option value="Dhigurah">Dhigurah</option>
                          </select>
                        </div>

                        <div className="col-md-6 profile-form-group">
                          <label className="profile-form-label">Country</label>
                          <select
                            name="country"
                            className="profile-form-control form-select"
                            value={formData.country}
                            onChange={handleChange}
                          >
                            <option value="">Select Your Country</option>
                            <option value="Maldives">Maldives</option>
                            <option value="India">India</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="Australia">Australia</option>
                            <option value="Germany">Germany</option>
                          </select>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 profile-form-group">
                          <label className="profile-form-label">Date of birth</label>
                          <input
                            type="date"
                            name="dob"
                            className="profile-form-control"
                            placeholder="dd-mm-yyyy"
                            value={formData.dob}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-6 profile-form-group">
                          <label className="profile-form-label">Gender</label>
                          <select
                            name="gender"
                            className="profile-form-control form-select"
                            value={formData.gender}
                            onChange={handleChange}
                          >
                            <option value="">Select Your Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="profile-form-group">
                        <label className="profile-form-label">About you</label>
                        <textarea
                          name="about"
                          rows={4}
                          className="profile-form-control"
                          placeholder="Write some details about yourself"
                          value={formData.about}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="profile-save-btn-wrapper">
                        <button type="submit" className="btn-profile-save">
                          Save
                        </button>
                      </div>
                    </form>
                  </>
                )}

                {/* TAB 2: Wallet */}
                {activeTab === "wallet" && (
                  <>
                    <h3 className="profile-card-title">My Wallet</h3>
                    <div className="p-4 text-center rounded-3 bg-light mb-4">
                      <p className="text-muted mb-1">Available Balance</p>
                      <h2 className="text-lagoon fw-bold" style={{ color: "#10312F" }}>
                        Rs. 45,200
                      </h2>
                    </div>
                    <h5 className="mb-3 font-semibold text-secondary">Recent Transactions</h5>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead className="table-light">
                          <tr>
                            <th>Transaction ID</th>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>#TXN-84729</td>
                            <td>15 Nov 2026</td>
                            <td>Booking Refund - Sheraton Maldives</td>
                            <td className="text-success">+Rs. 12,143</td>
                            <td><span className="badge bg-success">Completed</span></td>
                          </tr>
                          <tr>
                            <td>#TXN-73910</td>
                            <td>02 Nov 2026</td>
                            <td>Room Reservation - Sun Siyam</td>
                            <td className="text-danger">-Rs. 18,450</td>
                            <td><span className="badge bg-success">Paid</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </>
                )}

                {/* TAB 3: Reviews */}
                {activeTab === "reviews" && (
                  <>
                    <h3 className="profile-card-title">My Reviews</h3>
                    <div className="card border p-3 mb-3">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h6 className="mb-0 fw-bold">Sheraton Maldives Full Moon Resort</h6>
                        <span className="text-warning">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </span>
                      </div>
                      <p className="text-muted small mb-0">
                        "Incredible overwater villa experience. Staff was exceptionally welcoming, and the food was delicious!"
                      </p>
                    </div>
                  </>
                )}

                {/* TAB 4: Notifications */}
                {activeTab === "notifications" && (
                  <>
                    <h3 className="profile-card-title">Notifications</h3>
                    <div className="list-group">
                      <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
                        <i className="fa-solid fa-bell text-sunset mt-1" style={{ color: "#F29E4C" }} />
                        <div>
                          <h6 className="mb-0">Booking Confirmed!</h6>
                          <p className="mb-0 text-muted small">Your booking at Bandos Maldives Resort has been confirmed.</p>
                          <small className="text-secondary">2 hours ago</small>
                        </div>
                      </div>
                      <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
                        <i className="fa-solid fa-tag text-sunset mt-1" style={{ color: "#F29E4C" }} />
                        <div>
                          <h6 className="mb-0">Special Promotion</h6>
                          <p className="mb-0 text-muted small">Enjoy up to 25% off on water villas this weekend.</p>
                          <small className="text-secondary">Yesterday</small>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* TAB 5: Booking History */}
                {activeTab === "history" && (
                  <>
                    <h3 className="profile-card-title">Booking History</h3>
                    <div className="card border mb-3 p-3">
                      <div className="row align-items-center">
                        <div className="col-md-3">
                          <img
                            src="assets/images/room-img/room-1.jpg"
                            alt="Room"
                            className="img-fluid rounded"
                          />
                        </div>
                        <div className="col-md-6">
                          <h6 className="fw-bold mb-1">Sheraton Maldives Full Moon Resort</h6>
                          <p className="text-muted small mb-1">
                            <i className="fa-solid fa-location-dot text-sunset" style={{ color: "#F29E4C" }} /> Male, Maldives
                          </p>
                          <small className="text-secondary">Check-in: 10 Dec 2026 | Check-out: 14 Dec 2026</small>
                        </div>
                        <div className="col-md-3 text-end">
                          <span className="badge bg-success mb-2">Confirmed</span>
                          <h6 className="fw-bold text-sunset" style={{ color: "#F29E4C" }}>Rs. 12,143</h6>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* TAB 6: Change Password */}
                {activeTab === "password" && (
                  <>
                    <h3 className="profile-card-title">Change Password</h3>
                    <form onSubmit={handleSavePassword}>
                      <div className="profile-form-group">
                        <label className="profile-form-label">Current Password</label>
                        <input
                          type="password"
                          name="currentPassword"
                          className="profile-form-control"
                          placeholder="Enter current password"
                          value={passwords.currentPassword}
                          onChange={handlePasswordChange}
                          required
                        />
                      </div>
                      <div className="row">
                        <div className="col-md-6 profile-form-group">
                          <label className="profile-form-label">New Password</label>
                          <input
                            type="password"
                            name="newPassword"
                            className="profile-form-control"
                            placeholder="Enter new password"
                            value={passwords.newPassword}
                            onChange={handlePasswordChange}
                            required
                          />
                        </div>
                        <div className="col-md-6 profile-form-group">
                          <label className="profile-form-label">Confirm New Password</label>
                          <input
                            type="password"
                            name="confirmPassword"
                            className="profile-form-control"
                            placeholder="Confirm new password"
                            value={passwords.confirmPassword}
                            onChange={handlePasswordChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="profile-save-btn-wrapper">
                        <button type="submit" className="btn-profile-save">
                          Update Password
                        </button>
                      </div>
                    </form>
                  </>
                )}

                {/* TAB 7: Report A Problem */}
                {activeTab === "report" && (
                  <>
                    <h3 className="profile-card-title">Report A Problem</h3>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        Swal.fire({
                          icon: "success",
                          title: "Report Submitted",
                          text: "Thank you for reporting. Our support team will contact you shortly.",
                          confirmButtonColor: "#F29E4C"
                        });
                      }}
                    >
                      <div className="profile-form-group">
                        <label className="profile-form-label">Subject</label>
                        <input
                          type="text"
                          className="profile-form-control"
                          placeholder="Brief description of the issue"
                          required
                        />
                      </div>
                      <div className="profile-form-group">
                        <label className="profile-form-label">Problem Details</label>
                        <textarea
                          rows={5}
                          className="profile-form-control"
                          placeholder="Please provide details about what happened..."
                          required
                        />
                      </div>
                      <div className="profile-save-btn-wrapper">
                        <button type="submit" className="btn-profile-save">
                          Submit Report
                        </button>
                      </div>
                    </form>
                  </>
                )}
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

export default MyAccount;