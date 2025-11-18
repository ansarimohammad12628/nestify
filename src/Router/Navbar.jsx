import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import logo1 from "../assets/Image/SVG/logo (1).svg";
import wrong from "../assets/Image/SVG/wrong-icon.svg";
import icon from "../assets/Image/SVG/hamburger-md-svgrepo-com.svg";
import search from "../assets/Image/SVG/search-svgrepo-com (3).svg";
import heart from "../assets/Image/SVG/icon-heart.svg";
import compare from "../assets/Image/SVG/icon-compare.svg";
import cart from "../assets/Image/SVG/icon-cart.svg";
import user from "../assets/Image/SVG/icon-user.svg";
import dash from "../assets/Image/SVG/dashboard-svgrepo-com.svg";
import hotsvg from "../assets/Image/SVG/icon-hot.svg";
import headphone from "../assets/Image/SVG/icon-headphone.svg";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  const clickbutton = () => {
    setMobile((prev) => !prev);
  };
  return (
    <>
      <div className="main-header">
        {/* Header Top */}
        <div className="header-top">
          <div className="top-left">
            <ul className="unorder-list m-0 p-0">
              <li className="left-list">
                <Link to="/about">About Us</Link>
              </li>
              <li className="left-list">
                <Link to="/account">My Account</Link>
              </li>
              <li className="left-list">
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li className="left-list">
                <Link to="/order-tracking">Order Tracking</Link>
              </li>
            </ul>
          </div>
          <div className="top-middle">
            <span>100% Secure delivery without contacting the courier</span>
          </div>
          <div className="top-right">
            <div className="right-text1">
              <div>Need help? Call US:</div>
              <div className="right-number">+ 1800 900</div>
            </div>
            <div className="right-text2">
              <div>
                English
                <select>
                  <option value="">EN</option>
                </select>
              </div>
            </div>
            <div className="right-text2">
              <div>
                USD
                <select>
                  <option value="">USD</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Header Middle */}
        <div className="header-middle">
          <div onClick={clickbutton} className="toogle-button">
            <img src={icon} alt="menu" />
          </div>
          <div className={`mobile-nav ${mobile ? "active" : ""}`}>
            <div className="top-mobile-nav">
              <Link to="/" onClick={() => setMobile(false)}>
                <img src={logo1} alt="logo" className="mobile-logo" />
              </Link>

              <button className="close-btn" onClick={() => setMobile(false)}>
                <img src={wrong} alt="wrong" />
              </button>
            </div>
            <li className="header-down-list-1">
              <Link to="/" onClick={() => setMobile(false)}>
                Home
              </Link>
            </li>
            <li className="header-down-list">
              <Link to="/about" onClick={() => setMobile(false)}>
                About
              </Link>
            </li>
            <li className="header-down-list">
              <Link to="/shop" onClick={() => setMobile(false)}>
                Shop
              </Link>
            </li>
            <li className="header-down-list">
              <Link to="/vendor" onClick={() => setMobile(false)}>
                Vendor
              </Link>
            </li>
            <li className="header-down-list">
              <Link to="/megamenu" onClick={() => setMobile(false)}>
                Mega menu
              </Link>
            </li>
            <li className="header-down-list">
              <Link to="/blog" onClick={() => setMobile(false)}>
                Blog
              </Link>
            </li>
            <li className="header-down-list">
              <Link to="/contact" onClick={() => setMobile(false)}>
                Contact
              </Link>
            </li>
          </div>

          <div className="logo">
            <Link to="/">
              <img src={logo1} alt="logo" />
            </Link>
          </div>

          <div className="header-middle-left">
            <div className="middle-search">
              <div className="middle-text">
                All Categories
                <select>
                  <option value=""></option>
                </select>
              </div>
              <div className="main-search">
                <div className="input">
                  <input type="text" placeholder="Search for items..." />
                </div>
                <div className="search-icon">
                  <img src={search} alt="search" />
                </div>
              </div>
            </div>
          </div>

          <div className="right-down-image">
            <div className="right-down-icon">
              <div className="position-relative">
                <img src={compare} alt="" />
                <div className="right-down-text">3</div>
              </div>
              <span className="">Compare</span>
            </div>
            <div className="right-down-icon">
              <div className="position-relative">
                <img src={heart} alt="" />
                <div className="right-down-text">6</div>
              </div>
              <span className="">Wishlist</span>
            </div>
            <div className="right-down-icon">
              <Link to="/cart">
                <div className="position-relative">
                  <img src={cart} alt="" />
                  <div className="right-down-text">2</div>
                </div>
                <span className="">Cart</span>
              </Link>
            </div>
            <div className="right-down-icon">
              <img src={user} alt="" />
              Account
            </div>
          </div>

          <div className="right-down-image2 right-down-image">
          <div className="right-down-icon">
              <div className="position-relative">
                <img src={heart} alt="" />
                <div className="right-down-text">6</div>
              </div>
              <span className="">Wishlist</span>
            </div>
            <div className="right-down-icon">
              <Link to="/cart">
                <div className="position-relative">
                  <img src={cart} alt="" />
                  <div className="right-down-text">2</div>
                </div>
                <span className="">Cart</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Header Down */}
        <div className="header-down">
          <div className="header-down-left">
            <div className="header-down-bg">
              <div className="down-icon">
                <img src={dash} alt="" />
              </div>
              <div className="down-text">
                Browse All Categories
                <select>
                  <option value=""></option>
                </select>
              </div>
            </div>
            <div className="down-middle">
              <div className="main-down-list">
                <div className="down-image">
                  <Link to="/deals">
                    <img src={hotsvg} alt="Deals" />
                    <li className="header-down-list">Deals</li>
                  </Link>
                </div>
                <li className="header-down-list-1">
                  <Link to="/">Home</Link>
                </li>
                <li className="header-down-list">
                  <Link to="/about">About</Link>
                </li>
                <li className="header-down-list">
                  <Link to="/shop">Shop</Link>
                </li>
                <li className="header-down-list">
                  <Link to="/vendor">Vendor</Link>
                </li>
                <li className="header-down-list">
                  <Link to="/megamenu">Mega menu</Link>
                </li>
                <li className="header-down-list">
                  <Link to="/blog">Blog</Link>
                </li>

                <li className="header-down-list">
                  <Link to="/contact">Contact</Link>
                </li>
              </div>
            </div>
          </div>
          <div className="header-down-right">
            <div>
              <img src={headphone} alt="support" />
            </div>
            <div>
              <div className="header-down-text">1900 - 888</div>
              <div className="header-down-text2">24/7 Support Center</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
