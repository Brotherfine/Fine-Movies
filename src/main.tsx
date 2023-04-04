import React from "react";
import ReactDOM from "react-dom/client";
import {
  ChakraProvider,
  ColorModeProvider,
  ColorModeScript,
} from "@chakra-ui/react";
import App from "./App";
import theme from "./components/theme";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://fine-movies.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "qN3pc3hNsghOtt7LoVOwJN7K1KJYANEBbjMh19zjRuhsh76i57tlCAc6vVe3qmvf",
  },
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>
);
