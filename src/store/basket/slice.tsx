import { createSlice } from '@reduxjs/toolkit'; 

export const slice = createSlice({
  name: 'basket',
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      return state.filter((book) => book.name !== action.payload.name);
    },
  },
});
  
export const { addBook, removeBook } = slice.actions;
  
export default slice.reducer;