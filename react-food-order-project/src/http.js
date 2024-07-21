export const BASE_URL = "http://localhost:3000";

export async function getMeals() {
  const response = await fetch(`${BASE_URL}/meals`);

  return response;
}

export async function sendOrder(order) {
  const response = await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(order)
  });

  const resData = await response.json();
  return resData;
}