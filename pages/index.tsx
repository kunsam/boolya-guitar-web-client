

import React, { Component } from 'react'
import MainAppLayout from '../src/layouts/mainapp/mainapp';
import HomeContainer from '../src/uicontainers/home/home';

export class Index extends Component<any, any> {
  render() {
    return (
      <MainAppLayout>
        <HomeContainer   />
      </MainAppLayout>
    )
  }
}


export default Index;