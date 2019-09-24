import { createServer } from "http";
import { graphiqlExpress, graphqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import express from "express";

import "./Config/db";
import typeDefs from "./Api/Schema";
import resolvers from "./Api/Resolvers";
import constants from "./Config/constants";
import middlewares from "./Config/middlewares";

const app = express();
middlewares(app);

app.use((req, res, next) => setTimeout(next, 0));

app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: constants.GRAPHQL_PATH,
    subscriptionsEndpoint: `ws://localhost:${constants.PORT}${constants.SUBSCRIPTIONS_PATH}`
  })
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

app.use(
  constants.GRAPHQL_PATH,
  graphqlExpress(req => ({
    schema,
    context: {
      device: req.user
    }
  }))
);

const graphQLServer = createServer(app);

graphQLServer.listen(constants.PORT, err => {
  if (err) {
    console.error(err);
  } else {
    // const NewSec = new SubscriptionServer();

    console.log(`App listen to port: ${constants.PORT}`);
  }
});
