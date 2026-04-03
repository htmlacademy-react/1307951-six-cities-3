import { FavoriteDataType } from '../../components/const';
import { FavoriteLocation } from '../favorites/favorite-location';
import { FavoriteCardList } from './favorite-card-list';

type FavoriteItemType = {
  favoriteOffersByCity: FavoriteDataType;
};

const FavoriteItem = ({favoriteOffersByCity} : FavoriteItemType) : JSX.Element =>
  (
    <li className='favorites__locations-items'>
      <FavoriteLocation city={favoriteOffersByCity.cityName}/>
      <FavoriteCardList offers={favoriteOffersByCity.favorites}/>
    </li>
  );

export { FavoriteItem };
