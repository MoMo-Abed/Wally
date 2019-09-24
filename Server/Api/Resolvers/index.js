import Auth from "./Auth-resolvers";
import Images from "./Images";

export default {
  RootQuery: {
    getImages: Images.getImages
  },
  RootMutation: {
    CreateSaved: Images.CreateSaved,
    CreateToken: Auth.CreateToken
  }
};
