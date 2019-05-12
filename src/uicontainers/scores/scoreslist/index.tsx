

import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo';
import { QueryScores } from '../../../graphql/score';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import Rate from 'antd/lib/rate'
import Router from 'next/router'

class ScoreCard extends Component<any, any> {


  render() {

    const {
      score: {
        id,
        level,
        title,
        images,
        likeCount,
        description,
      },
      onClick
    } = this.props;
    return (
      <Paper style={{ margin: '10px 20px', position: 'relative', cursor: 'pointer' }}
        onClick={onClick}
      >
        <Grid container justify="flex-start" >

          <Grid item xs={2} style={{ margin: 5, padding: 5, border: '1px dashed #ccc' }}>
            <img src={images[0].url} style={{ width: 100 }} />
          </Grid>

          <Grid item xs={8}>
            <Grid container justify="flex-start" direction="column" >
              <Grid item xs={2} style={{ paddingLeft: 10 }}>
                <Typography variant="h6">
                  {title}
                </Typography>
              </Grid>
              <Grid item xs={10} style={{ paddingLeft: 10 }}>
                <Typography variant="body2" style={{ height: 200 }}>{description}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <div style={{ position: 'absolute', right: 0, top: 5 }}>
          <Typography variant="subtitle2">等级: {level}</Typography>
          <Rate disabled value={likeCount as number} />
        </div>

      </Paper>
    )
  }
}


class ScoresListComp extends Component<any, any> {

  render() {
    console.log(this.props, 'ScoresList render')
    const { data: { loading, scores, error } } = this.props;

    if (loading) {
      return <div>加载ing...</div>
    }

    return (
      <div>
        {scores.map((score: any) => <ScoreCard key={score.id} score={score} onClick={() => {
          Router.push({
            pathname: '/scores',
            query: { id: score.id }
          })
        }} />)}
      </div>
    )
  }
}

const ScoresList = compose(
  graphql(QueryScores),
)(ScoresListComp)


export default ScoresList;