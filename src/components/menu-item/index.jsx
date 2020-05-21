import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const MenuItem = ({ data: { title, imageUrl, size } }) => (
  <div className={`menu-item ${size}`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{ title.toUpperCase() }</h1>
      <span className="subtitle">Shop now</span>
    </div>
  </div>
);

MenuItem.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default MenuItem;
