import React, { useEffect } from "react";

const PaypalButton = ({ totalAmount, onSuccess, onError }) => {
  useEffect(() => {
    // Load PayPal Buttons script dynamically
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=AR7a5vo8EISrTIotceidq55MZHW4TEaQ6ZSSyMqtOtvizzwWDE-G71mAUGS5ANyg5AnIkf99q1_vy5Z1&components=buttons`;
    script.async = true;
    script.onload = () => {
      window.paypal.Buttons({
        // Configuration for the PayPal button
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: totalAmount, // Total amount to be paid
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            // On successful transaction
            onSuccess(details);
          });
        },
        onError: (err) => {
          // Handle errors
          onError(err);
        },
      }).render("#paypal-button-container"); // Rendering the button inside the container
    };
    document.body.appendChild(script);
  }, [totalAmount, onSuccess, onError]);

  return (
    <div>
      <div id="paypal-button-container"></div> {/* PayPal Button */}
    </div>
  );
};

export default PaypalButton;
