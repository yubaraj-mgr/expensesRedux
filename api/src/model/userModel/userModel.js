import userSchema from "./userSchema.js";

export const createUser = (data) => {
  return userSchema(data).save();
};

export const getUsers = () => {
  return userSchema.find();
};
