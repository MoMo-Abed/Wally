import Unsplash, { toJson } from "unsplash-js";
import Fetch from "node-fetch";
import Device from "../../Models/Device";

import Keys from "../../Config/constants";
import { requireAuth } from "../../services/auth";

const unsplash = new Unsplash({
  applicationId: Keys.UNSPLASH_ACCESS,
  secret: Keys.UNSPLASH_SECRET
});
global.fetch = Fetch;

export default {
  getImages: async (_, { value }) => {
    try {
      let Arr;

      await unsplash.search
        .photos(value, 1, 100)
        .then(toJson)
        .then(json => {
          Arr = json.results;
        });
      console.log(`Fetch Images Succ,Total Images ${Arr.length} `);
      return Arr;
    } catch (error) {
      throw error;
    }
  },

  CreateSaved: async (_, { inputs }, { device }) => {
    try {
      const Image = { ...inputs };
      await requireAuth(device);
      const FindDevice = await Device.findById(device._id);
      await FindDevice.savedImages.unshift(Image);
      await FindDevice.save();
      return Image;
    } catch (error) {
      throw error;
    }
  }
};
