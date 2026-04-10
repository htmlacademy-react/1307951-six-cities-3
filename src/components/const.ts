export const NumberOfOffers = {
  offers: 312,
};

export const enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CityList {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export type CityLocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type CityType = {
  name: string;
  location: CityLocationType;
};

export type OfferType = {
  id: string;
  title: string;
  type: 'apartment' | 'house' | 'room' | 'hotel';
  price: number;
  city: CityType;
  location: CityLocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: UrlType;
};

export type OffersType = { offers: OfferType[]};

type HostType = {
  name: string;
  avatarUrl: UrlType;
  isPro: boolean;
};

export type UrlType = string;

type GoodType = 'Wifi'| 'Heating'| 'Kitchen'| 'Fridge' | 'Washing machine' | 'Coffee machine' | 'Dishwasher' | 'Towels' | 'Baby seat' | 'Cabel TV';

type GoodsType = GoodType[];

export type ImagesType = UrlType[];

export type OfferDetailedType = {
  id: string;
  title: string;
  type: 'apartment' | 'house' | 'room' | 'hotel';
  price: number;
  city: CityType;
  location: CityLocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: UrlType;
  description: string;
  bedrooms: number;
  goods: GoodsType;
  host: HostType;
  images: ImagesType;
  maxAdults: number;

};

export type FavoriteDataType = {
  id: number;
  cityName: string;
  favorites: OfferType[];
}

export type UserType = {
  name: string;
  avatarUrl: UrlType;
  isPro: boolean;
};

export type Review = {
  id: string;
  date: string;
  user: UserType;
  comment: string;
  rating: number;
};

export type Reviews = Review[];

export type GoodIdType = {
  id: string;
  good: string;
}

export type ImageIdType = {
  id: string;
  picture: UrlType;
}

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
export const TILE_LAYER_URL_PATTERN = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const TILE_LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export type MapCityType = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};


export type MapRefType = {
  mapRef: React.RefObject<HTMLElement>;
  city: MapCityType;
};
