import { Header } from '../../components/header/header';
import { FavoriteList } from './favoirte-list';
import {OfferType} from '../../components/const';

type FavoritesType = { offers: OfferType[]};

// !!! предполагаем, что сюда попадают только избранные предложения !!!
const Favorites = ({ offers }: FavoritesType): JSX.Element =>
  (
    <div className='page'>
      <Header />
      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='favorites'>
            <h1 className='favorites__title'>Saved listing</h1>
            <FavoriteList offers={offers} />
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

export { Favorites };
