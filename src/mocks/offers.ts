import { OfferType } from '../components/const';

const offers: OfferType[] = [
  {
    id: 'cb36f8ca-ba76-4347-9e0e-720d7de29013',
    title: 'Bright and stylish studio with modern interior in Amsterdam',
    type: 'house',
    price: 138,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.9,
    previewImage: 'https://loremflickr.com/g/260/200/Amsterdam?random=365',
  },
  {
    id: '56687a42-a035-480b-b76e-c1f87f4626c8',
    title: 'Cozy two‑room apartment with city view in Amsterdam',
    type: 'apartment',
    price: 103,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 12,
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.5,
    previewImage: 'https://loremflickr.com/g/260/200/Amsterdam?random=125',
  },
  {
    id: '82e8e6ae-d376-4970-9d51-e72444d2d1c9',
    title: 'Small private room near the main park in Amsterdam',
    type: 'room',
    price: 85,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 12,
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.8,
    previewImage: 'https://loremflickr.com/g/260/200/Amsterdam?random=845',
  },
  {
    id: '21b9d9b2-b18c-477a-a926-3c23a4044dd0',
    title: 'Modern luxury hotel room with panoramic windows in Amsterdam',
    type: 'hotel',
    price: 285,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 11,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 11,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.1,
    previewImage: 'https://loremflickr.com/g/260/200/Amsterdam?random=35',
  },
];

export { offers };
