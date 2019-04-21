
import * as React from "react";
import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from "react-apollo";


export default function WithApolloClient(WrappedComponent: React.ComponentClass<any, any>, client: ApolloClient<any>) {
  return class extends React.Component<any, any> {
    render() {
      return (
      <ApolloProvider client={client}>
        <WrappedComponent {...this.props} />
      </ApolloProvider>
      )
    }
  }
}