const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  filter: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setStatusFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const getStatusFilter = state => state.filters.filter;
