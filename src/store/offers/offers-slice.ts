import { createSlice } from '@reduxjs/toolkit';
import { TOffer } from '../../components/types';
import { RootState } from '..';
import { fetchAllOffers } from './offers-thunk';
import { NameSpace } from '../../components/const';
import { changeFavoriteStatus } from '../favorites/favorites-thunk';

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
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, action) => {
        const updated = action.payload;
        const targetOffer = state.offers.find((offer) => offer.id === updated.id);
        if (targetOffer) {
          targetOffer.isFavorite = updated.isFavorite;
        }
      });
  },

});

export const offersActions = { fetchAllOffers };
export const selectAllOffers = (state: RootState) => state[NameSpace.Offers].offers;
export const selectOffersLoading = (state: RootState) => state[NameSpace.Offers].isLoading;
export default offersSlice.reducer;
