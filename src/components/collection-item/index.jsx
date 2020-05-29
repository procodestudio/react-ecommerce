import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/actions/cart';
import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
  AddButton,
} from './styles';

const CollectionItem = ({ addItemToCartAction, data }) => {
  const { name, price, imageUrl } = data;
  return (
    <CollectionItemContainer>
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItemToCartAction(data)} theme="inverted">Add to cart</AddButton>
    </CollectionItemContainer>
  );
};

CollectionItem.propTypes = {
  data: PropTypes.shape().isRequired,
  addItemToCartAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  addItemToCartAction: addItemToCart,
};

export default connect(null, mapDispatchToProps)(CollectionItem);
