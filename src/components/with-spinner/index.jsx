import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './styles';

const WithSpinner = (WrappedComponent) => (({ isLoading, ...otherProps }) => (
  isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent { ...otherProps } /> // eslint-disable-line
  )
));

export default WithSpinner;
