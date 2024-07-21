import { useContext } from 'react';
import Modal from "./UI/Modal.jsx";
import Button from './UI/Button.jsx';
import CartItem from './CartItem.jsx';
import { currencyFormatter } from '../util/formatting.js';
import CartContext from '../store/CartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';

export default function Cart() {
  const cartContext = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);

  const cartTotal = cartContext.items.reduce((totalPrice, item) => totalPrice += item.price * item.quantity, 0);

  function handleCloseCart() {
    userProgressContext.hideCart();
  }

  function handleAddItem(item) {
    cartContext.addItem(item);
  }

  function handleRemoveItem(id) {
    cartContext.removeItem(id);
  }

  return (
    <Modal className="cart" open={userProgressContext.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartContext.items.map((item) => {
          return (<CartItem key={item.id} item={item} onIncrease={() => handleAddItem(item)} onDecrease={() => handleRemoveItem(item.id)}/>);
        })}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions" >
        <Button textOnly onClick={handleCloseCart}>Close</Button>
        {cartContext.items.length > 0 && (<Button onClick={handleCloseCart}>Got to Checkout</Button>)}
      </p>
    </Modal>
  );
}