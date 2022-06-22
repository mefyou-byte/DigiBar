import { ModalBody } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addToCart } from "../slices/cartSlice";
import { useGetAllProductsQuery } from "../slices/productsApi";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useEffect, useState } from "react";
import {order} from "../slices/cartSlice";
import { Button, TextField } from "@material-ui/core";

const Home = () => {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const checkout = () => {
    dispatch(order());
  };

  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("Api", isLoading);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    window.location.reload();
    history.push("/");
  };

  return (
    <div className="home-container">
      {status === "success" ? (
        <>
          <h2>Order your drink!</h2>
         {/*  <button onClick={onOpenModal}>Mix your drink</button>
          <Modal open={open} onClose={onCloseModal} center>
            <h2>Mix your Drink!</h2>
            <div className="mix-items">
              {/*{cart.cartItems &&
                cart.cartItems.map((cartItem) => (
                  <div className="cart-item" key={cartItem.id}>
                    <div className="cart-product">
                      <img src={cartItem.image} alt={cartItem.name} />
                      <div>
                        <h3>{cartItem.name}</h3>
                        <p>{cartItem.desc}</p>
                        <button onClick={() => handleRemoveFromCart(cartItem)}>
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="cart-product-price">€{cartItem.price}</div>
                    <div className="cart-product-quantity">
                      <button onClick={() => handleDecreaseCart(cartItem)}>
                        -
                      </button>
                      <div className="count">{cartItem.cartQuantity}</div>
                      <button onClick={() => handleAddToCart(cartItem)}>
                        +
                      </button>
                    </div>
                    <div className="cart-product-total-price">
                      €{cartItem.price * cartItem.cartQuantity}
                    </div>
                  </div>
                ))}
            </div> 
            <form>
              <label>Table Number</label> <br />
              <TextField name="name" fullWidth />
              <br /> <br />
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </form>
            <button onClick={() => checkout()}>Order</button>

            <div className="subtotal2">
              <span
                style={{
                  marginRight: "0em",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                Subtotal
              </span>
              {/*<span className="amount">€{cart.cartTotalAmount}</span>
            </div>
          </Modal>
        */}


          <div className="products">
            {data &&
              data?.map((product) => (
                <div key={product.id} className="product">
                  <h3>{product.name}</h3>
                  <img src={product.image} alt={product.name} />
                  <div className="details">
                    <span>{product.desc}</span>
                    <span className="price">€{product.price}</span>
                  </div>
                  <button onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>
                </div>
              ))}
          </div>
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>
  );
};

export default Home;
