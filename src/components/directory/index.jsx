import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import selectDirectorySections from '../../redux/selectors/directory';
import MenuItem from '../menu-item';
import './styles.scss';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    { sections.map((section) => <MenuItem key={section.id} data={section} />) }
  </div>
);

Directory.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape(),
  ),
};

Directory.defaultProps = {
  sections: [],
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
