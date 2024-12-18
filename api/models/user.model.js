import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    usernaame: {
      type: string,
      required: true,
      unique: true,
    },
    email: {
      type: string,
      required: true,
      unique: true,
    },
    password: {
      type: string,
      required: true,
    },
  },
  { timpstamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;