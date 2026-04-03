import { GoodIdType, ImageIdType, OfferDetailedType } from '../../components/const';
import { Header } from '../../components/header/header';
// import { Error } from '../error/error';
import { ReviewFormComponent } from '../../components/comment-form/review-form-component';
import { Navigate, useParams } from 'react-router';
import { ImageList } from '../../components/image/image-list';
import { GoodList } from '../../components/good/good-list';
import { Premium } from '../../components/premium/premium';
import { Rating } from '../../components/rating/rating';


const Offer = ({offers}: {offers: OfferDetailedType[]}): JSX.Element => {

  const {id} = useParams();
  const offer : OfferDetailedType | undefined = offers.find((offerItem) => offerItem.id === id?.substring(1));

  if (!offer) {
    return <Navigate to={'*'} />;
    // return <Error />;
  }

  let imageList = offer.images.map((image, index) : ImageIdType => ({id: index.toString(), picture: image}));

  imageList = (imageList.length > 6) ? imageList.slice(0, 6) : imageList;

  const goodList = offer.goods.map((good, index) : GoodIdType => ({id: index.toString(), good: good,}));

  return (
    <div className='page'>
      <Header />

      <main className='page__main page__main--offer'>
        <section className='offer'>
          <div className='offer__gallery-container container'>
            <ImageList pictureList = { imageList }/>
          </div>


          <div className='offer__container container'>
            <div className='offer__wrapper'>
              {offer.isPremium && <Premium type={'offer'} />}

              <div className='offer__name-wrapper'>
                <h1 className='offer__name'>{offer.title}</h1>

                <button className='offer__bookmark-button button' type='button'>
                  <svg className='offer__bookmark-icon' width={31} height={33}>
                    <use xlinkHref='#icon-bookmark' />
                  </svg>
                  <span className='visually-hidden'>To bookmarks</span>
                </button>

              </div>

              <div className='offer__rating rating'>
                <div className='offer__stars rating__stars'>
                  <Rating rating={offer.rating} />
                </div>
                <span className='offer__rating-value rating__value'>{offer.rating}</span>
              </div>

              <ul className='offer__features'>
                <li className='offer__feature offer__feature--entire'>{offer.type}</li>
                <li className='offer__feature offer__feature--bedrooms'>
                  {offer.bedrooms}
                </li>
                <li className='offer__feature offer__feature--adults'>
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className='offer__price'>
                <b className='offer__price-value'>€{offer.price}</b>
                <span className='offer__price-text'>&nbsp;night</span>
              </div>
              <div className='offer__inside'>
                <h2 className='offer__inside-title'>What&#39; s inside</h2>
                <GoodList goodList={ goodList }/>
              </div>
              <div className='offer__host'>
                <h2 className='offer__host-title'>Meet the host</h2>
                <div className='offer__host-user user'>
                  <div className='offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper'>
                    <img
                      className='offer__avatar user__avatar'
                      src='img/avatar-angelina.jpg'
                      width={74}
                      height={74}
                      alt='Host avatar'
                    />
                  </div>
                  <span className='offer__user-name'>Angelina</span>
                  <span className='offer__user-status'>Pro</span>
                </div>
                <div className='offer__description'>
                  <p className='offer__text'>
                    A quiet cozy and picturesque that hides behind a a river by the
                    unique lightness of Amsterdam. The building is green and from
                    18th century.
                  </p>
                  <p className='offer__text'>
                    An independent House, strategically located between Rembrand
                    Square and National Opera, but where the bustle of the city
                    comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>

              <section className='offer__reviews reviews'>
                <h2 className='reviews__title'>
                  Reviews · <span className='reviews__amount'>1</span>
                </h2>

                {/* вставить reviewList */}
                <ul className='reviews__list'>
                  <li className='reviews__item'>
                    <div className='reviews__user user'>
                      <div className='reviews__avatar-wrapper user__avatar-wrapper'>
                        <img
                          className='reviews__avatar user__avatar'
                          src='img/avatar-max.jpg'
                          width={54}
                          height={54}
                          alt='Reviews avatar'
                        />
                      </div>
                      <span className='reviews__user-name'>Max</span>
                    </div>
                    <div className='reviews__info'>
                      <div className='reviews__rating rating'>
                        <div className='reviews__stars rating__stars'>
                          <span style={{ width: '80%' }} />
                          <span className='visually-hidden'>Rating</span>
                        </div>
                      </div>
                      <p className='reviews__text'>
                        A quiet cozy and picturesque that hides behind a a river by
                        the unique lightness of Amsterdam. The building is green and
                        from 18th century.
                      </p>
                      <time className='reviews__time' dateTime='2019-04-24'>
                        April 2019
                      </time>
                    </div>
                  </li>
                </ul>
                <ReviewFormComponent />
              </section>
            </div>
          </div>
          <section className='offer__map map' />
        </section>

        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>
              Other places in the neighbourhood
            </h2>
            <div className='near-places__list places__list'>
              <article className='near-places__card place-card'>
                <div className='near-places__image-wrapper place-card__image-wrapper'>
                  <a href='#'>
                    <img
                      className='place-card__image'
                      src='img/room.jpg'
                      width={260}
                      height={200}
                      alt='Place image'
                    />
                  </a>
                </div>
                <div className='place-card__info'>
                  <div className='place-card__price-wrapper'>
                    <div className='place-card__price'>
                      <b className='place-card__price-value'>€80</b>
                      <span className='place-card__price-text'>/&nbsp;night</span>
                    </div>
                    <button
                      className='place-card__bookmark-button place-card__bookmark-button--active button'
                      type='button'
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
                      <span style={{ width: '80%' }} />
                      <span className='visually-hidden'>Rating</span>
                    </div>
                  </div>
                  <h2 className='place-card__name'>
                    <a href='#'>Wood and stone place</a>
                  </h2>
                  <p className='place-card__type'>Room</p>
                </div>
              </article>
              <article className='near-places__card place-card'>
                <div className='near-places__image-wrapper place-card__image-wrapper'>
                  <a href='#'>
                    <img
                      className='place-card__image'
                      src='img/apartment-02.jpg'
                      width={260}
                      height={200}
                      alt='Place image'
                    />
                  </a>
                </div>
                <div className='place-card__info'>
                  <div className='place-card__price-wrapper'>
                    <div className='place-card__price'>
                      <b className='place-card__price-value'>€132</b>
                      <span className='place-card__price-text'>/&nbsp;night</span>
                    </div>
                    <button
                      className='place-card__bookmark-button button'
                      type='button'
                    >
                      <svg
                        className='place-card__bookmark-icon'
                        width={18}
                        height={19}
                      >
                        <use xlinkHref='#icon-bookmark' />
                      </svg>
                      <span className='visually-hidden'>To bookmarks</span>
                    </button>
                  </div>
                  <div className='place-card__rating rating'>
                    <div className='place-card__stars rating__stars'>
                      <span style={{ width: '80%' }} />
                      <span className='visually-hidden'>Rating</span>
                    </div>
                  </div>
                  <h2 className='place-card__name'>
                    <a href='#'>Canal View Prinsengracht</a>
                  </h2>
                  <p className='place-card__type'>Apartment</p>
                </div>
              </article>
              <article className='near-places__card place-card'>
                <div className='place-card__mark'>
                  <span>Premium</span>
                </div>
                <div className='near-places__image-wrapper place-card__image-wrapper'>
                  <a href='#'>
                    <img
                      className='place-card__image'
                      src='img/apartment-03.jpg'
                      width={260}
                      height={200}
                      alt='Place image'
                    />
                  </a>
                </div>
                <div className='place-card__info'>
                  <div className='place-card__price-wrapper'>
                    <div className='place-card__price'>
                      <b className='place-card__price-value'>€180</b>
                      <span className='place-card__price-text'>/&nbsp;night</span>
                    </div>
                    <button
                      className='place-card__bookmark-button button'
                      type='button'
                    >
                      <svg
                        className='place-card__bookmark-icon'
                        width={18}
                        height={19}
                      >
                        <use xlinkHref='#icon-bookmark' />
                      </svg>
                      <span className='visually-hidden'>To bookmarks</span>
                    </button>
                  </div>
                  <div className='place-card__rating rating'>
                    <div className='place-card__stars rating__stars'>
                      <span style={{ width: '100%' }} />
                      <span className='visually-hidden'>Rating</span>
                    </div>
                  </div>
                  <h2 className='place-card__name'>
                    <a href='#'>Nice, cozy, warm big bed apartment</a>
                  </h2>
                  <p className='place-card__type'>Apartment</p>
                </div>
              </article>
            </div>
          </section>
        </div>

      </main>
    </div>

  );
};

export { Offer };
