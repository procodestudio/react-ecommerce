import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/auth';
import CartIcon from '../cart-icon';
import CartDropdown from '../cart-dropdown';
import selectCurrentUser from '../../redux/selectors/user';
import { selectCartHidden } from '../../redux/selectors/cart';

import './styles.scss';

const signOut = () => {
  auth.signOut();
};

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/shop">CONTACT</Link>
      {
        currentUser
          ? <div tabIndex="0" role="button" className="option" onKeyDown={() => signOut()} onClick={() => signOut()}>SIGN OUT</div>
          : <Link className="option" to="/signin">SIGN IN</Link>
      }
      <CartIcon />
    </div>
    { !hidden && <CartDropdown /> }
  </div>
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
