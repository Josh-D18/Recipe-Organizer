import React, { useState } from "react";
import { postRecipe } from "../api";

export default function RecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await postRecipe({
      title,
      ingredients: ingredients.split(","),
      instructions,
    });
    title = "";
    setIngredients("");
    setInstructions("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input value={title} />
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
      <button type="submit">Add Recipe</button>
    </form>
  );
}
