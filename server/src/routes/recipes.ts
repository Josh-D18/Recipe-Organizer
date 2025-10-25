import express from "express";
import Recipe from "../models/Recipe";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { q } = req.query;
    let filter = {};
    if (q) filter = { title: { $regex: q, $options: "i" } };
    const recipes = await Recipe.find(filter).sort({ createdAt: 1 });
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/", async (req, res) => {
  const { title, ingredients, instructions, cookTime } = req.body;
  if (!title || !ingredients) {
    res.status(400).json({ error: "Missing fields" });
    return;
  }
  const recipe = new Recipe({ title, ingredients, instructions, cookTime });
  const saved = await recipe.save();
  res.status(201).json(saved);
});

router.patch("/:id/favorite", async (req, res) => {
  const { id } = req.params;
  const recipe = await Recipe.findById(id);
  if (!recipe) {
    res.status(404).end();
    return;
  }
  recipe.favorite = !recipe.favorite;
  await recipe.save();
  res.json(recipe);
});

export default router;
