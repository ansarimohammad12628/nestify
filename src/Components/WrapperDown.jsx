import React from 'react';
import "../CSS/WrapperDown.css"
import icon1 from "../assets/Image/SVG/icon-1.svg"
import icon2 from "../assets/Image/SVG/icon-2.svg"
import icon3 from "../assets/Image/SVG/icon-3.svg"
import icon4 from "../assets/Image/SVG/icon-4.svg"
import icon5 from "../assets/Image/SVG/icon-5.svg"

const WrapperDown = () => {
  return (
   <div className="wrapper-down-container">
                <div className="wrapper-down-card2">
                    <div className="wrapper-down-card-icon"><img src={icon1} alt="" /></div>
                    <div className="down-card-section">
                        <div className="wrapper-top-text">Best Price &
                            <div>offer</div>
                        </div>
                        <div className="wrapper-down-text">Order $50 or more</div>
                    </div>
                </div>
                <div className="wrapper-down-card2">
                    <div className="wrapper-down-card-icon"><img src={icon2} alt="icon2" /></div>
                    <div className="down-card-section">
                        <div className="wrapper-top-text">Free dilvery</div>
                        <div className="wrapper-down-text">24/7 amazing services</div>
                    </div>
                </div>
                <div className="wrapper-down-card2">
                    <div className="wrapper-down-card-icon"><img src={icon3} alt="icon3" /></div>
                    <div className="down-card-section">
                        <div className="wrapper-top-text">Great daily deal</div>
                        <div className="wrapper-down-text">When you sign up</div>
                    </div>
                </div>
                <div className="wrapper-down-card2">
                    <div className="wrapper-down-card-icon"><img src={icon4} alt="icon4" /></div>
                    <div className="down-card-section">
                        <div className="wrapper-top-text">Wide assortment</div>
                        <div className="wrapper-down-text">Mega Discounts</div>
                    </div>
                </div>
                <div className="wrapper-down-card2">
                    <div className="wrapper-down-card-icon"><img src={icon5} alt="icon5" /></div>
                    <div className="down-card-section">
                        <div className="wrapper-top-text">Easy returns</div>
                        <div className="wrapper-down-text">Within 30 days</div>
                    </div>
                </div>
            </div>
  )
}

export default WrapperDown