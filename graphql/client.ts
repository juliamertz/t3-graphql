import { ApolloClient, InMemoryCache } from "@apollo/client";

const location = process.env?.HOSTNAME
  ? `https://${process.env.HOSTNAME}`
  : "http://localhost:3000";

const client = new ApolloClient({
  uri: `${location}/api/graphql`,
  cache: new InMemoryCache(),
});

export { client };
