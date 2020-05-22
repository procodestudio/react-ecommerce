import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../header';
import Homepage from '../../pages/homepage';
import ShopPage from '../../pages/shop';
import SignRegister from '../../pages/sign-register';
import { auth } from '../../firebase/utils';
import './styles.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };

    this.unsubscribeFromAuth = null;
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Header currentUser={currentUser} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignRegister} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
