import React from "react";
import "../CSS/DealsPage.css";
import BannerPage from "./BannerPage";
import shareicon from "../assets/Image/SVG/share-1-svgrepo-com.svg";
import banner9 from "../assets/Image/PNG/banner-9.png";
import dealsicon from "../assets/Image/SVG/dashboard-svgrepo-com.svg";
import righticon from "../assets/Image/SVG/right-arrow-svgrepo-com (5).svg";
import p1a from "../assets/Image/JPG/product-1-1.jpg";
import p1b from "../assets/Image/JPG/product-1-2.jpg";
import p2a from "../assets/Image/JPG/product-2-1.jpg";
import p2b from "../assets/Image/JPG/product-2-2.jpg";
import p3a from "../assets/Image/JPG/product-3-1.jpg";
import p3b from "../assets/Image/JPG/product-3-2.jpg";
import p4a from "../assets/Image/JPG/product-4-1.jpg";
import p4b from "../assets/Image/JPG/product-4-2.jpg";
import p5a from "../assets/Image/JPG/product-5-1.jpg";
import p5b from "../assets/Image/JPG/product-5-2.jpg";
import p6a from "../assets/Image/JPG/product-6-1.jpg";
import p6b from "../assets/Image/JPG/product-6-2.jpg";
import p7a from "../assets/Image/JPG/product-7-1.jpg";
import p7b from "../assets/Image/JPG/product-7-2.jpg";
import p8a from "../assets/Image/JPG/product-8-1.jpg";
import p8b from "../assets/Image/JPG/product-8-2.jpg";
import p9a from "../assets/Image/JPG/product-9-1.jpg";
import p9b from "../assets/Image/JPG/product-9-2.jpg";
import p10a from "../assets/Image/JPG/product-10-1.jpg";
import p10b from "../assets/Image/JPG/product-10-2.jpg";
import icon1 from "../assets/Image/SVG/heart-svgrepo-com (6).svg";
import icon2 from "../assets/Image/SVG/shuffle-2-svgrepo-com.svg";
import icon3 from "../assets/Image/SVG/eye-open-svgrepo-com (3).svg";
import icon4 from "../assets/Image/SVG/star-svgrepo-com (2).svg";
import icon5 from "../assets/Image/SVG/icon-cart.svg";
import bannerimage1 from "../assets/Image/PNG/banner-5.png";
import bannerimage2 from "../assets/Image/PNG/banner-6.png";
import bannerimage3 from "../assets/Image/PNG/banner-7.png";
import bannerimage4 from "../assets/Image/PNG/banner-8.png";
import category1 from "../assets/Image/SVG/category-1.svg";
import category2 from "../assets/Image/SVG/category-2.svg";
import category3 from "../assets/Image/SVG/category-3.svg";
import category4 from "../assets/Image/SVG/category-5.svg";
import category5 from "../assets/Image/SVG/category-7.svg";
import banner13 from "../assets/Image/PNG/banner-13.png";
import thumbnail1 from "../assets/Image/JPG/thumbnail-1.jpg";
import thumbnail2 from "../assets/Image/JPG/thumbnail-2.jpg";
import thumbnail3 from "../assets/Image/JPG/thumbnail-3.jpg";

const cardData = [
  {
    frontImg: p1a,
    backImg: p1b,
    title: "Snack",
    text: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: "(4.0)",
    author: "NestFood",
    price: "$28.85",
    oldPrice: "$32.8",
    tag: "Hot",
  },
  {
    frontImg: p2a,
    backImg: p2b,
    title: "Hodo Foods",
    text: "All Natural Italian-Style Chicken Meatballs",
    rating: "(3.5)",
    author: "Stouffer",
    price: "$52.85",
    oldPrice: "$55.8",
    tag: "Sale",
  },
  {
    frontImg: p3a,
    backImg: p3b,
    title: "Snack",
    text: "Angie's Boomchickapop Sweets & Salty Kettle Corn",
    rating: "(4.0)",
    author: "StarKist",
    price: "$48.85",
    oldPrice: "$52.8",
    tag: "New",
  },
  {
    frontImg: p4a,
    backImg: p4b,
    title: "Vegetables",
    text: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    rating: "(4.0)",
    author: "NestFood",
    price: "$17.85",
    oldPrice: "$19.8",
  },
  {
    frontImg: p5a,
    backImg: p5b,
    title: "Pet Foods",
    text: "Blue Diamond Almonds Lightly Salted Vegetables",
    rating: "(4.0)",
    author: "NestFood",
    price: "$23.85",
    oldPrice: "$25.8",
    tag: "-14%",
  },
  {
    frontImg: p6a,
    backImg: p6b,
    title: "Hodo Foods",
    text: "Chobani Complete Vanilla Greek Yogurt",
    rating: "(4.0)",
    author: "NestFood",
    price: "$54.85",
    oldPrice: "$55.8",
  },
  {
    frontImg: p7a,
    backImg: p7b,
    title: "Meats",
    text: "Canda Dry Ginger Ale - 2 L Bottle - 200ml - 400g",
    rating: "(4.0)",
    author: "NestFood",
    price: "$32.85",
    oldPrice: "$33.8",
  },
  {
    frontImg: p8a,
    backImg: p8b,
    title: "Snack",
    text: "Encore Seadfoods Stuffed Alaskan Salmon",
    rating: "(4.0)",
    author: "NestFood",
    price: "$35.85",
    oldPrice: "$37.8",
    tag: "Sale",
  },
  {
    frontImg: p9a,
    backImg: p9b,
    title: "Coffes",
    text: "Gorton's Beer Battered Fish Fillets with Soft Paper",
    rating: "(4.0)",
    author: "OldElPaso",
    price: "$23.85",
    oldPrice: "$25.8",
    tag: "Hot",
  },
  {
    frontImg: p10a,
    backImg: p10b,
    title: "Cream",
    text: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
    rating: "(4.0)",
    author: "Tyson",
    price: "$23.85",
    oldPrice: "$24.8",
  },
];
const heroData = [
  {
    banner: bannerimage1,
    days: "00",
    hours: "00",
    mins: "00",
    secs: "00",
    titleLine1: "Seeds of Change",
    titleLine2: "Organic Quinoa, Brown",
    rating: "(4.0)",
    author: "NestFood",
    price: "$17.85",
    oldPrice: "$19.8",
  },
  {
    banner: bannerimage2,
    days: "261",
    hours: "04",
    mins: "27",
    secs: "00",
    titleLine1: "Perdue Simply Smart",
    titleLine2: "Organics Gluten",
    rating: "(4.0)",
    author: "NestFood",
    price: "$17.85",
    oldPrice: "$19.8",
  },
  {
    banner: bannerimage3,
    days: "561",
    hours: "04",
    mins: "26",
    secs: "00",
    titleLine1: "Signature Wood-Fired",
    titleLine2: "Mushroom",
    rating: "(4.0)",
    author: "NestFood",
    price: "$17.85",
    oldPrice: "$19.8",
  },
  {
    banner: bannerimage4,
    days: "00",
    hours: "00",
    mins: "00",
    secs: "00",
    titleLine1: "Simply Lemonade with",
    titleLine2: "Raspberry Juice",
    rating: "(4.0)",
    author: "NestFood",
    price: "$17.85",
    oldPrice: "$19.8",
  },
];
const gadgetsData = [
  {
    title: "New products",
    items: [
      {
        img: thumbnail1,
        name: "Chen Cardigan",

        price: "$32.85",
      },
      {
        img: thumbnail2,
        name: "Chen Sweater",
        price: "$32.85",
      },
      {
        img: thumbnail3,
        name: "Colorful Jacket",
        price: "$32.85",
      },
    ],
  },
];

const DealsPage = () => {
  return (
    <>
      <BannerPage>
        <div className="banner-section d-flex align-content-center justify-content-between">
          <div className="left-content">
            <h3>Snack</h3>
            <ul className="d-flex gap-4 list-unstyled">
              <li>Home</li>
              <li>shop</li>
              <li>Snack</li>
            </ul>
          </div>
          <div className="right-content">
            <ul className="list-unstyled d-flex gap-3">
              <li className="right-li">
                <a href="">Cabbage</a>
              </li>
              <li className="right-li2">
                <a href="">Broccoli</a>
              </li>
              <li className="right-li">
                <a href="">Artichoke</a>
              </li>
              <li className="right-li">
                <a href="">Celery</a>
              </li>
              <li className="right-li">
                <a href="">Spinach</a>
              </li>
            </ul>
          </div>
        </div>
      </BannerPage>

      <div className="deals-container">
        <div className="deals-left">
          <div className="deals-top">
            <div className="deals-top-left">
              We found <span style={{ color: "var(--color-text)" }}>29</span>{" "}
              items for you!
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
          <div className="main-card-container">
            <div className=" card-top-3">
              {cardData.map((item, index) => (
                <div className="card-section card-section2" key={index}>
                  <div className="main-image">
                    <div className="image-front">
                      <img src={item.frontImg} alt="" />
                    </div>
                    <div className="image-back">
                      <img src={item.backImg} alt="" />
                    </div>
                  </div>

                  <div className="side-bar">
                    <div className="side-bar-section">
                      <div className="side-bar-image">
                        <img src={icon1} alt="" />
                      </div>
                      <div className="side-bar-image">
                        <img src={icon2} alt="" />
                      </div>
                      <div className="side-bar-image">
                        <img src={icon3} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="card-main-content">
                    <div className="card-content">
                      <div className="card-content-top">{item.title}</div>
                      <div className="card-content-text">
                        <a href="#">{item.text}</a>
                      </div>
                      <div className="card-content-middle">
                        {[...Array(5)].map((_, i) => (
                          <span className="star-image" key={i}>
                            <img src={icon4} alt="" />
                          </span>
                        ))}
                        <div className="card-content-middle-text">
                          {item.rating}
                        </div>
                      </div>
                      <div className="card-content-down">
                        By <span>{item.author}</span>
                      </div>
                    </div>

                    {item.tag && (
                      <div
                        className={`card-text-2 ${
                          item.tag === "Hot"
                            ? "card-text-2-1"
                            : item.tag === "Sale"
                            ? "card-text-2-2"
                            : item.tag === "New"
                            ? "card-text-2-3"
                            : item.tag.includes("%")
                            ? "card-text-2-5"
                            : ""
                        }`}
                      >
                        {item.tag}
                      </div>
                    )}
                  </div>
                  <div className="main-card-down main-card-down-2">
                    <div className="price-text">
                      {item.price} <span>{item.oldPrice}</span>
                    </div>
                    <button className="card-button">
                      <img src={icon5} alt="" />
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-container">
            <div className="nav-section">
              <div className="nav-top-text">Deals Of The Day</div>
              <div className="main-nav-list">
                <li className="nav-list-2">All Deals</li>
              </div>
            </div>
            <div className="hero-main-content">
              {heroData.map((item, index) => (
                <div className="hero-content" key={index}>
                  <div className="hero-banner">
                    <img src={item.banner} alt={item.titleLine1} />
                  </div>
                  <div className="main-wrapper-2">
                    <div className="wrapper-top-card-2">
                      <div className="top-card-2">
                        <div className="card-top-text">{item.days}</div>
                        <div className="card-down-text">Days</div>
                      </div>
                      <div className="top-card-2">
                        <div className="card-top-text">{item.hours}</div>
                        <div className="card-down-text">Hours</div>
                      </div>
                      <div className="top-card-2">
                        <div className="card-top-text">{item.mins}</div>
                        <div className="card-down-text">Mins</div>
                      </div>
                      <div className="top-card-2">
                        <div className="card-top-text">{item.secs}</div>
                        <div className="card-down-text">Sec</div>
                      </div>
                    </div>
                    <div className="wrapper-down-card-2 ">
                      <div className="card-content-text">
                        <div>{item.titleLine1}</div>
                        <div>{item.titleLine2}</div>
                      </div>
                      <div className="card-content-middle">
                        {[...Array(5)].map((_, i) => (
                          <span className="star-image" key={i}>
                            <img src={icon4} alt="star" />
                          </span>
                        ))}
                        <div className="card-content-middle-text">
                          {item.rating}
                        </div>
                      </div>
                      <div className="card-content-down">
                        By <span>{item.author}</span>
                      </div>
                      <div className="main-card-down">
                        <div className="price-text">
                          {item.price} <span>{item.oldPrice}</span>
                        </div>
                        <div className="card-button">
                          <img src={icon5} alt="" />
                          Add
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="deals-right">
          <div className="sidebar-card">
            <div class="fruit-text">Category</div>
            <div className="sidebar-contain">
              <div className="siderbar-top">
                <div className="sidebar-top-right">
                  <span className="siderbar-top-img">
                    <img src={category1} alt="" />
                  </span>
                  <span>Milks & Dairies</span>
                </div>
                <span className="circle">30</span>
              </div>
              <div className="siderbar-top">
                <div className="sidebar-top-right">
                  <span className="siderbar-top-img">
                    <img src={category2} alt="" />
                  </span>
                  <span>Clothing</span>
                </div>
                <span className="circle">30</span>
              </div>
              <div className="siderbar-top">
                <div className="sidebar-top-right">
                  <span className="siderbar-top-img">
                    <img src={category3} alt="" />
                  </span>
                  <span>Pet Foods</span>
                </div>
                <span className="circle">30</span>
              </div>
              <div className="siderbar-top">
                <div className="sidebar-top-right">
                  <span className="siderbar-top-img">
                    <img src={category4} alt="" />
                  </span>
                  <span>Baking material</span>
                </div>
                <span className="circle">30</span>
              </div>
              <div className="siderbar-top">
                <div className="sidebar-top-right">
                  <span className="siderbar-top-img">
                    <img src={category5} alt="" />
                  </span>
                  <span>Fresh Fruit</span>
                </div>
                <span className="circle">30</span>
              </div>
            </div>
          </div>
          <div className="filter-card">
            <div class="fruit-text">Fill by Price</div>

            <div className="range-container">
              <div className="range-line"></div>
              <div className="range-track">
                <span className="thumb left"></span>
                <span className="thumb right"></span>
              </div>
              <div className="price-values">
                <p>
                  From: <span className="price">$500</span>
                </p>
                <p>
                  To: <span className="price">$1,000</span>
                </p>
              </div>
            </div>

            <div className="filter-section">
              <h3>Color</h3>
              <label>
                <input type="checkbox" /> Red (56)
              </label>
              <label>
                <input type="checkbox" /> Green (78)
              </label>
              <label>
                <input type="checkbox" /> Blue (54)
              </label>
            </div>

            <div className="filter-section">
              <h3>Item Condition</h3>
              <label>
                <input type="checkbox" /> New (1506)
              </label>
              <label>
                <input type="checkbox" /> Refurbished (27)
              </label>
              <label>
                <input type="checkbox" /> Used (45)
              </label>
            </div>
            <div className="filter-down">
              <button className="filter-btn">Fillter</button>
              <span className="filter-image">
                <img src={banner13} alt="" />
              </span>
            </div>
          </div>

          <div className="gadget-container">
            {gadgetsData.map((section, index) => (
              <div className="gadget-right" key={index}>
                <div className="gadget-heading">{section.title}</div>

                {section.items.map((item, i) => (
                  <div className="gadget-card" key={i}>
                    <div className="gadget-image">
                      <img src={item.img} alt={item.name} />
                    </div>

                    <div className="gadget-info">
                      <div className="gadget-name">
                        <a href="#">{item.name}</a>
                      </div>

                      <div className="gadget-stars">
                        {[...Array(5)].map((_, starIndex) => (
                          <span className="gadget-star" key={starIndex}>
                            <img src={icon4} alt="star" />
                          </span>
                        ))}
                      </div>

                      <div className="gadget-price">{item.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="offer-banner">
            <div className="offer-banner-content">
              <p className="offer-subtitle">Organic</p>
              <h2 className="offer-title">
                Save <span>17%</span> on <span>Organic</span> Juice
              </h2>
            </div>
          </div>
        </div>
      </div>

      <BannerPage>
        <div className="main-wrapper-contain">
          <div className=" main-slider-top-text">
            <p className="slider-top-text2">
              Stay home & get your daily needs from our shop
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
          <div className="man-image-2">
            <img src={banner9} alt="" />
          </div>
        </div>
      </BannerPage>
    </>
  );
};

export default DealsPage;
