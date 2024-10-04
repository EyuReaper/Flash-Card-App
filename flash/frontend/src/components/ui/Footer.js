import React from "react";
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import "./Footer.css"; // Import the new CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <p href="#" className="footer-link">
            Service
          </p>
          <p href="#" className="footer-link">
            Features
          </p>
          <p href="#" className="footer-link">
            Our Team
          </p>
          <p href="#" className="footer-link">
            Portfolio
          </p>
          <p href="#" className="footer-link">
            Blog
          </p>
          <p href="#" className="footer-link">
            Contact Us
          </p>
        </div>

        <div className="social-icons">
          <a href="#" className="social-icon">
            <CgFacebook />
          </a>
          <a href="#" className="social-icon">
            <BsTwitter />
          </a>
          <a href="#" className="social-icon">
            <BsInstagram />
          </a>
          <a href="#" className="social-icon">
            <BsLinkedin />
          </a>
        </div>

        <div className="footer-bottom">
          <p className="footer-text">© 2024 Flashcard. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
