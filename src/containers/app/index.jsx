import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from '../../components/header';
import Homepage from '../../pages/homepage';
import ShopPage from '../../pages/shop';
import SignRegister from '../../pages/sign-register';
import { auth } from '../../firebase/auth';
import { createUserProfileDocument } from '../../firebase/actions';
import setCurrentUser from '../../redux/actions/user';
import selectCurrentUser from '../../redux/selectors/user';
import CheckoutPage from '../../pages/checkout';

import './styles.scss';

class App extends Component {
  constructor() {
    super();
    this.unsubscribeFromAuth = null;
  }

  componentDidMount() {
    const { setCurrentUserAction } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => (
          setCurrentUserAction({
            id: snapShot.id,
            ...snapShot.data(),
          })
        ));
      }

      setCurrentUserAction(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  redirectIfLogged() {
    const { currentUser } = this.props;

    return currentUser
      ? <Redirect to="/" />
      : <SignRegister />;
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={() => this.redirectIfLogged()} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </>
    );
  }
}

App.propTypes = {
  setCurrentUserAction: PropTypes.func.isRequired,
  currentUser: PropTypes.shape(),
};

App.defaultProps = {
  currentUser: null,
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = {
  setCurrentUserAction: setCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
