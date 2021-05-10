import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IpXpdFBUWbXwVdUfRLfKc5plslHV4Oa0vRJrqnYuc7MeSYZyQWldLh1CcMZCCsuW2Jo2JTbA1DStxsbgHEWL4wJ00n45ChqQ1";

  const onToken = (token) => {
    console.log(token);
    alert("succes");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN cClothing"
      billingAddress
      stripeKey={publishableKey}
      shippingAddress
      description={`Big Data Stuff, Total: $${price}`} // the pop-in header subtitle
      amount={priceForStripe}
      panelLabel="pay now"
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
