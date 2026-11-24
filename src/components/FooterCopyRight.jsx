import React from "react";
import { Link } from "react-router-dom";

const FooterCopyRight = () => {
  return (
    <section className="copyright-info-main-area simple-teal-copyright">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="copyright-detail-info-area">
              <p>© Copyright 2025 Cheap RoomsMV | All rights reserved.</p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="copyright-content-social-link">
              <Link to="/faq">FAQ</Link>
              <span className="copyright-sep">•</span>
              <Link to="/privacy-policy">Privacy &amp; Policy</Link>
              <span className="copyright-sep">•</span>
              <Link to="/termandconditions">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCopyRight;
