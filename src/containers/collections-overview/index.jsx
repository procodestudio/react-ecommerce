import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFecthing } from '../../redux/selectors/shop';
import WithSpinner from '../../components/with-spinner';
import CollectionsOverview from '../../components/collections-overview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFecthing,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionsOverview);

export default CollectionsOverviewContainer;
