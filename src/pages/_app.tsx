import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";

import { client } from "@graphql/client";
import { ApolloProvider } from "@apollo/client";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
