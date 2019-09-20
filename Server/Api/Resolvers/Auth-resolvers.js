import User from "../../Models/user";

import validator from "validator";
import { requireAuth } from "../../services/auth";

export default {
  createUser: async (_, { email, name, country, password }) => {
    // const {  } = UserInput;
    try {
      if (!validator.isEmail(email)) {
        throw new Error("E-Mail is invalid");
      }
      if (
        //Check password
        validator.isEmpty(password) ||
        !validator.isLength(password, { min: 5 })
      ) {
        throw new Error("Password too short!");
      }

      //Check if existingUser
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error("User exists already!");
      }

      const user = new User({
        email,
        password,
        name,
        country
      });
      const createdUser = await user.save();

      return {
        token: user.createToken()
      };
    } catch (error) {
      throw error;
    }
  },

  login: async (_, { email, password }) => {
    try {
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error("User not exist!");
      }

      if (!user.authenticateUser(password)) {
        throw new Error("Password not match!");
      }

      return {
        token: user.createToken()
      };
    } catch (error) {
      throw error;
    }
  },

  user: async (_, args, { user }) => {
    try {
      const me = await requireAuth(user);

      return me;
    } catch (error) {
      throw error;
    }
  }
};
