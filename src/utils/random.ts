import { ALL_CITIES_NAMES } from '../components/const';

function getRandomElement<T>(arr: T[]): T {
  if (arr.length === 0) {
    throw new Error('Массив не должен быть пустым');
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function getRandomCityName ():string {
  return getRandomElement([...ALL_CITIES_NAMES]);
}

export { getRandomCityName };
