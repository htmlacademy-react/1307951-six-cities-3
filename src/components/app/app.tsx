import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import { NumberOfOffers, AppRoute, AuthorizationStatus } from '../const.ts';
import PrivateRoute from '../private-route/private-route.tsx';
import { ErrorPage } from '../../pages/error-page/error-page.tsx';
import Login from '../../pages/login/login.tsx';
import {HelmetProvider} from 'react-helmet-async';
import Offer from '../../pages/offer/offer.tsx';
import {OffersListType} from '../const.ts';
import {offers as allOffers} from '../../mocks/offers.ts';


type AppType = {
  offers: OffersListType;
}

function App({offers}:AppType): JSX.Element {
  return (

    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage offersNumber={NumberOfOffers.offers} offersList1={offers}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              // <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Favorites offers={offers.offersList2}/>
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}id`}
            element={<Offer offers={allOffers}/>}
          />
          <Route
            path="*"
            element={<ErrorPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
