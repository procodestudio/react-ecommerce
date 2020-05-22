import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/auth';
import './styles.scss';

const signOut = () => {
  auth.signOut();
};

const Header = ({ currentUser }) => (
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
    </div>
  </div>
);

Header.propTypes = {
  currentUser: PropTypes.shape(),
};

Header.defaultProps = {
  currentUser: undefined,
};

export default Header;
