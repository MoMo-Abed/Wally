import Auth from "./Auth-resolvers";
import Images from "./Images";

export default {
  RootQuery: {
    user: Auth.user,
    getImages: Images.getImages
  },
  RootMutation: {
    login: Auth.login,

    createUser: Auth.createUser
  }
};
