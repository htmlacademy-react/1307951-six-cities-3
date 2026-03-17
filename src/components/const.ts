export const placeCardsInfo = [
  {
    id: 1,
    src: 'img/apartment-01.jpg',
    price: '120',
  },
  {
    id: 2,
    src: 'img/room.jpg',
    price: '80',
  },
  {
    id: 3,
    src: 'img/apartment-02.jpg',
    price: '132',
  },
  {
    id: 4,
    src: 'img/apartment-03.jpg',
    price: '180',
  },
  {
    id: 5,
    src: 'img/room.jpg',
    price: '80',
  },
];

export const NumberOfOffers = {
  offers: 312,
};


export const enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
