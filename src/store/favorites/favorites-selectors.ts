import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { selectAllOffers } from '../offers/offers-slice';
import { selectAuthorizationStatus } from '../user/user-slice';
import { AutorizationStatus, NameSpace } from '../../components/const';
import { ALL_CITIES_NAMES } from '../../components/const';
import { TOffer } from '../../components/types';

export const selectFavorites = (state: RootState) => state[NameSpace.Favorites].favorites;
export const selectFavoritesStatus = (state: RootState) => state[NameSpace.Favorites].status;
export const selectFavoritePendingIds = (state: RootState) => state[NameSpace.Favorites].pendingIds;


export const selectEffectiveFavorites = createSelector(
  [selectFavorites, selectAuthorizationStatus],
  (favorites, status) =>
    status === AutorizationStatus.Auth ? favorites : []
);

export const selectFavoriteIdSet = createSelector(
  [selectEffectiveFavorites],
  (favorites) => new Set(favorites.map((offer) => offer.id))
);

export const selectFavoritesLength = createSelector(
  [selectFavorites],
  (favorites) => favorites.length
);

export const selectOffersWithFavorites = createSelector(
  [selectAllOffers, selectFavoriteIdSet],
  (offers, favoriteSet) =>
    offers.map((offer) => ({ ...offer, isFavorite: favoriteSet.has(offer.id) }))
);

export const selectFavoritesByCityName = createSelector(
  [selectFavorites],
  (offers) => {
    const favoriteOffersByCity = new Map<string, TOffer[]>();
    for (const offer of offers) {

      const list = favoriteOffersByCity.get(offer.city.name);

      if (list) {
        list.push(offer);

      } else {
        favoriteOffersByCity.set(offer.city.name, [offer]);
      }
    }

    return ALL_CITIES_NAMES
      .filter((name) => favoriteOffersByCity.has(name))
      .map((cityName) => ({ cityName, cityOffers: favoriteOffersByCity.get(cityName)! }));
  }
);

export const favoriteSelectors = {selectFavoritesByCityName, selectFavorites };
