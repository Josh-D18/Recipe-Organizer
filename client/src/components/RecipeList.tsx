import React, { useEffect, useState } from "react";
import { fetchRecipes } from "../api";
import { RecipeType } from "../types";

export default function RecipeList() {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);

  useEffect(() => {
    (async function load() {
      const data = await fetchRecipes();
      setRecipes(data);
    })();
  }, []);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((r) => (
          <div key={r._id}>
            <li>{r.title}</li>
            <p>{r.instructions}</p>
            <p>Ingredients:</p>
            {r.ingredients ? (
              r.ingredients.map((item) => <p key={item}>{item}</p>)
            ) : (
              <p>No Ingredients</p>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}
