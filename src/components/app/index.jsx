import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../header';
import Homepage from '../../pages/homepage';
import ShopPage from '../../pages/shop';
import './styles.scss';

const App = () => (
  <div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
