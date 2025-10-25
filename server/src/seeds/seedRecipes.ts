import Recipe from "../models/Recipe";

export async function seed() {
  try {
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
  } catch (error) {
    console.log(error);
  }
}
