import { useContext } from 'react';
import Modal from "./UI/Modal";
import Input from './UI/Input.jsx';
import CartContext from '../store/CartContext.jsx';
import { currencyFormatter } from '../util/formatting.js';

export default function Checkout() {
  const cartContext = useContext(CartContext);

  const cartTotal = cartContext.items.reduce((totalPrice, item) => totalPrice += item.price * item.quantity, 0);

  return (
    <Modal>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input />
      </form>
    </Modal>
  );
}