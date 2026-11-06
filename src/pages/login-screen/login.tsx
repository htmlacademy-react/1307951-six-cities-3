import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import { FormEvent,ReactEventHandler, useState } from 'react';
import { userActions } from '../../store/user/user-slice';
import { useActionCreators } from '../../store/hooks';
import { getRandomCityName } from '../../utils/random';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../components/const';
import { uiActions } from '../../store/ui/ui-slice';


type THTMLLoginForm = HTMLFormElement & {
  email: HTMLInputElement;
  password: HTMLInputElement;
};

type TChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;

function Login(): JSX.Element {
  const { setActiveCity } = useActionCreators(uiActions);
  const rundomCity = getRandomCityName();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { login } = useActionCreators(userActions);

  const handleChange: TChangeHandler = (evt) => {
    const {name, value} = evt.currentTarget;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  function handleCityChange() {
    setActiveCity(rundomCity);
  }

  function handleSubmit(event: FormEvent<THTMLLoginForm>) {
    event.preventDefault();
    login(formData);
  }

  return (
    <div className="page page--gray page--login">

      <Helmet>
        <title>Login screen</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>

            <form
              className="login__form form"
              action="#"
              onSubmit={handleSubmit}
              method="post"
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>

          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Main}
                onClick={handleCityChange}
              >
                <span>{rundomCity}</span>
              </Link>
            </div>
          </section>

        </div>
      </main>

    </div>
  );
}

export default Login;
