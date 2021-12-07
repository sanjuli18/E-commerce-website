import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
   const priceForStripe = price * 100;
   const publishableKey = 'pk_test_51K45t1SEXzcjArGBABOsAL7o9kgZyFOxUPBwzW7pRytLgNZaG28je7Zmaoo7m3gI8p4I0rOM2poCaijpQvDf6Fwm002ByJ7yTq';

    const onToken = token => {
       console.log(token);
       alert('Payment Successful');
   }

   return (
       <StripeCheckout 
            label = 'Pay Now'
            name = 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image=''
            description= {`YourTotal is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
       />
   )
};

export default StripeCheckoutButton;