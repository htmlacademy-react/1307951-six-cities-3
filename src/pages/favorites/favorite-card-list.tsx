import { Card } from '../../components/cards/card';
import { OfferType } from '../../components/const';

type FavoriteCardListType = {
  offers: OfferType[];
};

const FavoriteCardList = ({ offers }: FavoriteCardListType): JSX.Element =>(
  <div className='favorites__places'>
    {
      offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          type={'favorite'}
        />))
    }
  </div>
);

export { FavoriteCardList };
