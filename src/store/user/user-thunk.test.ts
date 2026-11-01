import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { createAPI } from '../../services/api';
import { RootState } from '..';
import { AppThunkDispatch, extractActionsTypes } from '../../utils/mocks';
import { checkAuth, login, logout } from './user-thunk';
import { APIRoute, NameSpace } from '../../components/const';
import { TLogInfo } from '../../components/types';
import * as tokenStorage from '../../services/token';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);

  const middlware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<RootState, Action<string>, AppThunkDispatch>(middlware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({
      [NameSpace.Comments]: { comments: [] },
    } as unknown as RootState);
  });

  describe('CheckAuth action', () => {
    it('should dispatch "checkAuth.pending", "checkAuth.fulfilled", when server reply with code 200',
      async () => {

        const fakeServerReplay = { token: 'secret' };
        vi.spyOn(tokenStorage, 'getToken').mockReturnValue('fake-token');
        mockAxiosAdapter.onGet(APIRoute.Login).reply(200, fakeServerReplay);
        await store.dispatch(checkAuth());
        const actions = extractActionsTypes(store.getActions());

        expect(actions).toEqual([
          checkAuth.pending.type,
          checkAuth.fulfilled.type,
        ]);
      }
    );
  });

  describe('Login action', () => {
    it('should dispatch "login.pending", "login.fulfilled", when server response 200',
      async () => {
        const fakeUser: TLogInfo = { email: 'hoho@mail.ru', password: '1d' };
        const fakeServerReplay = { token: 'secret' };
        mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);

        await store.dispatch(login(fakeUser));
        const actions = extractActionsTypes(store.getActions());

        expect(actions).toEqual([
          login.pending.type,
          login.fulfilled.type,
        ]);
      }
    );

    it('should call "saveToken" once with the recieved token',
      async () => {

        const fakeUser: TLogInfo = { email: 'hoho@mail.ru', password: '1d' };
        const fakeServerReplay = { token: 'secret' };
        mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);
        const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');

        await store.dispatch(login(fakeUser));

        expect(mockSaveToken).toBeCalledTimes(1);
        expect(mockSaveToken).toBeCalledWith(fakeServerReplay.token);
      });
  });

  describe('Logout action', () => {
    it('should dispatch "logout.pending", "logout.fulfilled" when server response 204',
      async () => {
        mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);

        await store.dispatch(logout());
        const actions = extractActionsTypes(store.getActions());

        expect(actions).toEqual([
          logout.pending.type,
          logout.fulfilled.type,
        ]);
      }
    );

    it('should one call "dropToken" with "logoutAction"', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);
      const mockDropToken = vi.spyOn(tokenStorage, 'dropToken');

      await store.dispatch(logout());

      expect(mockDropToken).toBeCalledTimes(1);
    });
  });
});
