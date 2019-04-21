




import './home.scss'
import React, { Component } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import yellow from '@material-ui/core/colors/yellow';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import {
  createStyles,
  Theme,
  withStyles,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withRouter } from 'next/router'
import GuitarSVG from '../../../static/picture/guitar1.svg'
import PlaySVG from '../../../static/picture/play.svg'

import Icon from '@material-ui/core/Icon';
import Typing from '../components/typing/typing';

const styles = (theme: Theme) => createStyles({
  margin: {
    margin: theme.spacing.unit,
  },
  cssFocused: {},
  cssLabel: {
    '&$cssFocused': {
      color: yellow[700],
    },
  },
  cssUnderline: {
    '&:after': {
      borderBottomColor: yellow[700],
    },
  },
  input: {
    textAlign: 'center',
  },
  grid: {
    // flexGrow: 1,
    height: '100%',
  },
  center: {
    textAlign: 'center',
  }
})



export class HomeContainer extends Component<any, any> {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.grid}
        style={{ height: '100vh'}}
      >
        <Grid item xs={12} className={classes.input}>
          {/* <div>
          <Typing
            strings={[
              "上伯牙",
              "学^500吉他"
            ]}
          />
          </div> */}
          <FormControl style={{ width: '50%' }} className={classes.margin}>
            <InputLabel
              htmlFor="search-music-standard-input"
              classes={{
                root: classes.cssLabel,
                focused: classes.cssFocused,
              }}
            >
              <div className="search-music-input-label" style={{ position: 'relative' }}>
                <Grid container alignItems="center">
                  <Grid item>
                    <GuitarSVG className="guitar-svg" />
                  </Grid>
                  <Grid item><span>歌曲名</span></Grid>
                </Grid>
              </div>
            </InputLabel>
            <Input
              id="search-music-standard-input"
              classes={{
                underline: classes.cssUnderline,
              }}
            />

          </FormControl>
          <Grid item xs={12} className={classes.input} style={{ marginTop: 10 }}>
            <Button
              variant="contained"
              color="secondary"
              classes={classes.button}
              className="search-music-standard-button"
              onClick={() => {
                this.props.router.push('/scores')
              }}
            >
              Play
              <PlaySVG className='search-music-standard-button-svg' />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}


export default withStyles(styles)(
  withRouter(HomeContainer)
);