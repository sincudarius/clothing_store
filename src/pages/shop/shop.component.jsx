import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { SHOP_DATA } from './shop.data';

export class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;

    return (
      <div className='shoppage'>
        {collections.map(({ id, ...otherColectionProps }) => (
          <CollectionPreview key={id} {...otherColectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;