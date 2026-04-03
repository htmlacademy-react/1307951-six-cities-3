import { OfferDetailedType } from '../components/const';

const offersDetailed : OfferDetailedType[] = [
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
        zoom: 10
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.9,
    previewImage: 'https://loremflickr.com/260/200/apartment?random=365',
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness.',
    bedrooms: 2,
    goods: ['Wifi', 'Heating', 'Kitchen'],
    host: {
      name: 'Emma Brown',
      avatarUrl: 'https://loremflickr.com/54/54?random=2',
      isPro: true
    },
    images: [
      'https://loremflickr.com/260/200/apartment?random=365',
      'https://loremflickr.com/260/200/apartment?random=366',
      'https://loremflickr.com/260/200/apartment?random=367'
    ],
    maxAdults: 3
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
        zoom: 12
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.5,
    previewImage: 'https://loremflickr.com/260/200/apartment?random=125',
    description: 'Comfortable living space with stunning views of the city skyline.',
    bedrooms: 2,
    goods: ['Fridge', 'Washing machine', 'Coffee machine'],
    host: {
      name: 'Michael Davis',
      avatarUrl: 'https://loremflickr.com/54/54?random=3',
      isPro: false
    },
    images: [
      'https://loremflickr.com/260/200/apartment?random=125',
      'https://loremflickr.com/260/200/apartment?random=126',
      'https://loremflickr.com/260/200/apartment?random=127',
      'https://loremflickr.com/260/200/apartment?random=128'
    ],
    maxAdults: 4
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
        zoom: 12
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 12
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.8,
    previewImage: 'https://loremflickr.com/260/200/apartment?random=845',
    description: 'Quiet single bedroom close to beautiful parks and nature areas.',
    bedrooms: 1,
    goods: ['Dishwasher', 'Towels', 'Baby seat'],
    host: {
      name: 'Sophia Lee',
      avatarUrl: 'https://loremflickr.com/54/54?random=1',
      isPro: false
    },
    images: [
      'https://loremflickr.com/260/200/apartment?random=845',
      'https://loremflickr.com/260/200/apartment?random=846',
      'https://loremflickr.com/260/200/apartment?random=847',
      'https://loremflickr.com/260/200/apartment?random=848',
      'https://loremflickr.com/260/200/apartment?random=849'
    ],
    maxAdults: 2
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
        zoom: 11
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 11
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.1,
    previewImage: 'https://loremflickr.com/260/200/apartment?random=35',
    description: 'Luxury accommodation with breathtaking city views from floor-to-ceiling windows.',
    bedrooms: 1,
    goods: ['Cabel TV', 'Fridge', 'Washing machine'],
    host: {
      name: 'John Smith',
      avatarUrl: 'https://loremflickr.com/54/54?random=',
      isPro: true
    },
    images: [
      'https://loremflickr.com/260/200/apartment?random=35',
      'https://loremflickr.com/260/200/apartment?random=36',
      'https://loremflickr.com/260/200/apartment?random=375',
      'https://loremflickr.com/260/200/apartment?random=38',
      'https://loremflickr.com/260/200/apartment?random=349',
      'https://loremflickr.com/260/200/apartment?random=40',
      'https://loremflickr.com/260/200/apartment?random=654',
      'https://loremflickr.com/260/200/apartment?random=397'
    ],
    maxAdults: 2
  }
];

export {offersDetailed};
