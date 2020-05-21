import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../header';
import Homepage from '../../pages/homepage';
import ShopPage from '../../pages/shop';
import SignRegister from '../../pages/sign-register';
import './styles.scss';

const App = () => (
  <div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignRegister} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
