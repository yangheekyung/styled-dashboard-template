import React from 'react';
import cx from 'classnames';
import {makeStyles} from "@material-ui/core/styles";
import {Hidden, Drawer} from "@material-ui/core";
import style from '../../../assets/styles/jss/components/template/sidebar';

const useStyles = makeStyles(style);

const Sidebar = ({sidebarToggle}) => {
  const classes = useStyles();

  return (
    <nav>
      <Hidden smUp implementation={`js`}>
        <Drawer
          variant="temporary"
          classes={{
            paper : classes.drawerPager
          }}
          open={sidebarToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          a
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation={`js`}>
        <Drawer
          variant="permanent"
          className={cx(classes.drawer,{
            [classes.drawerOpen] : sidebarToggle,
            [classes.drawerClose] : !sidebarToggle
          })}
          classes={{
            paper : cx({
              [classes.drawerOpen] : sidebarToggle,
              [classes.drawerClose] : !sidebarToggle,
              [classes.drawerShift] : !sidebarToggle
            })
          }}
        >
          b
        </Drawer>
      </Hidden>
    </nav>
  )
}

export default Sidebar;