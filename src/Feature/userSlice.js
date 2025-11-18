// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   item: JSON.parse(localStorage.getItem("cartItems")) || [],
// };

// const userSlice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {
//     addtocart: (state, action) => {
//       const newItem = { ...action.payload, cartId: Date.now() + Math.random() };
//       state.item.push(newItem);
//       localStorage.setItem("cartItems", JSON.stringify(state.item));
//     },

//     removecart: (state, action) => {
//       state.item = state.item.filter((val) => val.cartId !== action.payload);
//       localStorage.setItem("cartItems", JSON.stringify(state.item));
//     },
//     increase: (state, action) => {
//       const item = state.item.find((p) => p.cartId === action.payload);
//       if (item) item.quantity += 1;
//       localStorage.setItem("cartItems", JSON.stringify(state.item));
//     },
//   },
// });

// export const { addtocart, removecart, increase } = userSlice.actions;
// export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const newItem = action.payload;
      const existing = state.item.find((p) => p.id === newItem.id);

      if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
      } else {
        state.item.push({ ...newItem, cartId: Date.now(), quantity: 1 });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.item));
    },

    removecart: (state, action) => {
      state.item = state.item.filter((val) => val.cartId !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.item));
    },

    increase: (state, action) => {
      const item = state.item.find((p) => p.id === action.payload);
      if (item) {
        item.quantity = (item.quantity || 1) + 1;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.item));
    },

    decrease :(state,action) => {
           const item = state.item.find((p) => p.id === action.payload);
      if (item) {
        item.quantity = (item.quantity || 1) - 1;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.item));
      
    }
  },


});

export const { addtocart, removecart, increase,decrease } = userSlice.actions;
export default userSlice.reducer;
