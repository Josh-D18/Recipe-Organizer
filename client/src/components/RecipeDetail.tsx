import React, { useEffect, useState } from "react";
import { fetchRecipes } from "../api";
import { RecipeType } from "../types";

export default function RecipeDetail({ id }: { id: string }) {
  const [recipe, setRecipe] = useState<RecipeType | null>(null);

  useEffect(() => {
    fetchRecipes(id).then((r: RecipeType) => setRecipe(r));
  }, []);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h3>{recipe.title}</h3>
      <p>{recipe.instructions}</p>
      <ul>
        {recipe.ingredients.length > 0 ? (
          recipe.ingredients.map((ing: string) => <li>{ing}</li>)
        ) : (
          <p>No Ingredients To Share Currently!</p>
        )}
      </ul>
    </div>
  );
}
