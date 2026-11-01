import { RequestStatus } from '../../components/const';
import { makeFakeComment, makeFakeCommentInfo } from '../../utils/mocks';
import { commentsSlice, commentsActions } from './comments-slice';
import { commentsThunks } from './comments-thunk';


describe('Comments Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      items: [],
      requestStatus: RequestStatus.Failed,
      error: 'ww',
    };

    const result = commentsSlice.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty items and requestStatus idle', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      items: [],
      requestStatus: RequestStatus.Idle,
      error: '',
    };

    const result = commentsSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should clear comments with "clearComments" action', () => {
    const initialState = {
      items: [],
      requestStatus: RequestStatus.Success,
      error: '',
    };

    const expectedState = {
      items: [],
      requestStatus: RequestStatus.Idle,
      error: '',
    };

    const result = commentsSlice.reducer(initialState, commentsActions.clearComments);
    expect(result).toEqual(expectedState);

  });

  it('sould set requestStatus to Loading', () => {
    const expectedState = {
      items: [],
      requestStatus: RequestStatus.Loading,
      error: '',
    };

    const result = commentsSlice.reducer(undefined, commentsThunks.fetchComments.pending);

    expect(result).toEqual(expectedState);
  });

  it('sould set requestStatus to Failed', () => {
    const expectedState = {
      items: [],
      requestStatus: RequestStatus.Failed,
      error: 'ошибка загрузки',
    };

    const result = commentsSlice.reducer(
      undefined,
      commentsThunks.fetchComments.rejected
    );

    expect(result).toEqual(expectedState);
  });

  it('should set requestStatus to success', () => {
    const fakeComment = makeFakeComment();

    const expectedState = {
      items: [fakeComment],
      requestStatus: RequestStatus.Success,
      error: '',
    };

    const result = commentsSlice.reducer(
      undefined,
      commentsThunks.fetchComments.fulfilled(
        [fakeComment],
        'test-request-id',
        ''
      )
    );

    expect(result).toEqual(expectedState);
  });


  it('should set error when post comment with rejected status', () => {
    const expectedState = {
      items: [],
      requestStatus: RequestStatus.Idle,
      error: 'ошибка отправки',
    };

    const result = commentsSlice.reducer(undefined, commentsActions.postComment.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set comment when post comment with success status', () => {
    const fakeComment = makeFakeComment();
    const expectedState = {
      items: [fakeComment],
      requestStatus: RequestStatus.Idle,
      error: '',
    };

    const result = commentsSlice.reducer(
      undefined,
      commentsActions.postComment.fulfilled(
        fakeComment,
        'test-request-id',
        makeFakeCommentInfo(),
      ));

    expect(result).toEqual(expectedState);
  });

});
