
export enum AutorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  Comments = '/comments'
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Favorites = '/favorite',
  Comments = '/comments',
}

export enum RequestStatus {
  Failed = 'failed',
  Success = 'success',
  Loading = 'loading',
  Idle = 'idle',
}

const publicUrl = import .meta.env.BASE_URL;

export const DEFAULT_CITY_NAME = 'Paris';

export const URL_MARKER_DEFAULT = `${publicUrl}img/pin.svg`;
export const URL_MARKER_ACTIVE = `${publicUrl}img/pin-active.svg`;

export const SortType = {
  Popular: 'popular',
  PriceLowToHigh: 'price-low-to-high',
  PriceHighToLow: 'price-high-to-low',
  TopRated: 'top-rated',
} as const;


export const ALL_CITIES_NAMES : readonly string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'] as const;


export enum NameSpace {
  Ui = 'UI',
  User = 'USER',
  Offer = 'OFFER',
  Offers = 'OFFERS',
  Favorites = 'FAVORITES',
  Comments = 'COMMENTS',
}

export const MAX_COMMENTS = 10;
export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 300;
