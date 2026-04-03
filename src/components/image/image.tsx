import { UrlType } from '../const';

const Image = ({image} : {image: UrlType}) : JSX.Element => (
  <div className='offer__image-wrapper'>
    <img
      className='offer__image'
      src={image}
      alt='Photo studio'
    />
  </div>);

export { Image };
