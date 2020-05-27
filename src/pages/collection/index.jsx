import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './styles.scss';
import { selectCollection } from '../../redux/selectors/shop';
import CollectionItem from '../../components/collection-item';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {
          items.map((item) => <CollectionItem key={item.id} data={item} />)
        }
      </div>
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
