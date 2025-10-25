import React, { useEffect, useState } from "react";
import { fetchRecipes } from "../api";

export default function RecipeList() {
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    (async function load() {
      const data = await fetchRecipes();
      setRecipes(data);
    })();
  }, [recipes]);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((r) => (
          <li key={r._id}>{r.title}</li>
        ))}
      </ul>
    </div>
  );
}
