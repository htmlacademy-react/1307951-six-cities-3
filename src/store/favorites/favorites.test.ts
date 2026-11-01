import { RequestStatus } from '../../components/const';
import { favoritesSlice } from './favorites-slice';

describe('Favorites Slice', () => {

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      favorites: [],
      status: RequestStatus.Failed,
      error: null,
      pendingIds: {},
    };

    const result = favoritesSlice.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty favorites and reque requestStatus idle', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      favorites: [],
      status: RequestStatus.Idle,
      error: null,
      pendingIds: {},
    };

    const result = favoritesSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

});
