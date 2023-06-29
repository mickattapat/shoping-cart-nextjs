import { createSlice } from "@reduxjs/toolkit"

export const Cart = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    setUpdateCart: (state, action) => {
      let product = action.payload
      if (product.quantity > 0) {
        const index = state.cart.map(e => e.id).indexOf(product.id);
        if (index !== -1) {
          state.cart.splice(index, 1)
        }
        state.cart.push(product)
      } else {
        const result = state.cart.filter((item) => {
          return product.id !== item.id 
        })
        state.cart = result
      }
    }
  },
})

export const { setUpdateCart} = Cart.actions

export default Cart.reducer
