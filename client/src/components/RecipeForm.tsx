import React, { useState } from "react";
import { fetchRecipes, postRecipe } from "../api";

export default function RecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [cookTime, setCookTime] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const time = Number(cookTime);
    await postRecipe({
      title,
      ingredients: ingredients.split(","),
      instructions,
      time,
    });
    setTitle("");
    setIngredients("");
    setInstructions("");
    setCookTime("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Ingredients (comma separated)</label>
        <input
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <div>
        <label>Instructions</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
      </div>

      <div>
        <label>Cook Time</label>
        <input
          value={cookTime}
          onChange={(e) => setCookTime(e.target.value)}
          type="number"
        />
      </div>
      <button type="submit">Add Recipe</button>
    </form>
  );
}
