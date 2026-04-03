import { Link } from 'react-router-dom';

type FavoriteLocationType = {
  city: string;
};

const FavoriteLocation = ({city} : FavoriteLocationType):JSX.Element =>
  (
    <div className='favorites__locations locations locations--current'>
      <div className='locations__item'>
        <Link className='locations__item-link' to='#'>
          <span>{city}</span>
        </Link>
      </div>
    </div>
  );

export { FavoriteLocation };
