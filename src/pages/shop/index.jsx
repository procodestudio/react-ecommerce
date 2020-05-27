import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../components/collections-preview';
import selectCollections from '../../redux/selectors/shop';

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    { collections.map((collection) => (
      <CollectionPreview key={collection.id} data={collection} />
    ))}
  </div>
);

ShopPage.propTypes = {
  collections: PropTypes.arrayOf(
    PropTypes.shape(),
  ),
};

ShopPage.defaultProps = {
  collections: [],
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
