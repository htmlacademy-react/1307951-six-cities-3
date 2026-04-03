// в состояние активная карточка с предложением id Событие навести курсор
const premiumVariants = {
  main: {classPrefix: 'place-card'},
  offer: {classPrefix: 'offer'},
} as const;

type PremiumVarianType = keyof typeof premiumVariants;

type PremiumType = {
  type: PremiumVarianType;
}

const Premium = ({type}: PremiumType): JSX.Element => (
  <div className={`${premiumVariants[type].classPrefix}__mark`}>
    <span>Premium</span>
  </div>
);

export { Premium };
