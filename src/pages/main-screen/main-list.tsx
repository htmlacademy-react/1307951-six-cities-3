import OfferList from '../../components/offers-list/offers-list';
import Sorting from '../../components/sorting/sorting';
import Map from '../../components/map/map';
import { TOffer, TSortType } from '../../components/types';
import { useCallback, useEffect } from 'react';
import { useActionCreators, useAppDispatch, useAppSelector } from '../../store/hooks';
import { offersActions, selectOffersLoading } from '../../store/offers/offers-slice';
import { selectActiveCityLocation, selectSortedOffers, selectSortedOffersLength } from '../../store/offers/offers-selectors';
import { selectActiveCity, selectActiveOfferId, selectSortType } from '../../store/ui/ui-slice-selectors';
import Spinner from '../../components/spinner/spinner';
import { AutorizationStatus } from '../../components/const';
import { selectAuthorizationStatus } from '../../store/user/user-slice';
import { favoritesActions } from '../../store/favorites/favorites-slice';
import { toast } from 'react-toastify';
import { uiActions } from '../../store/ui/ui-slice';


export function MainList(): JSX.Element {

  const dispatch = useAppDispatch();
  const { fetchAllOffers } = useActionCreators(offersActions);
  const { setActiveOfferId, setSortType } = useActionCreators(uiActions);
  const { fetchFavorites } = useActionCreators(favoritesActions);

  const sortedOffersLength = useAppSelector(selectSortedOffersLength);
  const isLoading = useAppSelector(selectOffersLoading);
  const activeCity = useAppSelector(selectActiveCity);
  const sortType = useAppSelector(selectSortType);
  const sortedOffers = useAppSelector(selectSortedOffers);
  const activeOfferId = useAppSelector(selectActiveOfferId);
  const activeCityLocation = useAppSelector(selectActiveCityLocation);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  useEffect(() => {
    if (sortedOffersLength === 0) {
      fetchAllOffers()
        .unwrap()
        .catch((err) => {
          const message =
            typeof err === 'string'
              ? err
              : (err as { message?: string })?.message
              ?? 'Ошибка при загрузке приложения';
          toast.error(message);
        });
    }

  }, [dispatch, fetchAllOffers, sortedOffersLength]);

  useEffect(() => {
    if (authorizationStatus === AutorizationStatus.Auth) {
      fetchFavorites();
    }
  }, [authorizationStatus, fetchFavorites]);

  const handleActiveOfferChange = useCallback((offer: TOffer | null): void => {
    setActiveOfferId(offer?.id ?? null);
  }, []);

  const handleSortChange = useCallback((option: TSortType): void => {
    setSortType(option);
  },[]);

  if (isLoading) {
    return (<Spinner />);
  }
  return (
    <div className='cities__places-container container'>
      <section className='cities__places places'>
        <h2 className='visually-hidden'>Places</h2>
        <b className='places__found'>
          {`${sortedOffersLength} ${sortedOffersLength === 1 ? 'place' : 'places'} to stay in ${activeCity}`}
        </b>

        <Sorting sortType={sortType} onSortChange={handleSortChange} />

        <div className='cities__places-list places__list tabs__content'>
          <OfferList
            key={activeCity}
            offers={sortedOffers}
            onActiveOfferChange={handleActiveOfferChange}
          />
        </div>
      </section>

      <div className='cities__right-section'>
        {
          activeCityLocation &&
          <Map
            city={activeCityLocation}
            offers={sortedOffers}
            activeOfferId={activeOfferId}
            className='cities__map'
          />
        }
      </div>
    </div>
  );
}
