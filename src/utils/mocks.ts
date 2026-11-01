import {
  datatype,
  image,
  lorem,
  random,
  name,
  address,
  internet,
} from 'faker';

import { TOffer, OfferType, THost, TLocation, TCity, TComment, TUser } from '../components/types';
import { TCommentInfo } from '../store/comments/comments-thunk';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { RootState } from '../store/index';


export type AppThunkDispatch = ThunkDispatch<RootState, ReturnType<typeof createAPI>, Action>
export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);


export const makeFakeOffer = (): TOffer => ({
  id: datatype.uuid(),
  title: lorem.sentence(),
  type: random.arrayElement<OfferType>(['apartment', 'house', 'room', 'hotel']),
  price: datatype.number({ min: 100, max: 100000 }),
  previewImage: image.city(),
  city: {
    name: address.city(),
    location: {
      latitude: datatype.number({ min: -90, max: 90, precision: 0.0001 }),
      longitude: datatype.number({ min: -180, max: 180, precision: 0.0001 }),
      zoom: datatype.number({ min: 1, max: 17 }),
    },
  } as TCity,
  location: {
    latitude: datatype.number({ min: -90, max: 90, precision: 0.0001 }),
    longitude: datatype.number({ min: -180, max: 180, precision: 0.0001 }),
    zoom: datatype.number({ min: 1, max: 17 }),
  } as TLocation,
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  rating: datatype.number({ min: 1, max: 5, precision: 0.1 }),
  description: lorem.paragraph(),
  bedrooms: datatype.number({ min: 1, max: 10 }),
  goods: Array.from(
    new Set(
      Array.from(
        { length: datatype.number({ min: 1, max: 10 }) },
        () => random.arrayElement([
          'Wi-Fi',
          'Washing machine',
          'Towels',
          'Heating',
          'Coffee machine',
          'Baby seat',
          'Kitchen',
          'Dishwasher',
          'Cabel TV',
          'Fridge',
        ])
      )
    )
  ),
  host: {
    name: name.findName(),
    avatarUrl: image.avatar(),
    isPro: datatype.boolean(),
  } as THost,
  images: Array.from(
    { length: datatype.number({ min: 1, max: 6 }) },
    () => image.city()
  ),
  maxAdults: datatype.number({ min: 1, max: 10 }),
} as TOffer);


export const makeFakeComment = (): TComment => ({
  id: datatype.uuid(),
  offerId: datatype.uuid(),
  date: datatype.datetime().toISOString(),
  user: {
    name: name.findName(),
    avatarUrl: image.avatar(),
    isPro: datatype.boolean(),
    email: internet.email(),
    token: datatype.uuid(),
  } as TUser,
  comment: lorem.paragraph(),
  rating: datatype.number({ min: 1, max: 5 }),
} as TComment);


export const makeFakeCommentInfo = (): TCommentInfo => ({
  body: {
    comment: lorem.sentence(),
    rating: datatype.number({ min: 1, max: 5 }),
  },
  offerId: datatype.uuid(),
});
