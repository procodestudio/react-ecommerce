import React from 'react';
import slugify from 'react-slugify';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './styles.scss';

const MenuItem = ({ history, data: { title, imageUrl, size } }) => (
  <div
    onClick={() => history.push(`shop/${slugify(title)}`)}
    role="button"
    tabIndex="-1"
    onKeyDown={() => null}
    className={`menu-item ${size}`}
  >
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
  history: PropTypes.shape().isRequired,
};

export default withRouter(MenuItem);
