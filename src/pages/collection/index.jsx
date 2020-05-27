import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './styles.scss';
import { selectCollection } from '../../redux/selectors/shop';

const CollectionPage = ({ collection }) => {
  const { title } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
    </div>
  );
};

CollectionPage.propTypes = {
  collection: PropTypes.shape().isRequired,
};

const mapStateToProps = createStructuredSelector({
  collection: (state, ownProps) => selectCollection(ownProps.match.params.slug)(state),
});


export default connect(mapStateToProps)(CollectionPage);
