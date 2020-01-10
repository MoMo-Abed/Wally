import Auth from "./Auth-resolvers";
import Images from "./Images";

export default {
  RootQuery: {
    getImages: Images.getImages,
    user: Auth.user
  },
  RootMutation: {
    CreateSaved: Images.CreateSaved,
    CreateToken: Auth.CreateToken
  }
};
