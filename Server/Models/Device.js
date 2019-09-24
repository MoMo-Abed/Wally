import mongoose, { Schema } from "mongoose";
import { compareSync } from "bcrypt-nodejs";

const DeviceSchema = new Schema({
  PhoneId: {
    type: String
  },
  deviceName: {
    type: String
  },

  Platform: {
    type: String
  },

  savedImages: []
});

DeviceSchema.methods = {
  authenticateUser(PhoneId) {
    return compareSync(PhoneId, this.PhoneId);
  }
};

module.exports = mongoose.model("Device", DeviceSchema);
