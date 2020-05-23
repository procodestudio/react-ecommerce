import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../header';
import Homepage from '../../pages/homepage';
import ShopPage from '../../pages/shop';
import SignRegister from '../../pages/sign-register';
import { auth } from '../../firebase/auth';
import { createUserProfileDocument } from '../../firebase/actions';
import setCurrentUser from '../../redux/actions/user';
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

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignRegister} />
        </Switch>
      </>
    );
  }
}

App.propTypes = {
  setCurrentUserAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  setCurrentUserAction: (user) => setCurrentUser(user),
};

export default connect(null, mapDispatchToProps)(App);
