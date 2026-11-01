import { selectFavoritesByCityName } from '../../store/favorites/favorites-selectors';
import { useAppSelector } from '../../store/hooks';
import FavoriteCity from './favorite-city';


function Favorites(): JSX.Element {
  const favorites = useAppSelector(selectFavoritesByCityName);

  return (
    <main className='page__main page__main--favorites'>
      <div className='page__favorites-container container'>
        <section className='favorites'>
          <h1 className='favorites__title'>Saved listing</h1>
          <ul className='favorites__list'>

            {
              favorites.map((favorite) =>
                (
                  <FavoriteCity
                    key={favorite.cityName}
                    cityFavorites={favorite}
                  />
                ))
            }
          </ul>
        </section>
      </div>
    </main>

  );
}


export default Favorites;
