import { RequestStatus } from '../../components/const';
import { makeFakeOffer } from '../../utils/mocks';
import { logout } from '../user/user-thunk';
import { favoritesActions, favoritesSlice } from './favorites-slice';
import { changeFavoriteStatus } from './favorites-thunk';


describe('Faforites slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      favorites: [],
      status: RequestStatus.Idle,
      error: null,
      pendingIds: {},
    };

    const result = favoritesSlice.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty items and requestStatus idle', () => {
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

  it('should clear favorites with "favoritesClear" action', () => {
    const stateWithData = {
      favorites: [makeFakeOffer(), makeFakeOffer()],
      status: RequestStatus.Success,
      error: 'старая ошибка',
      pendingIds: { 'offer-1': true as const },
    };
    const expectedState = {
      favorites: [],
      status: RequestStatus.Idle,
      error: null,
      pendingIds: {},
    };

    const result = favoritesSlice.reducer(
      stateWithData,
      favoritesActions.favoritesClear(),
    );

    expect(result).toEqual(expectedState);
  });


  it('should set requestStatus to Loading', () => {
    const expectedState = {
      favorites: [],
      status: RequestStatus.Loading,
      error: null,
      pendingIds: {},
    };

    const result = favoritesSlice.reducer(undefined, favoritesActions.fetchFavorites.pending);

    expect(result).toEqual(expectedState);
  });

  it('sould set requestStatus to Failed', () => {
    const expectedState = {
      favorites: [],
      status: RequestStatus.Failed,
      error: 'ошибка загрузки',
      pendingIds: {},
    };

    const result = favoritesSlice.reducer(undefined, favoritesActions.fetchFavorites.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set status to Success and fill favorites on fetchFavorites.fulfilled', () => {
    const fakeOffer = makeFakeOffer();
    const expectedState = {
      favorites: [fakeOffer],
      status: RequestStatus.Success,
      error: null,
      pendingIds: {},
    };

    const result = favoritesSlice.reducer(undefined, favoritesActions.fetchFavorites.fulfilled(
      [fakeOffer],
      'test-request-id',
      undefined,
    ));

    expect(result).toEqual(expectedState);
  });

  it('should mark the offer as pending in pendingIds on changeFavoriteStatus.pending', () => {
    const offerId = 'offer-1';
    const expectedPendingIds = { [offerId]: true };

    const result = favoritesSlice.reducer(
      undefined,
      changeFavoriteStatus.pending('test-request-id', {
        offerId,
        isFavorite: true,
      }),
    );

    expect(result.pendingIds).toEqual(expectedPendingIds);
  });

  it('should add the favorite offer to favorites and clear its pending flag on changeFavoriteStatus.fulfilled', () => {
    const offer = makeFakeOffer();
    const favoriteOffer = { ...offer, isFavorite: true };
    const initialState = {
      favorites: [],
      status: RequestStatus.Idle,
      error: null,
      pendingIds: { [offer.id]: true as const },

    };

    const result = favoritesSlice.reducer(
      initialState,
      changeFavoriteStatus.fulfilled(favoriteOffer, 'test-request-id', {
        offerId: offer.id,
        isFavorite: true,
      }),
    );

    expect(result.favorites).toEqual([favoriteOffer]);
    expect(result.pendingIds).toEqual({});
  });

  it('should clear the pending flag and store the error on changeFavoriteStatus.rejected', () => {
    const offerId = 'offer-1';
    const initialState = {
      favorites: [],
      status: RequestStatus.Idle,
      error: null,
      pendingIds: { [offerId]: true as const },

    };
    const expectedState = {
      favorites: [],
      status: RequestStatus.Idle,
      error: 'error',
      pendingIds: {},
    };

    const result = favoritesSlice.reducer(
      initialState,
      changeFavoriteStatus.rejected(
        new Error('fail'),
        'test-request-id',
        { offerId, isFavorite: true },
      ),
    );

    expect(result).toEqual(expectedState);
  });

  it('should clear favorites and pendingIds on logout.fulfilled', () => {
    const initialState = {
      favorites: [makeFakeOffer(), makeFakeOffer()],
      status: RequestStatus.Success,
      error: null,
      pendingIds: { 'offer-1': true as const },
    };
    const expectedState = {
      favorites: [],
      status: RequestStatus.Success,
      error: null,
      pendingIds: {},
    };

    const result = favoritesSlice.reducer(
      initialState,
      logout.fulfilled(undefined, 'test-request-id', undefined),
    );

    expect(result).toEqual(expectedState);
  });
});
