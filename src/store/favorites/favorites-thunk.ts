import { APIRoute } from '../../components/const';
import { OfferId, TFavoriteStatus, TOffer } from '../../components/types';
import { createAppAsyncThunk } from '../create-thunk';

export const toFavoriteStatus = (isFavorite: boolean): TFavoriteStatus => isFavorite ? 0 : 1;

export type TFavoriteInfo = {
  offerId: OfferId;
  isFavorite: boolean;
}

export const fetchFavorites = createAppAsyncThunk<TOffer[], void>(
  'favorites/fetch',
  async (_arg, {extra: api, rejectWithValue}) => {
    try {
      const { data } = await api.get<TOffer[]>(APIRoute.Favorites);
      return data;
    } catch {
      return rejectWithValue('Не удалось загрузить избранное');
    }
  }
);

export const changeFavoriteStatus = createAppAsyncThunk<TOffer, TFavoriteInfo>(
  'favorite/changeStatus',
  async ({ offerId, isFavorite }, { extra: api, rejectWithValue }) => {

    const status: TFavoriteStatus = isFavorite ? 0 : 1;
    try {

      const { data } = await api.post<TOffer>(`${APIRoute.Favorites}/${offerId}/${status}`);

      return data;
    } catch (error) {
      return rejectWithValue('не удалось изменить избранное значение');
    }
  }
);

export const favoritesThunks = { fetchFavorites, changeFavoriteStatus};
