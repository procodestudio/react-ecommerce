import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/actions/cart';
import './styles.scss';
import CustomButtom from '../custom-button';

const CollectionItem = ({ addItemToCartAction, data }) => {
  const { name, price, imageUrl } = data;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButtom onClick={() => addItemToCartAction(data)} theme="inverted">Add to cart</CustomButtom>
    </div>
  );
};

CollectionItem.propTypes = {
  data: PropTypes.shape().isRequired,
  addItemToCartAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  addItemToCartAction: (item) => addItemToCart(item),
};

export default connect(null, mapDispatchToProps)(CollectionItem);
