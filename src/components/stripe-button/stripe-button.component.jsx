import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./stripe-button.styles.scss";

const StripeChekoutButton = ({ price }) => {
  const PriceForStripe = price * 100;
  const StripePublishableKey = "pk_test_zn474BMgclukxYAXOvwugTgL008i7aMB0Z";

  const onToken = token => {
    console.log(token);
    alert("Payment Success");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={PriceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={StripePublishableKey}
    />
  );
};

export default StripeChekoutButton;
