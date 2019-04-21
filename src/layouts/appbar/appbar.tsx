import './appbar.scss'
import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, CssBaseline } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});


class AppbarLayout extends Component<any, any> {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <div style={{ width: '100%' }}>
          <AppBar
            position="fixed" style={{ background: 'transparent', height: 64 }}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Menu"
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                BoolYa Guitar
            </Typography>
              <div className={classes.grow} />
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
              {/* <Button color="inherit">Login</Button> */}
            </Toolbar>
          </AppBar>
        </div>
        <div style={{ width: '100%', minHeight: '100vh', paddingTop: 65}}>
          <div style={{  marginTop: 10 }}>
           {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}


export default withStyles(styles)(
  AppbarLayout
);