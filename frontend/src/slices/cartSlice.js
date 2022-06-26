import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],

    orderedItems: localStorage.getItem("orderedItems")
    ? JSON.parse(localStorage.getItem("orderedItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  table: 0, 
  orderedQuantity: 0, 
  orderedAmount: 0, 
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProductItem);
        toast.success("Product added to cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItems;

        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;

          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    removeFromCartOrdered(state, action) {

      state.orderedItems.map((orderedItem) => {
        console.log(orderedItem.id);
        if (orderedItem.id === action.payload.id) {
          const nextCartItems = state.orderedItems.filter(
            (item) => item.id !== orderedItem.id
          );

          state.orderedItems = nextCartItems;

          toast.error("Product removed from Ordered!", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("orderedItems", JSON.stringify(state.orderedItems));
        return state;
      });
    },


    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },

    getTotals2(state, action) {

     
      let { total, quantity } = state.orderedItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.orderedQuantity = quantity;
      state.orderedAmount = total; 


    },


    order(state, action){
     
    let tablenumber = document.getElementById('tableorder').value; 
    state.cartItems[0].table = tablenumber; 
    
      
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    let items = localStorage.getItem("cartItems", JSON.stringify(state.cartItems)); 

      postitems(JSON.stringify(items)); 
      // delete after ordered 


     
     
    
     

     let testingstorage = JSON.parse(localStorage.getItem("cartItems"));
      
     state.orderedItems = testingstorage; 
     localStorage.setItem("orderedItems", JSON.stringify(state.orderedItems));
     
     

      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.success("ORDERED!", { position: "bottom-right" });
      window.location.pathname = '/history';

      return state; 
    }, 
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart cleared", { position: "bottom-left" });
    },
  
    clearCartOrdered(state, action) {
      state.orderedItems = [];
      localStorage.setItem("orderedItems", JSON.stringify(state.orderedItems));
      toast.error("Order canceled", { position: "bottom-left" });

    },

    OrderedLogic(state, action){

      state.orderedItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.orderedItems.filter(
            (item) => item.id === cartItem.id
          );

          state.orderedItems = nextCartItems;

          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("orderedItems", JSON.stringify(state.orderedItems));
        return state;
      });



    }

  },
});


function postitems ( data){
  console.log(data); 
  fetch('http://localhost:3001/ordered', {

      method: 'POST', 
      mode: 'cors', 
      body: data // body data type must match "Content-Type" header

    })
}
export const { addToCart, clearCartOrdered, decreaseCart, removeFromCart, removeFromCartOrdered,getTotals, clearCart, order, getTotals2 } =
  cartSlice.actions;

export default cartSlice.reducer;
