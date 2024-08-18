import React from 'react';
import OrderConfirmed from '../components/OrderConfirmed';
import Header from '../components/Header';

const OrderConfirmedPage: React.FC = () => {
  return (
    <div>
      <Header />
      <OrderConfirmed />
    </div>
  );
};

export default OrderConfirmedPage;
