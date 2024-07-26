export default function MealPage({ params }) {
  return (
    <main>
      <h1>Meal Page</h1>
      <p>{params.meal}</p>
    </main>
  );
}