import { AppRoute } from '../const';

export const NotFound404 = () => (
  <div style={{
    color: 'MidnightBlue',
    margin: '0 auto',
    padding: '80px 10px 10px 10px',
    width: 'max-content'
  }}
  >
    <h2 style={{
      width: 'fit-content',
      height: 'min-content',
      margin: '10px auto 40px',
      fontSize: '56px',
      fontWeight: 'bold'
    }}
    >{'404 Not Found'}
    </h2>

    <a href={AppRoute.Main} style={{
      width: 'fit-content',
      display: 'block',
      margin: '0 auto',
      fontSize: '32px',
      textDecoration: 'underline'
    }}
    >Вернуться
    </a>
  </div>);
