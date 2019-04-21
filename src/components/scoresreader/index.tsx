
import './index.scss'
import { Grid, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import React, { Component } from 'react'
import OpenWithIcon from '@material-ui/icons/OpenWith';
import Divider from '@material-ui/core/Divider';



export default class ScoresReader extends Component {

  render() {
    return (
      <div className="ScoresReader">
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="flex-end" className="scores-reader-control-panel">
          <Grid item xs={2} style={{ textAlign: 'center' }}>
            <Typography>控制器层</Typography>
          </Grid>
          <Grid item xs={10} style={{ textAlign: 'right' }}>
            <IconButton >
              <OpenWithIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Divider />
      </div>
    )
  }


}
