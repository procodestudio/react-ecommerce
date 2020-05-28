import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections,
);

const selectCollectionsOverview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key]),
);

const selectCollection = (slug) => createSelector(
  [selectCollections],
  (collections) => collections[slug],
);

export { selectCollectionsOverview, selectCollection };
