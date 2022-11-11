import { AppProps } from "next/app";
import React from "react";
import { PhirunThemeProvider } from "@phirun/ui";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "https://spacexdata.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

const MyApp: React.FC<AppProps> = ({ Component, ...rest }) => {
  return (
    <PhirunThemeProvider>
      <ApolloProvider client={apolloClient}>
        <Component {...rest} />
      </ApolloProvider>
    </PhirunThemeProvider>
  );
};
export default MyApp;
