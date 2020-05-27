import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_aQftwZExtEMAxfA9XUJR3iWc008iZshBAm';

  const onToken = (token) => {
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="Sample Procode Shop"
      billingAddress
      shippingAddress
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

StripeCheckoutButton.propTypes = {
  price: PropTypes.number.isRequired,
};

export default StripeCheckoutButton;
