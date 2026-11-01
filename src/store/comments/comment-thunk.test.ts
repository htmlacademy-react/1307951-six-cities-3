import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { createAPI } from '../../services/api';
import { RootState } from '..';
import { AppThunkDispatch, extractActionsTypes, makeFakeComment } from '../../utils/mocks';
import { fetchComments } from './comments-thunk';
import { APIRoute, NameSpace } from '../../components/const';

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

  describe('Comment thunk Acync Action', () => {
    it('sould dispatch "fetchComments.pending" and "fetchComments.fulfilled", when server response 200',
      async () => {
        mockAxiosAdapter.onGet(`${APIRoute.Comments}/offer-id`).reply(200);
        await store.dispatch(fetchComments('offer-id'));
        const actions = extractActionsTypes(store.getActions());

        expect(actions).toEqual([
          fetchComments.pending.type,
          fetchComments.fulfilled.type,
        ]);

      });

    it('sould dispatch "fetchComments.pending" and "fetchComments.rejected" when server response 400',
      async () => {
        mockAxiosAdapter.onGet(`${APIRoute.Comments}/offer-id`).reply(400);
        await store.dispatch(fetchComments('offer-id'));
        const actions = extractActionsTypes(store.getActions());

        expect(actions).toEqual([
          fetchComments.pending.type,
          fetchComments.rejected.type,
        ]);

      });

  });

  describe('fetchCommentAction',()=> {
    it('sould dispatch "fetchCommentsAction.pending", "fetchQuestionAction.fullfiled", when server response 200', async () => {
      const mockComments = [makeFakeComment()];
      mockAxiosAdapter.onGet(`${APIRoute.Comments}/offer-id`).reply(200, mockComments);

      await store.dispatch(fetchComments('offer-id'));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchCommentActionFulfilled = emittedActions.at(1) as ReturnType <typeof fetchComments.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchComments.pending.type,
        fetchComments.fulfilled.type,
      ]);

      expect(fetchCommentActionFulfilled.payload)
        .toEqual(mockComments);
    });

    it('sould dispatch "fetchCommentsAction.pending", "fetchQuestionAction.rejected", when server response 400', async () => {
      mockAxiosAdapter.onGet(`${APIRoute.Comments}/offer-id`).reply(400,[]);

      await store.dispatch(fetchComments('offer-id'));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        fetchComments.pending.type,
        fetchComments.rejected.type,
      ]);
    });

  });
});
