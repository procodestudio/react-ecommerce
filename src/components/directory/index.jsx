import React, { Component } from 'react';
import MenuItem from '../menu-item';
import './styles.scss';

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          title: 'Teste',
          imageUrl: '',
          size: '',
        },
      ],
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
