export const BASE_URL = "http://localhost:3000";

export async function getMeals() {
  const response = await fetch(`${BASE_URL}/meals`);

  if (!response.ok) {
    console.log("Response not ok");
    return;
  }

  const resData = await response.json();
  return resData;
}