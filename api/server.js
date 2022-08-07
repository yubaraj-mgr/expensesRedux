import express from "express";
import cors from "cors";
import helmet from "helmet";
import { dbConnect } from "./src/config/dbConnect.js";
import userRouter from "./src/routers/userRouter.js";

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
dbConnect();
const PORT = 8000;

app.use("/api/v1/user", userRouter);

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`Your server is running on http://localhost:8000`);
});
