import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionLoaded } from '../../redux/selectors/shop';
import WithSpinner from '../../components/with-spinner';
import CollectionPage from '../../pages/collection';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionPage);

export default CollectionPageContainer;
