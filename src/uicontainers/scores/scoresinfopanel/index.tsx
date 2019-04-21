
import './index.scss'
import React, { Component } from 'react'
import { Typography } from '@material-ui/core';



export default class ScoresInfoPanel extends Component<any, any> {

  render() {
    return (
      <div className="ScoresInfoPanel">
        <Typography variant="h4">
          信息面板
        </Typography>
        <Typography variant="56">
          {this.props.data}
        </Typography>
      </div>
    )
  }
}
