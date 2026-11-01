import { Link } from 'react-router-dom';
import { useActionCreators, useAppSelector, useAuth } from '../../store/hooks';
import { favoritesActions } from '../../store/favorites/favorites-slice';
import { selectUser, userActions } from '../../store/user/user-slice';
import { selectFavoritesLength } from '../../store/favorites/favorites-selectors';
import { useEffect } from 'react';
import { AppRoute } from '../const';

function LoggedNavigation(): JSX.Element {
  const { fetchFavorites } = useActionCreators(favoritesActions);
  const { logout } = useActionCreators(userActions);

  const user = useAppSelector(selectUser);
  const isAuth = useAuth();
  const numberOfFavorites = useAppSelector(selectFavoritesLength);

  useEffect(() => {
    if (isAuth) {
      fetchFavorites();
    }
  }, [isAuth, fetchFavorites]);

  return (
    <>
      <li className='header__nav-item user'>
        <Link
          className='header__nav-link header__nav-link--profile'
          to={AppRoute.Favorites}
        >
          <div className='header__avatar-wrapper user__avatar-wrapper'></div>
          <span className='header__user-name user__name'>
            {user?.email}
          </span>
          <span className='header__favorite-count'>{numberOfFavorites}</span>
        </Link>
      </li>
      <li className='header__nav-item'>
        <Link
          className='header__nav-link'
          onClick={() => {
            logout();
          }}
          to=''
        >
          <span className='header__signout'>Sign out</span>
        </Link>
      </li>
    </>
  );
}

export default LoggedNavigation;
