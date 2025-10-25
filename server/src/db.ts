import mongoose from "mongoose";

export const connectDB = async () => {
  const uri =
    process.env.MONGO_URI || "mongodb://localhost:27017/recipe-sandbox";
  await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 2000,
  });
  console.log("Connected to database");
};
