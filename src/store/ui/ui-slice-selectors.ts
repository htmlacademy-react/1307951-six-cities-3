import { RootState } from '..';
import { NameSpace } from '../../components/const';

export const selectActiveCity = (state: Pick<RootState, NameSpace.Ui>) => state[NameSpace.Ui].activeCity;
export const selectSortType = (state: Pick<RootState, NameSpace.Ui>) => state[NameSpace.Ui].sortType;
export const selectActiveOfferId = (state: Pick<RootState, NameSpace.Ui>) => state[NameSpace.Ui].activeOfferId;
