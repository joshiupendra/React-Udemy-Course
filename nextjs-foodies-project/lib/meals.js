import sql from 'better-sqlite3';

const db = sql("meals.db");

export async function getMeals() {
  // Added timeout here for testing purposes, no nned to use async here, just for testing
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}