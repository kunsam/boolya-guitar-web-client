


import React, { Component } from 'react'

import apolloClientInstance from '../src/app/apolloclient'
import WithApolloClient from '../src/enhance/with-apollo-graphql/with-apollo-graphql'




export class About extends Component {

  render() {
    console.log(this.props, 'apolloClientInstance')
    return (
      <div>
        'aabout'
      </div>
    )
  }
}


export default WithApolloClient(About, apolloClientInstance);