import {OfferType} from '../components/const';

const offers: OfferType[] = [
  {
    id: 'cb36f8ca-ba76-4347-9e0e-720d7de29013',
    title: 'Bright and stylish studio with modern interior in Paris',
    type: 'house',
    price: 138,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.8977852847,
        longitude: 5.0516890214,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.8977852847,
      longitude: 5.0516890214,
      zoom: 10,
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.9,
    previewImage: 'https://loremflickr.com/260/200?random=365',
  },
  {
    id: '56687a42-a035-480b-b76e-c1f87f4626c8',
    title: 'Cozy two‑room apartment with city view in Hamburg',
    type: 'apartment',
    price: 103,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 52.0402514456,
        longitude: 6.2836916436,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.0402514456,
      longitude: 6.2836916436,
      zoom: 12,
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.5,
    previewImage: 'https://loremflickr.com/260/200?random=125',
  },
  {
    id: '82e8e6ae-d376-4970-9d51-e72444d2d1c9',
    title: 'Small private room near the main park in Hamburg',
    type: 'room',
    price: 85,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 51.252939389,
        longitude: 6.9457948347,
        zoom: 12,
      },
    },
    location: {
      latitude: 51.252939389,
      longitude: 6.9457948347,
      zoom: 12,
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.8,
    previewImage: 'https://loremflickr.com/260/200?random=845',
  },
  {
    id: '21b9d9b2-b18c-477a-a926-3c23a4044dd0',
    title: 'Modern luxury hotel room with panoramic windows in Dusseldorf',
    type: 'hotel',
    price: 285,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 50.3840317662,
        longitude: 5.3691799093,
        zoom: 11,
      },
    },
    location: {
      latitude: 50.3840317662,
      longitude: 5.3691799093,
      zoom: 11,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.1,
    previewImage: 'https://loremflickr.com/260/200?random=35',
  },
];

export { offers };
