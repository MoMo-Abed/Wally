import { setContext } from "apollo-link-context";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { getToken } from "../Utils/Auth";
// "http://10.0.3.2:7000/graphql"

const httpLink = new HttpLink({ uri: "http://192.168.1.7:7000/graphql" });
const authLink = setContext(async (req, { headers }) => {
  const token = await getToken();
  console.log(token);
  if (token == null) {
    return null;
  } else {
    return {
      ...headers,
      headers: {
        authorization: token ? `Bearer ${token}` : null
      }
    };
  }
});

const link = authLink.concat(httpLink);
export const Client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    addTypename: false
  })
});
