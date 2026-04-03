import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Main } from '../../pages/main/main.tsx';
import { Favorites } from '../../pages/favorites/favorites.tsx';
import { AppRoute, AuthorizationStatus } from '../const.ts';
import { PrivateRoute } from '../private-route/private-route.tsx';
import { Error } from '../../pages/error/error.tsx';
import { Login } from '../../pages/login/login.tsx';
import { HelmetProvider } from 'react-helmet-async';
import { OffersType } from '../const.ts';
import { offersDetailed } from '../../mocks/offers-detailed.ts';
import { Offer } from '../../pages/offer/offer.tsx';


const App = ({offers}:OffersType): JSX.Element => (

  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main offers={offers} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={

            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Offer}id`}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth} >
              <Offer offers={offersDetailed} />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);


export {App};
