import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../components/const';
import { OfferId, TOffer } from '../../components/types';
import { changeFavoriteStatus, favoritesThunks, fetchFavorites } from './favorites-thunk';
import { logout } from '../user/user-thunk';
import { RootState } from '..';


export interface FavoritesState {
  favorites: TOffer[];
  status: RequestStatus;
  error: string | null;
  pendingIds: Record<OfferId, true>;
}

export const initialState: FavoritesState = {
  favorites: [],
  status: RequestStatus.Idle,
  error: null,
  pendingIds: {},
};


export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    favoritesClear: (state) => {
      state.favorites = [];
      state.status = RequestStatus.Idle;
      state.error = null;
      state.pendingIds = {};
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavorites.pending, (state: FavoritesState) => {
        state.status = RequestStatus.Loading;
        state.error = null;
      })
      .addCase(fetchFavorites.fulfilled, (state: FavoritesState, action: PayloadAction<TOffer[]>) => {
        state.favorites = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchFavorites.rejected, (state: FavoritesState,) => {
        state.status = RequestStatus.Failed;
        state.error = 'ошибка загрузки';
      })

      .addCase(changeFavoriteStatus.pending, (state: FavoritesState, action) => {
        state.pendingIds[action.meta.arg.offerId] = true;

      })

      .addCase(changeFavoriteStatus.fulfilled, (state, action) => {
        const offer = action.payload;
        delete state.pendingIds[action.meta.arg.offerId];

        const idx = state.favorites.findIndex((o) => o.id === offer.id);
        if (offer.isFavorite && idx === -1) {
          state.favorites.push(offer);
        } else if (!offer.isFavorite && idx !== -1) {
          state.favorites.splice(idx, 1);
        }
      })

      .addCase(changeFavoriteStatus.rejected, (state, action) => {

        delete state.pendingIds[action.meta.arg.offerId];
        state.error = 'error';

      })
      .addCase(logout.fulfilled, (state) => {
        state.favorites = [];
        state.pendingIds = {};
      });

  },
});

export const favoritesActions = {
  ...favoritesSlice.actions,
  ...favoritesThunks
};

export const selectRequestStatus = (state: RootState) => state[NameSpace.Favorites].status;
export default favoritesSlice.reducer;
