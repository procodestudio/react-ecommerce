import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ErrorBoundary from '../../containers/errorBoundary';
import CollectionsOverview from '../../components/collections-overview';
import CollectionPage from '../collection';
import fetchCollections from '../../redux/actions/shop';
import WithSpinner from '../../components/with-spinner';
import { selectIsCollectionLoaded } from '../../redux/selectors/shop';

class ShopPage extends React.Component {
  constructor() {
    super();

    this.CollectionsOverviewWithLoader = WithSpinner(CollectionsOverview);
    this.CollectionsPageWithLoader = WithSpinner(CollectionPage);
  }

  componentDidMount() {
    const { fetchCollectionsAction } = this.props;
    fetchCollectionsAction();
  }

  render() {
    const { match, isLoaded } = this.props;

    return (
      <div className="shop-page">
        <ErrorBoundary>
          <Route
            exact
            path={match.path}
            render={
              // eslint-disable-next-line react/jsx-props-no-spreading
              (props) => <this.CollectionsOverviewWithLoader isLoading={!isLoaded} {...props} />
            }
          />
          <Route
            path={`${match.path}/:slug`}
            render={
              // eslint-disable-next-line react/jsx-props-no-spreading
              (props) => <this.CollectionsPageWithLoader isLoading={!isLoaded} {...props} />
            }
          />
        </ErrorBoundary>
      </div>
    );
  }
}

ShopPage.propTypes = {
  match: PropTypes.shape().isRequired,
  isLoaded: PropTypes.bool.isRequired,
  fetchCollectionsAction: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isLoaded: selectIsCollectionLoaded,
});

const mapDispatchToProps = {
  fetchCollectionsAction: fetchCollections,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
