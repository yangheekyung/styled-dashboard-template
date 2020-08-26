import React from 'react';
import cx from 'classnames';
import {Slide, AppBar, IconButton, Fab, Toolbar, Typography, useScrollTrigger} from "@material-ui/core";
import {MoreVert, FormatListBulleted, Add} from '@material-ui/icons';
import {makeStyles} from "@material-ui/core/styles";
import style from '../../../assets/styles/jss/components/template/header';

const useStyles = makeStyles(style);

const Header = ({sidebarToggle, handleSidebarToggle}) => {
  const classes = useStyles();

  // const trigger = useScrollTrigger();

  return (
    // <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        color={"transparent"}
        // position="fixed"
        className={cx(classes.appBar, {
          [classes.appBarOpen] : sidebarToggle,
          [classes.appBarClose] : !sidebarToggle
        })}
      >
        <Toolbar>
          {/*<IconButton*/}
          {/*  color={"inherit"}*/}
          {/*  edge={"start"}*/}
          {/*  size={"small"}*/}
          {/*  onClick={handleSidebarToggle}*/}
          {/*>*/}
          {/*  {*/}
          {/*    sidebarToggle ? <MoreVert/> : <FormatListBulleted/>*/}
          {/*  }*/}
          {/*</IconButton>*/}
          <Fab
            className={classes.sidebarButton}
            size={"small"}
          >
            {
              sidebarToggle ? <MoreVert/> : <FormatListBulleted/>
            }
          </Fab>
          <Typography
            // variant={"overline"}
          >
            Page Name
          </Typography>
        </Toolbar>
      </AppBar>
    // </Slide>
  )
}

export default Header;