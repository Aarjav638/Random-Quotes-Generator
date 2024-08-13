const moongoose = require("mongoose");

const userSchema = new moongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      min: 6,
    },
    phone_number: {
      type: Number,
      required: [true, "Please enter your phone number"],
    },

    role: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = moongoose.model("Users", userSchema);
