import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import CustomButtom from '../custom-button';

const CollectionItem = ({ data: { name, price, imageUrl } }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButtom theme="inverted">Add to cart</CustomButtom>
  </div>
);

CollectionItem.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default CollectionItem;
