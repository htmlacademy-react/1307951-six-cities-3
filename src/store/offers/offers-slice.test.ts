import { makeFakeOffer } from '../../utils/mocks';
import { offersActions, offersSlice } from './offers-slice';

describe('Offer Slice', () => {

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offers: [],
      isLoading: true,
    };

    const result = offersSlice.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty nearby and reque requestStatus idle', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offers: [],
      isLoading: true,
    };

    const result = offersSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should set isLoading to true when fetchAllOffers.pending', () => {
    const initialState = {
      offers: [],
      isLoading: false,
    };

    const result = offersSlice.reducer(
      initialState,
      offersActions.fetchAllOffers.pending,
    );

    expect(result.isLoading).toBe(true);
  });

  it('should put the payload into offers and set isLoading to false when fetchAllOffers.fulfilled', () => {
    const fakeOffers = [makeFakeOffer(), makeFakeOffer()];
    const expectedState = {
      offers: fakeOffers,
      isLoading: false,
    };

    const result = offersSlice.reducer(
      undefined,
      offersActions.fetchAllOffers.fulfilled(
        fakeOffers,
        'test-request-id',
        undefined,
      ),
    );

    expect(result).toEqual(expectedState);
  });

  it('should replace existing offers with the payload', () => {
    const oldOffers = [makeFakeOffer()];
    const newOffers = [makeFakeOffer(), makeFakeOffer()];
    const initialState = {
      offers: oldOffers,
      isLoading: true,
    };

    const result = offersSlice.reducer(
      initialState,
      offersActions.fetchAllOffers.fulfilled(
        newOffers,
        '',
        undefined,
      ),
    );

    expect(result.offers).toEqual(newOffers);
    expect(result.isLoading).toBe(false);
  });

  it('should set isLoading to false on when fetchAllOffers.rejected', () => {
    const initialState = {
      offers: [],
      isLoading: true,
    };

    const result = offersSlice.reducer(
      initialState,
      offersActions.fetchAllOffers.rejected(
        null,
        '',
        undefined,
      ),
    );
    expect(result.isLoading).toBe(false);
  });
});
