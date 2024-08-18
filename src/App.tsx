import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import OrderConfirmedPage from './pages/OrderConfirmedPage';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-confirmed" element={<OrderConfirmedPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
