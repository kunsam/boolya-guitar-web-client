
import './index.scss'
import { Grid, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import React, { Component } from 'react'
import OpenWithIcon from '@material-ui/icons/OpenWith';
import Divider from '@material-ui/core/Divider';



export default class ScoresReader extends Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      isFullScreen: false
    }
  }

  render() {

    const { score } = this.props;
    const {
      id,
      level,
      title,
      images,
      likeCount,
      description,
    } = score;


    return (
      <div className="ScoresReader" >
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="flex-end" className="scores-reader-control-panel">
          <Grid item xs={2} style={{ textAlign: 'center' }}>
            <Typography variant="body2">控制器层</Typography>
          </Grid>
          <Grid item xs={10} style={{ textAlign: 'right' }}>
            <IconButton onClick={() => {
              this.setState({ isFullScreen: true })
            }}>
              <OpenWithIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Divider />

        {
          images.map(({ id, url }) => <img key={id} src={url} style={{ width: '100%' }} />)
        }
      </div>
    )
  }


}
