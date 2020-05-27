import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/selectors/shop';
import CollectionPreview from '../collections-preview';
import './styles.scss';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    { collections.map((collection) => (
      <CollectionPreview key={collection.id} data={collection} />
    ))}
  </div>
);

CollectionsOverview.propTypes = {
  collections: PropTypes.arrayOf(
    PropTypes.shape(),
  ),
};

CollectionsOverview.defaultProps = {
  collections: [],
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
