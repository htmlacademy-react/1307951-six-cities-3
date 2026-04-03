import { OfferType, CityList, FavoriteDataType } from '../../components/const';
import { FavoriteItem } from './favorite-item';


type FavoriteListType = {
  offers: OfferType[];
}

const FavoriteList = ({ offers }: FavoriteListType):JSX.Element=> {

  // собрали в массив все любимые места
  const favoriteDataList: OfferType[] = offers.filter((offer) => offer.isFavorite === true);

  // массив объектов с указанием города и массива его мест
  const favoriteOffersByCities : FavoriteDataType[] = [];

  // если массив полон, то создаем массив объектов
  if (favoriteDataList.length) {

    let counter = 0;
    Object.values(CityList).forEach((cityName: string) => {

      // массив избранных мест в определенном городе
      const favoritePlacesInTheCity = favoriteDataList.filter((offer: OfferType) => offer.city.name === cityName);

      // если в готоде есть любимое место, тогда добавляем в массив
      if (favoritePlacesInTheCity.length) {
        favoriteOffersByCities.push({
          id: counter,
          cityName: cityName,
          favorites: favoritePlacesInTheCity,
        });

        counter++;
      }
    });
  }

  return (
    <ul className='favorites__list'>
      {
        favoriteOffersByCities.map((offersByCity) =>
          <FavoriteItem favoriteOffersByCity={offersByCity} key={offersByCity.id} />)
      }
    </ul>);
};

export { FavoriteList };
