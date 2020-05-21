import React, { Component } from 'react';
import MenuItem from '../menu-item';
import SECTIONS_DATA from './sections.data';
import './styles.scss';

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS_DATA,
    };
  }

  render() {
    const { sections } = this.state;

    return (
      <div className="directory-menu">
        { sections.map((section) => <MenuItem key={section.id} data={section} />) }
      </div>
    );
  }
}

export default Directory;
