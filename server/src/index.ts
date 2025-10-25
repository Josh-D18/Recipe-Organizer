import express from "express";
import cors from "cors";
import { connectDB } from "./db";
import recipeRoutes from "./routes/recipes";
import { seed } from "./seeds/seedRecipes";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json({ strict: false }));


app.use("/recipes", recipeRoutes);

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
});

async function seedDatabase() {
  await seed();
}

seedDatabase();