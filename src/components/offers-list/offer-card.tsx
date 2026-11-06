import { Link } from 'react-router-dom';
import { TOffer } from '../types';
import { AppRoute } from '../const';
import { useFavoriteClick } from '../../hooks/use-favorite-click';
import { selectFavoritePendingIds } from '../../store/favorites/favorites-selectors';
import { useAppSelector } from '../../store/hooks';
import React from 'react';


type TOfferCard = {
  offer: TOffer;
  onOfferHover?: (offer: TOffer | null) => void;
}

function OfferCard({ offer, onOfferHover }: TOfferCard) {

  const handleClick = useFavoriteClick();
  const pendingIds = useAppSelector(selectFavoritePendingIds);
  const isPending = Boolean(pendingIds[offer.id]);

  const route = `${AppRoute.Offer}/${offer.id}`;

  const handleMouseOver = () => {
    onOfferHover?.(offer);
  };

  const handleMouseLeave = () => {
    onOfferHover?.(null);
  };

  const handleFavoriteClick = () => {
    if(isPending) {
      return;
    }
    handleClick(offer.id, offer.isFavorite);
  };

  const rating = `${(Math.round(offer.rating) * 100 / 5).toString()}%`;

  const premium = offer.isPremium && (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );

  const favorite = offer.isFavorite ?
    'place-card__bookmark-button--active' : '';

  return (
    <article
      className="cities__card place-card"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {premium}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={route}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${favorite}`}
            type="button"
            onClick={handleFavoriteClick}
            disabled={isPending}
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: rating }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={route}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">
          {offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}
        </p>
      </div>
    </article>
  );
}


export default React.memo(OfferCard);
