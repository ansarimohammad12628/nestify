import React from "react";
import "../CSS/VendorPage.css";
import BannerPage from "./BannerPage";
import shareicon from "../assets/Image/SVG/share-1-svgrepo-com.svg";
import banner13 from "../assets/Image/PNG/banner-13.png";
import searchicon from "../assets/Image/SVG/search-svgrepo-com (3).svg";
import righticon from "../assets/Image/SVG/right-arrow-svgrepo-com (5).svg";
import dealsicon from "../assets/Image/SVG/dashboard-svgrepo-com.svg";
import icon1 from "../assets/Image/SVG/icon-location.svg";
import icon2 from "../assets/Image/SVG/icon-contact.svg";
import vendor1 from "../assets/Image/PNG/vendor-1.png";
import vendor2 from "../assets/Image/PNG/vendor-7.png";
import vendor3 from "../assets/Image/PNG/vendor-2.png";
import vendor4 from "../assets/Image/PNG/vendor-8.png";
import vendor5 from "../assets/Image/PNG/vendor-3.png";
import vendor6 from "../assets/Image/PNG/vendor-9.png";
import vendor7 from "../assets/Image/PNG/vendor-4.png";
import vendor8 from "../assets/Image/PNG/vendor-10.png";
import vendor9 from "../assets/Image/PNG/vendor-5.png";
import vendor10 from "../assets/Image/PNG/vendor-11.png";
import vendor11 from "../assets/Image/PNG/vendor-6.png";
import vendor12 from "../assets/Image/PNG/vendor-12.png";
import vendor13 from "../assets/Image/PNG/vendor-13.png";
import vendor14 from "../assets/Image/PNG/vendor-14.png";
import vendor15 from "../assets/Image/PNG/vendor-15.png";
import icon4 from "../assets/Image/SVG/star-svgrepo-com (2).svg";

const stores = [
  {
    id: 1,
    name: "Nature Food",
    year: "2012",
    products: 380,
    rating: "(4.0)",
    badge: "Mail",
    img: vendor1,
  },
  {
    id: 2,
    name: "Country Crock",
    year: "2019",
    products: 18,
    rating: "(4.0)",
    badge: "Preferred",
    img: vendor2,
  },
  {
    id: 3,
    name: "Hambger Hel",
    year: "2012",
    products: 63,
    rating: "(4.0)",
    badge: "Mail",
    img: vendor3,
  },
  {
    id: 4,
    name: "Totino’s Pizza",
    year: "2012",
    products: 380,
    rating: "(4.0)",
    badge: "Mail",
    img: vendor4,
  },
  {
    id: 5,
    name: "Maruchan Ramen",
    year: "2020",
    products: 75,
    rating: "(4.0)",
    img: vendor5,
  },
  {
    id: 6,
    name: "USA Noodle Soup",
    year: "2018",
    products: 42,
    rating: "(4.0)",
    img: vendor6,
  },
  {
    id: 7,
    name: "Red Baron Pizza",
    year: "2016",
    products: 59,
    rating: "(4.0)",
    img: vendor7,
  },
  {
    id: 8,
    name: "Mrs. Smith's Pie",
    year: "2021",
    products: 24,
    rating: "(4.0)",
    img: vendor8,
  },
  {
    id: 9,
    name: "Dove Promises",
    year: "2019",
    products: 88,
    rating: "(4.0)",
    img: vendor9,
  },
  {
    id: 10,
    name: "Mrs. Dash",
    year: "2020",
    products: 61,
    rating: "(4.0)",
    img: vendor10,
  },
  {
    id: 11,
    name: "Lindt Grocery A1",
    year: "2017",
    products: 39,
    rating: "(4.0)",
    img: vendor11,
  },
  {
    id: 12,
    name: "Snyder's-Lance",
    year: "2018",
    products: 27,
    rating: "(4.0)",
    img: vendor12,
  },
  {
    id: 13,
    name: "Dreyer's/Edy's",
    year: "2020",
    products: 44,
    rating: "(4.0)",
    img: vendor13,
  },
  {
    id: 14,
    name: "Wonderful",
    year: "2016",
    products: 53,
    rating: "(4.0)",
    img: vendor14,
  },
  {
    id: 15,
    name: "Almonds",
    year: "2019",
    products: 31,
    rating: "(4.0)",
    img: vendor15,
  },
  {
    id: 16,
    name: "Pistachios",
    year: "2021",
    products: 25,
    rating: "(4.0)",
    img: vendor1,
  }, // reuse
];

const VendorPage = () => {
  return (
    <>
      <div className="main-coontainer">
        <h1 className="heading m-0">Vendors List</h1>
        <div className="main-search-content">
          <div className="serach-content">
            <input
              type="text"
              placeholder="Search Vendor (by name or ID)."/>
            <div className="search">
              <img src={searchicon} alt="" />
            </div>
          </div>
        </div>
        <div className="deals-top deals-top-2">
          <div className="deals-top-left">
            We have <span style={{ color: "var(--color-text)" }}>780 </span>{" "}
            vendors now
          </div>
          <div className="deals-top-right">
            <div class="wrapper-right">
              <img src={dealsicon} alt="icon" />
              <select>
                <option>Show:50</option>
                <option>50</option>
                <option>100</option>
                <option>150</option>
                <option>200</option>
                <option>All</option>
              </select>
            </div>
            <div class="wrapper-right">
              <img src={dealsicon} alt="icon" />
              <select>
                <option>Store by: Feauture:50</option>
                <option>Featured</option>
                <option>Price:Low To High</option>
                <option>Price:High To Low</option>
                <option>Realse Date</option>
                <option>Avg Rating</option>
              </select>
            </div>
          </div>
        </div>

        <div className="store-container">
          {stores.map((store, index) => (
            <div className="store-card" key={store.id}>
              {/* Badge for top 4 */}
              {index < 4 && store.badge && (
                <div
                  className={`store-badge ${
                    store.badge.toLowerCase() === "mail" ? "mail" : "preferred"
                  }`}
                >
                  {store.badge}
                </div>
              )}

              <div className="store-logo">
                <img src={store.img} alt={store.name} />
              </div>

              <div className="store-middle">
                <div className="store-middle-left">
                  <p className="store-since m-0">Since {store.year}</p>
                  <h3 className="store-name"><a href="">{store.name}</a></h3>

                  <div className="card-content-middle card-content-middle-2">
                    {[...Array(5)].map((_, i) => (
                      <span className="star-image star-image-2" key={i}>
                        <img src={icon4} alt="star" />
                      </span>
                    ))}
                    <div className="card-content-middle-text card-content-middle-text-2">
                      {store.rating}
                    </div>
                  </div>
                </div>
                <div className="store-product-box">
                  {store.products} products
                </div>
              </div>
              <div className="store-top">
                <div className="store-top-icon">
                  <img src={icon1} alt="location" />
                  <span className="store-span">Address:</span>
                  5171 W Campbell Ave undefined Kent, Utah 53127 United States
                </div>

              <div className="store-top-icon">
                <img src={icon2} alt="contact" />
                <span className="store-span">Call Us:</span>(+91) - 540-025-124553
              </div>

              </div>
              <button className="main-button">
                <div className="button">View Store</div>
                <div className="button-arrow">
                  <img src={righticon} alt="Right Arrow" />
                </div>
              </button>
            </div>
          ))}
      </div>

         <BannerPage>
        <div className="main-wrapper-contain">
          <div className=" main-slider-top-text">
            <p className="slider-top-text2">
              Stay home & get your daily
             needs from our shop
            </p>
            <p className="slider-middle-text-2">
              Start You'r Daily Shopping with <span>Nest Mart</span>
            </p>
            <div className="slider-down3">
              <div className="slider-down-left">
                <div className="slider-icon">
                  <img src={shareicon} alt="" />
                </div>
                <div className="email-text">
                  <input type="text" placeholder="Your email address" />
                </div>
              </div>
              <div className="slider-text">Subscribe</div>
            </div>
          </div>
          <div className="man-image">
            <img src={banner13} alt="" />
          </div>
        </div>
      </BannerPage>
      </div>
    </>
  );
};

export default VendorPage;
