import { configureStore } from "@reduxjs/toolkit"
import Cart from "./cart"
import Count  from "./count"

export default configureStore({
  reducer: {
    cart: Cart,
    count : Count
  },
})
