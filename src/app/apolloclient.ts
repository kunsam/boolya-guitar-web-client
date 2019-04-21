


import 'isomorphic-fetch'

import ApolloClient from "apollo-boost";
// import { InMemoryCache } from "apollo-cache-inmemory";

const apolloClientInstance = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  // cache: new InMemoryCache(),
});


export default apolloClientInstance;