
import "antd/dist/antd.css"; // put on cdn
import './mainapp.scss'

import Head from 'next/head'
import NoSSR from 'react-no-ssr'
import React, { Component } from 'react'

import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

export class MainAppLayout extends Component<any, any> {
  render() {
    return (
      <div>
        <Head>
          {/* <script src={`/static/js/viewport.js`}></script> */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        </Head>
        <NoSSR className={this.props.classes.root}>
          {this.props.children}
        </NoSSR>
      </div>
    )
  }
}

export default withStyles(styles)(MainAppLayout);