import {drawerOpenWidth, drawerCloseWidth, transition} from '../layout/index';

const sidebarStyle = (theme) => ({
  drawer: {
    width: drawerOpenWidth,
    flexShrink: 0,
  },
  drawerPager : {
    width: drawerOpenWidth,
  },
  drawerOpen: {
    width: drawerOpenWidth,
    flexShrink: 0,
    ...transition
  },
  drawerClose: {
    width: drawerCloseWidth,
    ...transition,
    overflowX: 'hidden',
  },
  drawerShift: {
    '&:hover' : {
      width: drawerOpenWidth
    }
  }
});

export default sidebarStyle;