import { selectActiveCity } from '../../store/ui/ui-slice-selectors';
import { useActionCreators, useAppSelector } from '../../store/hooks';
import { ALL_CITIES_NAMES, SortType } from '../const';
import Location from './location';
import { uiActions } from '../../store/ui/ui-slice';


function LocationNavigation(): JSX.Element {

  const cityNames = ALL_CITIES_NAMES;
  const {setActiveCity, setSortType, setActiveOfferId} = useActionCreators(uiActions);
  const activeCity = useAppSelector(selectActiveCity);

  const handleCityChange = (cityName: string): void => {
    if (!cityName) {
      return;
    }
    setActiveCity(cityName);
    setSortType(SortType.Popular);
    setActiveOfferId(null);

  };

  return (
    <ul className="locations__list tabs__list">
      {cityNames.map((cityName) => (
        <Location
          key={cityName}
          activeCity={activeCity}
          cityName={cityName}
          onLocationClick={handleCityChange}
        />
      ))}
    </ul>
  );
}

export default LocationNavigation;
