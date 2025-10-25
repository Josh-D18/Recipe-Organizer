import Recipe from "../src/models/Recipe";
import { connectDB } from "../src/db";

(async function seed() {
  await connectDB();
  await Recipe.deleteMany({});
  await Recipe.create([
    {
      title: "Pasta al Limone",
      ingredients: ["pasta", "lemon", "cream"],
      instructions: "Boil and mix.",
      favorite: false,
    },
    {
      title: "Tomato Soup",
      ingredients: ["tomato", "onion"],
      instructions: "Blend and simmer.",
      favorite: true,
    },
  ]);
  console.log("Seeded");
  process.exit(0);
})();
