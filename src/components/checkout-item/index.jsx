import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearItemFromCart, addItemToCart, removeItemFromCart } from '../../redux/actions/cart';

import './styles.scss';

const CheckoutItem = ({
  item, clearItem, addItem, removeItem,
}) => {
  const {
    name, imageUrl, price, quantity,
  } = item;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => removeItem(item)}
          role="button"
          tabIndex="-1"
          onKeyDown={() => null}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => addItem(item)}
          role="button"
          tabIndex="-1"
          onKeyDown={() => null}
        >
          &#10095;
        </div>
      </span>
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
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  clearItem: clearItemFromCart,
  addItem: addItemToCart,
  removeItem: removeItemFromCart,
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
