import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "../Header";
import Footer from "../Footer";
import FooterCopyRight from "../FooterCopyRight";
import { setCookie } from "../../utils/cookieUtils";
import { API_ENDPOINTS } from "../../utils/apiConfig";

const REGISTER_API_URL = API_ENDPOINTS.REGISTER;

const Registration = () => {
  const navigate = useNavigate();

  // Tab: "customer" or "guesthouse"
  const [activeTab, setActiveTab] = useState("customer");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [profileImageFile, setProfileImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [registeredRole, setRegisteredRole] = useState("customer");
  const [registeredName, setRegisteredName] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/webp"];
      if (!validTypes.includes(file.type)) {
        Swal.fire("Invalid File", "Please upload an image in JPG, PNG, or WEBP format.", "warning");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        Swal.fire("File Too Large", "Image size must be less than 5MB.", "warning");
        return;
      }
      setProfileImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setProfileImageFile(null);
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = formData.fullName.trim();
    const email = formData.email.trim();
    // 10-digit phone number check
    const phone = formData.phone.replace(/\D/g, "");
    const password = formData.password;
    const confirmPassword = formData.confirmPassword;
    const address = formData.address.trim();

    // Validations
    if (!name || name.length < 2) {
      Swal.fire("Validation Error", "Full Name must be at least 2 characters.", "warning");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      Swal.fire("Validation Error", "Please provide a valid email address.", "warning");
      return;
    }

    if (!phone || phone.length !== 10) {
      Swal.fire("Validation Error", "Phone number must be exactly 10 digits (e.g. 9876543210).", "warning");
      return;
    }

    if (!password || password.length < 6 || password.length > 20) {
      Swal.fire("Validation Error", "Password must be between 6 and 20 characters.", "warning");
      return;
    }

    if (confirmPassword && password !== confirmPassword) {
      Swal.fire("Validation Error", "Passwords do not match.", "warning");
      return;
    }

    if (!formData.termsAccepted) {
      Swal.fire("Terms Required", "Please accept the Terms & Conditions and Privacy Policy to proceed.", "warning");
      return;
    }

    try {
      setLoading(true);

      const formPayload = new FormData();
      formPayload.append("name", name);
      formPayload.append("email", email);
      formPayload.append("phone", phone);
      formPayload.append("password", password);
      if (confirmPassword) {
        formPayload.append("confirmPassword", confirmPassword);
      }
      formPayload.append("role", activeTab); // "customer" or "guesthouse"
      if (address) {
        formPayload.append("address", address);
      }
      if (profileImageFile) {
        formPayload.append("profileImage", profileImageFile);
      }

      const response = await axios.post(REGISTER_API_URL, formPayload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data?.success) {
        const userId = response.data?.id;

        // Save data into cookies instead of localStorage
        setCookie("id", userId, 7);
        setCookie("name", name, 7);
        setCookie("email", email, 7);
        setCookie("phone", phone, 7);
        setCookie("role", activeTab, 7);
        setCookie(
          "user",
          {
            id: userId,
            name,
            email,
            phone,
            role: activeTab,
            address,
            status: activeTab === "customer" ? "active" : "inactive",
          },
          7
        );

        // Notify Header and other components to update state from cookies
        window.dispatchEvent(new Event("authChange"));

        setRegisteredName(name);
        setRegisteredRole(activeTab);
        setIsSuccessModalOpen(true);
      } else {
        throw new Error(response.data?.message || "Registration failed");
      }
    } catch (err) {
      console.error("Registration error:", err);
      const errors = err.response?.data?.errors;
      if (Array.isArray(errors) && errors.length > 0) {
        const errorList = errors.map((item) => `• ${item.message}`).join("\n");
        Swal.fire("Registration Error", errorList, "error");
      } else {
        const msg =
          err.response?.data?.message ||
          err.message ||
          "Failed to create account. Please check your network connection.";
        Swal.fire("Registration Error", msg, "error");
      }
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
                <h2>Sign Up</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i className="fas fa-angle-right" />
                  </li>
                  <li>Sign Up</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Registration Form Section */}
      <section className="login-form-info-main-area">
        <div className="container">
          <div className="auth-split-card-container">
            <div className="row g-0 align-items-stretch">
              {/* Left Column: Hero Branding Pane */}
              <div className="col-lg-5 col-md-12">
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
                        <i className="fa-solid fa-compass me-1" /> JOIN CHEAPROOMS MALDIVES
                      </span>

                      <h1 className="auth-hero-title">Your Gateway to the Real Maldives</h1>
                      <p className="auth-hero-desc">
                        Create your free account today and unlock authentic island guesthouses, verified speedboats, and curated local excursions across 20+ atolls.
                      </p>

                      <ul className="auth-hero-perks">
                        <li className="auth-hero-perk-item">
                          <i className="fa-solid fa-circle-check" />
                          <span>Member-only secret rates &amp; early bird discounts</span>
                        </li>
                        <li className="auth-hero-perk-item">
                          <i className="fa-solid fa-circle-check" />
                          <span>Manage trips, invoices &amp; booking history</span>
                        </li>
                        <li className="auth-hero-perk-item">
                          <i className="fa-solid fa-circle-check" />
                          <span>Direct contact with verified Maldivian island hosts</span>
                        </li>
                      </ul>
                    </div>

                    <div className="auth-hero-switch-box">
                      <p className="auth-hero-switch-text">Already registered?</p>
                      <Link to="/login" className="auth-hero-switch-btn">
                        <span>Sign In</span>
                        <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Registration Form Pane */}
              <div className="col-lg-7 col-md-12">
                <div className="auth-form-pane">
                  <div className="auth-form-header">
                    <span className="auth-form-badge">SIGN UP</span>
                    <h2 className="auth-form-title">Create Your Free Account</h2>
                    <p className="auth-form-subtitle">
                      Sign up in minutes to start booking and saving across Maldives.
                    </p>
                  </div>

                  {/* Customer vs Guesthouse Admin Tab Switcher */}
                  <div className="auth-tab-segment">
                    <button
                      type="button"
                      className={`auth-tab-btn ${activeTab === "customer" ? "active" : ""}`}
                      onClick={() => setActiveTab("customer")}
                    >
                      <i className="fa-solid fa-user" />
                      <span>Customer</span>
                    </button>
                    <button
                      type="button"
                      className={`auth-tab-btn ${activeTab === "guesthouse" ? "active" : ""}`}
                      onClick={() => setActiveTab("guesthouse")}
                    >
                      <i className="fa-solid fa-hotel" />
                      <span>Guesthouse Admin (Property Owner)</span>
                    </button>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      {/* Full Name */}
                      <div className="col-md-6 col-12">
                        <div className="auth-field-group">
                          <label className="auth-field-label" htmlFor="fullName">
                            Full Name * <small className="text-muted">(Min. 2 characters)</small>
                          </label>
                          <div className="auth-input-wrapper">
                            <i className="fa-regular fa-user input-leading-icon" />
                            <input
                              type="text"
                              id="fullName"
                              name="fullName"
                              className="auth-input-control"
                              placeholder="e.g. Vishal Patel"
                              value={formData.fullName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Phone Number */}
                      <div className="col-md-6 col-12">
                        <div className="auth-field-group">
                          <label className="auth-field-label" htmlFor="phone">
                            Phone Number * <small className="text-muted">(10 digits)</small>
                          </label>
                          <div className="auth-input-wrapper">
                            <i className="fa-solid fa-phone input-leading-icon" />
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              maxLength={10}
                              className="auth-input-control"
                              placeholder="e.g. 9876543210"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Address / Property Location */}
                      <div className="col-md-6 col-12">
                        <div className="auth-field-group">
                          <label className="auth-field-label" htmlFor="address">
                            {activeTab === "guesthouse" ? "Guesthouse Location / Island" : "Address / Island"}
                          </label>
                          <div className="auth-input-wrapper">
                            <i className="fa-solid fa-location-dot input-leading-icon" />
                            <input
                              type="text"
                              id="address"
                              name="address"
                              className="auth-input-control"
                              placeholder={activeTab === "guesthouse" ? "e.g. Maafushi, Kaafu Atoll" : "e.g. Male, Maldives"}
                              value={formData.address}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Email Address */}
                      <div className="col-md-6 col-12">
                        <div className="auth-field-group">
                          <label className="auth-field-label" htmlFor="email">
                            Email Address *
                          </label>
                          <div className="auth-input-wrapper">
                            <i className="fa-regular fa-envelope input-leading-icon" />
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="auth-input-control"
                              placeholder="owner@example.com"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Password */}
                      <div className="col-md-6 col-12">
                        <div className="auth-field-group">
                          <label className="auth-field-label" htmlFor="password">
                            Password * <small className="text-muted">(6-20 characters)</small>
                          </label>
                          <div className="auth-input-wrapper">
                            <i className="fa-solid fa-lock input-leading-icon" />
                            <input
                              type={showPassword ? "text" : "password"}
                              id="password"
                              name="password"
                              minLength={6}
                              maxLength={20}
                              className="auth-input-control"
                              placeholder="Create a password"
                              value={formData.password}
                              onChange={handleChange}
                              required
                            />
                            <button
                              type="button"
                              className="auth-password-toggle-btn"
                              onClick={() => setShowPassword(!showPassword)}
                              aria-label="Toggle password visibility"
                            >
                              <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`} />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Confirm Password */}
                      <div className="col-md-6 col-12">
                        <div className="auth-field-group">
                          <label className="auth-field-label" htmlFor="confirmPassword">
                            Confirm Password
                          </label>
                          <div className="auth-input-wrapper">
                            <i className="fa-solid fa-lock input-leading-icon" />
                            <input
                              type={showConfirmPassword ? "text" : "password"}
                              id="confirmPassword"
                              name="confirmPassword"
                              minLength={6}
                              maxLength={20}
                              className="auth-input-control"
                              placeholder="Confirm password"
                              value={formData.confirmPassword}
                              onChange={handleChange}
                            />
                            <button
                              type="button"
                              className="auth-password-toggle-btn"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              aria-label="Toggle confirm password visibility"
                            >
                              <i className={`fa-solid ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`} />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Optional Profile Image */}
                      <div className="col-12">
                        <div className="auth-field-group">
                          <label className="auth-field-label" htmlFor="profileImage">
                            Profile Image <small className="text-muted">(Optional - JPG, PNG, WEBP)</small>
                          </label>
                          <div className="d-flex align-items-center gap-3">
                            <input
                              type="file"
                              id="profileImage"
                              name="profileImage"
                              accept="image/jpeg,image/png,image/webp"
                              onChange={handleFileChange}
                              className="form-control"
                              style={{
                                borderRadius: "10px",
                                borderColor: "#cbd5e1",
                                padding: "8px 12px",
                                fontSize: "13.5px",
                              }}
                            />
                            {imagePreview && (
                              <div className="d-flex align-items-center gap-2">
                                <img
                                  src={imagePreview}
                                  alt="Preview"
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    border: "2px solid #F29E4C",
                                    flexShrink: 0,
                                  }}
                                />
                                <button
                                  type="button"
                                  className="btn btn-sm btn-outline-danger"
                                  onClick={handleRemoveImage}
                                  style={{ borderRadius: "8px", padding: "4px 8px", fontSize: "12px" }}
                                >
                                  Remove
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Terms & Conditions Checkbox */}
                      <div className="col-12">
                        <div className="auth-terms-box">
                          <label className="auth-checkbox-label">
                            <input
                              type="checkbox"
                              name="termsAccepted"
                              checked={formData.termsAccepted}
                              onChange={handleChange}
                              required
                            />
                            <span>
                              I accept the <Link to="/termandconditions" target="_blank">Terms &amp; Conditions</Link> and{" "}
                              <Link to="/privacy-policy" target="_blank">Privacy Policy</Link>
                            </span>
                          </label>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="col-12">
                        <button type="submit" className="auth-submit-btn" disabled={loading}>
                          {loading ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                                aria-hidden="true"
                              />
                              <span>Creating Account...</span>
                            </>
                          ) : (
                            <>
                              <i className="fa-solid fa-user-plus" />
                              <span>
                                {activeTab === "guesthouse"
                                  ? "Register as Guesthouse Admin"
                                  : "Create Customer Account"}
                              </span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Social Divider */}
                      <div className="col-12">
                        <div className="auth-social-divider">
                          <span>or sign up with</span>
                        </div>
                      </div>

                      {/* Social Buttons */}
                      <div className="col-12">
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
                      </div>

                      {/* Bottom Prompt */}
                      <div className="col-12">
                        <p className="auth-bottom-prompt">
                          Already have an account?
                          <Link to="/login">
                            Sign In <i className="fa-solid fa-arrow-right ms-1" />
                          </Link>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Success Modal */}
      {isSuccessModalOpen && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(15, 23, 42, 0.6)", zIndex: 1050 }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div
              className="modal-content text-center p-4"
              style={{ borderRadius: "20px", border: "1px solid #e2e8f0" }}
            >
              <div className="modal-body">
                <div className="register-successfull-content">
                  <div
                    className="register-successfull-icon-content"
                    style={{
                      background:
                        registeredRole === "customer"
                          ? "rgba(242, 158, 76, 0.15)"
                          : "rgba(234, 179, 8, 0.15)",
                      color: registeredRole === "customer" ? "#10312F" : "#d97706",
                    }}
                  >
                    <i
                      className={
                        registeredRole === "customer" ? "fa-solid fa-check" : "fa-solid fa-clock"
                      }
                    />
                  </div>
                  <h4 className="fw-bold mt-3 mb-2">
                    {registeredRole === "customer"
                      ? "Account Created Successfully!"
                      : "Guesthouse Registration Received!"}
                  </h4>
                  <p className="text-muted mb-3" style={{ fontSize: "14.5px", lineHeight: "1.6" }}>
                    {registeredRole === "customer" ? (
                      <>
                        Welcome, <strong>{registeredName}</strong>! Your Customer account has been
                        created and is <strong>Active</strong>. Your registration details have been
                        saved securely into cookies.
                      </>
                    ) : (
                      <>
                        Thank you, <strong>{registeredName}</strong>! Your Guesthouse Admin account
                        is <strong>Inactive (Pending Admin Approval)</strong>. An automated notification
                        has been dispatched to our Master Admin team to review and activate your
                        account.
                      </>
                    )}
                  </p>

                  <div
                    className="p-3 mb-3 text-start rounded-3"
                    style={{ background: "#f8fafc", border: "1px solid #e2e8f0", fontSize: "13px" }}
                  >
                    <div className="d-flex justify-content-between mb-1">
                      <span className="text-muted">Account Status:</span>
                      <span
                        className={`badge ${
                          registeredRole === "customer" ? "bg-success" : "bg-warning text-dark"
                        }`}
                      >
                        {registeredRole === "customer" ? "Active" : "Inactive (Pending Approval)"}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between mb-1">
                      <span className="text-muted">Role:</span>
                      <span className="fw-bold text-dark text-capitalize">
                        {registeredRole === "guesthouse" ? "Guesthouse Admin" : "Customer"}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span className="text-muted">Saved Storage:</span>
                      <span className="text-teal fw-semibold">Saved into Cookies</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer justify-content-center border-0 pt-0 gap-2">
                <Link to="/login" className="modal-url-btn">
                  Sign In Now
                </Link>
                <Link
                  to="/"
                  className="btn btn-outline-secondary"
                  style={{ borderRadius: "10px", padding: "10px 20px", fontWeight: "600" }}
                >
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FooterCopyRight />
    </>
  );
};

export default Registration;