import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export function fetchCartData() {
  return async (dispatch) => {
    async function fetchData() {
      const response = await fetch("https://react-3a16d-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json");

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    }

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart({ items: cartData.items || [], totalQuantity: cartData.totalQuantity, changed: false }));
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: "error",
        title: "Error!",
        message: "Could not fetch cart data!"
      }));
    }
  }
}

export function sendCartData(cart) {
  return async (dispatch) => {
    dispatch(uiActions.showNotification({
      status: "pending",
      title: "Sending",
      message: "Sending cart data!"
    }));

    async function sendRequest() {
      const response = await fetch("https://react-3a16d-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json", {
        method: "PUT",
        body: JSON.stringify({ items: cart.items, totalQuantity: cart.totalQuantity }),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendRequest();

      dispatch(uiActions.showNotification({
        status: "success",
        title: "Success...",
        message: "Sent cart data successfully!"
      }));
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: "error",
        title: "Error!",
        message: "Sending cart data failed!"
      }));
    }
  };
}