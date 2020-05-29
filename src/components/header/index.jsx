import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/auth';
import CartIcon from '../cart-icon';
import CartDropdown from '../cart-dropdown';
import selectCurrentUser from '../../redux/selectors/user';
import { selectCartHidden } from '../../redux/selectors/cart';
import {
  HeaderContainer, LogoContainer, OptionsContainer, OptionContainer,
} from './styles';

const signOut = () => {
  auth.signOut();
};

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionContainer to="/shop">SHOP</OptionContainer>
      <OptionContainer to="/shop">CONTACT</OptionContainer>
      {
        currentUser
          ? <OptionContainer as="div" tabIndex="0" role="button" onKeyDown={() => null} onClick={() => signOut()}>SIGN OUT</OptionContainer>
          : <OptionContainer to="/signin">SIGN IN</OptionContainer>
      }
      <CartIcon />
    </OptionsContainer>
    { !hidden && <CartDropdown /> }
  </HeaderContainer>
);

Header.propTypes = {
  currentUser: PropTypes.shape(),
  hidden: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  currentUser: undefined,
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
