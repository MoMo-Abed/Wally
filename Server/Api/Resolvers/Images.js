import Unsplash, { toJson } from "unsplash-js";
import Fetch from "node-fetch";
import Keys from "../../Config/constants";

const unsplash = new Unsplash({
  applicationId: Keys.UNSPLASH_ACCESS,
  secret: Keys.UNSPLASH_SECRET
});
global.fetch = Fetch;

export default {
  getImages: async _ => {
    try {
      let Arr;

      await unsplash.search
        .photos("wallpaper", 1)
        .then(toJson)
        .then(json => {
          Arr = json.results;
        });
      return Arr;
    } catch (error) {
      throw error;
    }
  }
};
