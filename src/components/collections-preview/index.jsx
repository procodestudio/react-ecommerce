import React from 'react';
import PropTypes from 'prop-types';
import CollectionItem from '../collection-item';
import './styles.scss';

const CollectionPreview = ({ data: { title, items } }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      { items.map((item) => <CollectionItem key={item.id} data={item} />) }
    </div>
  </div>
);

CollectionPreview.propTypes = {
  data: PropTypes.shape().isRequired,
};


export default CollectionPreview;
