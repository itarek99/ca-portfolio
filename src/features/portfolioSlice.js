import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedService: {},
  imageLoading: false,
  loaderHeight: 0,
  index: 0,
};

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setSelectedService: (state, action) => {
      state.selectedService = action.payload;
    },
    setImageLoading: (state, action) => {
      state.imageLoading = action.payload;
    },
    setLoaderHeight: (state, action) => {
      state.loaderHeight = action.payload;
    },
    setIndex: (state, action) => {
      state.index = action.payload;
    },
  },
});

export const { setSelectedService, setImageLoading, setLoaderHeight, setIndex } = portfolioSlice.actions;

export default portfolioSlice.reducer;
