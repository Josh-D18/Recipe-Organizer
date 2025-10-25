import React from "react";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Recipe Sandbox</h1>
      <RecipeForm />
      <RecipeList />
    </div>
  );
}
