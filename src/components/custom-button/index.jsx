import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const CustomButtom = ({ children, theme, ...otherProps }) => (
  /* eslint-disable react/button-has-type, react/jsx-props-no-spreading */
  <button className={`custom-button ${theme}`} {...otherProps}>
    {children}
  </button>
  /* eslint-enable react/button-has-type, react/jsx-props-no-spreading */
);

CustomButtom.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
};

CustomButtom.defaultProps = {
  theme: undefined,
};

export default CustomButtom;
