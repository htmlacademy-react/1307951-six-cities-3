import { placeCardsInfo } from '../../../components/const.ts';

type PlaceCardType = {
  src: string;
  price: string;
}

function PlaceCard({src, price}: PlaceCardType): JSX.Element {
  return (
    <article className="cities__card place-card">
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={src} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">Canal View Prinsengracht</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}


// function PlaceCardsList(): JSX.Element {
//   return (
//     <div className="cities__places-list places__list tabs__content">
//       {placeCardsInfo.map((info) => <PlaceCard src={info.src} price={info.price} key={info.id} />)}

//     </div>);
// }

const PlaceCardsList = (): JSX.Element =>
  (
    <div className="cities__places-list places__list tabs__content">
      {placeCardsInfo.map((info) => <PlaceCard src={info.src} price={info.price} key={info.id} />)}
    </div>
  );


export default PlaceCardsList;
