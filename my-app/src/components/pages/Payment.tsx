import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { CartContext } from '../helpers/CartContextData';

interface orderedData  {
    currency:string;
    totalAmount:string;
    description:string
}
const Checkout: React.FC<orderedData> = (props) => {

    const cartContextAction =  useContext(CartContext);

  const [show, setShow] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [orderID, setOrderID] = useState<string | boolean>(false);

  const createOrder = (data: any, actions: any) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: props.description,
            amount: {
              currency_code: props.currency,
              value: props.totalAmount,
            },
          },
        ],
      })
      .then((orderID: string | boolean | ((prevState: string | boolean) => string | boolean)) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  const onApprove = (data: any, actions: any) => {
    return actions.order.capture().then(function (details: any) {
      const { payer } = details;
      setSuccess(true);
    });
  };

  useEffect(() => {
    if (success) {
      alert('Payment successful!!');
      cartContextAction?.clearCart();
    }
  }, [success, orderID]);

//   let CLIENT_ID = 'ATXFfRmfAxJCuuSoDAqE7bB476vOAOhsuLb4cXgOyYbsyKN4ifW98FPAibFIeHQUD5o2MvEP7XK4U5AP';
 let CLIENT_ID = 'AXvx9tEj10UvgNmnm0uYLbM4n7K7vnEZMt7kqniNVguAWvDo8tHAvqKbunOG0OAt3KxEIff2_126Qotp';

  return (
    <PayPalScriptProvider options={{ clientId: CLIENT_ID }}>
      <div>
        <div className="wrapper">
          <div className="product-info">
            <div className="product-price-btn">
              <button className="buy-btn" type="submit" onClick={() => setShow(true)}>
                Buy now
              </button>
            </div>
          </div>
        </div>
        <br></br>
        {show ? <PayPalButtons style={{ layout: 'horizontal' }} createOrder={createOrder} onApprove={onApprove} /> : null}
      </div>
    </PayPalScriptProvider>
  );
};

export default Checkout;
