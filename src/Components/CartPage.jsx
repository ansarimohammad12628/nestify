import React from "react";
import "../CSS/CartPage.css";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, removecart } from "../Feature/userSlice";
import icon1 from "../assets/Image/SVG/heart-svgrepo-com (6).svg";
import icon2 from "../assets/Image/SVG/shuffle-2-svgrepo-com.svg";
import icon3 from "../assets/Image/SVG/eye-open-svgrepo-com (3).svg";
import icon4 from "../assets/Image/SVG/star-svgrepo-com (2).svg";
import icon5 from "../assets/Image/SVG/icon-cart.svg";
import deleteicon from "../assets/Image/SVG/delete-svgrepo-com.svg";
export const CartPage = () => {
  const data = useSelector((state) => state.users.item);
  console.log("Data", data);
  const dispatch = useDispatch();

  const removeToCart = (product) => {
    const existsproduct = data.find((item) => item.id === product.id);

    if (existsproduct.quantity > 1) {
      dispatch(decrease(product.id));
    } else {
      dispatch(removecart(product.cartId));
    }
  };

  return (
    <>
      <div className="main-table">
        <h1>Your Cart </h1>
        <div className="main-cart-page">
          <div className="cart-top-page">
            <div className="table-top">
              <p className="table-para">
                There are <span>3 </span>products in your cart
              </p>
              <div className="table-right-para">
              <span>Clear Cart</span>
              <div className="delete-image">
                <img src={deleteicon} alt="delete" />
              </div>
              </div>
            </div>
            <div className="cart-page">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((val, index) => (
                    <tr key={index}>
                      <td className="product-cell">
                        <img src={val.frontImg} alt="" className="cart-img" />
                        <div className="info">
                          <h4>{val.title}</h4>
                          <p>{val.text}</p>
                          <span className="rating">
                            {[...Array(5)].map((_, i) => (
                              <span className="star-image" key={i}>
                                <img src={icon4} alt="" />
                              </span>
                            ))}{" "}
                            {val.rating}
                          </span>
                        </div>
                      </td>
                      <td>${val.price}</td>
                      <td>
                        <div className="quantity-box2">
                          <span>{val.quantity}</span>
                          <div className="arrows">
                            <button onClick={() => dispatch(increase(val.id))}>
                              &#9650;
                            </button>
                            <button onClick={() => removeToCart(val)}>
                              &#9660;
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>${(val.price * val.quantity).toFixed(1)}</td>
                      <td>
                        <div className="remove-btn">
                          <button
                            onClick={() => dispatch(removecart(val.cartId))}
                          >
                            <img src={deleteicon} alt="delete" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="table-right">
            <div className="checkout-box">
              <div className="checkout-row">
                <span className="label">Subtotal</span>
                <span className="value price">$12.31</span>
              </div>

              <div className="line"></div>

              <div className="checkout-row">
                <span className="label">Shipping</span>
                <span className="value">Free</span>
              </div>

              <div className="checkout-row">
                <span className="label">Estimate for</span>
                <span className="value country">United Kingdom</span>
              </div>

              <div className="line"></div>

              <div className="checkout-row total">
                <span className="label">Total</span>
                <span className="value price">$12.31</span>
              </div>
            </div>
            <button className="checkout-btn">Proceed To CheckOut →</button>
          </div>
        </div>
      </div>
    </>
  );
};
