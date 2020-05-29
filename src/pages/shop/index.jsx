import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ErrorBoundary from '../../containers/errorBoundary';
import CollectionsOverview from '../../components/collections-overview';
import CollectionPage from '../collection';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/actions';
import updateCollections from '../../redux/actions/shop';
import WithSpinner from '../../components/with-spinner';

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };

    this.unsubscribeFromSnapshot = null;
    this.CollectionsOverviewWithLoader = WithSpinner(CollectionsOverview);
    this.CollectionsPageWithLoader = WithSpinner(CollectionPage);
  }

  componentDidMount() {
    const { updateCollectionsAction } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot((snapshot) => {
      updateCollectionsAction(convertCollectionsSnapshotToMap(snapshot));
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;

    return (
      <div className="shop-page">
        <ErrorBoundary>
          <Route
            exact
            path={match.path}
            render={
              // eslint-disable-next-line react/jsx-props-no-spreading
              (props) => <this.CollectionsOverviewWithLoader isLoading={isLoading} {...props} />
            }
          />
          <Route
            path={`${match.path}/:slug`}
            render={
              // eslint-disable-next-line react/jsx-props-no-spreading
              (props) => <this.CollectionsPageWithLoader isLoading={isLoading} {...props} />
            }
          />
        </ErrorBoundary>
      </div>
    );
  }
}

ShopPage.propTypes = {
  match: PropTypes.shape().isRequired,
  updateCollectionsAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  updateCollectionsAction: updateCollections,
};

export default connect(null, mapDispatchToProps)(ShopPage);
