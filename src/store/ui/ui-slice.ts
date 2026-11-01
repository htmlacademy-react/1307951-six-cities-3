import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TSortType } from '../../components/types';

import { DEFAULT_CITY_NAME, SortType } from '../../components/const';

export type TCityOffersState = {
  activeCity: string;
  sortType: TSortType;
  activeOfferId: string | null;
}

const initialState: TCityOffersState = {
  activeCity: DEFAULT_CITY_NAME,
  sortType: SortType.Popular,
  activeOfferId: null,
};


export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {

    setActiveCity(state, action: PayloadAction<string>) {
      state.activeCity = action.payload;
    },

    setSortType(state, action: PayloadAction<TSortType>) {
      state.sortType = action.payload;
    },
    setActiveOfferId(state, action: PayloadAction<string | null>) {
      state.activeOfferId = action.payload;
    },

    resetCityOffers(state) {
      state.activeCity = initialState.activeCity;
      state.sortType = initialState.sortType;
      state.activeOfferId = initialState.activeOfferId;
    }
  },
});


export const uiActions = {...uiSlice.actions};

export default uiSlice.reducer;
