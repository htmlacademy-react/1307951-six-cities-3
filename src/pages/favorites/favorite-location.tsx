type FavoriteLocationType = {
  city: string;
};

const FavoriteLocation = ({city} : FavoriteLocationType):JSX.Element =>
  (
    <div className='favorites__locations locations locations--current'>
      <div className='locations__item'>
        <a className='locations__item-link' href='#'>
          <span>{city}</span>
        </a>
      </div>
    </div>
  );

export { FavoriteLocation };
