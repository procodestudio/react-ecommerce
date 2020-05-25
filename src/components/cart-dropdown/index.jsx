import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButtom from '../custom-button';
import { selectCartItems } from '../../redux/selectors/cart';
import { toggleCartHidden } from '../../redux/actions/cart';
import CartItem from '../cart-item';

import './styles.scss';

const doCheckout = (history, hideCart) => {
  history.push('/checkout');
  hideCart();
};

const CartDropdown = ({ items, history, hideCart }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        items.length
          ? items.map((item) => <CartItem key={item.id} data={item} />)
          : <span className="empty-message">Your cart is empty</span>
      }
    </div>
    <CustomButtom onClick={() => doCheckout(history, hideCart)}>GO TO CHECKOUT</CustomButtom>
  </div>
);

CartDropdown.propTypes = {
  history: PropTypes.shape().isRequired,
  hideCart: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
};

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
});

const mapDispatchToProps = {
  hideCart: toggleCartHidden,
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartDropdown));
