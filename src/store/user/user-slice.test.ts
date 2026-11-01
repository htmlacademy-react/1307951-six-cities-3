import { AutorizationStatus, RequestStatus } from '../../components/const';
import { userActions, userSlice } from './user-slice';

describe('User Slice', () => {

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      user: null,
      authorizationStatus: AutorizationStatus.NoAuth,
      requestStatus: RequestStatus.Failed,
    };

    const result = userSlice.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      user: null,
      authorizationStatus: AutorizationStatus.Unknown,
      requestStatus: RequestStatus.Idle,
    };

    const result = userSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });


  it('should set loading on requestStatus when checkAuth.pending', () => {

    const expectedState = {
      user: null,
      authorizationStatus: AutorizationStatus.Unknown,
      requestStatus: RequestStatus.Loading,
    };

    const result = userSlice.reducer(undefined, userActions.checkAuth.pending);
    expect(result).toEqual(expectedState);
  });

});
