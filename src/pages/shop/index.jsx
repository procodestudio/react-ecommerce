import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview';
import CollectionPage from '../collection';

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={match.path} component={CollectionsOverview} />
    <Route path={`${match.path}/:slug`} component={CollectionPage} />
  </div>
);

ShopPage.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default ShopPage;
