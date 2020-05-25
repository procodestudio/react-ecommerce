import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const CheckoutItem = ({ item }) => {
  const {
    name, imageUrl, price, quantity,
  } = item;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

CheckoutItem.propTypes = {
  item: PropTypes.shape().isRequired,
};

export default CheckoutItem;
