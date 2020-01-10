import Device from "../../Models/Device";
import jwt from "jsonwebtoken";
import constants from "../../Config/constants";
import { requireAuth } from "../../Services/auth";

export default {
  CreateToken: async (_, { inputs }) => {
    try {
      const device = await new Device({ ...inputs });
      const SaveDevice = await device.save();
      const token = await jwt.sign(
        {
          _id: device._id
        },
        constants.JWT_SECRET
      );
      return {
        token
      };
    } catch (error) {
      throw error;
    }
  },

  user: async (_, args, { device }) => {
    try {
      const me = await requireAuth(device);
      console.log(me);
      return me;
    } catch (error) {
      throw error;
    }
  }
};
