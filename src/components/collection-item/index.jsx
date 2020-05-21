import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const CollectionItem = ({ data: { name, price, imageUrl } }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

CollectionItem.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default CollectionItem;
