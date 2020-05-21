import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from '../../pages/homepage';
import ShopPage from '../../pages/shop';
import './styles.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={ShopPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
