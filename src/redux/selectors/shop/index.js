import { createSelector } from 'reselect';
import slugify from 'react-slugify';

const selectShop = (state) => state.shop;

const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections,
);

const selectCollection = (slug) => createSelector(
  [selectCollections],
  (collections) => collections.find((item) => slugify(item.title) === slug),
);

export { selectCollections, selectCollection };
