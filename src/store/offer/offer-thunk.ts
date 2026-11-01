import { APIRoute } from '../../components/const';
import { TOffer } from '../../components/types';
import { createAppAsyncThunk } from '../create-thunk';


export const fetchOffer = createAppAsyncThunk<TOffer, string>(
  'fetchOffer/offer',
  async (offerID, { extra: api }) => {
    const response = await api.get<TOffer>(`${APIRoute.Offers}/${offerID}`);
    return response.data;
  }
);


export const fetchNearBy = createAppAsyncThunk<TOffer[], string>(
  'fetchOffer/nearby',
  async (offerID, {extra: api}) => {
    const response = await api.get<TOffer[]>(`${APIRoute.Offers}/${offerID}/nearby`);
    return response.data;
  }
);
