import { useContext } from 'react';
import Modal from "./UI/Modal";
import Input from './UI/Input.jsx';
import Button from './UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';
import { currencyFormatter } from '../util/formatting.js';
import { sendOrder } from '../http.js';

export default function Checkout() {
  const cartContext = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);

  const cartTotal = cartContext.items.reduce((totalPrice, item) => totalPrice += item.price * item.quantity, 0);

  function handleClose() {
    userProgressContext.hideCheckout();
  }

  function handleFinish() {
    userProgressContext.hideCheckout();
    cartContext.clearCart();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData.entries());

    const order = {
      order: {
        items: cartContext.items,
        customer: customerData
      }
    };

    const data = sendOrder(order);
    console.log(data);

    handleFinish();
  }

  return (
    <Modal open={userProgressContext.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" id="name" type="text" />
        <Input label="Email" id="email" type="email" />
        <Input label="street" id="street" type="text" />
        <div className="control-row">
          <Input label="Postal Code" id="postal-code" type="text" />
          <Input label="City" id="city" type="text" />
        </div>
        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>Close</Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}