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

const selectIsCollectionFecthing = createSelector(
  [selectShop],
  (shop) => shop.isFetching,
);

const selectIsCollectionLoaded = createSelector(
  [selectShop],
  (shop) => Object.keys(shop.collections).length > 0,
);

export {
  selectCollectionsOverview,
  selectCollection,
  selectIsCollectionFecthing,
  selectIsCollectionLoaded,
};
