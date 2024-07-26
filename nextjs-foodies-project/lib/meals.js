import sql from 'better-sqlite3';

const db = sql("meals.db");

export async function getMeals() {
  // Added timeout here for testing purposes, no nned to use async here, just for testing
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Loading meals failed"); // Thrown to test error.js 
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}