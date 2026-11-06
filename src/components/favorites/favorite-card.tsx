import { Link } from 'react-router-dom';
import { useFavoriteClick } from '../../hooks/use-favorite-click';
import { AppRoute } from '../const';
import { TOffer } from '../types';


function FavoriteCard({ offer }: { offer: TOffer }) {
  const handleСlick = useFavoriteClick();

  const premium = offer.isPremium && (
    <div className='place-card__mark'>
      <span>Premium</span>
    </div>
  );

  const rating = `${(offer.rating * 100 / 5).toString()}%`;

  const handleFavoriteClick = () => {
    handleСlick(offer.id, offer.isFavorite);
  };

  return (
    <article className='favorites__card place-card'>
      {premium}
      <div className='favorites__image-wrapper place-card__image-wrapper'>
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img
            className='place-card__image'
            src={offer.previewImage}
            width={150}
            height={110}
            alt='Place image'
          />
        </Link>
      </div>
      <div className='favorites__card-info place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>€{offer.price}</b>
            <span className='place-card__price-text'>/&nbsp;night</span>
          </div>
          <button
            className='place-card__bookmark-button place-card__bookmark-button--active button'
            type='button'
            onClick={handleFavoriteClick}
          >
            <svg
              className='place-card__bookmark-icon'
              width={18}
              height={19}
            >
              <use xlinkHref='#icon-bookmark' />
            </svg>
            <span className='visually-hidden'>In bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: rating }} />
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className='place-card__type'>{offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}</p>
      </div>
    </article>
  );
}

export default FavoriteCard;
