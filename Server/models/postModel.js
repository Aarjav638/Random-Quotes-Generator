const moongose = require("mongoose");

//  schema

const postSchema = new moongose.Schema(
  {
    quote: {
      type: String,
      required: [true, "Quote is required"],
      unique: false,
    },
    author_name: {
      type: String,
      required: [true, "Author Name is required"],
    },
    postedBy: {
      type: moongose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    // photo: {
    //   type: String,
    //   required: false,
    // },
    // username: {
    //   type: String,
    //   required: [true, "Username is required"],
    // },
    // categories: {
    //   type: Array,
    //   required: false,
    // },
  },
  { timestamps: true }
);

module.exports = moongose.model("Quotes", postSchema);
