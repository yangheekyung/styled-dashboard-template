import React from 'react';
import {AppBar, Fab, Toolbar, Typography, } from "@material-ui/core";
import {MoreVert, FormatListBulleted, Add} from '@material-ui/icons';
import {makeStyles} from "@material-ui/core/styles";
import style from '../../../assets/styles/jss/components/template/header';

const useStyles = makeStyles(style);

const Header = ({sidebarToggle, handleSidebarToggle}) => {
  const classes = useStyles();

  return (
      <AppBar
        position={"static"}
        color={"transparent"}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Fab
            className={classes.sidebarButton}
            size={"small"}
            color={"inherit"}
            onClick={handleSidebarToggle}
            disableRipple
          >
            {
              sidebarToggle
                ? <MoreVert fontSize={"small"} color={"inherit"}/>
                : <FormatListBulleted fontSize={"small"} color={"inherit"}/>
            }
          </Fab>
          <Typography className={classes.pageName}>Page Name</Typography>
        </Toolbar>
      </AppBar>
  )
}

export default Header;