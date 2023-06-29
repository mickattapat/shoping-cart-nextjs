import { createSlice } from "@reduxjs/toolkit"

export const Count = createSlice({
  name: "count",
  initialState: {
    count: 0
  },
  reducers: {
    deleteItem: (state, action) => {
      state.count--
    },
    plusItem: (state, action) => {
      state.count++
    },
  },
})

export const { deleteItem, plusItem } = Count.actions

export default Count.reducer
