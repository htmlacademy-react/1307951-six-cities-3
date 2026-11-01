import { RequestStatus } from '../../components/const';
import { makeFakeOffer } from '../../utils/mocks';
import { offerActions, offerSlice } from './offer-slice';

describe('Offer Slice', () => {

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      info: null,
      nearby: [],
      status: RequestStatus.Success
    };

    const result = offerSlice.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty nearby and reque requestStatus idle', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      info: null,
      nearby: [],
      status: RequestStatus.Idle
    };

    const result = offerSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should clear offers with "clear" action', () => {
    const initialState = {
      info: null,
      nearby: [],
      status: RequestStatus.Failed
    };

    const expectedState = {
      info: null,
      nearby: [],
      status: RequestStatus.Idle
    };

    const result = offerSlice.reducer(initialState, offerActions.clear);
    expect(result).toEqual(expectedState);

  });

  it('should switch to Loading and reset the error on fetchOffers.pending', () => {

    const expectedState = {
      info: null,
      nearby: [],
      status: RequestStatus.Loading,
    };

    const result = offerSlice.reducer(undefined, offerActions.fetchOffer.pending);

    expect(result).toEqual(expectedState);
  });

  it('should put the payload into offers and switch to Success on fetchOffers.fulfilled', () => {
    const fakeOffer = makeFakeOffer();
    const expectedState = {
      info: fakeOffer,
      nearby: [],
      status: RequestStatus.Success,
    };

    const result = offerSlice.reducer(
      undefined,
      offerActions.fetchOffer.fulfilled(
        fakeOffer,
        'test-request-id',
        '',
      )
    );

    expect(result).toEqual(expectedState);
  });

  it('should switch to Failed when fetchOffers.rejected', () => {
    const expectedState = {
      info: null,
      nearby: [],
      status: RequestStatus.Failed
    };

    const result = offerSlice.reducer(
      undefined,
      offerActions.fetchOffer.rejected,
    );

    expect(result).toEqual(expectedState);
  });

});
