import { ImageIdType } from '../const';
import { Image } from '../../components/image/image';


type ImageListType = {
  pictureList: ImageIdType[];
};

const ImageList = ({ pictureList } : ImageListType): JSX.Element => (<div className='offer__gallery'>{pictureList.map(({ id, picture }) => <Image image={ picture } key={ id }/>)}</div>);

export { ImageList };
