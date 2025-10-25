import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

export const fetchRecipes = async (query?: string) => {
  const res = await API.get("/recipes", { params: { q: query } });
  return res.data;
};

export const toggleFavorite = async (id: string) => {
  const res = await API.patch(`/recipes/${id}/favorite`);
  return res.data;
};

export const postRecipe = async (recipe: any) => {
  const res = await API.post("/recipes", recipe);
  return res.data;
};
