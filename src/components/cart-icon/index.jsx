import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/actions/cart';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './styles.scss';

const CartIcon = ({ toggleCartHiddenAction, itemCount }) => (
  <div role="button" tabIndex="-1" onKeyDown={() => null} className="cart-icon" onClick={toggleCartHiddenAction}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{ itemCount }</span>
  </div>
);

CartIcon.propTypes = {
  toggleCartHiddenAction: PropTypes.func.isRequired,
  itemCount: PropTypes.number.isRequired,
};

const mapStateToProps = ({ cart }) => ({
  itemCount: cart.cartItems.reduce((acc, item) => acc + item.quantity, 0),
});

const mapDispatchToProps = {
  toggleCartHiddenAction: () => toggleCartHidden(),
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
