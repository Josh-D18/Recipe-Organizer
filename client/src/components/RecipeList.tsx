import React, { useEffect, useState } from "react";
import { fetchRecipes } from "../api";
import { RecipeType } from "../types";

export default function RecipeList() {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    (async function load() {
      const data = await fetchRecipes();
      setRecipes(data);
    })();
  }, []);

  const filtered =
    (searchTerm.length > 0 &&
      recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      )) ||
    (isFav ? recipes.filter((recipe) => recipe.favorite === true) : recipes);

  const handleClick = () => {
    setIsFav(!isFav);
  };

  return (
    <div>
      <h2>Recipes</h2>

      <section>
        <input
          placeholder="Enter Term"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <br></br>
        <br></br>

        <button onClick={handleClick}>Filter By Favorite Recipe</button>
      </section>
      <ul>
        {filtered.map((r) => (
          <div key={r._id}>
            <li>{r.title}</li>
            <p>
              <em>Instructions:</em> {r.instructions}
            </p>
            <p>Ingredients:</p>
            {r.ingredients ? (
              r.ingredients.map((item) => <p key={item}>{item}</p>)
            ) : (
              <p>No Ingredients</p>
            )}
            <p>Favorite: {r.favorite ? "Yes" : "No"}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
