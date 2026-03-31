import Logo from '../../components/logo/logo';
import {OfferType} from '../../components/const';
import { CityList } from '../../components/const';
import Premium from '../../components/premium';

type FavoritesType = { offers: OfferType[]};

type FavoriteDataType = {
  id: number;
  cityName: string;
  favoritePlaces: OfferType[];
};

const FavoritePlace = ({ place }: { place: OfferType }): JSX.Element => (
  <article className='favorites__card place-card'>
    {place.isPremium ? <Premium /> : ''}
    <div className='favorites__image-wrapper place-card__image-wrapper'>
      <a href='#'>
        <img
          className='place-card__image'
          src={place.previewImage}
          width={150}
          height={110}
          alt='Place image'
        />
      </a>
    </div>
    <div className='favorites__card-info place-card__info'>
      <div className='place-card__price-wrapper'>
        <div className='place-card__price'>
          <b className='place-card__price-value'>€{place.price}</b>
          <span className='place-card__price-text'>
            /&nbsp;night
          </span>
        </div>
        <button
          className='place-card__bookmark-button place-card__bookmark-button--active button'
          type='button'
        >
          <svg
            className='place-card__bookmark-icon'
            width={18}
            height={19}
          >
            <use xlinkHref='#icon-bookmark' />
          </svg>
          <span className='visually-hidden'>In bookmarks</span>
        </button>
      </div>
      <div className='place-card__rating rating'>
        <div className='place-card__stars rating__stars'>
          <span style={{ width: `${place.rating * 20}%`} } />
          <span className='visually-hidden'>Rating</span>
        </div>
      </div>
      <h2 className='place-card__name'>
        <a href='#'>{place.title}</a>
      </h2>
      <p className='place-card__type'>{place.type}</p>
    </div>
  </article>
);


const FavoritePlaces = ({ places }: { places: OfferType[] }): JSX.Element =>
  (
    <div className='favorites__places'>
      {
        places.map((offer) => <FavoritePlace key={offer.id} place={offer} />)
      }
    </div>
  );


const FavoriteLocation = ({location} : {location: string}):JSX.Element =>
  (
    <div className='favorites__locations locations locations--current'>
      <div className='locations__item'>
        <a className='locations__item-link' href='#'>
          <span>{location}</span>
        </a>
      </div>
    </div>
  );


const FavoriteLocationItem = ({favoriteCity} : {favoriteCity: FavoriteDataType}) : JSX.Element =>(

  <li className="favorites__locations-items">
    <FavoriteLocation location={favoriteCity.cityName}/>
    <FavoritePlaces places={favoriteCity.favoritePlaces}/>
  </li>
);

const FavoriteList = ({ offers }: FavoritesType):JSX.Element=> {
// собрали в массив все любимые места
  const favorites: OfferType[] = offers.filter((offer) => offer.isFavorite === true);
  // массив объектов с указанием города и массива его мест
  const favoriteOffersByCities : FavoriteDataType[] = [];
  // если массив полон, то создаем массив объектов
  if (favorites.length) {
    let counter = 0;
    Object.values(CityList).forEach((cityName: string) => {

      const favoritePlacesInTheCity = favorites.filter((offer: OfferType) => offer.city.name === cityName);
      // если в готоде есть любимое место, тогда добавляем в массив
      if (favoritePlacesInTheCity.length) {
        favoriteOffersByCities.push({
          id: counter,
          cityName: cityName,
          favoritePlaces: favoritePlacesInTheCity,
        });
        counter++;
      }
    });
  }

  return (
    <ul className='favorites__list'>
      {
        favoriteOffersByCities.map((offerByCity) =>
          <FavoriteLocationItem favoriteCity={offerByCity} key={offerByCity.id} />)
      }
    </ul>);
};


function Favorites({offers} : FavoritesType): JSX.Element {

  return (
    <div className='page'>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <Logo />
            </div>
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                <li className='header__nav-item user'>
                  <a
                    className='header__nav-link header__nav-link--profile'
                    href='#'
                  >
                    <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                    <span className='header__user-name user__name'>
                      Oliver.conner@gmail.com
                    </span>
                    <span className='header__favorite-count'>3</span>
                  </a>
                </li>
                <li className='header__nav-item'>
                  <a className='header__nav-link' href='#'>
                    <span className='header__signout'>Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='favorites'>
            <h1 className='favorites__title'>Saved listing</h1>
            <FavoriteList offers={offers}/>
          </section>
        </div>
      </main>
      <footer className='footer container'>
        <a className='footer__logo-link' href='main.html'>
          <img
            className='footer__logo'
            src='img/logo.svg'
            alt='6 cities logo'
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>

  );
}

export default Favorites;
