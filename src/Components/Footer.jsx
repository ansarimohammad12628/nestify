import React from 'react';
import "../CSS/Footer.css";
import logo1 from "../assets/Image/SVG/logo (1).svg";
import icon1 from "../assets/Image/SVG/icon-location.svg";
import icon2 from "../assets/Image/SVG/icon-contact.svg";
import icon3 from "../assets/Image/SVG/icon-email-2.svg";
import icon4 from "../assets/Image/SVG/icon-clock.svg";
import icon5 from "../assets/Image/PNG/payment-method.png";
import icon6 from "../assets/Image/SVG/phone-call.svg";
import icon7 from "../assets/Image/SVG/icon-facebook-white.svg";
import icon8 from "../assets/Image/SVG/icon-twitter-white.svg";
import icon9 from "../assets/Image/SVG/icon-instagram-white.svg";
import icon10 from "../assets/Image/SVG/icon-pinterest-white.svg";
import icon11 from "../assets/Image/SVG/icon-youtube-white.svg";

import applogo1 from "../assets/Image/JPG/app-store.jpg";
import applogo2 from "../assets/Image/JPG/google-play.jpg";

const Footer = () => {
  return (
    <>
     <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-right">
                        <div><img src={logo1} alt="logo" /></div>
                        <div className="footer-right-top">
                            <div className="footer-top-text">Awesome grocery store website
                                <div>template</div>
                            </div>
                            <div>
                                <div className="footer-top-icon"><img src={icon1} alt="location" /><span>Address:</span>5171
                                    W Campbell Ave</div>
                                <div>undefined Kent, Utah 53127 United States</div>
                            </div>
                        </div>
                        <div className="footer-right-down">
                            <div className="footer-right-icon"><img src={icon2} alt="contact" /><span>Call Us:</span>(+91) -
                                540-025-124553</div>
                            <div className="footer-right-icon"><img src={icon3} alt="email" /><span>Email:</span>sale@Nest.com</div>
                            <div className="footer-right-icon"><img src={icon4} alt="clock" /><span>Hours:</span>10:00 - 18:00,
                                Mon - Sat</div>
                        </div>
                    </div>
                    <div className="footer-main-left">
                        <div className="footer-left">
                            <div className="footer-left-top-text">Company</div>
                            <div className="footer-left-content">
                                <a href="">About Us</a>
                                <a href="">Delivery Information</a>
                                <a href="">Privacy Policy</a>
                                <a href="">Terms & Conditions</a>
                                <a href="">Contact Us</a>
                                <a href="">Support Center</a>
                                <a href="">Careers</a>
                            </div>
                        </div>
                        <div className="footer-left">
                            <div className="footer-left-top-text">Account</div>
                            <div className="footer-left-content">
                                <a href="">Sign In</a>
                                <a href="">View Cart</a>
                                <a href="">My Wishlist</a>
                                <a href="">Track My Order</a>
                                <a href="">Help Ticket</a>
                                <a href="">Shipping Details</a>
                                <a href="">Compare products</a>
                            </div>
                        </div>
                        <div className="footer-left">
                            <div className="footer-left-top-text">Corporate</div>
                            <div className="footer-left-content">
                                <a href="">Become a Vendor</a>
                                <a href="">Affiliate Program</a>
                                <a href="">Farm Business</a>
                                <a href="">Farm Careers</a>
                                <a href="">Our Suppliers</a>
                                <a href="">Accessibility</a>
                                <a href="">Promotions</a>
                            </div>
                        </div>
                        <div className="footer-left">
                            <div className="footer-left-top-text">Popular</div>
                            <div className="footer-left-content">
                                <a href="">Milk & Flavoured Milk</a>
                                <a href="">Butter and Margarine</a>
                                <a href="">Eggs Substitutes</a>
                                <a href="">Marmalades</a>
                                <a href="">Sour Cream and Dips</a>
                                <a href="">Tea & Kombucha</a>
                                <a href="">Cheese</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-middle">
                    <div className="footer-middle-top">
                        <div className="footer-left-top-text">Install App</div>
                        <div className="footer-right-icon">From App Store or Google Play</div>
                        <div className="footer-middle-image">
                            <div className="app-image"><img src={applogo1} alt="applogo" /></div>
                            <div className="app-image"><img src={applogo2} alt="applogo2" /></div>
                        </div>
                    </div>
                    <div className="footer-middle-down">
                        <div className="footer-right-icon">Secured Payment Gateways</div>
                        <div><img src={icon5} alt="banklogo" /></div>
                    </div>
                </div>
                <div className="footer-down">
                    <div className="">
                        <div>© 2024, <span>Nest</span>- HTML Ecommerce Template</div>
                        <div>All rights reserved</div>
                    </div>
                    <div className="footer-down-middle">
                        <div className="footer-down-content">
                            <div className="footer-down-icon"><img src={icon6} alt="call icon" /></div>
                            <div>
                                <div className="footer-down-text">1900 - 6666</div>
                                <div className="footer-down-text2">Working 8:00 - 22:00</div>
                            </div>
                        </div>
                        <div className="footer-down-content">
                            <div className="footer-down-icon"><img src={icon6} alt="call icon" /></div>
                            <div>
                                <div className="footer-down-text">1900 - 8888</div>
                                <div className="footer-down-text2">24/7 Support Center</div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-down-left">
                        <div className="footer-section">
                            <div className="footer-section-text">Follow Us</div>
                            <div className="all-icon">
                                <span className="footer-last-icon"><img src={icon7} alt="facebook" /></span>
                                <span className="footer-last-icon"><img src={icon8} alt="twitter" /></span>
                                <span className="footer-last-icon"><img src={icon9} alt="instagram" /></span>
                                <span className="footer-last-icon"><img src={icon10} alt="pinterest" /></span>
                                <span className="footer-last-icon"><img src={icon11} alt="youtube" /></span>
                            </div>
                        </div>
                        <div>U1 to 15% discount on your first subscribe</div>

                    </div>
                </div>
            </div>
    
    </>
    
  )
}

export default Footer