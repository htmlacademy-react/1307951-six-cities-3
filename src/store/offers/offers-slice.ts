import { createSlice } from '@reduxjs/toolkit';
import { TOffer } from '../../components/types';
import { RootState } from '..';
import { fetchAllOffers } from './offers-thunk';
import { NameSpace } from '../../components/const';

export interface OffersState {
  offers: TOffer[];
  isLoading: boolean;
}

const initialState: OffersState = {
  offers: [],
  isLoading: true,

};

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllOffers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllOffers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchAllOffers.rejected, (state) => {
        state.isLoading = false;
      });
  },

});

export const offersActions = { fetchAllOffers };
export const selectAllOffers = (state: RootState) => state[NameSpace.Offers].offers;
export const selectOffersLoading = (state: RootState) => state[NameSpace.Offers].isLoading;
export default offersSlice.reducer;
