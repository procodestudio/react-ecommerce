import React from 'react';
import PropTypes from 'prop-types';
import CustomButtomContainer from './styles';

const CustomButtom = ({ children, theme, ...otherProps }) => (
  /* eslint-disable react/button-has-type, react/jsx-props-no-spreading */
  <CustomButtomContainer theme={theme} className="custom-button" {...otherProps}>
    {children}
  </CustomButtomContainer>
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
