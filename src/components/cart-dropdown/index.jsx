import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CustomButtom from '../custom-button';
import './styles.scss';
import { selectCartItems } from '../../redux/selectors/cart';
import CartItem from '../cart-item';

const CartDropdown = ({ items }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        items.map((item) => <CartItem key={item.id} data={item} />)
      }
    </div>
    <CustomButtom>GO TO CHECKOUT</CustomButtom>
  </div>
);

CartDropdown.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  items: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
