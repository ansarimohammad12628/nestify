import React, { useEffect, useState } from "react";
import "../CSS/AboutPage.css";
import BannerPage from "./BannerPage";
import shareicon from "../assets/Image/SVG/share-1-svgrepo-com.svg";
import banner13 from "../assets/Image/PNG/banner-13.png";
import about1 from "../assets/Image/PNG/about-1.png";
import about2 from "../assets/Image/PNG/about-2.png";
import about3 from "../assets/Image/PNG/about-3.png";
import about4 from "../assets/Image/PNG/about-4.png";
import about5 from "../assets/Image/PNG/about-5.png";
import about6 from "../assets/Image/PNG/about-6.png";
import about7 from "../assets/Image/PNG/about-8.png";
import wave from "../assets/Image/PNG/aboutwave.png";
import icon1 from "../assets/Image/SVG/icon-1.svg";
import icon2 from "../assets/Image/SVG/icon-2.svg";
import icon3 from "../assets/Image/SVG/icon-3.svg";
import icon4 from "../assets/Image/SVG/icon-4.svg";
import icon5 from "../assets/Image/SVG/icon-5.svg";
import icon6 from "../assets/Image/SVG/icon-6.svg";
import icon7 from "../assets/Image/SVG/icon-facebook-white.svg";
import icon8 from "../assets/Image/SVG/icon-twitter-white.svg";
import icon9 from "../assets/Image/SVG/icon-instagram-white.svg";
// import icon10 from "../assets/Image/SVG/icon-pinterest-white.svg";
import icon11 from "../assets/Image/SVG/icon-youtube-white.svg";

const featuresData = [
  {
    id: 1,
    icon: icon1,
    title: "Best Prices & Offers",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    id: 2,
    icon: icon2,
    title: "Wide Assortment",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    id: 3,
    icon: icon3,
    title: "Free Delivery",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    id: 4,
    icon: icon4,
    title: "Easy Returns",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    id: 5,
    icon: icon5,
    title: "100% Satisfaction",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    id: 6,
    icon: icon6,
    title: "Great Daily Deal",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
];
const counters = [
  { number: "12+", label: "Glorious years" },
  { number: "36+", label: "Happy clients" },
  { number: "57+", label: "Projects complete" },
  { number: "24+", label: "Team advisor" },
  { number: "26+", label: "Products Sale" },
];
const teamMembers = [
  {
    name: "H. Merinda",
    title: "CEO & Co-Founder",
    img: about6,
    social: {
      facebook: icon7,
      twitter: icon8,
      instagram: icon9,
      youtube: icon11,
    },
  },
  {
    name: "Dilan Specter",
    title: "Head Engineer",
    img: about7,
    social: {
      facebook: icon7,
      twitter: icon8,
      instagram: icon9,
      youtube: icon11,
    },
  },
];
const aboutData = [
  {
    title: "Who we are",
    text: "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.",
  },
  {
    title: "Our history",
    text: "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.",
  },
  {
    title: "Our mission",
    text: "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.",
  },
];

const AboutPage = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-section-top">
          <div className="about-section-left">
            <img src={about1} alt="about1" />
          </div>
          <div className="about-section-right">
            <h2>Welcome to Nest</h2>
            <p className="about-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate id est laborum.
            </p>
            <p className="about-para">
              Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
              et Ut placerat legendos interpre.Donec vitae sapien ut libero
              venenatis faucibus. Nullam quis ante Etiam sit amet orci eget.
              Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt
              dui ut ornare lectus. Auctor elit sed vulputate mi sit amet.
              Commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate id est laborum.
            </p>
            <div className="about-image">
              <img src={about2} alt="about2" />
              <img src={about3} alt="about3" />
              <img src={about4} alt="about4" />
            </div>
          </div>
        </div>
        <div className="about-middle-section">
          <div className="about-section-right  about-section-right-2">
            <h2>What We Provide?</h2>
            <div>
              <img src={wave} alt="" />
            </div>
          </div>
          <div className="features-container">
            {featuresData.map((feature) => (
              <div className="feature-card" key={feature.id}>
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="feature-icon"
                />
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
                <a href="#" className="read-more">
                  Read more
                </a>
              </div>
            ))}
          </div>
          <div className="about-section-top">
            <div className="about-section-left about-section-left-2">
              <img src={about5} alt="about1" />
            </div>
            <div className="about-section-right">
              <h4>Our performance</h4>
              <h1>Your Partner for e-commerce grocery solution</h1>
              <p className="about-para2 ">
                Our performance Your Partner for e-commerce grocery solution Ed
                ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto
              </p>
              <p className="about-para2">
                Pitatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia
              </p>
            </div>
          </div>

      <div className="about-container-section">
        {aboutData.map((item, index) => (
          <div className="about-box" key={index}>
            <h3 className="about-title">{item.title}</h3>
            <p className="about-text">{item.text}</p>
          </div>
        ))}
      </div>


          <div className="counter-section">
            <div className="counter-section-bg">
              {counters.map((item, index) => (
                <div className="counter-box" key={index}>
                  <h1 className="counter-number">{item.number}</h1>
                  <p className="counter-label">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="team-section">
             <div className="about-section-right  about-section-right-2">
            <h2>Our Team</h2>
            <div>
              <img src={wave} alt="" />
            </div>
          </div>
            <div className="team-container">
              
              <div className="team-left">
                <p className="team-subtitle">Our Team</p>
                <h2 className="team-title">Meet Our Expert Team</h2>
                <p className="team-text">
                  Proin ullamcorper pretium orci. Donec necsele risus leo. Nam
                  massa dolor imperdiet nec congue idsem. Maecenas malesuada
                  faucibus finibus.
                </p>
                <p className="team-text">
                  Proin ullamcorper pretium orci. Donec necsele risus leo. Nam
                  massa dolor imperdiet nec congue idsem. Maecenas malesuada
                  faucibus finibus.
                </p>
                <button className="team-btn">View All Members</button>
              </div>

              <div className="team-right">
                {teamMembers.map((member, index) => (
                  <div className="team-card" key={index}>
                    <img
                      src={member.img}
                      alt={member.name}
                      className="team-img"
                    />
                    <div className="team-card-down">
                      <div className="team-info">
                        <h3>{member.name}</h3>
                        <p>{member.title}</p>
                        <div className="team-social">
                          <div className="team-social-icon">
                            <img src={icon7} alt="icon7" />
                          </div>
                          <div className="team-social-icon">
                            <img src={icon8} alt="icon8" />
                          </div>
                          <div className="team-social-icon">
                            <img src={icon9} alt="icon9" />
                          </div>
                          <div className="team-social-icon">
                            <img src={icon11} alt="icon11" />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
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
          <div className="man-image">
            <img src={banner13} alt="" />
          </div>
        </div>
      </BannerPage>
    </>
  );
};

export default AboutPage;
