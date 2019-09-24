import Device from "../../Models/Device";
import jwt from "jsonwebtoken";
import constants from "../../Config/constants";

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
  }
};
