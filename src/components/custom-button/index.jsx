import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const CustomButtom = ({ children, ...otherProps }) => (
  /* eslint-disable react/button-has-type, react/jsx-props-no-spreading */
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
  /* eslint-enable react/button-has-type, react/jsx-props-no-spreading */
);

CustomButtom.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomButtom;
