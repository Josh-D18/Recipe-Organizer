export type RecipeType = {
  _id: string;
  title: string;
  instructions: string;
  ingredients: string[];
  favorite: boolean
  cookTime?: number;
};
