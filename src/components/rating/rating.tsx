type RatingType = {
  rating: number;
};

const Rating = ({rating}:RatingType) => (
  <>
    <span style={{ width: `${rating * 20}%` }}></span>
    <span className='visually-hidden'>Rating</span>
  </>

);

export { Rating };
