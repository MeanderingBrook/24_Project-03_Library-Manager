// Imports required Node.js Modules
const bcrypt = require("bcrypt");
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  // email: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  // resetLink: {
  //   data: String,
  //   default: "",
  // },
  content: [
    {
      type: Schema.Types.ObjectId,
      ref: "Content",
    },
  ],
});

// Function Hashes and Saves new Passwords
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Validates User Password at Login to Previously-Saved Hashed Password
userSchema.methods.validatePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
