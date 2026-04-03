import { Good } from '../../components/good/good';
import { GoodIdType } from '../const';

type GoodListType = {
  goodList: GoodIdType[];
};


const GoodList = ({goodList}: GoodListType) =>(<ul className='offer__inside-list'> {goodList.map(({id, good}):JSX.Element => (<Good hotelGood={good} key={id}/>))}</ul>);

export { GoodList };
