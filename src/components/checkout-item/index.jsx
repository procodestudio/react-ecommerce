import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/actions/cart';

import './styles.scss';

const CheckoutItem = ({ item, clearItem }) => {
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
      <div
        tabIndex="-2"
        role="button"
        onKeyDown={() => null}
        className="remove-button"
        onClick={() => clearItem(item)}
      >
        &#10005;
      </div>
    </div>
  );
};

CheckoutItem.propTypes = {
  item: PropTypes.shape().isRequired,
  clearItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  clearItem: clearItemFromCart,
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
