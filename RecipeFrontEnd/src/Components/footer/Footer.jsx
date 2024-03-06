import React from 'react';
import './Footer.css';
// import facebookLogo from './images/facebook-logo.png';
// import instagramLogo from './images/instagram-logo.png';
// import linkedinLogo from './images/linkedin-logo.png';
// import githubLogo from './images/github-logo.png';
import logo from "../../assets/images/Recipes.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="Company Logo" className="company-logo" />
        </div>
        <div className="footer-right">
          <div className="about-column">
            <h3>About Us</h3>
            <p>Line 1 about the company</p>
            <p>Line 2 about the company</p>
          </div>
          <div className="follow-us-column">
            <h3>Follow Us</h3>
            <p>Line 1 follow us on social media</p>
            <p>Line 2 follow us on social media</p>
          </div>
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="footer-icons">
        <i class="fa-brands fa-facebook footer-icon"></i>
        <i class="fa-brands fa-instagram footer-icon"></i>
        <i class="fa-brands fa-linkedin footer-icon"></i>
        <i class="fa-brands fa-github footer-icon"></i>
      </div>
    </footer>
  );
}

export default Footer;
