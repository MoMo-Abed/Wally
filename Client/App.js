import React from "react";
import { Provider } from "react-redux";
import { ApolloProvider } from "react-apollo";

import Routes from "./Src/Routes";
import { Client } from "./Src/Graphql/Client";

import store from "./Src/Redux/Store";
export default function App() {
  return (
    <ApolloProvider client={Client}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ApolloProvider>
  );
}
