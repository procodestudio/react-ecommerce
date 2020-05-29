import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItemsCount } from '../../redux/selectors/cart';
import { toggleCartHidden } from '../../redux/actions/cart';
import { CartContainer, ItemCountContainer, ShoppingIcon } from './styles';

const CartIcon = ({ toggleCartHiddenAction, itemCount }) => (
  <CartContainer
    role="button"
    tabIndex="-1"
    onKeyDown={() => null}
    onClick={() => toggleCartHiddenAction()}
  >
    <ShoppingIcon />
    <ItemCountContainer>{ itemCount }</ItemCountContainer>
  </CartContainer>
);

CartIcon.propTypes = {
  toggleCartHiddenAction: PropTypes.func.isRequired,
  itemCount: PropTypes.number,
};

CartIcon.defaultProps = {
  itemCount: 0,
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = {
  toggleCartHiddenAction: toggleCartHidden,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
