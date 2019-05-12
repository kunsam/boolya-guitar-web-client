

import React, { Component } from 'react'
import AppbarLayout from '../../layouts/appbar/appbar';


import ScoresList from './scoreslist';
import { compose, graphql } from 'react-apollo';
import { QueryAbout } from '../../graphql/about';
import ScoreContent from './score-content';
import Breadcrumb from 'antd/lib/breadcrumb'
import Icon from 'antd/lib/icon'
import Router from 'next/router'


class ScoresContainer extends Component<any, any> {

  render() {
    console.log(this.props, 'containercontainer')
    const hasId = this.props.url.query.id !== undefined;

    return (
      <AppbarLayout>

        {/* // todo这个放到单独的layout里 */}
        <div style={{ marginBottom: 10, padding: '0 10px' }}>
          <Breadcrumb>
            <Breadcrumb.Item onClick={() => { Router.push('/') }}>
              <span style={{ cursor: 'pointer' }}>
                <Icon style={{ marginRight: 4 }} type="home" />
                <span>Home</span>
              </span>
            </Breadcrumb.Item>
            <Breadcrumb.Item onClick={() => { hasId && Router.push('/scores') }}>
              <span style={{ cursor: hasId ? 'pointer' : '' }}>
                <Icon style={{ marginRight: 4 }} type="login" />
                <span>Scores List</span>
              </span>

            </Breadcrumb.Item>
            {
              hasId ? (<Breadcrumb.Item>current</Breadcrumb.Item>) : null
            }
          </Breadcrumb>
        </div>

        {
          hasId ? <ScoreContent /> : <ScoresList />
        }

      </AppbarLayout>
    )
  }
}

export default compose(
  graphql(QueryAbout, {
    props: (props: any) => {
      return props;
    }
  }),

)(ScoresContainer)