import React, { useEffect, useState } from "react";
import { fetchRecipe } from "../api";

export default function RecipeDetail({ id }: { id: string }) {
  const [recipe, setRecipe] = useState<any>(null);

  useEffect(() => {
    fetchRecipe(id).then((r) => setRecipe(r));
  }, []);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h3>{recipe.title}</h3>
      <p>{recipe.instructions}</p>
      <ul>
        {recipe.ingredients.map((ing: string) => (
          <li>{ing}</li>
        ))}
      </ul>
    </div>
  );
}
