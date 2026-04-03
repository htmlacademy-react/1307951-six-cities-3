import { Card } from '../../components/cards/card';
import { OfferType } from '../../components/const';
import { useState } from 'react';
import { Nullable } from 'vitest';


type FavoriteCardListType = {
  offers: OfferType[];
};

const FavoriteCardList = ({ offers }: FavoriteCardListType): JSX.Element =>{

  const [activeOffer, setActiveOffer] = useState<Nullable <OfferType>>(null);
  const handleHover = (offer?: OfferType) => {
    setActiveOffer(offer || null);
  };

  return (
    <div className='favorites__places'>
      {
        offers.map((offer) => (
          <Card
            key={offer.id}
            offer={offer}
            handleHover={handleHover}
            type={{ type: 'favorite' }}
          />))
      }
    </div>
  );
};

export { FavoriteCardList };
