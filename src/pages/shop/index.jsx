import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ErrorBoundary from '../../containers/errorBoundary';
import fetchCollections from '../../redux/actions/shop';
import CollectionsOverviewContainer from '../../containers/collections-overview';
import CollectionPageContainer from '../../containers/collection';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsAction } = this.props;
    fetchCollectionsAction();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <ErrorBoundary>
          <Route
            exact
            path={match.path}
            component={CollectionsOverviewContainer}
          />
          <Route
            path={`${match.path}/:slug`}
            component={CollectionPageContainer}
          />
        </ErrorBoundary>
      </div>
    );
  }
}

ShopPage.propTypes = {
  match: PropTypes.shape().isRequired,
  fetchCollectionsAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  fetchCollectionsAction: fetchCollections,
};

export default connect(null, mapDispatchToProps)(ShopPage);
