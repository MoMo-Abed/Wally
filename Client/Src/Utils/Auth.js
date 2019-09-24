import { AsyncStorage } from "react-native";

const AUTH_TOKEN = "AUTH_TOKEN";

let token;

export const getToken = async () => {
  if (token) {
    console.log(token);
    return Promise.resolve(token);
  }

  token = await AsyncStorage.getItem(AUTH_TOKEN);
  console.log(token);

  if (token === null) {
    return null;
  }
  return token;
};

export const CreateToken = NewToken => {
  token = NewToken;
  return AsyncStorage.setItem(AUTH_TOKEN, token);
};

export const signOut = () => {
  token = undefined;
  return AsyncStorage.removeItem(AUTH_TOKEN);
};
