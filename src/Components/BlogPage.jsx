import React from "react";
import "../CSS/BlogPage.css";
import BannerPage from "./BannerPage";
import blog1 from "../assets/Image/PNG/blog-1.png";
import blog2 from "../assets/Image/PNG/blog-2.png";
import blog3 from "../assets/Image/PNG/blog-3.png";
import blog4 from "../assets/Image/PNG/blog-4.png";
import blog5 from "../assets/Image/PNG/blog-5.png";
import blog6 from "../assets/Image/PNG/blog-6.png";
import blog7 from "../assets/Image/PNG/blog-7.png";
import blog8 from "../assets/Image/PNG/blog-8.png";
import blog9 from "../assets/Image/PNG/blog-9.png";
import blog10 from "../assets/Image/PNG/blog-10.png";
import blog12 from "../assets/Image/PNG/blog-12.png";
import blog13 from "../assets/Image/PNG/blog-13.png";
import blog14 from "../assets/Image/PNG/blog-14.png";
import blog15 from "../assets/Image/PNG/blog-15.png";
import blog11 from "../assets/Image/PNG/blog-1.png";
import category1 from "../assets/Image/SVG/category-1.svg";
import category2 from "../assets/Image/SVG/category-2.svg";
import category3 from "../assets/Image/SVG/category-3.svg";
import category4 from "../assets/Image/SVG/category-5.svg";
import category5 from "../assets/Image/SVG/category-7.svg";
import shareicon from "../assets/Image/SVG/share-1-svgrepo-com.svg";
import banner13 from "../assets/Image/PNG/banner-13.png";
import thumbnail1 from "../assets/Image/JPG/thumbnail-1.jpg";
import thumbnail2 from "../assets/Image/JPG/thumbnail-2.jpg";
import thumbnail3 from "../assets/Image/JPG/thumbnail-3.jpg";
import thumbnail4 from "../assets/Image/JPG/thumbnail-4.jpg";
import thumbnail5 from "../assets/Image/JPG/thumbnail-5.jpg";
import thumbnail6 from "../assets/Image/JPG/thumbnail-6.jpg";
import icon4 from "../assets/Image/SVG/star-svgrepo-com (2).svg";
import searchicon from "../assets/Image/SVG/search-svgrepo-com (3).svg";
import dealsicon from "../assets/Image/SVG/dashboard-svgrepo-com.svg";


const recipes = [
  {
    img: blog1,
    category: "Side Dish",
    title: "The Intermediate Guide to Healthy Food",
  },
  {
    img: blog2,
    category: "Soups and Stews",
    title: "Summer Quinoa Salad Jars with Lemon Dill",
  },
  {
    img: blog3,
    category: "Salad",
    title: "Caprese Chicken with Smashed Potatoes",
  },
  {
    img: blog4,
    category: "Dessert",
    title: "Harissa Chickpeas with Whipped Feta",
  },
  {
    img: blog5,
    category: "Breakfast",
    title: "Almond Butter Chocolate Chip Zucchini Bars",
  },
  {
    img: blog6,
    category: "Vegan",
    title: "Smoky Beans & Greens Tacos with Aji Verde",
  },
  {
    img: blog7,
    category: "Gluten Free",
    title: "Sticky Ginger Rice Bowls with Pickled Veg",
  },
  {
    img: blog8,
    category: "Side Dish",
    title: "Creamy Garlic Sun-Dried Tomato Pasta",
  },
  {
    img: blog9,
    category: "Dairy Free",
    title: "The Absolute Easiest Spinach and Pizza",
  },
  {
    img: blog10,
    category: "Salad",
    title: "Sticky Ginger Rice Bowls with Pickled",
  },
  {
    img: blog1,
    category: "Soups",
    title: "The Best Soft Chocolate Chip Cookies",
  },
  {
    img: blog12,
    category: "Vegetarian",
    title: "Baked Mozzarella Chicken Rolls",
  },
  { img: blog13, category: "Dessert", title: "The Best Avocado Egg Salad" },
  {
    img: blog14,
    category: "Vegetarian",
    title: "The litigants on the screen are not actors",
  },
  {
    img: blog15,
    category: "Vegetarian",
    title: "The litigants on the screen are not actors",
  },
];
const gadgetsData = [
  {
    title: "Trending Now",
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
      {
        img: thumbnail3,
        name: "Colorful Jacket",
        price: "$32.85",
      },
    ],
  },
];

const galleryItems = [
  { img: thumbnail1 },
  { img: thumbnail2 },
  { img: thumbnail3 },
  { img: thumbnail4 },
  { img: thumbnail5 },
  { img: thumbnail6 },
];
const tags = ["Cabbage", "Broccoli", "Smoothie", "Fruit", "Salad", "Appetizer"];

const BlogPage = () => {
  return (
    <>
      <BannerPage>
        <div className="banner-section d-flex align-content-center justify-content-between">
          <div className="left-content">
            <h3>Blog & News</h3>
            <ul className="d-flex gap-4 list-unstyled">
              <li>Home</li>
              <li>shop</li>
              <li>Snack</li>
            </ul>
          </div>
          <div className="right-content">
            <ul className="list-unstyled d-flex gap-3">
              <li className="right-li">
                <a href="">Shopping</a>
              </li>
              <li className="right-li2">
                <a href="">Recips</a>
              </li>
              <li className="right-li">
                <a href="">Kitchen</a>
              </li>
              <li className="right-li">
                <a href="">News</a>
              </li>
              <li className="right-li">
                <a href="">Food</a>
              </li>
            </ul>
          </div>
        </div>
      </BannerPage>

      <div className="blog-container">
        <div className="blog-left">
          <div className="blog-top">
            <div className="blog-top-heading">
            <img src={category1} alt="category" />
            <h2>Recips Articles</h2>
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
          <div className="recipe-section">
            {recipes.map((item, index) => (
              <div className="recipe-card" key={index}>
                <div className="recipe-img">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="recipe-content">
                  <p className="recipe-category">{item.category}</p>
                  <h3 className="recipe-title">{item.title}</h3>
                  <p className="recipe-meta">
                    25 April 2024 • 126k Views • 4 mins read
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="deals-right deals-right-2">
          <div className="serach-blog">
            <input type="text" placeholder="Search..." />
            <div className="search">
              <img src={searchicon} alt="" />
            </div>
          </div>

          <div className="sidebar-card sidebar-card-2">
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
          <div className="gallery-section">
            <div className="gallery-container">
              <div class="fruit-text">Gallery</div>
              <div className="gallery-grid">
                {galleryItems.map((item, index) => (
                  <div className="gallery-card" key={index}>
                    <div className="gallery-image">
                      <img src={item.img} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="gadget-container">
            {gadgetsData.map((section, index) => (
              <div className="gadget-right gadget-right-2" key={index}>
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
           <div className="tags-section">
      <div className="tags-container">
         <div class="fruit-text">Popular Tags</div>
        <div className="tags-grid">
          {tags.map((tag, index) => (
            <div className="tag-item" key={index}>
              <span className="tag-cross">×</span>
              <span className="tag-text">{tag}</span>
            </div>
          ))}
        </div>
      </div>
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
            <div className="slider-top-text2">
              Stay home & get your daily
              <div>needs from our shop</div>
            </div>
            <div className="slider-middle-text-2">
              Start You'r Daily Shopping with <span>Nest Mart</span>
            </div>
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
    </>
  );
};

export default BlogPage;
