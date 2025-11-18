import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/HomePage.css";
import BannerPage from "./BannerPage";
import banner9 from "../assets/Image/PNG/banner-9.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../assets/Image/PNG/slider-4.png";
import slider2 from "../assets/Image/PNG/slider-3.png";
import shareicon from "../assets/Image/SVG/share-1-svgrepo-com.svg";
import righticon from "../assets/Image/SVG/right-arrow-svgrepo-com (5).svg";
import lefticon from "../assets/Image/SVG/arrow-arrow-left-left-svgrepo-com.svg";
import banner4 from "../assets/Image/PNG/banner-4.png";
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
import thumbnail1 from "../assets/Image/JPG/thumbnail-1.jpg";
import thumbnail2 from "../assets/Image/JPG/thumbnail-2.jpg";
import thumbnail3 from "../assets/Image/JPG/thumbnail-3.jpg";
import thumbnail4 from "../assets/Image/JPG/thumbnail-4.jpg";
import thumbnail5 from "../assets/Image/JPG/thumbnail-5.jpg";
import thumbnail6 from "../assets/Image/JPG/thumbnail-6.jpg";
import thumbnail7 from "../assets/Image/JPG/thumbnail-7.jpg";
import thumbnail8 from "../assets/Image/JPG/thumbnail-8.jpg";
import thumbnail9 from "../assets/Image/JPG/thumbnail-9.jpg";
import thumbnail10 from "../assets/Image/JPG/thumbnail-10.jpg";
import thumbnail11 from "../assets/Image/JPG/thumbnail-11.jpg";
import thumbnail12 from "../assets/Image/JPG/thumbnail-12.jpg";
import category1 from "../assets/Image/SVG/category-1.svg";
import category2 from "../assets/Image/SVG/category-2.svg";
import category3 from "../assets/Image/SVG/category-3.svg";
import category4 from "../assets/Image/SVG/category-5.svg";
import category5 from "../assets/Image/SVG/category-7.svg";
import category6 from "../assets/Image/SVG/category-8.svg";
import category7 from "../assets/Image/SVG/category-10.svg";
import category8 from "../assets/Image/SVG/category-11.svg";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { addtocart, increase } from "../Feature/userSlice";

const productData = [
  {
    icon: category1,
    title: "Milks and",
    subtitle: "Dairies",
  },
  {
    icon: category2,
    title: "Wines &",
    subtitle: "Alcohol",
  },
  {
    icon: category3,
    title: "Cloth &",
    subtitle: "Beauty",
  },
  {
    icon: category4,
    title: "Vegetables",
    subtitle: "& tubers",
  },
  {
    icon: category5,
    title: "Fresh",
    subtitle: "Seafood",
  },
  {
    icon: category6,
    title: "Milks and",
    subtitle: "Dairies",
  },
  {
    icon: category7,
    title: "Fast Food",
    subtitle: "",
  },
  {
    icon: category8,
    title: "Milks and",
    subtitle: "Dairies",
  },
];

const cardData = [
  {
    frontImg: p1a,
    backImg: p1b,
    title: "Snack",
    text: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: "(4.0)",
    author: "NestFood",
    price: 28.85,
    oldPrice: 32.8,
    tag: "Hot",
    id: 1,
  },
  {
    frontImg: p2a,
    backImg: p2b,
    title: "Hodo Foods",
    text: "All Natural Italian-Style Chicken Meatballs",
    rating: "(3.5)",
    author: "Stouffer",
    price: 52.85,
    oldPrice: 55.8,
    tag: "Sale",
    id: 2,
  },
  {
    frontImg: p3a,
    backImg: p3b,
    title: "Snack",
    text: "Angie's Boomchickapop Sweets & Salty Kettle Corn",
    rating: "(4.0)",
    author: "StarKist",
    price: 48.85,
    oldPrice: 52.8,
    tag: "New",
    id: 3,
  },
  {
    frontImg: p4a,
    backImg: p4b,
    title: "Vegetables",
    text: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    rating: "(4.0)",
    author: "NestFood",
    price: 17.85,
    oldPrice: 19.8,
    id: 4,
  },
  {
    frontImg: p5a,
    backImg: p5b,
    title: "Pet Foods",
    text: "Blue Diamond Almonds Lightly Salted Vegetables",
    rating: "(4.0)",
    author: "NestFood",
    price: 23.85,
    oldPrice: 25.8,
    tag: "-14%",
    id: 5,
  },
  {
    frontImg: p6a,
    backImg: p6b,
    title: "Hodo Foods",
    text: "Chobani Complete Vanilla Greek Yogurt",
    rating: "(4.0)",
    author: "NestFood",
    price: 54.85,
    oldPrice: 55.8,
    id: 6,
  },
  {
    frontImg: p7a,
    backImg: p7b,
    title: "Meats",
    text: "Canda Dry Ginger Ale - 2 L Bottle - 200ml - 400g",
    rating: "(4.0)",
    author: "NestFood",
    price: 32.85,
    oldPrice: 33.8,
    id: 7,
  },
  {
    frontImg: p8a,
    backImg: p8b,
    title: "Snack",
    text: "Encore Seadfoods Stuffed Alaskan Salmon",
    rating: "(4.0)",
    author: "NestFood",
    price: 35.85,
    oldPrice: 37.8,
    tag: "Sale",
    id: 8,
  },
  {
    frontImg: p9a,
    backImg: p9b,
    title: "Coffes",
    text: "Gorton's Beer Battered Fish Fillets with Soft Paper",
    rating: "(4.0)",
    author: "OldElPaso",
    price: 23.85,
    oldPrice: 25.8,
    tag: "Hot",
    id: 9,
  },
  {
    frontImg: p10a,
    backImg: p10b,
    title: "Cream",
    text: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
    rating: "(4.0)",
    author: "Tyson",
    price: 23.85,
    oldPrice: 24.8,
    id: 10,
  },
];

const heroData = [
  {
    banner: bannerimage1,
    days: "00",
    hours: "00",
    mins: "00",
    secs: "00",
    titleLine1: "Foster Farms Takeout Crispy",
    titleLine2: "Classic Bufflao Wings",
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
    titleLine1: "Foster Farms Takeout Crispy",
    titleLine2: "Classic Bufflao Wings",
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
    titleLine1: "Foster Farms Takeout Crispy",
    titleLine2: "Classic Bufflao Wings",
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
    titleLine1: "Foster Farms Takeout Crispy",
    titleLine2: "Classic Bufflao Wings",
    rating: "(4.0)",
    author: "NestFood",
    price: "$17.85",
    oldPrice: "$19.8",
  },
];

const fruitData = [
  {
    title: "Top Selling",
    items: [
      {
        img: thumbnail1,
        name: "Nestle Original Coffee-Mate Coffee Creamer",
        rating: 4.0,
        price: "$32.85",
        oldPrice: "$33.8",
      },
      {
        img: thumbnail2,
        name: "Nestle Original Coffee-Mate Coffee Creamer",
        rating: 4.0,
        price: "$32.85",
        oldPrice: "$33.8",
      },
      {
        img: thumbnail3,
        name: "Nestle Original Coffee-Mate Coffee Creamer",
        rating: 4.0,
        price: "$32.85",
        oldPrice: "$33.8",
      },
    ],
  },
  {
    title: "Trending Products",
    items: [
      {
        img: thumbnail4,
        name: "Organic Cage-Free Grade A Large Brown Eggs",
        rating: 4.0,
        price: "$32.85",
        oldPrice: "$33.8",
      },
      {
        img: thumbnail5,
        name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        rating: 4.0,
        price: "$32.85",
        oldPrice: "$33.8",
      },
      {
        img: thumbnail6,
        name: "Naturally Flavored Cinnamon Vanilla Light Roast Coffee",
        rating: 4.0,
        price: "$32.85",
        oldPrice: "$33.8",
      },
    ],
  },
  {
    title: "Recently Added",
    items: [
      {
        img: thumbnail7,
        name: "Pepperidge Farm Farmhouse Hearty White Bread",
        rating: 4.0,
        price: "$32.85",
        oldPrice: "$33.8",
      },
      {
        img: thumbnail8,
        name: "Organic Frozen Triple Berry Blend",
        rating: 4.0,
        price: "$32.85",
        oldPrice: "$33.8",
      },
      {
        img: thumbnail9,
        name: "Oroweat Country Buttermilk Bread",
        rating: 4.0,
        price: "$32.85",
        oldPrice: "$33.8",
      },
    ],
  },
  {
    title: "Top Rated",
    items: [
      {
        img: thumbnail10,
        name: "Foster Farms Takeout Crispy Classic Bufflao Wings",
        rating: 4.0,
        price: "$32.85",
        oldPrice: "$33.8",
      },
      {
        img: thumbnail11,
        name: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
        rating: 4.0,
        price: "$32.85",
        oldPrice: "$33.8",
      },
      {
        img: thumbnail12,
        name: "All Natural Italian-Style Chicken Meatballs",
        rating: 4.0,
        price: "$32.85",
        oldPrice: "$33.8",
      },
    ],
  },
];

const HomePage = () => {
  const data = useSelector((state) => state.users.item);
  const [initialSlides, setInitialSlides] = useState(4);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;

      if (width < 576) setInitialSlides(1);
      else if (width < 992) setInitialSlides(2);
      else if (width < 1200) setInitialSlides(3);
      else setInitialSlides(4);
    };

    updateSlides();

    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, [4]);

  const dispatch = useDispatch();
  let sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: initialSlides,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const addToCart = (product) => {
    const existsproduct = data.find((item) => item.id === product.id);
    if (existsproduct) {
      dispatch(increase(product.id));
    } else {
      const updateproduct = { ...product, quantity: 1 };
      dispatch(addtocart(updateproduct));
    }
  };

  return (
    <>
      <div className="main-banner">
        <div className="middle-section">
          {/* Left Side Slider */}
          <div className="slider">
            <Carousel interval={4000} controls indicators>
              {/* Slide 1 */}
              <Carousel.Item>
                <img className="d-block w-100" src={slider1} alt="Snacks Box" />
                <div className="slider-section">
                  <div className="slider-top-text">Snacks box daily save</div>
                  <div className="slider-middle-text">
                    Sign up for the daily newsletter
                  </div>
                  <div className="slider-down">
                    <div className="slider-down-left">
                      <div className="slider-icon">
                        <img src={shareicon} alt="Share" />
                      </div>
                      <div className="email-text">
                        <input
                          type="text"
                          placeholder="Your email address"
                          aria-label="Email Address"
                        />
                      </div>
                    </div>
                    <div className="slider-text">Subscribe</div>
                  </div>
                </div>
              </Carousel.Item>

              {/* Slide 2 */}
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slider2}
                  alt="Pure Coffee"
                />
                <div className="slider-section">
                  <div className="slider-top-text">
                    Pure Coffee Big discount
                  </div>
                  <div className="slider-middle-text">
                    Save up to 50% off on your first order
                  </div>
                  <div className="slider-down">
                    <div className="slider-down-left">
                      <div className="slider-icon">
                        <img src={shareicon} alt="Share" />
                      </div>
                      <div className="email-text">
                        <input
                          type="text"
                          placeholder="Your email address"
                          aria-label="Email Address"
                        />
                      </div>
                    </div>
                    <div className="slider-text">Subscribe</div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>

          {/* Right Side Banner */}
          <div className="middle-banner-bg">
            <div className="middle-banner-section">
              <div className="middle-banner-section-text">
                Delivery to <span>your home</span>
              </div>
              <button className="main-button">
                <div className="button">Shop Now</div>
                <div className="button-arrow">
                  <img src={righticon} alt="Right Arrow" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* multiple-banner start  */}
      <div className="multiple-banner">
        <div className="banner-right-bg banner-right-bg-1">
          <div className="banner-right-content">
            <div className="banner-right-text">
              Everyday Fresh &<div>Clean with Our</div>
              <div>Products</div>
            </div>
            <button className="main-button">
              <div className="button">Shop Now</div>
              <div className="button-arrow">
                <img src={righticon} alt="right icon" />
              </div>
            </button>
          </div>
        </div>
        <div className=" banner-right-bg banner-right-bg-2">
          <div className="banner-right-content">
            <div className="banner-right-text">
              Make your Breakfast
              <div> Healthy and Easy</div>
            </div>
            <button className="main-button">
              <div className="button">Shop Now</div>
              <div className="button-arrow">
                <img src={righticon} alt="right icon" />
              </div>
            </button>
          </div>
        </div>
        <div className=" banner-right-bg banner-right-bg-3">
          <div className="banner-right-content">
            <div className="banner-right-text">
              The best Organic
              <div> Products Online</div>
            </div>
            <button className="main-button">
              <div className="button">Shop Now</div>
              <div className="button-arrow">
                <img src={righticon} alt="right icon" />
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* multiple-banner end  */}

      <div className="card-container">
        <div className="nav-section">
          <div className="nav-top-text">Popular Products</div>
          <div className="main-nav-list">
            <li className="nav-list">All</li>
            <li className="nav-list">Milks & Dairies</li>
            <li className="nav-list">Coffee & Teas</li>
            <li className="nav-list">Pet Foods</li>
            <li className="nav-list">Meats</li>
            <li className="nav-list">Vegetables</li>
            <li className="nav-list">Fruits</li>
          </div>
        </div>

        {/* main-card-container start  */}
        <div className="main-card-container">
          <div className="card-top">
            {cardData.map((value, index) => (
              <div className="card-section" key={index}>
                <div className="main-image">
                  <div className="image-front">
                    <img src={value.frontImg} alt="" />
                  </div>
                  <div className="image-back">
                    <img src={value.backImg} alt="" />
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
                    <div className="card-content-top">{value.title}</div>
                    <div className="card-content-text">
                      <a href="#">{value.text}</a>
                    </div>
                    <div className="card-content-middle">
                      {[...Array(5)].map((_, i) => (
                        <span className="star-image" key={i}>
                          <img src={icon4} alt="" />
                        </span>
                      ))}
                      <div className="card-content-middle-text">
                        {value.rating}
                      </div>
                    </div>
                    <div className="card-content-down">
                      By <span>{value.author}</span>
                    </div>
                  </div>
                  {value.tag && (
                    <div
                      className={`card-text-2 ${
                        value.tag === "Hot"
                          ? "card-text-2-1"
                          : value.tag === "Sale"
                          ? "card-text-2-2"
                          : value.tag === "New"
                          ? "card-text-2-3"
                          : value.tag.includes("%")
                          ? "card-text-2-5"
                          : ""
                      }`}
                    >
                      {value.tag}
                    </div>
                  )}
                </div>
                <div className="main-card-down">
                  <div className="price-text">
                    ${value.price} <span>{value.oldPrice}</span>
                  </div>
                  <button
                    className="card-button"
                    onClick={() => addToCart(value)}
                  >
                    <img src={icon5} alt="" />
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* main-card-container end  */}
      </div>
      <div className="nav-section">
        <div className="nav-top-text">Daily Best Sells</div>
        <div className="main-nav-list">
          <li className="nav-list">Featured</li>
          <li className="nav-list">Popular</li>
          <li className="nav-list">News added</li>
        </div>
      </div>

      {/* middle-section-container start  */}

      <div className="middle-section-container">
        <div className="middle-content-bg">
          <img src={banner4} alt="" />

          <div className="hero-main-section">
            <div className="hero-section">
              <div className="hero-text">Bring naure into your home</div>
              <button className="main-button">
                <div className="button">Shop Now</div>
                <div className="button-arrow">
                  <img src={righticon} alt="" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {cardData.map((item, index) => (
              <div className="card-section-2" key={index}>
                <div className="main-image">
                  <div className="image-front image-font-2">
                    <img src={item.frontImg} alt={item.title} />
                  </div>
                  <div className="image-back image-back-2">
                    <img src={item.backImg} alt={item.title} />
                  </div>
                </div>

                <div className="side-bar">
                  <div className="side-bar-section">
                    <div className="side-bar-image">
                      <img src={icon1} alt="heart" />
                    </div>
                    <div className="side-bar-image">
                      <img src={icon2} alt="shuffle" />
                    </div>
                    <div className="side-bar-image">
                      <img src={icon3} alt="eye" />
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
                  </div>

                  <div className="price-text">
                    ${item.price} <span>{item.oldPrice}</span>
                  </div>

                  <div className="main-border">
                    <div className="card-border">
                      <div className="border-1"></div>
                    </div>
                    Sold:90/120
                  </div>

                  <button className="card-button2">
                    <img src={icon5} alt="" />
                    Add To Cart
                  </button>

                  {item.tag && (
                    <div className={`card-text-2 card-text-2-${index}`}>
                      {item.tag}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* middle-section-container end  */}

      {/* hero-container start  */}
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
              <div className="main-wrapper">
                <div className="wrapper-top-card">
                  <div className="top-card">
                    <div className="card-top-text">{item.days}</div>
                    <div className="card-down-text">Days</div>
                  </div>
                  <div className="top-card">
                    <div className="card-top-text">{item.hours}</div>
                    <div className="card-down-text">Hours</div>
                  </div>
                  <div className="top-card">
                    <div className="card-top-text">{item.mins}</div>
                    <div className="card-down-text">Mins</div>
                  </div>
                  <div className="top-card">
                    <div className="card-top-text">{item.secs}</div>
                    <div className="card-down-text">Sec</div>
                  </div>
                </div>
                <div className="wrapper-down-card">
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
      {/* hero-container end  */}

      {/* fruit-container start  */}
      <div className="fruit-container">
        {fruitData.map((section, index) => (
          <div className="fruit-right" key={index}>
            <div className="fruit-text">{section.title}</div>
            {section.items.map((item, i) => (
              <div className="fruit-content" key={i}>
                <div className="fruit-image">
                  <img src={item.img} alt={item.name} />
                </div>
                <div>
                  <div className="card-content-text-2">
                    <a href="#">{item.name}</a>
                  </div>
                  <div className="card-content-middle">
                    {[...Array(5)].map((_, starIndex) => (
                      <span className="star-image2" key={starIndex}>
                        <img src={icon4} alt="star" />
                      </span>
                    ))}
                    <div className="card-content-middle-text">
                      ({item.rating})
                    </div>
                  </div>
                  <div className="price-text2">
                    {item.price} <span>{item.oldPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* fruit-container end  */}

      <div className="product-container">
        <div className="product-nav">
          <div className="product-left-nav">
            <div className="nav-top-text">Shop by Categories</div>
            <div className="product-nav-text">All Categories</div>
          </div>
          <div className="produt-nav-image">
            <div className="product-icon">
              <img src={lefticon} alt="" />
            </div>
            <div className="product-icon">
              <img src={righticon} alt="" />
            </div>
          </div>
        </div>
        <div className="product-content">
          {productData.map((item, index) => (
            <div className="product-card" key={index}>
              <div className="product-card-icon">
                <img src={item.icon} alt={item.title} />
              </div>
              <div className="product-text">
                {item.title}
                {item.subtitle && <div>{item.subtitle}</div>}
              </div>
            </div>
          ))}
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

export default HomePage;
