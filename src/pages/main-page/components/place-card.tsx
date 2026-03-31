import { AppRoute, OfferType } from '../../../components/const.ts';
import { useState } from 'react';
import Premium from '../../../components/premium.tsx';
import { Link } from 'react-router-dom';


// в состояние активная карточка с предложением id Событие навести курсор
// function Premium(): JSX.Element {
//   return (<div className="place-card__mark"><span>Premium</span></div>);
// }

function PlaceCard(card: OfferType): JSX.Element {
  const [isActiveCard, setActiveCardClass] = useState(false);

  return (
    <article className = {
      `cities__card place-card ${isActiveCard ? 'place-card__bookmark-button--active' : ''}`
    }
    onMouseOver = {
      (e) => {
        // console.log('onMouseOver');
        e.preventDefault();
        setActiveCardClass(true);
      }
    }
    onMouseLeave = {
      (e) => {
        e.preventDefault();
        // console.log('onMouseLeave');
        setActiveCardClass(false);
      }
    }
    >

      {card.isPremium ? <Premium /> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}${card.id}`}>
          <img className="place-card__image" src={card.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{card.price} &euro;</b>
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
            <span style={{ width: `${card.rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}${card.id}`}>{card.title}</Link>
        </h2>
        <p className="place-card__type">{card.type}</p>
      </div>
    </article>
  );
}


export default PlaceCard;
