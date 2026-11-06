import { AutorizationStatus, RequestStatus } from '../../components/const';
import { makeFakeUser } from '../../utils/mocks';
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
});


describe('CheckAuth', () => {

  it('should set loading on requestStatus when checkAuth.pending', () => {

    const expectedState = {
      user: null,
      authorizationStatus: AutorizationStatus.Unknown,
      requestStatus: RequestStatus.Loading,
    };

    const result = userSlice.reducer(undefined, userActions.checkAuth.pending);
    expect(result).toEqual(expectedState);
  });

  it('should set user, auth status and success on checkAuth.fulfilled', () => {
    const fakeUser = makeFakeUser();

    const expectedState = {
      user: fakeUser,
      authorizationStatus: AutorizationStatus.Auth,
      requestStatus: RequestStatus.Success,
    };

    const result = userSlice.reducer(
      undefined,
      userActions.checkAuth.fulfilled(fakeUser, '', undefined)
    );
    expect(result).toEqual(expectedState);
  });

  it('should set NoAuth and failed on checkAuth.rejected', () => {
    const expectedState = {
      user: null,
      authorizationStatus: AutorizationStatus.NoAuth,
      requestStatus: RequestStatus.Failed,
    };

    const result = userSlice.reducer(
      undefined,
      userActions.checkAuth.rejected(null, '', undefined)
    );
    expect(result).toEqual(expectedState);
  });
});


describe('login', () => {
  it('should set loading on requestStatus when login.pending', () => {
    const expectedState = {
      user: null,
      authorizationStatus: AutorizationStatus.Unknown,
      requestStatus: RequestStatus.Loading,
    };

    const result = userSlice.reducer(undefined, userActions.login.pending);
    expect(result).toEqual(expectedState);
  });

  it('should set user, auth status and success on login.fulfilled', () => {

    const fakeUser = makeFakeUser();
    const expectedState = {
      user: fakeUser,
      authorizationStatus: AutorizationStatus.Auth,
      requestStatus: RequestStatus.Success,
    };

    const loginPayload = { email: 'test@test.com', password: '1k' };

    const result = userSlice.reducer(
      undefined,
      userActions.login.fulfilled(fakeUser, 'requestId', loginPayload)
    );
    expect(result).toEqual(expectedState);
  });

  it('should set NoAuth and failed on login.rejected', () => {
    const expectedState = {
      user: null,
      authorizationStatus: AutorizationStatus.NoAuth,
      requestStatus: RequestStatus.Failed,
    };

    const loginPayload = { email: 'test@test.com', password: '123' };

    const result = userSlice.reducer(
      undefined,
      userActions.login.rejected(null, 'requestId', loginPayload)
    );
    expect(result).toEqual(expectedState);
  });
});


describe('logout', () => {
  const fakeUser = makeFakeUser();
  const authorizedState = {
    user: fakeUser,
    authorizationStatus: AutorizationStatus.Auth,
    requestStatus: RequestStatus.Success,
  };

  it('should set loading on requestStatus when logout.pending', () => {
    const expectedState = {
      ...authorizedState,
      requestStatus: RequestStatus.Loading,
    };

    const result = userSlice.reducer(authorizedState, userActions.logout.pending);
    expect(result).toEqual(expectedState);
  });

  it('should clear user and set NoAuth on logout.fulfilled', () => {
    const expectedState = {
      user: null,
      authorizationStatus: AutorizationStatus.NoAuth,
      requestStatus: RequestStatus.Success,
    };

    const result = userSlice.reducer(
      authorizedState,
      userActions.logout.fulfilled(undefined, 'requestId', undefined)
    );
    expect(result).toEqual(expectedState);
  });

  it('should clear user and set NoAuth on logout.rejected', () => {
    const expectedState = {
      user: null,
      authorizationStatus: AutorizationStatus.NoAuth,
      requestStatus: RequestStatus.Success,
    };

    const result = userSlice.reducer(
      authorizedState,
      userActions.logout.rejected(null, 'requestId', undefined)
    );
    expect(result).toEqual(expectedState);
  });
});
