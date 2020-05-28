import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const CartItem = ({
  data: {
    imageUrl, price, name, quantity,
  },
}) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">{`${quantity} x $${price}`}</span>
    </div>
  </div>
);

CartItem.propTypes = {
  data: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
