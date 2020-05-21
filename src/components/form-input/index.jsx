import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <label htmlFor={otherProps.id}>
      <input
        className="form-input"
        type="text"
        name={otherProps.id}
        id={otherProps.id}
        onChange={handleChange}
        // eslint-disable-next-line
        {...otherProps}
      />
      {label && <span className={`form-input-label ${otherProps.value.length ? 'shrink' : ''}`}>{label}</span>}
    </label>
  </div>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FormInput;
