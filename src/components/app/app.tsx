import Login from '../../pages/login-screen/login';
import PrivateRoute from '../private-route/private-route';
import Favorites from '../../pages/favorites-screen/favorites-screen';
import NotFound from '../not-found/not-found';
import MainScreen from '../../pages/main-screen/main-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';

import { HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AutorizationStatus } from '../const';
import { useAppSelector,} from '../../store/hooks';
import { selectAuthorizationStatus } from '../../store/user/user-slice';
import { useEffect } from 'react';
import Spinner from '../spinner/spinner';
import { getToken } from '../../services/token';
import { checkAuth } from '../../store/user/user-thunk';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const token = getToken();

  // проверяем есть ли токен. Если есть, то логинимся
  useEffect(() => {
    if(token) {
      checkAuth();
    }
  }, [token]);

  if (authorizationStatus === AutorizationStatus.Unknown) {
    return <Spinner />;
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>

          <Route path={AppRoute.Main} element={<MainScreen />}/>
          <Route path={AppRoute.Login} element={
            <PrivateRoute onlyUnAuth>
              <Login />
            </PrivateRoute>
          }
          />

          <Route path={AppRoute.Favorites}
            element={
              <PrivateRoute >
                <Favorites />
              </PrivateRoute>
            }
          />


          <Route path={`${AppRoute.Offer}/:id`} element={<OfferScreen />} />
          <Route path='*' element={<NotFound type={'page'}/>} />

        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />

    </HelmetProvider>
  );
}


export default App;
