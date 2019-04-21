

import React, { Component } from 'react'
import MainAppLayout from '../src/layouts/mainapp/mainapp';
import apolloClientInstance from '../src/app/apolloclient';
import ScoresContainer from '../src/uicontainers/scores/scores';
import WithApolloClient from '../src/enhance/with-apollo-graphql/with-apollo-graphql';

export class Index extends Component<any, any> {
  render() {
    return (
      <MainAppLayout>
        <ScoresContainer {...this.props}/>
      </MainAppLayout>
    )
  }
}


export default WithApolloClient(Index, apolloClientInstance)
