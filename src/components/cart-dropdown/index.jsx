import React from 'react';
import CustomButtom from '../custom-button';
import './styles.scss';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
  </div>
);

export default CartDropdown;
