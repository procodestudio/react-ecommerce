import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import toggleCartHidden from '../../redux/actions/cart';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './styles.scss';

const CartIcon = ({ toggleCartHiddenAction }) => (
  <div role="button" tabIndex="-1" onKeyDown={() => null} className="cart-icon" onClick={toggleCartHiddenAction}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

CartIcon.propTypes = {
  toggleCartHiddenAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  toggleCartHiddenAction: () => toggleCartHidden(),
};

export default connect(null, mapDispatchToProps)(CartIcon);
