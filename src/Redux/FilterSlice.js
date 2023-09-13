import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: '',
};

 const  FilterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state = action.payload;
    },
  },
})

export default FilterSlice.reducer;
export const { setFilter } = FilterSlice.actions;