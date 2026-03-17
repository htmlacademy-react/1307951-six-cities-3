import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import { NumberOfOffers, AppRoute, AuthorizationStatus } from '../const.ts';
import PrivateRoute from '../private-route/private-route.tsx';
import { NotFound404 } from '../not-found-404/not-found-404.tsx';
import Login from '../../pages/login/login.tsx';
import {HelmetProvider} from 'react-helmet-async';
import Offer from '../../pages/offer/offer.tsx';

function App(): JSX.Element {
  // return (<MainPage offers={NumberOfOffers.offers}/>);
  return (

    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage offers={NumberOfOffers.offers} />}
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <Favorites/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<Offer />}
          />
          <Route
            path="*"
            element={<NotFound404 />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
