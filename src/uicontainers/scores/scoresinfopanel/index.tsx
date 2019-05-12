
import './index.scss'
import React, { Component } from 'react'
import { Typography } from '@material-ui/core';

import Divider from '@material-ui/core/Divider';
import Rate from 'antd/lib/rate'

export default class ScoresInfoPanel extends Component<any, any> {

  render() {

    const {
      level,
      title,
      likeCount,
      description,
    } = this.props.score;

    return (
      <div className="ScoresInfoPanel" style={{ padding: 5 }}>
        <Typography variant="h5">{title}</Typography>
        <Rate disabled value={likeCount as number} />
        <Typography variant="body2">上传者: {undefined}</Typography>
        <Typography variant="body2">上传时间: {undefined}</Typography>
        <Divider />
        <Typography variant="body2">描述:</Typography>
        <Typography variant="caption">{description}</Typography>
      </div>
    )
  }
}
