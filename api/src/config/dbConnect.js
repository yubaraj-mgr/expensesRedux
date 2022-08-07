import mongoose from "mongoose";

export const dbConnect = () => {
  try {
    const apiEP = "mongodb://localhost:27017/reduxPractice";
    const conn = mongoose.connect(apiEP);
    conn && console.log("Database Connected");
  } catch (error) {
    error && console.log(error);
  }
};
