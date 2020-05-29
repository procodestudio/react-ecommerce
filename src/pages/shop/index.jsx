import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import ErrorBoundary from '../../containers/errorBoundary';
import CollectionsOverview from '../../components/collections-overview';
import CollectionPage from '../collection';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/actions';

class ShopPage extends React.Component {
  constructor() {
    super();

    this.unsubscribeFromSnapshot = null;
  }

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot((snapshot) => {
      console.log(convertCollectionsSnapshotToMap(snapshot));
    });
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <ErrorBoundary>
          <Route exact path={match.path} component={CollectionsOverview} />
          <Route path={`${match.path}/:slug`} component={CollectionPage} />
        </ErrorBoundary>
      </div>
    );
  }
}

ShopPage.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default ShopPage;
