import { DEFAULT_CITY_NAME, NameSpace, SortType } from '../../components/const';
import { selectActiveCity, selectSortType } from './ui-slice-selectors';

describe('UiSlice selectors', () => {
  const state = {
    [NameSpace.Ui]: {
      activeCity: DEFAULT_CITY_NAME,
      sortType: SortType.TopRated,
      activeOfferId: null,
    }
  };

  it('sould return active city from state', () => {
    const { activeCity } = state[NameSpace.Ui];
    const result = selectActiveCity(state);
    expect(result).toBe(activeCity);
  });

  it('should return sortType from state', () => {
    const { sortType } = state[NameSpace.Ui];
    const result = selectSortType(state);
    expect(result).toBe(sortType);

  });


});
