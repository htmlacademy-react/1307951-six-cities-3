import { AppRoute, OfferType } from '../../components/const.ts';
import Premium from '../../components/premium.tsx';
import { Link } from 'react-router-dom';


const variants = {
  page: {classPrefix: 'cities'},
  favorite: {classPrefix: 'favorites'},
};

type CardPageType = {
  type: keyof typeof variants;
};

type CardType = {
  offer: OfferType;
  type: CardPageType;
  handleHover: (offer?: OfferType) => void;
};

const Card = ({offer, type, handleHover}:CardType):JSX.Element => {
  const handleMouseOn = () => {
    handleHover(offer);
  };

  const handleMouseOff = () => {
    handleHover();
  };

  return (
    <article
      className={`${variants[type.type].classPrefix}__card place-card`}
      onMouseEnter={handleMouseOn}
      onMouseLeave={handleMouseOff}
    >

      {offer.isPremium && <Premium />}

      <div className={`${variants[type.type].classPrefix}__image-wrapper place-card__image-wrapper`}>
        <img
          className='place-card__image'
          src={offer.previewImage}
          width='260'
          height='200'
          alt='Place image'
        />

      </div>
      <div className={`${variants[type.type].classPrefix}__card-info place-card__info`}>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>{offer.price} &euro;</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>

          <button className='place-card__bookmark-button button' type='button'>
            <svg className='place-card__bookmark-icon' width={18} height={19}>
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>To bookmarks</span>
          </button>

        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: `${offer.rating * 20}%` }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <Link to={`${AppRoute.Offer}${offer.id}`}>
          <h2 className='place-card__name'>
            {offer.title}
          </h2>
        </Link>

        <p className='place-card__type'>{offer.type}</p>
      </div>
    </article>
  );
};


export { Card };
