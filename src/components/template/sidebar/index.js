import React from 'react';
import cx from 'classnames';
import {makeStyles} from "@material-ui/core/styles";
import {Hidden, Drawer, Divider} from "@material-ui/core";
import style from '../../../assets/styles/jss/components/template/sidebar';
import Brand from "./brand";

const useStyles = makeStyles(style);

const Sidebar = ({sidebarToggle}) => {
  const classes = useStyles();

  const drawer = (
    <div>
      <Brand/>
      <Divider variant={"middle"} />
    </div>
  )

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
          {drawer}
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
            paper : cx(classes.drawerPager, {
              [classes.drawerOpen] : sidebarToggle,
              [classes.drawerClose] : !sidebarToggle,
              [classes.drawerShift] : !sidebarToggle
            })
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  )
}

export default Sidebar;