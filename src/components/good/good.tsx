type GoodType = {
  hotelGood: string;
};

const Good = ({ hotelGood }: GoodType): JSX.Element => (
  <li className='offer__inside-item'>{ hotelGood }</li>
);

export { Good };
