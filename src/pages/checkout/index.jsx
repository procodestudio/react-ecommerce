import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCartTotal, selectCartItems } from '../../redux/selectors/cart';

import './styles.scss';
import CheckoutItem from '../../components/checkout-item';

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-blocks">
        <span className="block-title">Product</span>
      </div>
      <div className="header-blocks">
        <span className="block-title">Description</span>
      </div>
      <div className="header-blocks">
        <span className="block-title">Quantity</span>
      </div>
      <div className="header-blocks">
        <span className="block-title">Price</span>
      </div>
      <div className="header-blocks">
        <span className="block-title">Remove</span>
      </div>
    </div>
    {
      cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)
    }
    <div className="total">
      <span>{`TOTAL: $${total}`}</span>
    </div>
  </div>
);

CheckoutPage.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  total: PropTypes.number.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
