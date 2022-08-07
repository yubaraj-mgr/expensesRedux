import express from "express";
import { createUser, getUsers } from "../model/userModel/userModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const result = await createUser(req.body);
    res.json({
      status: "success",
      message: "User Created Successfully",
      result,
    });
  } catch (error) {
    error && console.log(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const result = await getUsers();
    res.json({
      status: "success",
      message: "User Created Successfully",
      result,
    });
  } catch (error) {
    error && console.log(error);
  }
});

export default router;
