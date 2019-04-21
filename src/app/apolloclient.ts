


import 'isomorphic-fetch'

import ApolloClient from "apollo-boost";
// import { InMemoryCache } from "apollo-cache-inmemory";

const apolloClientInstance = new ApolloClient({
  uri: "http://106.12.129.44:8000/graphql",
  // uri: "http://106.12.129.44:3000/graphiql",
  // cache: new InMemoryCache(),
  request: async (operation) => {
    // const token = Cookies.get(TOKEN);
    // console.log(token, 'authorization');
    operation.setContext({
      headers: {
        // credentials: 'same-origin', //'same-origin',
        'Postman-Token': '6eab615f-4e63-455d-8b82-116fb24236df'
      }
    });
  },
});


export default apolloClientInstance;