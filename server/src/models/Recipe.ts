import mongoose, { Schema, Document } from "mongoose";

export interface IRecipe extends Document {
  title: string;
  ingredients: string[];
  instructions: string;
  favorite: boolean;
  cookTime?: number;
}

const RecipeSchema = new Schema<IRecipe>({
  title: { type: String, required: true },
  ingredients: { type: [String], default: [] },
  instructions: String,
  favorite: { type: Boolean, default: false },
  cookTime: { type: Number, min: 1 },
});

export default mongoose.model<IRecipe>("Recipe", RecipeSchema);
