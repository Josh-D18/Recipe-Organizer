import express from "express";
import cors from "cors";
import { connectDB } from "./db";
import recipeRoutes from "./routes/recipes";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json({ strict: false }));

app.use("/recipes", recipeRoutes);

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
});
