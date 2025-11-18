import React from "react";
import "../CSS/ContactPage.css";
import icon1 from "../assets/Image/SVG/icon-location.svg";
import contactimg from "../assets/Image/PNG/contact-2.png";
import BannerPage from "./BannerPage";
import shareicon from "../assets/Image/SVG/share-1-svgrepo-com.svg";
import banner13 from "../assets/Image/PNG/banner-13.png";

const locations = [
  {
    title: "Office",
    address: "205 North Michigan Avenue, Suite 810",
    city: "Chicago, 60601, USA",
    phone: "(123) 456-7890",
    email: "contact@Evara.com",
    image: icon1
  },
  {
    title: "Studio",
    address: "205 North Michigan Avenue, Suite 810",
    city: "Chicago, 60601, USA",
    phone: "(123) 456-7890",
    email: "contact@Evara.com",
     image: icon1
  },
  {
    title: "Shop",
    address: "205 North Michigan Avenue, Suite 810",
    city: "Chicago, 60601, USA",
    phone: "(123) 456-7890",
    email: "contact@Evara.com",
     image: icon1
  },
]

const ContactPage = () => {
  return (
    <>
      <div className="main-contact-container">
        <div className="main-section-contact">
          <div className="contact-right">
            <h4>How can help you ?</h4>
            <h1>Let us know how we can help you</h1>
            <p className=" contact-para m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <p className=" contact-para m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="contact-left">
            <div className="left-contain">
              <div className="left-top-contain">
                <h5>01. Visit Feedback</h5>
                <p className=" contact-para m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div className="left-top-contain">
                <h5 className="heading3">03. Billing Inquiries</h5>
                <p className=" contact-para m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
            <div className="left-contain">
              <div className="left-top-contain">
                <h5>02. Employer Services</h5>
                <p className=" contact-para m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div className="left-top-contain">
                <h5>04.General Inquiries</h5>
                <p className=" contact-para m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="map-container">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30124.689806788898!2d73.05297920000001!3d19.300352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1761830224607!5m2!1sen!2sin"
    style={{ border: 0, width: "100%", height: "400px" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
 <div className="contact-section">
      <div className="contact-container">
        {locations.map((item, index) => (
          <div className="contact-card" key={index}>
            <h3 className="contact-title">{item.title}</h3>
            <p className="contact-address m-0">{item.address}</p>
            <p className="contact-city m-0">{item.city}</p>
            <p className="contact-phone m-0">
              <strong>Phone:</strong> {item.phone}
            </p>
            <p className="contact-email m-0">
              <strong>Email:</strong> {item.email}
            </p>
            <button className="view-map-btn">
             <img src={item.image} alt="" /> View map
            </button>
          </div>
        ))}
      </div>
    </div>

     <div className="contact-form-section">
      <div className="contact-form-container">
        {/* Left Side - Form */}
        <div className="form-left">
          <h4 className="form-subtitle">Contact form</h4>
          <h2 className="form-title">Drop Us a Line</h2>
          <p className="form-desc">
            Your email address will not be published. Required fields are marked{" "}
            <span className="required">*</span>
          </p>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="First Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Your Phone" required />
              <input type="text" placeholder="Subject" required />
            </div>
            <textarea placeholder="Message" rows="5" required></textarea>

<div>

            <button type="submit" className="send-btn">
              Send message
            </button>
</div>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="form-right">
          <img src={contactimg} alt="Contact" />
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
      </div>
    </>
  );
};

export default ContactPage;
