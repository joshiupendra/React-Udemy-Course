"use server";

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

export async function shareMeal(prevState, formData) {
  //"use server"; // This creates a server action and make sure this executes on server

  const meal = {
    title: formData.get("title"),
    creator: formData.get("name"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator_email: formData.get("email")
  }

  if (isInvalidText(meal.title) || isInvalidText(meal.summary) || isInvalidText(meal.instructions) || isInvalidText(meal.creator) 
    || isInvalidText(meal.creator_email) || !meal.creator_email.includes("@") || !meal.image || meal.image.size === 0) {
    return {
      message: "Invalid input."
    };
  }

  await saveMeal(meal);
  revalidatePath("/meals", "layout"); // Revalidates the path, layout will revaluate nested components and pages also. 
  redirect("/meals");
}

function isInvalidText(text) {
  return !text || text.trim() === "";
}