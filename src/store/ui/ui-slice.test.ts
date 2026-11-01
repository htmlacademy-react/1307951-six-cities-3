import { DEFAULT_CITY_NAME, SortType } from '../../components/const';
import { uiActions, uiSlice } from './ui-slice';

describe('Ui Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      activeCity: DEFAULT_CITY_NAME,
      sortType: SortType.Popular,
      activeOfferId: null,
    };

    const result = uiSlice.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with sortType popular and active city by default when the action is empty', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      activeCity: DEFAULT_CITY_NAME,
      sortType: SortType.Popular,
      activeOfferId: null,
    };

    const result = uiSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should change active city name Brussels to Amsterdam by "setActiveCity" action', () => {
    const initialState = {
      activeCity: 'Brussels',
      sortType: SortType.Popular,
      activeOfferId: null,
    };
    const expectedState = {
      activeCity: 'Amsterdam',
      sortType: SortType.Popular,
      activeOfferId: null,
    };

    const result = uiSlice.reducer(initialState, uiActions.setActiveCity('Amsterdam'));

    expect(result).toEqual(expectedState);
  });

  it('should change sortType from PriceHighToLow to TopRated by "setSortType" action', () => {
    const initialState = {
      activeCity: 'Amsterdam',
      sortType: SortType.PriceHighToLow,
      activeOfferId: null,
    };
    const expectedState = {
      activeCity: 'Amsterdam',
      sortType: SortType.TopRated,
      activeOfferId: null,
    };

    const result = uiSlice.reducer(initialState, uiActions.setSortType('top-rated'));

    expect(result).toEqual(expectedState);
  });

  it('should change activeOfferId by "setActiveOfferId', () => {
    const initialState = {
      activeCity: 'Amsterdam',
      sortType: SortType.PriceHighToLow,
      activeOfferId: null,
    };
    const expectedState = {
      activeCity: 'Amsterdam',
      sortType: SortType.PriceHighToLow,
      activeOfferId: '123654',
    };

    const result = uiSlice.reducer(initialState, uiActions.setActiveOfferId('123654'));

    expect(result).toEqual(expectedState);
  });

  it('should return initial default state by "resetCityOffers"', () => {
    const initialState = {
      activeCity: 'Amsterdam',
      sortType: SortType.PriceHighToLow,
      activeOfferId: null,
    };
    const expectedState = {
      activeCity: DEFAULT_CITY_NAME,
      sortType: SortType.Popular,
      activeOfferId: null,
    };

    const result = uiSlice.reducer(initialState, uiActions.resetCityOffers());

    expect(result).toEqual(expectedState);
  });

});
