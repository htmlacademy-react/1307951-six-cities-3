import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AutorizationStatus, NameSpace, RequestStatus } from '../../components/const';
import { RootState } from '..';
import { TUser } from '../../components/types';
import { checkAuth, login, logout } from './user-thunk';


export interface UserState {
  user: TUser | null;
  authorizationStatus: AutorizationStatus;
  requestStatus: RequestStatus;
}

const initialState: UserState = {
  user: null,
  authorizationStatus: AutorizationStatus.Unknown,
  requestStatus: RequestStatus.Idle,
};

function processLoading(state: UserState){
  state.requestStatus = RequestStatus.Loading;
}

function processFailed(state: UserState){
  state.requestStatus = RequestStatus.Failed;
  state.authorizationStatus = AutorizationStatus.NoAuth;
}

function processSuccess(state: UserState, action:PayloadAction<TUser>){
  state.requestStatus = RequestStatus.Success;
  state.user = action.payload;
  state.authorizationStatus = AutorizationStatus.Auth;
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.pending, processLoading)
      .addCase(checkAuth.fulfilled, processSuccess)
      .addCase(checkAuth.rejected, processFailed)

      .addCase(login.pending, processLoading)
      .addCase(login.fulfilled, processSuccess)
      .addCase(login.rejected, processFailed)

      .addCase(logout.pending, processLoading)
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = AutorizationStatus.NoAuth;
        state.user = null;
      })
      .addCase(logout.rejected, (state) => {
        state.authorizationStatus = AutorizationStatus.NoAuth;
        state.user = null;
      });
  }

});

export const userActions = {...userSlice.actions, checkAuth, login, logout};
export const selectAuthorizationStatus = (state: RootState) => state[NameSpace.User].authorizationStatus;
export const selectUser = (state: RootState) => state[NameSpace.User].user;
export const selectRequestStatus = (state: RootState) => state[NameSpace.User].requestStatus;
export default userSlice.reducer;
