import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartEmpty from '../components/CartEmpty';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';
import styled from 'styled-components';

import plusIcon from '../images/plus-icon.png'; 
import minusIcon from '../images/minus-icon.png'; 
import trashIcon from '../images/trash-icon.png'; 

const CartContainer = styled.div`
  padding: 20px; 
  margin: 0 auto; 
  background-color: #fff; 
  border-radius: 8px; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 

  @media (max-width: 768px) {
    padding: 10px; 
  }
`;


const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 

  .cart-header {
    display: flex;
    align-items: center;
    font-weight: bold;
    border-bottom: 2px solid #eee; 
    padding-bottom: 10px;
    margin-bottom: 20px;

    > div { 
      flex: 1;
      text-align: center;
    }

    .actions-column {
      flex: 0 0 50px; 
    }
  }
`;

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee; 
  padding-bottom: 10px;
  margin-bottom: 10px;

  > div { 
    flex: 1;
    text-align: center;
  }

  .product-column {
    display: flex;
    align-items: center;
    text-align: left; 

    img {
      width: 80px;
      height: 120px;
      object-fit: cover;
      margin-right: 20px;
    }
  }

  .quantity-column {
    display: flex;
    align-items: center;
    justify-content: center; 

    .quantity-controls {
      display: flex;
      align-items: center;

      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 0;

        img {
          width: 20px;
          height: auto;
        }
      }

      span {
        margin: 0 10px; 
      }
    }
  }

  .actions-column {
    flex: 0 0 50px; 

    .remove-button {
      background-color: transparent;
      border: none;
      cursor: pointer;

      img {
        width: 20px;
        height: auto;
      }
    }
  }
`;

const CartSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  font-weight: bold;
`;

const CartTotal = styled.p`
  /* Sem estilos adicionais necessários */
`;

const ConfirmButton = styled(Button)`
  background-color: #007bff; 
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3; 
  }
`;

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, calculateTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleConfirmOrder = () => {
    clearCart();
    navigate('/order-confirmed');
  };

  const handleIncreaseQuantity = (itemId: number) => {
    increaseQuantity(itemId);
  };

  const handleDecreaseQuantity = (itemId: number) => {
    decreaseQuantity(itemId);
  };

  return (
    <div>
      <Header />
      <CartContainer>
        {cartItems.length === 0 ? (
          <CartEmpty /> 
        ) : (
          <>
            <CartItemsContainer>
              <div className="cart-header">
                <div className="product-column">PRODUTO</div>
                <div className="quantity-column">QTD</div>
                <div className="subtotal-column">SUBTOTAL</div>
                <div className="actions-column"></div> 
              </div>

              {cartItems.map((item) => (
                <CartItemContainer key={item.id}>
                  <div className="product-column">
                    <img src={item.image} alt={item.title} />
                    <div className="item-details">
                      <h3 className="item-title">{item.title}</h3>
                      <p className="item-price">R$ {item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="quantity-column">
                    <div className="quantity-controls">
                      <button onClick={() => handleDecreaseQuantity(item.id)}>
                        <img src={minusIcon} alt="Diminuir quantidade" />
                      </button>
                      <span>{item.quantity}</span> 
                      <button onClick={() => handleIncreaseQuantity(item.id)}>
                        <img src={plusIcon} alt="Aumentar quantidade" />
                      </button>
                    </div>
                  </div>

                  <div className="subtotal-column">
                    <p className="item-subtotal">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <div className="actions-column">
                    <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                      <img src={trashIcon} alt="Remover item" />
                    </button>
                  </div>
                </CartItemContainer>
              ))}
            </CartItemsContainer>

            <CartSummary>
              <CartTotal>Total: R$ {calculateTotal().toFixed(2)}</CartTotal>
              <ConfirmButton onClick={handleConfirmOrder}>FINALIZAR PEDIDO</ConfirmButton>
            </CartSummary>
          </>
        )}
      </CartContainer>
    </div>
  );
};

export default Cart;