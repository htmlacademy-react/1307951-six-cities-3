import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Favorites from '../../components/favorites/favorites';
import FavoritesEmpty from '../../components/favorites/favorites-empty';
import { useActionCreators, useAppSelector } from '../../store/hooks';
import { selectFavoritesLength } from '../../store/favorites/favorites-selectors';
import { useEffect } from 'react';
import { favoritesActions, selectRequestStatus } from '../../store/favorites/favorites-slice';
import { RequestStatus } from '../../components/const';
import Spinner from '../../components/spinner/spinner';
import NotFound from '../../components/not-found/not-found';


function FavoritesScreen(): JSX.Element {

  const numberOfFavorites = useAppSelector(selectFavoritesLength);
  const status = useAppSelector(selectRequestStatus);
  const { fetchFavorites } = useActionCreators(favoritesActions);


  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  const isEmpty = status === RequestStatus.Success && numberOfFavorites === 0;

  return (
    <>
      <Helmet>
        <title>
          Favorites screen
        </title>
      </Helmet>

      <div className={`page ${isEmpty ? 'page--favorites-empty' : ''}`}>
        <Header />
        {status === RequestStatus.Loading && <Spinner />}
        {status === RequestStatus.Failed && <NotFound type="other" />}
        {isEmpty && <FavoritesEmpty />}
        {status === RequestStatus.Success && numberOfFavorites > 0 && <Favorites />}
        <Footer />
      </div>


    </>
  );
}

export default FavoritesScreen;
