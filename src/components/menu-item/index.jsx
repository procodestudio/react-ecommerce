import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const MenuItem = ({ data: { title, imageUrl, size } }) => (
  <div
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}
    className={`menu-item ${size}`}
  >
    <div className="content">
      <h1 className="title">{ title }</h1>
      <span className="subtitle">Shop now</span>
    </div>
  </div>
);

MenuItem.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default MenuItem;
