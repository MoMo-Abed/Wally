import mongoose, { Schema } from "mongoose";
import { hashSync, compareSync } from "bcrypt-nodejs";
import jwt from "jsonwebtoken";

import constants from "../Config/constants";

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },

  country: {
    type: String,
    required: true
  },
  savedImages: []
});

UserSchema.pre("save", function(next) {
  if (this.isModified("password")) {
    this.password = this._hashPassword(this.password);
    return next();
  }

  return next();
});

UserSchema.methods = {
  _hashPassword(password) {
    return hashSync(password);
  },
  authenticateUser(password) {
    return compareSync(password, this.password);
  },
  createToken() {
    return jwt.sign(
      {
        _id: this._id
      },
      constants.JWT_SECRET
    );
  }
};

module.exports = mongoose.model("User", UserSchema);
