import React, { useState } from "react";
import Footer from "../Footer";
import FooterCopyRight from "../FooterCopyRight";
import { Link } from "react-router-dom";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Signup = () => {
    
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    
    
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    /**
     * Toggles the visibility state for a specific field.
     * @param {string} fieldName - 'password' or 'confirmPassword'
     */
    const togglePasswordVisibility = (fieldName) => {
        if (fieldName === 'password') {
            setIsPasswordVisible(prev => !prev);
        } else if (fieldName === 'confirmPassword') {
            setIsConfirmPasswordVisible(prev => !prev);
        }
    };

    // Dynamic props for the main Password field
    const passwordInputType = isPasswordVisible ? 'text' : 'password';
    const passwordIconClass = isPasswordVisible ? 'fa-eye-slash' : 'fa-eye';

    // Dynamic props for the Confirm Password field
    const confirmPasswordInputType = isConfirmPasswordVisible ? 'text' : 'password';
    const confirmPasswordIconClass = isConfirmPasswordVisible ? 'fa-eye-slash' : 'fa-eye';

    const navigate  =  useNavigate();
    const URL = "http://192.168.1.51:5050/api/userAuth/register";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const [loading , setLoading] = useState(false);
    const [ ,setError] = useState("");

    const handleChange = (e) => {
        const {id , value} = e.target;
        setFormData((prev) => ({...prev, [id]: value}));
    }
    
    

    const handleSignup = async (e) => {
        e.preventDefault();
        const {
            name,
            email,
            phone,
            password,
            confirmPassword,
        } = formData;

        if(!name || !email || !phone || !password || !confirmPassword ){
            Swal.fire("Error" , "Please fill all fields",  "error");
            return;
        }

        try{
            setLoading(true);

            const response = await axios.post (URL, formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            console.log(response.data);
            Swal.fire("Success" , "Account created successfully", "success");
            navigate("/login");
        } catch (err) {
            const msg = err.response?.data?.message || err.message || "Signup failed";
            setError(msg);
            Swal.fire("Signup failed" , msg , "error");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
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
            
            {/* --- */}
            
            <section className="login-form-info-main-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 p-0">
                            <div className="login-form-content-info register-content-img">
                                <div className="login-form-content-detail">
                                    <a href="index.html">
                                        <img src="assets/images/logo/newlogo.png" alt="Logo" />
                                    </a>
                                    <h1>Looks like you're new here!</h1>
                                    <p>
                                        Join our group in few minutes! Sign up with your details to get
                                        started We are glad to see you again! Get access to your Orders,
                                        Wishlist and Recommendations.
                                    </p>
                                    <div className="login-registration-button">
                                        <Link to="/login" className="login-registration-comm-button">
                                            Sign In
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 p-0">
                            <div className="login-registration-form-info">
                                <form onSubmit={handleSignup} className="login-registration-form-area">
                                    <h6>Create Your Account</h6>
                                    <h4>Sign Up Now to Unlock Full Access</h4>
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <label>Full Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Full Name"
                                                />
                                            </div>
                                        </div>
                                        {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    className="form-control"
                                                    placeholder="Last Name"
                                                />
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input
                                            type="number"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input
                                            type="text"
                                            id="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Address"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <div className="row">
                                        
                                        {/* Password Field with Toggle Logic */}
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <div className="form-group eye-icon-postion">
                                                <label>Password</label>
                                                <input
                                                    // Dynamic type based on state 1
                                                    type={passwordInputType}
                                                    id="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Password"
                                                />
                                                <i
                                                    // Dynamic class and onClick handler
                                                    className={`fa-solid toggle-password ${passwordIconClass}`}
                                                    onClick={() => togglePasswordVisibility('password')}
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Confirm Password Field with Toggle Logic */}
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <div className="form-group eye-icon-postion">
                                                <label>Confirm password</label>
                                                <input
                                                    // Dynamic type based on state 2
                                                    type={confirmPasswordInputType}
                                                    id="confirmPassword"
                                                    value={formData.confirmPassword}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Confirm password"
                                                />
                                                <i
                                                    // Dynamic class and onClick handler
                                                    className={`fa-solid toggle-password ${confirmPasswordIconClass}`}
                                                    onClick={() => togglePasswordVisibility('confirmPassword')}
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="register-terms-Policy-box">
                                            <input
                                                type="checkbox"
                                                id="vehicle1"
                                                name="vehicle1"
                                                defaultValue="Bike"
                                            />
                                            <label htmlFor="vehicle1">
                                                {" "}
                                                I accept the <a href="#">Terms &amp; Condition</a> and{" "}
                                                <a href="#">Privacy Policy</a>
                                            </label>
                                        </div>
                                        <div className="login-btn-info">
                                            <button 
                                            type="submit"
                                            disabled={loading}
                                                    
                                              className="login-btn">
                                                {loading ? "Signing up..." : "Sign Up" }
                                            </button>
                                        </div>
                                        <div className="login-registration-bottom-content">
                                            <p>
                                                Already have an account?
                                                <Link to="/login">
                                                    <i className="fa-solid fa-user" /> Sign In
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* --- */}
            
            <Footer />
            <FooterCopyRight />
        </>
    )
}

export default Signup;