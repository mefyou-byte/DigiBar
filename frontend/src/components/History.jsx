import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, TextField } from "@material-ui/core";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
  clearCartOrdered,
  order, 
  getTotals2, 
  removeFromCartOrdered, 
} from "../slices/cartSlice";

import { Link } from "react-router-dom";

import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';


const History = () => {
  
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();



  useEffect(() => {
    localStorage.getItem("orderedItems");
    
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCartOrdered(product));
  };
  const handleClearCart = () => {
    dispatch(clearCartOrdered());
  };
  const checkout = () => {
    dispatch(order()); 
  }
  return (
    <div className="cart-container">
      <h2>Ordered Cart</h2>
      {cart.orderedItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Order</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.orderedItems &&
              cart.orderedItems.map((orderedItem) => (
                <div className="cart-item" key={orderedItem.id}>
                  <div className="cart-product">
                    <img src={orderedItem.image} alt={orderedItem.name} />
                    <div>
                      <h3>{orderedItem.name}</h3>
                      <p>{orderedItem.desc}</p>
                      <button onClick={() => handleRemoveFromCart(orderedItem)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">€{orderedItem.price}</div>
                  <div className="cart-product-quantity">
                    <button onClick={() => handleDecreaseCart(orderedItem)}>
                      -
                    </button>
                    <div className="count">{orderedItem.cartQuantity}</div>
                    <button onClick={() => handleAddToCart(orderedItem)}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    €{orderedItem.price * orderedItem.cartQuantity}
                  </div>
                </div>
              ))}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            {/* <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">€{cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              {/* <button onClick={() => checkout()}>Order</button> 
         
          
              <div className="continue-shopping" >
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
