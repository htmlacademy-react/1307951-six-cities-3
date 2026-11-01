import { useLocation } from 'react-router-dom';
import Logo from '../logo/logo';
import { AppRoute } from '../const';
import Navigation from './navigation';


function Header(): JSX.Element {
  const { pathname } = useLocation();
  const isLoginScreen = pathname === AppRoute.Login as string;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">

          <div className="header__left">
            <Logo />
          </div>

          {isLoginScreen ? '' : <Navigation />}

        </div>
      </div>
    </header>
  );
}

export default Header;
