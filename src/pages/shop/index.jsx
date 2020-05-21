import React, { Component } from 'react';
import CollectionPreview from '../../components/collections-preview';
import SHOP_DATA from './shop.data';

class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="sho-page">
        { collections.map((collection) => (
          <CollectionPreview key={collection.id} data={collection} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
