import { Nullable } from 'vitest';
import { OfferType } from '../../components/const';
import { Card } from '../../components/cards/card';
import { useState, useEffect } from 'react';

/**реализуем механизм наведения на offer */
type CardListType = {
  offers: OfferType[];
};


const CardList = ({offers} : CardListType): JSX.Element =>{
  /** если ни на что не навожу, у меня activeState = null, если навела, то целый offer типа OfferType*/
  const [activeOffer, setActiveOffer] = useState<Nullable <OfferType>>(null);
  const handleHover = (offer?: OfferType) => {
    setActiveOffer(offer || null);
  };

  useEffect(() => {
    console.warn(activeOffer);
    return () => {
      console.log('component will unmount');
    };
  },[activeOffer]);

  return (
    // добавить класс соответствующий класс, если карточка активна
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: OfferType) =>(
        <Card
          key={offer.id}
          offer={offer}
          handleHover={handleHover}
          type={'main'}
        />)
      )}
    </div>);
};

export {CardList};
