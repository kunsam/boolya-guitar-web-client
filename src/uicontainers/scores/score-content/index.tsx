

import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { compose, graphql } from 'react-apollo';
import ScoresInfoPanel from '../scoresinfopanel';
import { QueryScore } from '../../../graphql/score';
import ScoresReader from '../../../components/scoresreader';
import { withRouter } from 'next/router'


class ScoreContentComp extends Component<any, any> {

  render() {
    console.log(this.props, 'ScoreContentComp render')

    const {
      error,
      loading,
      data: { score },
    } = this.props;

    if (loading || score === undefined) {
      // TODO 做个全局的loading容器壳
      return <p>loading...</p>
    }

    const {
      id,
      level,
      title,
      images,
      likeCount,
      description,
    } = score;

    return (
      <Grid container justify="flex-start" spacing={8}>

        <Grid item xs={8}>
          <Paper
            style={{ marginLeft: 5, height: 400, overflowY: 'scroll' }}>
            <ScoresReader score={score} />
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper style={{ marginRight: 5, height: 400, overflowY: 'scroll' }}>
            <ScoresInfoPanel
              score={score}
            />
          </Paper>
        </Grid>

      </Grid>
    )
  }
}

const ScoreContent = compose(
  withRouter,
  graphql(QueryScore, {
    options: ({ router: { query: { id } } }: any) => {
      console.log(id, 'QueryScore id')
      return {
        variables: { id },
      }
    },
  })
)(ScoreContentComp)


export default ScoreContent;