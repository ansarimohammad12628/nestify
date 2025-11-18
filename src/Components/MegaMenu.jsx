import React, { useEffect, useRef, useState } from "react";
import "../CSS/MegaMenu.css";
import BannerPage from "./BannerPage";
import search from "../assets/Image/SVG/search-svgrepo-com (3).svg";
import shareicon from "../assets/Image/SVG/share-1-svgrepo-com.svg";
import banner9 from "../assets/Image/PNG/banner-9.png";
import product from "../assets/Image/JPG/product-2-1.jpg";
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
import category1 from "../assets/Image/SVG/category-1.svg";
import category2 from "../assets/Image/SVG/category-2.svg";
import category3 from "../assets/Image/SVG/category-3.svg";
import category4 from "../assets/Image/SVG/category-5.svg";
import category5 from "../assets/Image/SVG/category-7.svg";
import banner13 from "../assets/Image/PNG/banner-13.png";
import icon4 from "../assets/Image/SVG/star-svgrepo-com (2).svg";
import icon1 from "../assets/Image/SVG/heart-svgrepo-com (6).svg";
import icon2 from "../assets/Image/SVG/shuffle-2-svgrepo-com.svg";
import icon3 from "../assets/Image/SVG/eye-open-svgrepo-com (3).svg";
import icon5 from "../assets/Image/SVG/icon-cart.svg";
import p1a from "../assets/Image/JPG/product-1-1.jpg";
import p1b from "../assets/Image/JPG/product-1-2.jpg";
import p2a from "../assets/Image/JPG/product-2-1.jpg";
import p2b from "../assets/Image/JPG/product-2-2.jpg";
import p3a from "../assets/Image/JPG/product-3-1.jpg";
import p3b from "../assets/Image/JPG/product-3-2.jpg";
import p4a from "../assets/Image/JPG/product-4-1.jpg";
import p4b from "../assets/Image/JPG/product-4-2.jpg";
import Slider from "react-slick";

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
const tags = ["Description", "Additional", "Vendor", "Review(3)"];
const details = [
  { label: "Type Of Packing", value: "Bottle" },
  { label: "Color", value: "Green, Pink, Powder Blue, Purple" },
  { label: "Quantity Per Case", value: "100ml" },
  { label: "Ethyl Alcohol", value: "70%" },
  { label: "Piece In One", value: "Carton" },
];
const infoData = [
  {
    title: "Suggested Use",
    points: ["Refrigeration not necessary.", "Stir before serving"],
  },
  {
    title: "Other Ingredients",
    points: [
      "Organic raw pecans, organic raw cashews.",
      "This butter was produced using a LTG (Low Temperature Grinding) process.",
      "Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy.",
    ],
  },
  {
    title: "Warnings",
    points: ["Oil separation occurs naturally. May contain pieces of shell."],
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
];
const thumbnails = [
  thumbnail1,
  thumbnail2,
  thumbnail3,
  thumbnail4,
  thumbnail5,
  thumbnail6,
  thumbnail7,
  thumbnail8,
  thumbnail9,
  thumbnail10,
];
const MegaMenu = () => {
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
  let sliderRef = useRef(null);

    const settings = {
    dots: false,
    infinite: true,
    slidesToShow: initialSlides,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  const [quantity, setQuantity] = useState(1);
  const increase = () => setQuantity(quantity + 1);
  const decrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  return (
    <>
      <div className="main-megamenu-container">
        <div className="megamenu-left">
          <div className="megamenu-left-top">
            <div className="right-product">
              <div className="top-image">
                <div className="search-icon">
                  <img src={search} alt="search" />
                </div>
                <div className="top-image-pb">
                  <img src={product} alt="product" />
                </div>
              </div>
             
    <div className="slider-wrapper">
      <Slider {...settings}>
        {thumbnails.map((img, index) => (
          <div className="thumbnail-slide" key={index}>
            <div className="thumbnail-card">
              <img src={img} alt={`thumbnail-${index + 1}`} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
            </div>
            <div className="left-product">
              <span className="sale-tag">Sale Off</span>
              <h2 className="product-title">
                Seeds of Change Organic Quinoa, Brown
              </h2>
              <div className="gadget-stars">
                {[...Array(5)].map((_, starIndex) => (
                  <span className="gadget-star" key={starIndex}>
                    <img src={icon4} alt="star" />
                  </span>
                ))}
                (32 reviews)
              </div>
              <div className="price-section">
                <h3 className="current-price">$38</h3>
                <div className="price-content">
                  <span className="discount">26% Off</span>
                  <span className="old-price">$52</span>
                </div>
              </div>
              <p className="product-desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam rem officia, corrupti reiciendis minima nisi modi,
                quasi, odio minus dolore impedit fuga eum eligendi.
              </p>
              <div className="weight-section">
                <span className="span-top">Size/Weight:</span>
                <div className="wieght-text">
                  <span>50g</span>
                  <span>60g</span>
                  <span>80g</span>
                  <span>100g</span>
                </div>
              </div>
              <div>
                <div className="quantity-container">
                  <div className="quantity-box">
                    <span>{quantity}</span>
                    <div className="arrows">
                      <button onClick={increase}>&#9650;</button>
                      <button onClick={decrease}>&#9660;</button>
                    </div>
                  </div>
                  <button className="add-btn">
                    <img src={icon5} alt="" />
                    Add to cart
                  </button>
                  <button className="icon-btn">
                    <img src={icon1} alt="icon-btn" />
                  </button>
                  <button className="icon-btn">
                    <img src={icon2} alt="icon-btn" />
                  </button>
                </div>

                <div className="product-details">
                  <div className="details-column">
                    <p>
                      <span>Type:</span>{" "}
                      <span className="highlight">Organic</span>
                    </p>
                    <p>
                      <span>MFG:</span>{" "}
                      <span className="highlight">Jun 4, 2024</span>
                    </p>
                    <p>
                      <span>LIFE:</span>{" "}
                      <span className="highlight">70 days</span>
                    </p>
                  </div>
                  <div className="details-column">
                    <p>
                      <span>SKU:</span>{" "}
                      <span className="highlight">FWM15VKT</span>
                    </p>
                    <p>
                      <span>Tags:</span>{" "}
                      <span className="highlight">Snack, Organic, Brown</span>
                    </p>
                    <p>
                      <span>Stock:</span>{" "}
                      <span className="highlight">8 Items In Stock</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="megamenu-left-down">
            <div className="top-menu">
              <div className="tag-wrapper">
                <div className="tag-box">
                  <div className="tag-list">
                    {tags.map((tag, index) => (
                      <div className="tag-pill" key={index}>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="menu-para">
                Uninhibited carnally hired played in whimpered dear gorilla
                koala depending and much yikes off far quetzal goodness and from
                for grimaced goodness unaccountably and meadowlark near
                unblushingly crucial scallop tightly neurotic hungrily some and
                dear furiously this apart.
              </p>
              <p className="menu-para">
                Spluttered narrowly yikes left moth in yikes bowed this that
                grizzly much hello on spoon-fed that alas rethought much
                decently richly and wow against the frequent fluidly at
                formidable acceptably flapped besides and much circa far over
                the bucolically hey precarious goldfinch mastodon goodness
                gnashed a jellyfish and one however because.
              </p>
              <div className="details-wrapper">
                <div className="details-parent">
                  <div className="details-left">
                    {details.map((item, index) => (
                      <p key={index} className="detail-label">
                        • {item.label}
                      </p>
                    ))}
                  </div>
                  <div className="details-right">
                    {details.map((item, index) => (
                      <p key={index} className="detail-value">
                        {item.value}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="middle-menu">
              <p className="menu-para">
                Laconic overheard dear woodchuck wow this outrageously taut
                beaver hey hello far meadowlark imitatively egregiously hugged
                that yikes minimally unanimous pouted flirtatiously as beaver
                beheld above forward energetic across this jeepers beneficently
                cockily less a the raucously that magic upheld far so the this
                where crud then below after jeez enchanting drunkenly more much
                wow callously irrespective limpet.
              </p>
              <h3 className="info-title">Packaging & Delivery</h3>
            </div>
            <div className="down-menu">
              <p className="menu-para">
                Less lion goodness that euphemistically robin expeditiously
                bluebird smugly scratched far while thus cackled sheepishly
                rigid after due one assenting regarding censorious while
                occasional or this more crane went more as this less much amid
                overhung anathematic because much held one exuberantly sheep
                goodness so where rat wry well concomitantly. Scallop or far
                crud plain remarkably far by thus far iguana lewd precociously
                and and less rattlesnake contrary caustic wow this near alas and
                next and pled the yikes articulate about as less cackled
                dalmatian in much less well jeering for the thanks blindly
                sentimental whimpered less across objectively fanciful grimaced
                wildly some wow and rose jeepers outgrew lugubrious luridly
                irrationally attractively dachshund.
              </p>
              <div className="info-section">
                {infoData.map((item, index) => (
                  <div className="info-block" key={index}>
                    <h3 className="info-title">{item.title}</h3>
                    <div className="info-points">
                      {item.points.map((point, i) => (
                        <p key={i} className="info-text">
                          {point}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" card-top-3">
            {cardData.map((item, index) => (
              <div className="card-section card-section3" key={index}>
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
                    <div className="card-content-text card-content-text-3 ">
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

                <div className="main-card-down">
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
        <div className="deals-right-3">
          <div className="sidebar-card sidebar-card-3">
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
          <div className="filter-card filter-card-3">
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
              <div className="gadget-right gadget-right-3" key={index}>
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
          <div className="man-image-2">
            <img src={banner9} alt="" />
          </div>
        </div>
      </BannerPage>
    </>
  );
};

export default MegaMenu;
